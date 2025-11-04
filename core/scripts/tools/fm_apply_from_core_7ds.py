#!/usr/bin/env python3
"""
fm_apply_from_core_7ds.py

Cieľ:
- PREPÍŠE frontmatter všetkých MD v 7Ds podľa FM-Core šablóny
- ALE: nestratí tvoje pôvodné hodnoty → všetky NEPRÁZDNE z pôvodného FM
  doplní späť (overwrite na FM-Core)

Použitie:
  # len náhľad
  python3 core/scripts/tools/fm_apply_from_core_7ds.py --dry

  # len náhľad s označením zmenených súborov
  python3 core/scripts/tools/fm_apply_from_core_7ds.py --dry --only-changed

  # reálne zapíš
  python3 core/scripts/tools/fm_apply_from_core_7ds.py --apply

  # zápis + backup FM + instance tag
  python3 core/scripts/tools/fm_apply_from_core_7ds.py --apply --backup --instance-tag STHDF-2025

Parametre:
  --root  ... koreň 7Ds (default: content/docs/sk/7Ds)
  --fmcore ... cesta k FM-Core (default: core/templates/system/FM-Core.md)
  --config-global ... globálne defaulty (author/license/locale…) YAML (default: config/global.yml)
  --report ... CSV report path (default: logs/fm_apply_from_core_7ds_report.csv)
  --only-changed ... print/log only files where FM changed
  --instance-tag ... voliteľný tag (napr. STHDF-2025), ktorý bude pridaný do tags
  --backup ... ak je prítomný, uloží pôvodný FM do .fm.bak.yml vedľa súboru
"""

import argparse
import pathlib
import sys
import io
import yaml
from datetime import datetime, timezone
import re
from typing import Any, Dict, List
import os


DEFAULT_ROOT = "content/docs/sk/7Ds"
DEFAULT_FMCORE = "core/templates/system/FM-Core.md"
DEFAULT_CONFIG_GLOBAL = "config/global.yml"
DEFAULT_REPORT = "logs/fm_apply_from_core_7ds_report.csv"


def _read_text(path: pathlib.Path) -> str:
    data = path.read_bytes()
    # strip UTF-8 BOM if present
    if data.startswith(b'\xef\xbb\xbf'):
        data = data[3:]
    return data.decode("utf-8", errors="replace")


def load_frontmatter_from_file(path: pathlib.Path):
    text = _read_text(path)
    if not text.lstrip().startswith("---"):
        return {}, text
    parts = text.split("---", 2)
    # parts: ["", "<yaml>\n", "<body>"]
    if len(parts) < 3:
        return {}, text
    fm_raw = parts[1].strip()
    body = parts[2].lstrip("\n")
    if not fm_raw:
        return {}, body
    data = yaml.safe_load(fm_raw) or {}
    return data, body


def _extract_frontmatter_yaml(text: str) -> Dict[str, Any]:
    s = text
    # normalize smart dashes in the opening fence region
    s = s.lstrip("\ufeff").lstrip()
    if not s.startswith("---"):
        return {}
    parts = s.split("---", 2)
    if len(parts) < 3:
        return {}
    core_yaml = parts[1].strip()
    if not core_yaml:
        return {}
    return yaml.safe_load(core_yaml) or {}


def extract_fmcore_yaml(fmcore_path: pathlib.Path) -> dict:
    txt = _read_text(fmcore_path)
    # try '---' frontmatter style first
    fm = _extract_frontmatter_yaml(txt)
    if fm:
        return fm
    # else treat file as pure YAML
    return yaml.safe_load(txt) or {}


def _is_nonempty(val: Any) -> bool:
    if val is None:
        return False
    if isinstance(val, str):
        return val.strip() != ""
    if isinstance(val, (list, tuple, set, dict)):
        return len(val) > 0
    return True


def _uniq_list(seq: List[Any]) -> List[Any]:
    out, seen = [], set()
    for x in seq:
        if x in seen:
            continue
        seen.add(x)
        out.append(x)
    return out


def _render_placeholders(obj: Any, mapping: Dict[str, str]) -> Any:
    """Recursively replace {{KEY}} in strings using mapping."""
    if isinstance(obj, str):
        def sub(m):
            key = m.group(1)
            return str(mapping.get(key, m.group(0)))
        return re.sub(r"\{\{\s*([A-Za-z0-9_]+)\s*\}\}", sub, obj)
    if isinstance(obj, list):
        return [_render_placeholders(v, mapping) for v in obj]
    if isinstance(obj, dict):
        return {k: _render_placeholders(v, mapping) for k, v in obj.items()}
    return obj


def _load_global_defaults(path: pathlib.Path) -> Dict[str, Any]:
    if not path.exists():
        return {}
    try:
        return yaml.safe_load(_read_text(path)) or {}
    except Exception:
        return {}


def merge_core_with_old(core_fm: dict, old_fm: dict, defaults: Dict[str, Any], instance_tag: str | None = None) -> dict:
    """
    1. Začni FM-Core → to je kostra
    2. Prejdi pôvodný FM → čo je NEPRÁZDNE, tým prepíš Core
    3. Jemná logika pre created/modified
    """
    today_d = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    mapping = {
        "AUTHOR": (old_fm.get("author") or defaults.get("author") or defaults.get("AUTHOR") or ""),
        "RIGHTS_HOLDER_SYSTEM": defaults.get("rights_holder_system") or defaults.get("RIGHTS_HOLDER_SYSTEM") or "",
        "LICENSE": defaults.get("license") or defaults.get("LICENSE") or "CC-BY-NC-SA-4.0",
        "ORIGIN_SYSTEM": defaults.get("origin_system") or defaults.get("ORIGIN_SYSTEM") or "docusaurus",
        "LOCALE": old_fm.get("locale") or defaults.get("locale") or defaults.get("LOCALE") or "sk",
        "CREATED": old_fm.get("created") or today_d,
        "ID": old_fm.get("id") or "",
        "GUID": old_fm.get("guid") or "",
        "TITLE": old_fm.get("title") or "",
    }
    core_rendered = _render_placeholders(core_fm, mapping)
    merged = dict(core_rendered)  # kópia

    # 2) doplnenie pôvodných hodnôt
    for k, v in old_fm.items():
        if _is_nonempty(v):
            merged[k] = v

    merged["dao"] = "7ds"
    # tags: ensure "7ds" present; if defaults has instance tag, keep it
    tags = merged.get("tags") or []
    if isinstance(tags, str):
        tags = [tags]
    tags = [t for t in tags if str(t).strip() != ""]
    if "7ds" not in tags:
        tags.insert(0, "7ds")
    if instance_tag:
        if instance_tag not in tags:
            tags.append(instance_tag)
    merged["tags"] = _uniq_list(tags)
    # locale fallback
    if not _is_nonempty(merged.get("locale")):
        merged["locale"] = mapping["LOCALE"]
    # author fallbacks
    if not _is_nonempty(merged.get("author")) and mapping["AUTHOR"]:
        merged["author"] = mapping["AUTHOR"]
    if not _is_nonempty(merged.get("authors")) and _is_nonempty(merged.get("author")):
        merged["authors"] = [merged["author"]]
    if isinstance(merged.get("authors"), list):
        merged["authors"] = [a for a in merged["authors"] if _is_nonempty(a)]
    # created/modified
    if not _is_nonempty(merged.get("modified")):
        if _is_nonempty(merged.get("created")):
            merged["modified"] = merged["created"]
        else:
            merged["modified"] = today_d
    merged["fm_build"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    # rights/license defaults if still empty
    if not _is_nonempty(merged.get("rights_holder_system")) and mapping["RIGHTS_HOLDER_SYSTEM"]:
        merged["rights_holder_system"] = mapping["RIGHTS_HOLDER_SYSTEM"]
    if not _is_nonempty(merged.get("license")) and mapping["LICENSE"]:
        merged["license"] = mapping["LICENSE"]
    if not _is_nonempty(merged.get("origin_system")) and mapping["ORIGIN_SYSTEM"]:
        merged["origin_system"] = mapping["ORIGIN_SYSTEM"]

    return merged


def render_md(fm: dict, body: str) -> str:
    # nechceme sort_keys, potrebujeme poradie
    dumped = yaml.dump(
        fm,
        allow_unicode=True,
        sort_keys=False,
        width=120,
        default_flow_style=False,
    ).rstrip()
    return f"---\n{dumped}\n---\n{body if body.startswith('\n') or body=='' else body}"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", default=DEFAULT_ROOT, help="Root folder with 7Ds MD files")
    parser.add_argument("--fmcore", default=DEFAULT_FMCORE, help="FM-Core md file to take YAML from")
    parser.add_argument("--config-global", default=DEFAULT_CONFIG_GLOBAL, help="Global defaults (author/license/locale…) YAML")
    parser.add_argument("--report", default=DEFAULT_REPORT, help="CSV report path")
    parser.add_argument("--only-changed", action="store_true", help="Print/log only files where FM changed")
    parser.add_argument("--instance-tag", default=None, help="Optional tag (e.g., STHDF-2025) to add into tags")
    parser.add_argument("--backup", action="store_true", help="If set, write original frontmatter to a .fm.bak.yml file before applying changes")
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--dry", action="store_true", help="Dry-run, len ukáže diff-like výstup")
    mode.add_argument("--apply", action="store_true", help="Zapíše zmeny späť do súborov")
    args = parser.parse_args()

    root = pathlib.Path(args.root)
    fmcore_path = pathlib.Path(args.fmcore)

    if not root.exists():
        print(f"❌ Root folder not found: {root}", file=sys.stderr)
        sys.exit(1)
    if not fmcore_path.exists():
        print(f"❌ FM-Core not found: {fmcore_path}", file=sys.stderr)
        sys.exit(1)

    fmcore_yaml = extract_fmcore_yaml(fmcore_path)
    defaults = _load_global_defaults(pathlib.Path(args.config_global))

    md_files = sorted(root.glob("**/*.md"))
    total = 0
    changed = 0
    report_rows = []

    for md in md_files:
        total += 1
        old_fm, body = load_frontmatter_from_file(md)

        new_fm = merge_core_with_old(fmcore_yaml, old_fm, defaults, instance_tag=args.instance_tag)

        # zrenderuj nový obsah
        new_text = render_md(new_fm, body)
        old_text = md.read_text(encoding="utf-8")

        changed_keys = [k for k in sorted(set(list(old_fm.keys())+list(new_fm.keys()))) if (old_fm.get(k) != new_fm.get(k))]

        if new_text != old_text:
            changed += 1

        if args.only_changed and not changed_keys:
            continue

        if args.dry:
            if not args.only_changed or changed_keys:
                print(f"🧪 {md} (from-core) changed_keys={changed_keys}")
        else:
            if new_text != old_text:
                if args.apply and args.backup and changed_keys:
                    bak_path = md.with_suffix("").with_suffix(".fm.bak.yml")
                    with open(bak_path, "w", encoding="utf-8") as bf:
                        bf.write(yaml.dump(old_fm, allow_unicode=True, sort_keys=False, width=120, default_flow_style=False))
                    print(f"🗄️  backup: {bak_path}")
                md.write_text(new_text, encoding="utf-8")
                print(f"✍️  {md} (updated) changed_keys={changed_keys}")

        report_rows.append([str(md), "1" if new_text != old_text else "0", ";".join(changed_keys)])

    rep_path = pathlib.Path(args.report)
    rep_path.parent.mkdir(parents=True, exist_ok=True)
    with rep_path.open("w", encoding="utf-8") as f:
        f.write("path,changed,keys\n")
        for row in report_rows:
            # escape commas by quoting if necessary
            path_s = row[0].replace('"', '""')
            keys_s = row[2].replace('"', '""')
            f.write(f"\"{path_s}\",{row[1]},\"{keys_s}\"\n")

    print(f"✅ Done. Scanned: {total} | changed: {changed} | mode: {'DRY' if args.dry else 'APPLY'} | report: {args.report}")


if __name__ == "__main__":
    main()