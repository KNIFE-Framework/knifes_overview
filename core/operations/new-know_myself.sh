#!/usr/bin/env sh
# Vytvorí novú know_myself inštanciu – test

set -e

python3 core/scripts/tools/new_item_instance.py \
  --type know_myself \
  --config config/know_myself/know_myself_config.yml \
  --id KMy2000101 \
  --name "KMy2000101-NOVÝ PRÍBEH" \
  --title "CKO-Onboarding " \
  --exists replace