#!/usr/bin/env python3
"""
new_class_sthdf_dashboard.py

Špecializovaný generátor pre class_sthdf_dashboard inštancie (napr. class_sthdf_dashboard-2025_ST_001).
Volá ho new_item_instance.py po vyhodnotení typu "class_sthdf_dashboard".

Zodpovednosť:
- Vytvoriť cieľový priečinok pre inštanciu (pod content_dir).
- Prejsť celý strom šablón v core/templates/content/class_sthdf_dashboard/body (alebo v ceste z configu).
- Pre každý .md súbor:
  - vygenerovať Front Matter na základe FM-Core + configu + ID + title
  - nahradiť placeholdery z FM-Core v tele šablóny
  - podľa potreby vložiť header template (pre index)
- Ostatné súbory iba skopírovať (obrázky, atď.).
"""

import re
import shutil
from pathlib import Path
from typing import Dict, Any, Optional, List

from base_fm import (
    debug_print,
    load_text,
    ensure_dir,
    build_fm_lines_for_file,
    render_fm_block,
    _build_placeholder_mapping_from_fm,
    should_inject_header,
    _set_or_replace_fm_key,
    _yaml_quote,
    _replace_placeholders,
)


def _safe_name(raw_name: str, fallback: str = "class_sthdf_dashboard_instance") -> str:
    """
    Vytvorí bezpečný názov priečinka zo zadaného mena.
    Povolené znaky: A-Z, a-z, 0-9, -, _
    """
    raw_name = raw_name or fallback
    safe = re.sub(r"[^A-Za-z0-9_-]+", "-", raw_name).strip("-")
    return safe or fallback


def _resolve_body_root(config: Dict[str, Any]) -> Path:
    """
    Zistí koreňový adresár pre body šablóny class_sthdf_dashboard.

    Preferuje sa hodnota v config/class_sthdf_dashboard/class_sthdf_dashboard_config.yml, napr.:
      template_body_root: "core/templates/content/class_sthdf_dashboard/body"

    Ak tam nie je, fallback je práve táto cesta.
    """
    raw = config.get("template_body_root")
    if raw:
        return Path(raw)
    # Fallback – aktuálna defaultná cesta v projekte
    return Path("core/templates/content/class_sthdf_dashboard/body")


def _build_combined_title(explicit_id: Optional[str], cli_title: Optional[str], instance_name: str) -> Optional[str]:
    """
    Vytvorí kombinovaný title podľa konvencie:
      ID – Title
    """
    base_title = cli_title or instance_name or explicit_id
    if not base_title:
        return None

    if explicit_id:
        return f"{explicit_id} – {base_title}"
    return base_title


def _process_markdown_file(
    src_path: Path,
    dest_path: Path,
    rel_path: Path,
    fm_core_lines: List[str],
    config: Dict[str, Any],
    instance_name: str,
    explicit_id: Optional[str],
    cli_title: Optional[str],
    template_header_path: Optional[str],
    debug: bool,
    dry_run: bool,
    body_override: Optional[str] = None,
) -> None:
    """
    Spracuje jeden .md súbor šablóny:
      - vygeneruje FM
      - vykoná náhradu placeholderov
      - podľa potreby vloží header template
      - výsledok uloží do dest_path

    `body_override`, ak je zadané, nahradí načítanie obsahu zo `src_path`
    (používa sa pri generovaní opakovaných jednotiek — ST0xx/PRJ0xx — a pri
    dynamicky poskladaných hub zoznamoch, kde sa telo súboru zostavuje
    programovo namiesto kopírovania šablóny 1:1).
    """
    body = body_override if body_override is not None else load_text(src_path)

    is_root = (rel_path == Path("index.md"))
    effective_explicit_id = explicit_id if is_root else None
    fm_lines = build_fm_lines_for_file(
        fm_core_lines=fm_core_lines,
        config=config,
        instance_name=instance_name,
        rel_path=rel_path,
        explicit_id=effective_explicit_id,
        cli_title=cli_title,
    )

    # Upravíme title tak, aby obsahoval ID + title (rovnako ako pri KNIFE)
    # 👉 Platí iba pre root `index.md`. Podstránky si nechávajú vlastný title
    # (napr. odvodený z prvého H1 alebo z názvu súboru cez base_fm).
    if is_root:
        combined_title = _build_combined_title(explicit_id, cli_title, instance_name)
        if combined_title:
            _set_or_replace_fm_key(fm_lines, "title", _yaml_quote(combined_title))

    # Pre nested class_sthdf_dashboard docs odstránime id z FM, aby sa neopakoval rovnaký id
    if not is_root:
        cleaned_fm_lines: List[str] = []
        for line in fm_lines:
            if not line.lstrip().startswith("id:"):
                cleaned_fm_lines.append(line)
        fm_lines = cleaned_fm_lines

    # Mapovanie placeholderov z FM pre použitie v texte
    fm_mapping = _build_placeholder_mapping_from_fm(fm_lines)

    parts: List[str] = []
    parts.append(render_fm_block(fm_lines))

    # Pre všetky podstránky pridáme komentár s ID class_sthdf_dashboard inštancie
    id_class_sthdf_dashboard_for_comment = explicit_id or instance_name
    if not is_root and id_class_sthdf_dashboard_for_comment:
        parts.append(f"<!-- class_sthdf_dashboard_INSTANCE_ID: {id_class_sthdf_dashboard_for_comment} -->\n\n")

    # Zistí, či telo obsahuje marker na vloženie header template
    inject_header = should_inject_header(body)

    # Header template použijeme len pre hlavný index (rel_path == "index.md")
    processed_header = ""
    if inject_header and template_header_path and rel_path == Path("index.md"):
        try:
            header_text = load_text(Path(template_header_path), optional=True)
        except FileNotFoundError:
            header_text = ""

        if header_text:
            header_lines = header_text.splitlines()
            _replace_placeholders(header_lines, fm_mapping)
            processed_header = "\n".join(header_lines).strip()
            if processed_header:
                parts.append(processed_header + "\n\n")

    # Spracovanie tela – náhrada placeholderov
    body_lines = body.splitlines()
    _replace_placeholders(body_lines, fm_mapping)
    processed_body = "\n".join(body_lines).strip()
    parts.append(processed_body + "\n")

    if not dry_run:
        ensure_dir(dest_path.parent, debug=debug, dry_run=dry_run)
        dest_path.write_text("".join(parts), encoding="utf-8")


def _renumbered_rel_path(rel_path: Path, old_unit: str, new_unit: str) -> Path:
    """Nahradí presne jeden segment cesty (napr. 'ST001' -> 'ST042')."""
    new_parts = [new_unit if part == old_unit else part for part in rel_path.parts]
    return Path(*new_parts)


def _generate_repeated_unit(
    template_root: Path,
    output_root: Path,
    unit_dir_name: str,  # napr. "students"
    canonical_id: str,  # napr. "ST001"
    prefix: str,  # napr. "ST"
    count: int,
    fm_core_lines: List[str],
    config: Dict[str, Any],
    instance_name: str,
    template_header_path: Optional[str],
    debug: bool,
    dry_run: bool,
) -> None:
    """
    Vygeneruje `count` kópií jednotky (napr. ST001..STNNN) na základe
    jedinej kanonickej šablóny (napr. students/ST001/**), s náhradou čísla
    v ceste aj v texte súborov (napr. "ST001" -> "ST042").
    """
    canonical_root = template_root / unit_dir_name / canonical_id
    if not canonical_root.exists():
        raise SystemExit(
            f"[class_sthdf_dashboard] Kanonická šablóna '{canonical_root}' neexistuje "
            f"— potrebná pre generovanie podľa počtu (--students/--projects)."
        )

    for i in range(1, count + 1):
        new_id = f"{prefix}{i:03d}"
        for src_path in canonical_root.rglob("*"):
            rel_within_unit = src_path.relative_to(canonical_root)
            dest_path = output_root / unit_dir_name / new_id / rel_within_unit

            if src_path.is_dir():
                ensure_dir(dest_path, debug=debug, dry_run=dry_run)
                continue

            if src_path.suffix.lower() == ".md":
                body = load_text(src_path).replace(canonical_id, new_id)
                rel_path = Path(unit_dir_name) / new_id / rel_within_unit
                _process_markdown_file(
                    src_path=src_path,
                    dest_path=dest_path,
                    rel_path=rel_path,
                    fm_core_lines=fm_core_lines,
                    config=config,
                    instance_name=instance_name,
                    explicit_id=None,
                    cli_title=None,
                    template_header_path=template_header_path,
                    debug=debug,
                    dry_run=dry_run,
                    body_override=body,
                )
            else:
                if not dry_run:
                    ensure_dir(dest_path.parent, debug=debug, dry_run=dry_run)
                    shutil.copy2(src_path, dest_path)


def _write_unit_index(
    template_root: Path,
    output_root: Path,
    unit_dir_name: str,  # napr. "students"
    prefix: str,  # napr. "ST"
    count: int,
    fm_core_lines: List[str],
    config: Dict[str, Any],
    instance_name: str,
    template_header_path: Optional[str],
    debug: bool,
    dry_run: bool,
) -> None:
    """Prepíše hub zoznam (students/index.md alebo projects/index.md) tak,
    aby zodpovedal skutočnému počtu vygenerovaných jednotiek."""
    lines = [f"- [{prefix}{i:03d}](./{prefix}{i:03d}/index.md)" for i in range(1, count + 1)]
    body = "\n".join(lines)

    src_index = template_root / unit_dir_name / "index.md"
    rel_path = Path(unit_dir_name) / "index.md"
    dest_path = output_root / unit_dir_name / "index.md"

    _process_markdown_file(
        src_path=src_index,
        dest_path=dest_path,
        rel_path=rel_path,
        fm_core_lines=fm_core_lines,
        config=config,
        instance_name=instance_name,
        explicit_id=None,
        cli_title=None,
        template_header_path=template_header_path,
        debug=debug,
        dry_run=dry_run,
        body_override=body,
    )


def generate(ctx: Dict[str, Any]) -> None:
    """
    Hlavný vstupný bod pre generovanie class_sthdf_dashboard inštancie.

    ŠPECIÁLNA verzia pre class_sthdf_dashboard:
      - nepoužíva common_generate_tree,
      - prechádza strom šablóny a pre každý .md súbor volá _process_markdown_file,
      - rešpektuje FM-Core ako SSOT,
      - pre root index.md nastaví title v tvare "ID – Title",
      - pre podstránky necháva title odvodený z H1 / názvu súboru (cez base_fm).

    Očakávané položky v ctx (pripravené new_item_instance.py):
      - config: načítaný YAML config/class_sthdf_dashboard/class_sthdf_dashboard_config.yml
      - content_dir: Path – koreň pre zápis class_sthdf_dashboard inštancií (content/docs/sk/class_sthdf_dashboard)
      - instance_name: napr. "class_sthdf_dashboard_PlatobnyPortal"
      - explicit_id: napr. "class_sthdf_dashboard_PlatobnyPortal" (môže byť rovnaké ako instance_name)
      - cli_title: ľudský title (napr. "class_sthdf_dashboard – Platobný portál")
      - fm_core_lines: List[str] – obsah FM-Core template
      - template_header_path: voliteľná cesta na header template
      - exists_mode: "skip" | "error" | "replace"
      - debug: bool
      - dry_run: bool
    """
    config: Dict[str, Any] = ctx["config"]
    content_dir: Path = ctx["content_dir"]
    instance_name: str = ctx["instance_name"]

    explicit_id: Optional[str] = ctx.get("explicit_id")
    cli_title: Optional[str] = ctx.get("cli_title")
    fm_core_lines: List[str] = ctx["fm_core_lines"]
    template_header_path: Optional[str] = ctx.get("template_header_path")

    exists_mode: str = ctx.get("exists_mode", "error")
    debug: bool = ctx.get("debug", False)
    dry_run: bool = ctx.get("dry_run", False)

    students_count: Optional[int] = ctx.get("students_count")
    projects_count: Optional[int] = ctx.get("projects_count")

    # Koreň šablóny pre class_sthdf_dashboard (z configu alebo default)
    template_root = _resolve_body_root(config)

    # Cieľový koreň jedného class_sthdf_dashboard zápisu
    output_root = content_dir / instance_name

    debug_print(debug, f"[class_sthdf_dashboard] template_root={template_root}")
    debug_print(debug, f"[class_sthdf_dashboard] output_root={output_root}")

    # Konflikt cieľového priečinka podľa režimu exists_mode
    if output_root.exists():
        if exists_mode == "error":
            raise SystemExit(f"[class_sthdf_dashboard] Cieľový priečinok už existuje: {output_root}")
        if exists_mode == "skip":
            debug_print(debug, f"[class_sthdf_dashboard] Exists + skip → nič nerobím ({output_root})")
            return
        if exists_mode == "replace":
            shutil.rmtree(output_root)

    if dry_run:
        print(f"[DRY-RUN][class_sthdf_dashboard] Vytvoril by som strom pod {output_root}")
        return

    # Ak je zadaný --students/--projects, tieto podstromy sa negenerujú
    # kopírovaním šablóny 1:1 (koľko ST0xx/PRJ0xx priečinkov náhodou má
    # šablóna), ale programovo podľa zadaného počtu — pozri nižšie.
    skip_prefixes: List[Path] = []
    if students_count is not None:
        skip_prefixes.append(Path("students"))
    if projects_count is not None:
        skip_prefixes.append(Path("projects"))

    # Reálne kopírovanie stromu z template_root do output_root
    for src_path in template_root.rglob("*"):
        rel_path = src_path.relative_to(template_root)

        if any(rel_path == p or p in rel_path.parents for p in skip_prefixes):
            continue

        dest_path = output_root / rel_path

        if src_path.is_dir():
            ensure_dir(dest_path, debug=debug, dry_run=dry_run)
            continue

        if src_path.suffix.lower() == ".md":
            _process_markdown_file(
                src_path=src_path,
                dest_path=dest_path,
                rel_path=rel_path,
                fm_core_lines=fm_core_lines,
                config=config,
                instance_name=instance_name,
                explicit_id=explicit_id,
                cli_title=cli_title,
                template_header_path=template_header_path,
                debug=debug,
                dry_run=dry_run,
            )
        else:
            # Nekopírujeme nič v DRY režime
            if not dry_run:
                ensure_dir(dest_path.parent, debug=debug, dry_run=dry_run)
                shutil.copy2(src_path, dest_path)

    # Programové generovanie ST0xx / PRJ0xx podľa --students / --projects
    if students_count is not None:
        debug_print(debug, f"[class_sthdf_dashboard] Generujem {students_count} študentov (ST001..ST{students_count:03d})")
        _generate_repeated_unit(
            template_root=template_root,
            output_root=output_root,
            unit_dir_name="students",
            canonical_id="ST001",
            prefix="ST",
            count=students_count,
            fm_core_lines=fm_core_lines,
            config=config,
            instance_name=instance_name,
            template_header_path=template_header_path,
            debug=debug,
            dry_run=dry_run,
        )
        _write_unit_index(
            template_root=template_root,
            output_root=output_root,
            unit_dir_name="students",
            prefix="ST",
            count=students_count,
            fm_core_lines=fm_core_lines,
            config=config,
            instance_name=instance_name,
            template_header_path=template_header_path,
            debug=debug,
            dry_run=dry_run,
        )

    if projects_count is not None:
        debug_print(debug, f"[class_sthdf_dashboard] Generujem {projects_count} projektov (PRJ001..PRJ{projects_count:03d})")
        _generate_repeated_unit(
            template_root=template_root,
            output_root=output_root,
            unit_dir_name="projects",
            canonical_id="PRJ001",
            prefix="PRJ",
            count=projects_count,
            fm_core_lines=fm_core_lines,
            config=config,
            instance_name=instance_name,
            template_header_path=template_header_path,
            debug=debug,
            dry_run=dry_run,
        )
        _write_unit_index(
            template_root=template_root,
            output_root=output_root,
            unit_dir_name="projects",
            prefix="PRJ",
            count=projects_count,
            fm_core_lines=fm_core_lines,
            config=config,
            instance_name=instance_name,
            template_header_path=template_header_path,
            debug=debug,
            dry_run=dry_run,
        )

    print(f"class_sthdf_dashboard instance generated at: {output_root}")