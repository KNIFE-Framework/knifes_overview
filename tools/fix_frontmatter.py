#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
fix_frontmatter.py

By default, comments out any existing 'slug' line in MD frontmatter.
With --set-slug and --slug-val, writes a normal 'slug: "<value>"'.
Walks a root directory (default: docs) and rewrites files in-place,
unless --dry-run is used (in which case a unified diff is printed).

Usage:
  Run on the entire docs/ directory (recursively):
    python tools/fix_frontmatter.py --root docs

  Run on a single file:
    python tools/fix_frontmatter.py --file docs/sk/knifes/K067-github-deployment-strategie/index.md

  Preview changes without writing (dry run):
    python tools/fix_frontmatter.py --root docs --dry-run

  Activate slug line (write active slug instead of commented):
    python tools/fix_frontmatter.py --root docs --set-slug --slug-val "/knifes/K067-github-deployment-strategie"

Examples:
  python tools/fix_frontmatter.py --root docs
  python tools/fix_frontmatter.py --file docs/sk/knifes/K067-github-deployment-strategie/index.md --dry-run
  python tools/fix_frontmatter.py --root docs --set-slug --slug-val "/knifes/K067-github-deployment-strategie"
"""
from __future__ import annotations
import argparse
import difflib
from pathlib import Path
import re
import sys

FM_RE = re.compile(r"^---\n(.*?)\n---\n", re.DOTALL)

def parse_frontmatter(text: str):
  """
  Returns (data_dict, body, match_obj or None).
  Very lightweight YAML-like parser: 'key: value' (scalars) and '[a, b]' lists.
  Lines starting with '#' are ignored (comments).
  """
  m = FM_RE.match(text)
  if not m:
    return {}, text, None
  raw = m.group(1)
  body = text[m.end():]
  data = {}
  for line in raw.splitlines():
    s = line.strip()
    if not s or s.startswith("#") or ":" not in s:
      continue
    k, v = s.split(":", 1)
    k = k.strip()
    v = v.strip()
    # strip surrounding quotes
    if (len(v) >= 2 and ((v[0] == v[-1] == '"') or (v[0] == v[-1] == "'"))):
      v = v[1:-1]
    # very small support for inline list syntax: [a, b, c]
    if v.startswith("[") and v.endswith("]"):
      # keep as raw string list items (no deep YAML)
      items = [it.strip() for it in v[1:-1].split(",") if it.strip()]
      data[k] = items
    else:
      data[k] = v
  return data, body, m

def serialize_scalar(v: str) -> str:
  # Always quote scalars to be safe (colons, unicode, etc.)
  return f'"{v}"'

def build_fm_serialized(data: dict, set_slug: bool = False, slug_val: str = "") -> str:
  """
  Creates a frontmatter block where:
    - if key == slug:
        - if set_slug and slug_val -> writes active slug
        - else -> writes commented slug line
    - other keys are emitted; lists are written as [a, b] with quoted items
  """
  lines = ["---"]
  for k, v in data.items():
    if k == "slug":
      if set_slug and slug_val:
        lines.append(f'slug: {serialize_scalar(slug_val)}')
      else:
        # keep original value if present, but commented out
        v_str = serialize_scalar(v) if isinstance(v, str) else str(v)
        lines.append(f'# slug: {v_str}')
    else:
      if isinstance(v, list):
        items = ", ".join(serialize_scalar(it) for it in v)
        lines.append(f"{k}: [{items}]")
      else:
        lines.append(f"{k}: {serialize_scalar(v)}")
  lines.append("---\n")
  return "\n".join(lines)

def rewrite_text(text: str, set_slug: bool = False, slug_val: str = "") -> str:
  data, body, m = parse_frontmatter(text)
  if not data:
    return text  # no FM, leave unchanged
  new_fm = build_fm_serialized(data, set_slug=set_slug, slug_val=slug_val)
  return new_fm + body.lstrip("\n")

def process_file(path: Path, set_slug: bool = False, slug_val: str = "", dry_run: bool = False) -> bool:
  old = path.read_text(encoding="utf-8")
  new = rewrite_text(old, set_slug=set_slug, slug_val=slug_val)
  if new == old:
    return False
  if dry_run:
    rel = str(path)
    diff = difflib.unified_diff(
      old.splitlines(True),
      new.splitlines(True),
      fromfile=rel + " (old)",
      tofile=rel + " (new)",
      lineterm=""
    )
    sys.stdout.writelines(diff)
    if not str(new).endswith("\n"):
      print()  # ensure trailing newline in output
    return True
  else:
    path.write_text(new, encoding="utf-8")
    print(f"✔ Updated: {path}")
    return True

def iter_targets(root: Path, single_file: Path | None):
  if single_file:
    yield single_file
    return
  for ext in ("*.md", "*.mdx"):
    for p in root.rglob(ext):
      yield p

def main():
  ap = argparse.ArgumentParser(description="Frontmatter fixer: comment-out slug by default; optionally set active slug.")
  ap.add_argument("--root", default="docs", help="Root folder to scan (default: docs)")
  ap.add_argument("--file", help="Single file to process instead of walking the root")
  ap.add_argument("--set-slug", action="store_true", help="Write active slug instead of commented slug")
  ap.add_argument("--slug-val", default="", help="Slug value when --set-slug is used, e.g. /knifes/K067-github-deployment-strategie")
  ap.add_argument("--dry-run", action="store_true", help="Preview changes with a unified diff, do not write files")
  args = ap.parse_args()

  root = Path(args.root).resolve()
  single_file = Path(args.file).resolve() if args.file else None
  if single_file and not single_file.exists():
    print(f"❌ File not found: {single_file}", file=sys.stderr)
    sys.exit(2)
  if not single_file and not root.exists():
    print(f"❌ Root not found: {root}", file=sys.stderr)
    sys.exit(2)

  changed = 0
  for p in iter_targets(root, single_file):
    try:
      if process_file(p, set_slug=args.set_slug, slug_val=args.slug_val, dry_run=args.dry_run):
        changed += 1
    except Exception as e:
      print(f"⚠️  Skip {p}: {e}", file=sys.stderr)
  mode = "DRY-RUN" if args.dry_run else "WRITE"
  print(f"✅ Done ({mode}). Files changed: {changed}")

if __name__ == "__main__":
  main()