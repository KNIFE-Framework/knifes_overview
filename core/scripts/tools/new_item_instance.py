#!/usr/bin/env python3
"""
new_item_instance.py (refactored)

Jeden vstupný bod, ktorý:
  - načíta config
  - pripraví shared context
  - podľa typu zavolá špecializovaný generátor (new_knifes, new_q12, new_sthdf, ...)

Externé rozhranie (CLI parametre) ostáva zachované.
"""

import argparse
import os
from pathlib import Path
from typing import Any, Dict, Optional

from base_fm import (
    debug_print,
    parse_simple_yaml,
    parse_fm_core_block,
)

from new_knife import generate as generate_knife
from new_q12 import generate as generate_q12
from new_sthdf import generate as generate_sthdf
from new_sdlc import generate as generate_sdlc
from new_7ds import generate as generate_7ds
from new_thesis import generate as generate_thesis


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "Vytvorí novú inštanciu frameworku (napr. STHDF/KNIFE/SDLC/Q12) "
            "podľa YAML configu (bez YAML knižnice)."
        )
    )

    parser.add_argument(
        "--type",
        dest="item_type",
        help=(
            "Typ inštancie (napr. sthdf, sdlc, q12, knife, 7ds, thesis). Ak je zadaný, vyberie sa zodpovedajúci default config a prepíše --config."
        ),
    )
    parser.add_argument(
        "--config",
        dest="config_path",
        default="config/sthdf/sthdf_config.yml",
        help="Cesta ku config YAML (default: config/sthdf/sthdf_config.yml)",
    )
    parser.add_argument(
        "--name",
        dest="name",
        default=None,
        help=(
            "Logické meno inštancie (napr. sthdf_2025 alebo KNIFE-User-Guide). "
            "Používa sa v názve priečinka a ako fallback pre title."
        ),
    )
    parser.add_argument(
        "--title",
        dest="title",
        default=None,
        help=(
            "Ľudský názov inštancie (napr. 'STHDF 2025/2026' alebo 'KNIFE User Guide'). "
            "Používa sa v FM.title a v placeholderoch."
        ),
    )
    parser.add_argument(
        "--id",
        dest="item_id",
        default=None,
        help=(
            "Explicit ID to inject into Front Matter (použije sa v {{ID}} placeholderi). "
            "Ak nie je zadané, ID sa vygeneruje z instance + relatívnej cesty."
        ),
    )
    parser.add_argument(
        "--output",
        dest="output_dir",
        default=None,
        help=(
            "Cieľový root pre obsah (napr. content/docs/sk/sthdf alebo content/docs/sk/knifes). "
            "Ak je zadaný, prepíše content_dir z configu."
        ),
    )
    parser.add_argument(
        "--instance",
        dest="instance",
        default=None,
        help=(
            "Názov inštancie (napr. sthdf_2025 alebo 2025_ST_0001). "
            "Ak nie je zadaný, použije sa meno z --name alebo fallback podľa typu."
        ),
    )
    parser.add_argument(
        "--exists",
        dest="exists_mode",
        choices=["skip", "error", "replace", "merge"],
        default="skip",
        help=(
            "Ako sa správať, ak cieľové súbory/priečinky už existujú: "
            "'skip' (default) = nesiahať na existujúce; "
            "'error' = skončiť s chybou; "
            "'replace' = zmazať cieľový priečinok a znovu vygenerovať; "
            "'merge' = rezervované (aktuálne sa správa ako 'skip')."
        ),
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

    # Fallback: --id z env premennnej ID
    if not args.item_id:
        env_id = os.environ.get("ID")
        if env_id:
            args.item_id = env_id

    type_to_config = {
        "sthdf": "config/sthdf/sthdf_config.yml",
        "sdlc": "config/sdlc/sdlc_config.yml",
        "q12": "config/q12/q12_config.yml",
        "knife": "config/knifes/knifes_config.yml",
        "knifes": "config/knifes/knifes_config.yml",
        "7ds": "config/7ds/7ds_config.yml",
        "thesis": "config/thesis/thesis_config.yml",
    }

    # Výber configu
    if args.item_type:
        mapped = type_to_config.get(args.item_type)
        if mapped:
            config_path = Path(mapped)
            debug_print(
                args.debug,
                f"--type={args.item_type} → config={config_path}",
            )
        else:
            debug_print(
                args.debug,
                f"Neznámy --type '{args.item_type}', používam --config {args.config_path}",
            )
            config_path = Path(args.config_path)
    else:
        config_path = Path(args.config_path)

    config = parse_simple_yaml(config_path)

    # Effective type: prefer CLI --type, fallback na config['dao']
    effective_type = (args.item_type or str(config.get("dao", ""))).lower()

    # Rozhodnutie mena inštancie
    if args.instance:
        instance_name = args.instance
    elif args.name:
        instance_name = args.name
    else:
        if effective_type in ("knife", "knifes"):
            instance_name = "new_knife"
        else:
            instance_name = "sthdf_instance"

    # Unified CLI title fallback
    cli_title = args.title or args.name or instance_name

    debug_print(
        args.debug,
        (
            f"Config: {config_path}, dao={config.get('dao')}, "
            f"instance={instance_name}, name={args.name}, title={args.title}"
        ),
    )

    # Output root
    if args.output_dir:
        content_dir = Path(args.output_dir)
    else:
        default_root = "content/docs/sk/sthdf"
        if effective_type in ("knife", "knifes"):
            default_root = "content/docs/sk/knifes"
        elif effective_type == "q12":
            default_root = "content/docs/sk/q12"
        content_dir = Path(config.get("content_dir", default_root))

    # Špecifické nastavenia pre templaty
    templates_cfg = config.get("templates") or {}
    projects_root_str = templates_cfg.get("projects_root", "")
    students_root_str = templates_cfg.get("students_root", "")
    templates_root_str = templates_cfg.get("root", "") or templates_cfg.get("templates_root", "")

    projects_root = Path(projects_root_str) if projects_root_str else None
    students_root = Path(students_root_str) if students_root_str else None
    templates_root = Path(templates_root_str) if templates_root_str else None

    # FM-Core
    fm_core_path = Path(config.get("template_fm", "core/templates/system/FM-Core.md"))
    fm_core_lines = parse_fm_core_block(fm_core_path, debug=args.debug)

    # Header template (voliteľný)
    template_header_cfg = config.get("template_header")
    template_header_path = (
        Path(template_header_cfg) if template_header_cfg is not None else None
    )

    explicit_id: Optional[str] = args.item_id
    exists_mode: str = args.exists_mode

    # Shared context pre špecializované generátory
    ctx: Dict[str, Any] = {
        "effective_type": effective_type,
        "config": config,
        "content_dir": content_dir,
        "instance_name": instance_name,
        "explicit_id": explicit_id,
        "cli_title": cli_title,
        "fm_core_lines": fm_core_lines,
        "template_header_path": template_header_path,
        "exists_mode": exists_mode,
        "debug": args.debug,
        "dry_run": args.dry_run,
        "projects_root": projects_root,
        "students_root": students_root,
        "templates_root": templates_root,
        "raw_name": args.name,
    }

    # Routing podľa typu – použijeme staticky importované generátory
    if effective_type == "knife":
        return generate_knife(ctx)

    if effective_type == "q12":
        return generate_q12(ctx)

    if effective_type == "sthdf":
        return generate_sthdf(ctx)

    if effective_type == "sdlc":
        return generate_sdlc(ctx)

    if effective_type == "7ds":
        return generate_7ds(ctx)

    if effective_type == "thesis":
        return generate_thesis(ctx)
    # Future: 7ds, thesis, mm...
    print(f"Unsupported type '{effective_type}'. Nie je ešte implementované.")


if __name__ == "__main__":
    main()