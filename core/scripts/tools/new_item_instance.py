#!/usr/bin/env python3
"""
new_item_instance.py

Generický generátor inštancií (STHDF / SDLC / Q12 / ...),
postavený na jednoduchom textovom YAML konfiguráku.

⚠️ DOHODA:
- Nepoužívame žiadnu YAML knižnicu (žiadny `pyyaml`).
- Všetko riešime cez čisté Python string operácie.
- Docusaurus si YAML aj tak parsuje, preto musíme generovať validný YAML.

Primárny use-case teraz: STHDF (študentský priestor)

Typický call (z Makefile):

  python3 core/scripts/tools/new_item_instance.py \
    --config config/sthdf/sthdf_config.yml \
    --instance "2025_ST_0001"

Ak --instance NEzadáš, použije sa default:
  sthdf_instance
"""

import argparse
import datetime
import os
import uuid
from pathlib import Path
from typing import Dict, Any, Optional, List


# ------------ Helpers: všeobecné ------------

 nerozumiem, pre
def debug_print(enabled: bool, msg: str) -> None:
    if enabled:
        print(f"[new_item_instance] {msg}")


def load_text(path: Path, optional: bool = False) -> str:
    if path.is_file():
        return path.read_text(encoding="utf-8")
    if optional:
        return ""
    raise FileNotFoundError(f"Template file not found: {path}")


def ensure_dir(path: Path, debug: bool = False, dry_run: bool = False) -> None:
    if path.is_dir():
        return
    debug_print(debug, f"mkdir -p {path}")
    if not dry_run:
        path.mkdir(parents=True, exist_ok=True)


# ------------ Helpers: jednoduchý YAML config parser ------------


def _strip_yaml_value(value: str) -> str:
    """
    Odstráni okrajové úvodzovky z hodnoty (ak sú).
    Nehráme sa na plnohodnotný YAML typový systém.
    """
    if not value:
        return ""
    if (value.startswith("'") and value.endswith("'")) or (
        value.startswith('"') and value.endswith('"')
    ):
        return value[1:-1]
    return value


def parse_simple_yaml(path: Path) -> Dict[str, Any]:
    """
    Extrémne jednoduchý parser pre YAML-like config.

    Podporuje:
      key: value
      key:
        subkey: value

    Nepodporuje:
      - zoznamy
      - viacúrovňové vnorenia
      - špeciálne typy

    Pre sthdf_config.yml to stačí (dao, content_dir, locale, templates, defaults,...).
    """
    if not path.is_file():
        raise FileNotFoundError(f"Config YAML not found: {path}")

    cfg: Dict[str, Any] = {}
    current_parent: Optional[str] = None

    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.rstrip("\n")
        stripped = line.strip()

        # preskoč prázdne riadky a komentáre
        if not stripped or stripped.startswith("#"):
            continue

        # root-level kľúč (žiadne odsadenie)
        if not line.startswith(" "):
            current_parent = None
            if ":" not in stripped:
                continue
            key, value = stripped.split(":", 1)
            key = key.strip()
            value = value.strip()

            if value == "":
                # začiatok bloku (napr. defaults:, templates:)
                cfg[key] = {}
                current_parent = key
            else:
                cfg[key] = _strip_yaml_value(value)
        else:
            # vnorený kľúč – očakávame, že máme parent dict
            if current_parent is None:
                continue
            inner = stripped
            if ":" not in inner:
                continue
            skey, svalue = inner.split(":", 1)
            skey = skey.strip()
            svalue = svalue.strip()
            subdict = cfg.setdefault(current_parent, {})
            subdict[skey] = _strip_yaml_value(svalue)

    return cfg


# ------------ Helpers: FM-Core spracovanie cez stringy ------------


def parse_fm_core_block(fm_core_path: Path, debug: bool = False) -> List[str]:
    """
    Načíta FM-Core (core/templates/system/FM-Core.md),
    zoberie prvý YAML blok medzi --- ... --- a vráti zoznam riadkov (bez ---).

    ŽIADNE yaml.safe_load – len text.
    """
    raw = load_text(fm_core_path)
    lines = raw.splitlines()
    if len(lines) < 3 or lines[0].strip() != "---":
        debug_print(debug, f"FM-Core nemá YAML blok na začiatku: {fm_core_path}")
        return []

    end_idx = None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            end_idx = i
            break

    if end_idx is None:
        debug_print(debug, f"FM-Core: nenašiel sa koniec YAML bloku v {fm_core_path}")
        return []

    yaml_lines = lines[1:end_idx]
    return yaml_lines


def _set_or_replace_fm_key(lines: List[str], key: str, raw_value: str) -> None:
    """
    Nájde riadok `key: ...` a nahradí ho hodnotou `raw_value`.
    Ak kľúč neexistuje, pridá sa na koniec.

    raw_value musí byť validný YAML fragment za dvojbodkou – string escapujeme vyššie.
    """
    key_prefix = f"{key}:"
    for idx, line in enumerate(lines):
        stripped = line.lstrip()
        if stripped.startswith(key_prefix):
            indent_len = len(line) - len(stripped)
            indent = line[:indent_len]
            lines[idx] = f"{indent}{key}: {raw_value}"
            return
    # ak sa nenašlo, pridáme úplne na koniec
    lines.append(f"{key}: {raw_value}")


def _yaml_quote(value: str) -> str:
    """
    Bezpečné uzavretie stringu do dvojitých úvodzoviek tak,
    aby to Docusaurus/Node YAML parser strávil.
    """
    escaped = value.replace('"', '\\"')
    return f'"{escaped}"'


def build_fm_lines_for_file(
    fm_core_lines: List[str],
    config: Dict[str, Any],
    instance_name: str,
    rel_path: Path,
) -> List[str]:
    """
    Z FM-Core riadkov spraví konkrétne FM pre daný súbor.

    Meníme len to, čo vieme bezpečne doplniť:
    - id (povinné, unikát v rámci inštancie)
    - guid
    - dao
    - locale
    - instance
    - title (heuristika zo súboru)
    - created (dnešný dátum, ak nie je)
    """
    lines = list(fm_core_lines)  # shallow copy

    # dao / locale z configu (ak sú)
    dao = str(config.get("dao", "")).strip()
    if dao:
        _set_or_replace_fm_key(lines, "dao", _yaml_quote(dao))

    locale = str(config.get("locale", "")).strip()
    if locale:
        _set_or_replace_fm_key(lines, "locale", _yaml_quote(locale))

    # instance – vždy nastavíme aktuálnu
    _set_or_replace_fm_key(lines, "instance", _yaml_quote(instance_name))

    # id – generický, ale deterministický v rámci inštancie
    # napr. STHDF_projects_7ds_01_D1-Management_index
    id_prefix = str(config.get("id_prefix", "STHDF")).strip() or "STHDF"
    rel_no_ext = str(rel_path.with_suffix(""))
    rel_flat = rel_no_ext.replace(os.sep, "_").replace("/", "_")
    fm_id = f"{id_prefix}_{rel_flat}"
    _set_or_replace_fm_key(lines, "id", _yaml_quote(fm_id))

    # guid – unikátny, UUIDv4
    fm_guid = str(uuid.uuid4())
    _set_or_replace_fm_key(lines, "guid", _yaml_quote(fm_guid))

    # title – heuristika z názvu súboru (ak v Core nemáš meaningful title)
    stem = rel_path.stem  # napr. "03_project-summary"
    title_base = stem.replace("_", " ").replace("-", " ").strip()
    if not title_base:
        title_base = stem
    _set_or_replace_fm_key(lines, "title", _yaml_quote(title_base))

    # created – vždy nastavíme (ak chceš striktne len ak chýba, treba naviazať na kontrolu riadku)
    today = datetime.date.today().isoformat()
    _set_or_replace_fm_key(lines, "created", today)

    return lines


def render_fm_block(fm_lines: List[str]) -> str:
    """
    Zoznam riadkov → YAML blok s --- na začiatku a konci.
    """
    return "---\n" + "\n".join(fm_lines).rstrip() + "\n---\n\n"


def should_inject_header(body_text: str) -> bool:
    """
    Ak v tele nenájdeme kotvu USER-HEADER, doplníme default header.

    Všetky tvoje typy majú HEADERS aj BODY; tu len rešpektujeme existujúcu kotvu,
    ak ju template používa.
    """
    return "<!-- USER-HEADER:BEGIN -->" not in body_text


def process_template_tree(
    src_root: Path,
    dst_root: Path,
    fm_core_lines: List[str],
    config: Dict[str, Any],
    instance_name: str,
    template_header_path: Optional[Path],
    debug: bool = False,
    dry_run: bool = False,
) -> None:
    """
    Rekurzívne prejde strom template_root a vytvorí mirror
    v dst_root, pričom do každého .md vloží FM-Core + header (ak treba).

    Idempotentné:
    - ak cieľový .md existuje, NESAHÁME naň (ani FM, ani telo).
    """
    if not src_root.is_dir():
        debug_print(debug, f"Skip (missing templates root): {src_root}")
        return

    header_text = ""
    if template_header_path is not None:
        try:
            header_text = load_text(template_header_path, optional=True)
        except FileNotFoundError:
            header_text = ""

    for src_path in src_root.rglob("*.md"):
        rel = src_path.relative_to(src_root)
        dst_path = dst_root / rel

        # idempotentné správanie – ak súbor existuje, neničíme ho
        if dst_path.exists():
            debug_print(debug, f"exists → skip: {dst_path}")
            continue

        debug_print(debug, f"create: {dst_path}")

        # načítaj telo templatu
        body = load_text(src_path)

        # zlož header + body (fallback, ak nie sú kotvy)
        content_parts: List[str] = []

        fm_lines = build_fm_lines_for_file(
            fm_core_lines=fm_core_lines,
            config=config,
            instance_name=instance_name,
            rel_path=rel,
        )
        content_parts.append(render_fm_block(fm_lines))

        if should_inject_header(body) and header_text:
            content_parts.append(header_text.strip() + "\n\n")

        content_parts.append(body.strip() + "\n")

        dst_dir = dst_path.parent
        ensure_dir(dst_dir, debug=debug, dry_run=dry_run)

        if not dry_run:
            dst_path.write_text("".join(content_parts), encoding="utf-8")


# ------------ Main ------------


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Vytvorí novú inštanciu frameworku (napr. STHDF) podľa YAML configu (bez YAML knižnice)."
    )
    parser.add_argument(
        "--config",
        dest="config_path",
        default="config/sthdf/sthdf_config.yml",
        help="Cesta ku config YAML (default: config/sthdf/sthdf_config.yml)",
    )
    parser.add_argument(
        "--instance",
        dest="instance",
        default=None,
        help="Názov inštancie (napr. 2025_ST_0001). Ak nie je, použije sa 'sthdf_instance'.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Len vypíše, čo by sa spravilo (bez zápisu súborov).",
    )
    parser.add_argument(
        "--debug",
        action="store_true",
        help="Detailnejší výpis krokov.",
    )

    args = parser.parse_args()

    config_path = Path(args.config_path)
    config = parse_simple_yaml(config_path)

    instance_name = args.instance or "sthdf_instance"

    debug_print(
        args.debug,
        f"Config: {config_path}, dao={config.get('dao')}, instance={instance_name}",
    )

    content_dir = Path(config.get("content_dir", "content/docs/sk/sthdf"))
    target_root = content_dir / instance_name

    templates_cfg = config.get("templates") or {}
    projects_root_str = templates_cfg.get("projects_root", "")
    students_root_str = templates_cfg.get("students_root", "")

    # projekty a študenti – relatívne cesty voči rootu repozitára
    projects_root = Path(projects_root_str) if projects_root_str else Path()
    students_root = Path(students_root_str) if students_root_str else Path()

    # FM-Core (spoločný)
    fm_core_path = Path(config.get("template_fm", "core/templates/system/FM-Core.md"))
    fm_core_lines = parse_fm_core_block(fm_core_path, debug=args.debug)

    # default header (fallback)
    template_header_cfg = config.get("template_header")
    template_header_path = (
        Path(template_header_cfg) if template_header_cfg is not None else None
    )

    debug_print(args.debug, f"Target root: {target_root}")
    debug_print(args.debug, f"Projects templates root: {projects_root}")
    debug_print(args.debug, f"Students templates root: {students_root}")

    # projects → /<instance>/projects
    projects_dst = target_root / "projects"
    process_template_tree(
        src_root=projects_root,
        dst_root=projects_dst,
        fm_core_lines=fm_core_lines,
        config=config,
        instance_name=instance_name,
        template_header_path=template_header_path,
        debug=args.debug,
        dry_run=args.dry_run,
    )

    # students → /<instance>/students
    students_dst = target_root / "students"
    process_template_tree(
        src_root=students_root,
        dst_root=students_dst,
        fm_core_lines=fm_core_lines,
        config=config,
        instance_name=instance_name,
        template_header_path=template_header_path,
        debug=args.debug,
        dry_run=args.dry_run,
    )

    print(
        f"STHDF instance generated at: {target_root} "
        f"{'(dry-run)' if args.dry_run else ''}"
    )


if __name__ == "__main__":
    main()