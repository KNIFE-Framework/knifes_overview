#!/usr/bin/env python3
"""
Universal Instance Generator (7Ds / SDLC / KNIFE / THESEI)
Usage:
  make new-item-instance TYPE=sdlc NAME=integration TITLE="Integration Project"
"""

import argparse, os, shutil, datetime, uuid, sys, configparser, re

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

def create_instance(ftype, name, title, output_root):
    # Resolve type to template folder (handles knife/knifes) and normalized DAO
    tnorm = TEMPLATE_TYPE_ALIASES.get(ftype.lower(), ftype.lower())
    dao_val = DAO_TYPE_MAP.get(tnorm, tnorm)

    # Paths
    template_dir = f"core/templates/content/{tnorm}"
    fm_path = "core/templates/system/FM-Core.md"
    header_dir = os.path.join(template_dir, "header")
    body_dir = os.path.join(template_dir, "body")

    # Check template existence
    if not os.path.isdir(template_dir):
        print(f"❌ ERROR: Missing template for '{ftype}' → {template_dir}")
        sys.exit(1)
    if not os.path.isdir(body_dir):
        print(f"❌ ERROR: Missing body folder in {template_dir}")
        sys.exit(1)

    # Output directory
    dest = os.path.join(output_root, f"{dao_val}_{name}")
    os.makedirs(dest, exist_ok=True)

    # --- Read and enrich FM-Core ---
    fm = read_file(fm_path)
    if not fm:
        print(f"⚠️ Warning: FM-Core not found at {fm_path}")
    fm = (
        fm.replace("{{ID}}", f"{dao_val.upper()}_{name}")
        .replace("{{DAO}}", dao_val)
        .replace("{{TITLE}}", title)
        .replace("{{CREATED}}", datetime.date.today().isoformat())
        .replace("{{AUTHOR}}", os.getenv("USER", "author"))
        .replace("{{GUID}}", str(uuid.uuid4()))
        .replace("{{LOCALE}}", "sk")
        .replace("{{RIGHTS_HOLDER_SYSTEM}}", os.getenv("RIGHTS_HOLDER_SYSTEM", "CAA / KNIFE / LetItGrow"))
        .replace("{{LICENSE}}", os.getenv("LICENSE", "CC-BY-NC-SA-4.0"))
        .replace("{{ORIGIN_SYSTEM}}", os.getenv("ORIGIN_SYSTEM", "CAA"))
    )
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

    # --- Load user header (e.g. sdlc_user_header.md) ---
    header_files = [f for f in os.listdir(header_dir) if f.endswith(".md")] if os.path.exists(header_dir) else []
    header_content = ""
    if header_files:
        header_files.sort(key=lambda x: (x != 'user_header.md', x))
        chosen = header_files[0]
        header_content = read_file(os.path.join(header_dir, chosen))
        print(f"📄 Using header: {chosen}")
    else:
        print(f"ℹ️ No header found for '{ftype}', continuing without it.")

    # --- Provide generic header if template header is missing ---
    if not header_content:
        if dao_val == "knife":
            header_content = (
                "<!-- body:start -->\n\n"
                "<!-- nav:knifes -->\n"
                "> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)\n---\n"
                "# {{TITLE}}\n\n"
                "<!-- fm-visible: start -->\n"
                "> **GUID:** `{{GUID}}`\n"
                "> **Status:** `{{STATUS}}` · **Author:** {{AUTHOR}} · **License:** {{LICENSE}}\n"
                "<!-- fm-visible: end -->\n"
            )
        elif dao_val == "q12":
            header_content = (
                "<!-- body:start -->\n\n"
                "<!-- nav:q12 -->\n"
                "> [↩ Q12 – Navigácia](../Q12-Navigation.md) • [Štruktúra](../Q12-Structure.md)\n---\n"
                "# {{TITLE}}\n\n"
                "<!-- fm-visible: start -->\n"
                "> **GUID:** `{{GUID}}`\n"
                "> **Status:** `{{STATUS}}` · **Author:** {{AUTHOR}} · **License:** {{LICENSE}}\n"
                "<!-- fm-visible: end -->\n"
            )
        else:
            header_content = (
                "<!-- body:start -->\n\n"
                "# {{TITLE}}\n\n"
                "<!-- fm-visible: start -->\n"
                "> **GUID:** `{{GUID}}`\n"
                "> **Status:** `{{STATUS}}` · **Author:** {{AUTHOR}} · **License:** {{LICENSE}}\n"
                "<!-- fm-visible: end -->\n"
            )

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

    # --- Load body/index.md ---
    body_index = read_file(os.path.join(body_dir, "index.md"))
    if not body_index:
        print(f"⚠️ Missing body/index.md for {ftype}")

    # --- Compose final index.md ---
    index_content = f"{fm}\n\n{header_content}\n\n{body_index}\n"
    with open(os.path.join(dest, "index.md"), "w", encoding="utf-8") as f:
        f.write(index_content)

    # --- Copy body subfolders ---
    for item in os.listdir(body_dir):
        src = os.path.join(body_dir, item)
        dst = os.path.join(dest, item)
        if os.path.isdir(src):
            shutil.copytree(src, dst, dirs_exist_ok=True)

    print(f"✅ Instance created: {dao_val}_{name}")
    print(f"📁 Output → {dest}")

if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--type", required=True)
    p.add_argument("--name", required=True)
    p.add_argument("--title", required=True)
    p.add_argument("--output", required=True)
    args = p.parse_args()

    create_instance(args.type, args.name, args.title, args.output)