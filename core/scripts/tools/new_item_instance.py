#!/usr/bin/env python3
"""
Universal Instance Generator (7Ds / SDLC / KNIFE / THESEI)
Usage:
  make new-item-instance TYPE=sdlc NAME=integration TITLE="Integration Project"
"""

import argparse, os, shutil, datetime, uuid, sys, configparser, re
from pathlib import Path

FM_CORE_PATH = "core/templates/system/FM-Core.md"

# Map incoming --type to template folder (singular/plural) and to normalized DAO value
TEMPLATE_TYPE_ALIASES = {
    "knife": "knifes",
    "knifes": "knifes",
    "q12": "q12",
    "7ds": "7ds",
    "sdlc": "sdlc",
    "sthdf": "sthdf",
    "diploma-thesis": "diploma-thesis",
}

DAO_TYPE_MAP = {
    # template folder -> DAO value stored in FM
    "knifes": "knife",
    "q12": "q12",
    "7ds": "7ds",
    "sdlc": "sdlc",
    "sthdf": "sthdf",
    "diploma-thesis": "diploma-thesis",
}

HEADER_TEMPLATE_PATH = "core/templates/content/knifes/header/knife-user-header.md"
BODY_TEMPLATE_PATH = "core/templates/content/knifes/body/index.md"

def first_existing(*candidates: str) -> str:
    """
    Return first existing path from candidates or empty string if none exist.
    Paths are evaluated as-is (no glob). Useful for template fallbacks.
    """
    for c in candidates:
        if not c:
            continue
        p = Path(c)
        if p.exists():
            return str(p)
    return ""

def _get_git_origin_info(cwd: str):
    """Return (repo_name, repo_url_http, org_name) from .git/config or (None, None, None)."""
    cfg_path = os.path.join(cwd, ".git", "config")
    if not os.path.exists(cfg_path):
        return None, None, None
    cfg = configparser.ConfigParser()
    try:
        cfg.read(cfg_path)
    except Exception:
        return None, None, None
    url = None
    for section in cfg.sections():
        if section.startswith('remote "origin"'):
            url = cfg.get(section, "url", fallback=None)
            break
    if not url:
        return None, None, None
    # Normalize to https form if it's SSH (git@host:org/repo.git)
    repo_url_http = url.strip()
    m = re.match(r"git@([^:]+):([^/]+)/([^/]+)\.git$", repo_url_http)
    if m:
        host, org, repo = m.group(1), m.group(2), m.group(3)
        return repo, f"https://{host}/{org}/{repo}", org
    # Or already https form
    m = re.match(r"https?://[^/]+/([^/]+)/([^/]+)(?:\.git)?/?$", repo_url_http)
    if m:
        org, repo = m.group(1), m.group(2)
        if repo.endswith('.git'):
            repo = repo[:-4]
        if repo_url_http.endswith('.git'):
            repo_url_http = repo_url_http[:-4]
        return repo, repo_url_http, org
    return None, None, None

def _parse_fm_minimal(fm_text: str):
    """Minimal parser for Front Matter values used in user header templating.
    Extracts flat keys: title, guid, status, author, license. Works without PyYAML.
    """
    keys = {"title": "", "guid": "", "status": "", "author": "", "license": ""}
    if not fm_text:
        return keys
    lines = fm_text.splitlines()
    # try to find FM block between --- ... ---
    try:
        i1 = lines.index("---")
        i2 = lines.index("---", i1 + 1)
        fm_lines = lines[i1 + 1 : i2]
    except ValueError:
        fm_lines = lines
    def _clean(v: str) -> str:
        v = v.strip()
        if len(v) >= 2 and ((v[0] == v[-1] == '"') or (v[0] == v[-1] == "'")):
            v = v[1:-1]
        return v.strip()
    for ln in fm_lines:
        if ":" not in ln:
            continue
        k, v = ln.split(":", 1)
        k = k.strip().lower()
        v = _clean(v)
        if k in keys:
            keys[k] = v
    return keys

def read_file(path):
    """Read text file with UTF-8 encoding, return empty string if not found."""
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            return f.read().strip()
    return ""

def _fm_replace_scalar(fm_text: str, key: str, value: str) -> str:
    """
    Replace YAML scalar line `key: "..."` (or empty) with quoted value,
    keeping comments on separate lines intact.
    """
    pattern = rf'^({re.escape(key)}\s*:\s*)(?:"[^"]*"|\'[^\']*\'|.*)?$'
    repl    = rf'\1"{value}"'
    return re.sub(pattern, repl, fm_text, flags=re.MULTILINE)

def _render_fm_from_core(fm_text: str, *, dao_val: str, name: str, title: str, locale: str, author: str) -> str:
    """
    Take FM-Core.md content (with defaults like "") and inject dynamic values:
    id, guid, dao, title, locale, created, author, status.
    Leaves all other fields as-is.
    """
    # Safe defaults
    knife_id_like = name if name.startswith("K") else f"{dao_val.upper()}_{name}"
    guid_value    = str(uuid.uuid4())
    created_value = datetime.date.today().isoformat()
    status_value  = "draft"

    out = fm_text or ""
    # Required fields
    out = _fm_replace_scalar(out, "id", knife_id_like)
    out = _fm_replace_scalar(out, "guid", guid_value)
    out = _fm_replace_scalar(out, "dao", dao_val)
    out = _fm_replace_scalar(out, "title", title or knife_id_like)
    out = _fm_replace_scalar(out, "locale", locale or "sk")
    out = _fm_replace_scalar(out, "created", created_value)
    out = _fm_replace_scalar(out, "status", status_value)
    if not author:
        author = os.getenv("USER", "author")
    if author:
        out = _fm_replace_scalar(out, "author", author)
    return out

def create_instance(ftype, name, title, output_root):
    # Resolve type to template folder (handles knife/knifes) and normalized DAO
    tnorm = TEMPLATE_TYPE_ALIASES.get(ftype.lower(), ftype.lower())
    dao_val = DAO_TYPE_MAP.get(tnorm, tnorm)

    # Paths
    template_dir = f"core/templates/content/{tnorm}"

    # Check template existence (strict for new v5.1 paths)
    if not os.path.exists(HEADER_TEMPLATE_PATH):
        print(f"❌ Missing header template: {HEADER_TEMPLATE_PATH}")
        sys.exit(1)
    if not os.path.exists(BODY_TEMPLATE_PATH):
        print(f"❌ Missing body template: {BODY_TEMPLATE_PATH}")
        sys.exit(1)

    # Output directory
    dest = os.path.join(output_root, f"{dao_val}_{name}")
    os.makedirs(dest, exist_ok=True)

    # --- Read and enrich FM-Core ---
    fm_raw = read_file(FM_CORE_PATH)
    if not fm_raw:
        print(f"⚠️ Warning: FM-Core not found at {FM_CORE_PATH}")
    locale = "sk"
    author = os.getenv("USER", "author")
    fm = _render_fm_from_core(fm_raw, dao_val=dao_val, name=name, title=title, locale=locale, author=author)
    print("🧩 FM injected: id/dao/title/guid/created/status/author")

    # Try to enrich Provenance from .git/config
    repo_name, repo_url, org_name = _get_git_origin_info(os.getcwd())
    if repo_name:
        fm = fm.replace('origin_repo: ""', f'origin_repo: "{repo_name}"')
    if repo_url:
        fm = fm.replace('origin_repo_url: ""', f'origin_repo_url: "{repo_url}"')
    # Fill origin_system if empty in FM (prefer org from Git, otherwise keep already-set value)
    if org_name:
        fm = fm.replace('origin_system: ""', f'origin_system: "{org_name}"')
    fmd = _parse_fm_minimal(fm)

    # --- Load user header ---
    header_content = read_file(HEADER_TEMPLATE_PATH)
    print(f"📄 Using header: {HEADER_TEMPLATE_PATH}")

    # --- Load body ---
    body_content = read_file(BODY_TEMPLATE_PATH)
    print(f"📄 Using body:   {BODY_TEMPLATE_PATH}")

    # --- Apply templating placeholders in user header, if present ---
    if header_content:
        def _val(k, default=""):
            v = fmd.get(k, "") if isinstance(fmd, dict) else ""
            return v or default
        header_content = (
            header_content
            .replace("{{TITLE}}",  _val("title", title))
            .replace("{{GUID}}",   _val("guid"))
            .replace("{{STATUS}}", _val("status"))
            .replace("{{AUTHOR}}", _val("author", os.getenv("USER", "author")))
            .replace("{{LICENSE}}",_val("license"))
        )

    # --- Compose final index.md ---
    if 'id: ""' in fm:
        fm = _fm_replace_scalar(fm, "id", f"{dao_val.upper()}_{name}")
    index_content = f"{fm}\n\n{header_content}\n\n{body_content}\n"
    with open(os.path.join(dest, "index.md"), "w", encoding="utf-8") as f:
        f.write(index_content)

    # --- Copy body subfolders ---
    body_dir = os.path.dirname(BODY_TEMPLATE_PATH)
    if os.path.isdir(body_dir):
        for item in os.listdir(body_dir):
            src = os.path.join(body_dir, item)
            dst = os.path.join(dest, item)
            if os.path.isdir(src):
                shutil.copytree(src, dst, dirs_exist_ok=True)

    print(f"✅ Instance created: {dao_val}_{name}")
    print(f"📁 Output → {dest}")
    print(f"🆔 ID used: {dao_val.upper()}_{name}")

if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--type", required=True)
    p.add_argument("--name", required=True)
    p.add_argument("--title", required=True)
    p.add_argument("--output", required=True)
    args = p.parse_args()

    create_instance(args.type, args.name, args.title, args.output)