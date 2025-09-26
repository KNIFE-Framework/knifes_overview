#!/usr/bin/env python3
import re, uuid, sys
from pathlib import Path
from datetime import date

DOCS_DIR = Path("docs")
FM_START = "---\n"
FM_END = "---\n"
TODAY = date.today().isoformat()

def has_frontmatter(text: str) -> bool:
    return text.startswith(FM_START)

def detect_locale(path: Path) -> str:
    parts = path.parts
    return "sk" if "sk" in parts else ("en" if "en" in parts else "")

def detect_id_from_path(path: Path) -> str:
    # hľadá napr. .../knifes/K044-backup-one-drive/...
    m = re.search(r"/(K\d{3})[-_/]", "/".join(path.parts)+"/")
    return m.group(1) if m else ""

def build_guid(kid: str) -> str:
    base = kid.lower() if kid else "unknown"
    return f"knife-{base}-{uuid.uuid4()}"

def make_frontmatter(kid: str, locale: str) -> str:
    guid = build_guid(kid)
    fm = {
        "id": f"\"{kid}\"" if kid else "\"\"",
        "guid": f"\"{guid}\"",
        "dao": "\"knife\"",
        "title": "\"\"",
        "author": "\"\"",
        "category": "\"deliverable\"",
        "type": "\"knife\"",
        "priority": "\"\"",
        "tags": "[]",
        "slug": "\"\"",
        "sidebar_label": f"\"{kid} – \""
                         if kid else "\"\"",
        "locale": f"\"{locale}\"" if locale else "\"\"",
        "created": f"\"{TODAY}\"",
        "modified": f"\"{TODAY}\"",
        "status": "\"draft\"",
        "license": "\"CC-BY-NC-SA-4.0\""
    }
    lines = [FM_START]
    for k, v in fm.items():
        lines.append(f"{k}: {v}\n")
    lines.append(FM_END)
    return "".join(lines)

def process_file(path: Path, dry: bool=False) -> bool:
    txt = path.read_text(encoding="utf-8")
    if has_frontmatter(txt):
        return False
    kid = detect_id_from_path(path)
    locale = detect_locale(path)
    fm = make_frontmatter(kid, locale)
    if dry:
        print(f"[DRY] would add FM → {path}")
        return False
    path.write_text(fm + "\n" + txt, encoding="utf-8")
    print(f"[ADD] frontmatter → {path}")
    return True

def main():
    dry = "--dry" in sys.argv
    changed = 0
    for p in DOCS_DIR.rglob("*.md"):
        # nechaj README.md mimo docs/ ak tam nemá ísť
        if ".git" in p.parts: 
            continue
        changed += 1 if process_file(p, dry=dry) else 0
    print(f"Done. Added FM to {changed} file(s).")

if __name__ == "__main__":
    main()