#!/usr/bin/env python3
"""
Universal Instance Generator (7Ds / SDLC / KNIFE / THESEI)
Usage:
  make instance-new TYPE=thesei NAME=roman_kazicka TITLE="Diploma Thesis"
"""
import argparse, os, shutil, datetime, sys

def read(path):
    return open(path, "r", encoding="utf-8").read().strip() if os.path.exists(path) else ""

def create_instance(ftype, name, title, output_root):
    template_dir = f"core/templates/content/{ftype}"
    fm_path = "core/templates/system/FM-Core.md"
    header_dir = os.path.join(template_dir, "header")
    body_dir = os.path.join(template_dir, "body")

    # 🔍 Kontrola, či šablóna existuje
    if not os.path.isdir(template_dir):
        print(f"❌ ERROR: Missing template for framework '{ftype}' at {template_dir}")
        sys.exit(1)
    if not os.path.isdir(body_dir):
        print(f"❌ ERROR: Missing body folder for '{ftype}' template at {body_dir}")
        sys.exit(1)
    if not os.path.isdir(header_dir):
        print(f"❌ ERROR: Missing header folder for '{ftype}' template at {header_dir}")
        sys.exit(1)

    dest = os.path.join(output_root, f"{ftype}_{name}")
    os.makedirs(dest, exist_ok=True)

    # 🧱 Vygeneruj FM + header + body
    fm = read(fm_path)
    fm = (
        fm.replace("{{DAO}}", ftype)
        .replace("{{TITLE}}", title)
        .replace("{{DATE}}", datetime.date.today().isoformat())
        .replace("{{ID}}", f"{ftype.upper()}_{name}")
    )

    # ➕ Metadáta pre theses (alebo iné typy)
    if ftype == "thesei":
        fm += (
            "\n# 🧾 THESEI METADATA\n"
            "author: \n"
            "supervisor: \n"
            "university: \n"
            "faculty: \n"
            "year: \n"
        )

    header_files = [f for f in os.listdir(header_dir) if f.endswith(".md")]
    header = read(os.path.join(header_dir, header_files[0])) if header_files else ""
    body_main = read(os.path.join(body_dir, "index.md"))

    index_content = f"{fm}\n\n{header}\n\n{body_main}\n"

    with open(os.path.join(dest, "index.md"), "w", encoding="utf-8") as f:
        f.write(index_content)

    # 📂 Kopírovanie štruktúry z body/
    for item in os.listdir(body_dir):
        src = os.path.join(body_dir, item)
        dst = os.path.join(dest, item)
        if os.path.isdir(src):
            shutil.copytree(src, dst, dirs_exist_ok=True)

    print(f"✅ Instance created: {ftype}_{name}")
    print(f"📁 → {dest}")

if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--type", required=True)
    p.add_argument("--name", required=True)
    p.add_argument("--title", required=True)
    p.add_argument("--output", required=True)
    a = p.parse_args()

    create_instance(a.type, a.name, a.title, a.output)