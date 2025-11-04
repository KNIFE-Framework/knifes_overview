from pathlib import Path
from datetime import datetime
from getpass import getuser
import argparse
import yaml
import re
import hashlib
import uuid

DEF_HEADER_TPL = "core/templates/content/7ds/header/7ds_user_header.md"
DEF_FM_CORE    = "core/templates/system/FM-Core.md"

def load_text(p: Path) -> str:
    return p.read_text(encoding="utf-8")

def strip_existing_fm(md_text: str) -> str:
    """Vyhodí existujúci FM blok, nech sa neopakuje."""
    if md_text.startswith("---"):
        parts = md_text.split("\n---\n", 1)
        if len(parts) == 2:
            # odstráni prvý '---' a prvý blok po ňom
            return parts[1]  # zvyšok za FM
    return md_text

def render_header(template_path: Path) -> str:
    tpl = load_text(template_path)
    return (tpl
            .replace("{{USER}}", getuser())
            .replace("{{NOW}}", datetime.now().strftime("%Y-%m-%d %H:%M")))

def load_fm_core(fm_core_md_path: Path) -> dict:
    """
    Načíta prvý YAML front-matter blok zo súboru FM-Core.md.
    Tolerantné voči:
      - UTF-8 BOM na začiatku,
      - prázdnym znakom pred '---',
      - rôznym koncom riadkov (\n / \r\n),
      - chýbajúcemu trailing newline po záverečnom '---',
      - náhodným „smart dashes“ (–, —) na úplnom začiatku.
    """
    text = load_text(fm_core_md_path)

    # odstráň BOM a leading whitespace/newlines
    text = text.lstrip("\ufeff\r\n \t")

    # ak sú náhodou „smart dashes“ na úplnom začiatku, premapuj prvé tri znaky
    if text[:3].count("—") or text[:3].count("–"):
        prefix = text[:3].replace("—", "-").replace("–", "-")
        text = prefix + text[3:]

    # match: --- <CR/LF> ... <CR/LF> --- [EOF alebo CR/LF]
    m = re.match(r"^---\s*\r?\n(.*?)\r?\n---\s*(?:\r?\n|$)", text, flags=re.DOTALL)
    if not m:
        # fallback: ak je záverečné '---' posledný znak bez \n
        m = re.match(r"^---\s*\r?\n(.*?)\r?\n---\s*$", text, flags=re.DOTALL)

    if not m:
        raise RuntimeError("FM-Core.md neobsahuje platný FM blok na začiatku.")

    fm_dict = yaml.safe_load(m.group(1)) or {}
    if not isinstance(fm_dict, dict):
        raise RuntimeError("FM-Core.md: front-matter nie je YAML map (dict).")
    return fm_dict

def build_fm(fm_core: dict, *, title: str, dao: str, locale: str) -> dict:
    fm = dict(fm_core)  # základ z FM-Core
    # povinné overrides pre 7Ds klony:
    fm["title"] = title
    fm["dao"] = dao
    fm["locale"] = locale
    # dáta:
    today = datetime.now().strftime("%Y-%m-%d")
    fm.setdefault("created", today)
    fm["modified"] = today
    # doplníme orientačný komentár o pôvode:
    fm["fm_version_comment"] = "Initialized from FM-Core via 7ds_clone_from_template"
    return fm

def dump_fm(fm: dict) -> str:
    return f"---\n{yaml.safe_dump(fm, sort_keys=False, allow_unicode=True)}---\n"

def assemble_output(fm_yaml: str, header_comment: str, body_md: str) -> str:
    # PRESNE PORADIE: FM → header → body
    return f"{fm_yaml}\n{header_comment}\n{body_md}"

def _slug(s: str) -> str:
    s = s.upper()
    # Replace any char not in A-Z0-9_-. with '_'
    s = re.sub(r"[^A-Z0-9_\-\.]", "_", s)
    # Collapse multiple underscores/dashes/dots to single underscore
    s = re.sub(r"[_\-.]+", "_", s)
    # Trim leading/trailing underscores
    s = s.strip("_")
    return s

def _short_hash(text: str, n: int = 6) -> str:
    h = hashlib.sha1(text.encode("utf-8")).hexdigest()
    return h[:n].upper()

def make_deterministic_ids(rel_path: Path, instance: str) -> tuple[str, str]:
    slug_base = _slug(rel_path.parent.as_posix().replace("/", "_"))
    if not slug_base:
        slug_base = _slug(rel_path.stem)
    short = _short_hash(f"{instance}:{rel_path.as_posix()}")
    id_ = f"{slug_base}_{short}"
    guid = uuid.uuid5(uuid.NAMESPACE_URL, f"7ds:{instance}:{rel_path.as_posix()}")
    return id_, guid

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default="content/docs/sk")
    ap.add_argument("--template-root", default="core/templates/content/7ds")
    ap.add_argument("--fm-core", default=DEF_FM_CORE)
    ap.add_argument("--header-template", default=DEF_HEADER_TPL)
    ap.add_argument("--locale", default="sk")
    ap.add_argument("--dao", default="7ds")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--instance", default="", help="Logical name of this 7Ds instance (e.g., 'STHDF-2025'). When provided, output root becomes ROOT/INSTANCE and IDs/guids become deterministic per instance.")
    ap.add_argument("--mode", choices=["replace","skip"], default="replace", help="On existing destination files: 'replace' overwrites, 'skip' leaves them untouched.")
    args = ap.parse_args()
    instance = args.instance.strip() if args.instance else None
    base_root = Path(args.root)
    dest_root = base_root / instance if instance else base_root
    tpl_root = Path(args.template_root)
    fm_core = load_fm_core(Path(args.fm_core))
    # Enforce variant A: overwrite 'dao' and 'tags' fields for 7Ds context
    # (dao is set to '7ds', tags are set to ['7Ds', 'context'])
    fm_core["dao"] = "7ds"
    fm_core["tags"] = ["7Ds", "context"]
    header_t = Path(args.header_template)

    print(f"📁 Destination root: {dest_root}")
    if instance:
        print(f"ℹ️  Instance: {instance}")

    # prejde všetky index.md v template štruktúre:
    for tpl_idx in tpl_root.rglob("index.md"):
        rel = tpl_idx.relative_to(tpl_root)
        dst_idx = dest_root / rel

        # názov/heading odvodíme z názvu priečinku:
        title = tpl_idx.parent.name

        body = load_text(tpl_idx)
        body = strip_existing_fm(body)

        det_id, det_guid = make_deterministic_ids(rel, args.instance)

        fm_dict = build_fm(fm_core, title=title, dao=args.dao, locale=args.locale)
        if "id" not in fm_dict or not fm_dict["id"]:
            fm_dict["id"] = det_id
        if "guid" not in fm_dict or not fm_dict["guid"]:
            fm_dict["guid"] = str(det_guid)
        fm_dict["tags"] = ["7ds"] + ([args.instance] if args.instance else [])

        fm_yaml = dump_fm(fm_dict)
        header_comment = render_header(header_t)

        out = assemble_output(fm_yaml, header_comment, body)

        if args.apply:
            if dst_idx.exists() and args.mode == "skip":
                print(f"↷ skip (exists): {dst_idx}")
                continue
            dst_idx.parent.mkdir(parents=True, exist_ok=True)
            dst_idx.write_text(out, encoding="utf-8")
            print(f"✓ wrote: {dst_idx}")
        else:
            print(f"🧪 {dst_idx} (dry-run): OK (would write)")

if __name__ == "__main__":
    main()