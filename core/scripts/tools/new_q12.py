#!/usr/bin/env python3
"""
new_q12.py

Generátor pre Q12 zápisy (jednoduchý single-file index.md).
"""

from pathlib import Path
from typing import Any, Dict

from base_fm import debug_print


def _ensure_dir(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)


def _render_fm(fm_core_lines, title: str, explicit_id: str | None) -> str:
    lines = []
    in_fm = False
    for raw in fm_core_lines:
        line = raw.rstrip("\n")

        if line.strip() == "---" and not in_fm:
            in_fm = True
            lines.append(line)
            continue
        if line.strip() == "---" and in_fm:
            lines.append(line)
            break

        line = line.replace("{{TITLE}}", title)
        if explicit_id:
            line = line.replace("{{ID}}", explicit_id)

        lines.append(line)

    return "\n".join(lines) + "\n"


def generate(ctx: Dict[str, Any]) -> None:
    content_dir: Path = ctx["content_dir"]
    instance_name: str = ctx["instance_name"]
    cli_title: str = ctx["cli_title"]
    fm_core_lines = ctx["fm_core_lines"]
    explicit_id = ctx["explicit_id"]
    exists_mode: str = ctx["exists_mode"]
    debug: bool = ctx["debug"]
    dry: bool = ctx["dry_run"]

    target_dir = content_dir / instance_name
    index_md = target_dir / "index.md"

    debug_print(debug, f"[Q12] target_dir={target_dir}")

    if target_dir.exists():
        if exists_mode == "error":
            raise SystemExit(f"[Q12] Cieľový priečinok už existuje: {target_dir}")
        if exists_mode == "skip":
            debug_print(debug, f"[Q12] Exists + skip → nič nerobím ({target_dir})")
            return
        if exists_mode == "replace":
            import shutil
            shutil.rmtree(target_dir)

    if dry:
        print(f"[DRY-RUN][Q12] Vytvoril by som {index_md}")
        return

    _ensure_dir(target_dir)

    fm = _render_fm(fm_core_lines, cli_title, explicit_id)
    body = (
        f"# {cli_title}\n\n"
        "Toto je Q12 zápis. Tu doplníš:\n\n"
        "- popis otázky,\n"
        "- kontext,\n"
        "- príklady odpovedí,\n"
        "- metódu hodnotenia.\n"
    )

    index_md.write_text(fm + "\n" + body, encoding="utf-8")
    print(f"[Q12] Q12 instance generated at: {index_md}")