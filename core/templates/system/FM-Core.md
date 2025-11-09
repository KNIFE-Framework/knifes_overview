---
# 🧩 Versioning
# Účel: verzovanie a audit FM-Core alebo inštancie
fm_version: "1.0.1"             # verzia formátu FM
fm_build: "2025-11-09"          # dátum buildu / generovania
fm_version_comment: ""          # poznámka k verzii alebo zmene

# 🆔 Identity
# Jedinečné identifikátory entity
id: ""                          # systémové ID (napr. KNIFE_K000001)
guid: ""                        # globálne unikátne ID (UUID4)

# 🧭 Context
# Konceptuálny rámec a stručný opis
dao: ""                         # typ entity (knife, q12, sdlc, 7ds, thesei…)
title: ""                       # názov / titul príspevku
description: ""                 # krátky popis účelu alebo kontextu

# 👥 Authorship
# Autorské údaje a kolaborácia
author: ""                      # hlavný autor
authors: []                     # zoznam autorov alebo prispievateľov

# 🗂 Classification
# Kategorizácia obsahu
category: ""                    # nadradená téma
type: ""                        # typ príspevku (case, guide, tutorial…)
priority: ""                    # význam (low, medium, high)
tags: []                        # kľúčové tagy / heslá

# 🌍 Localization & Routing
# Jazykové verzie a cesty
locale: "sk"                    # jazyk (sk/en)
slug: ""                        # alternatívna URL / trvalý link

# 🕒 Lifecycle
# Stav vývoja a publikovania
created: ""                     # dátum vytvorenia
modified: ""                    # dátum poslednej úpravy
status: "backlog"               # stav (backlog, draft, inprogress, done)
privacy: "public"               # viditeľnosť (public, private, internal)

# ⚖️ Intellectual Property
# Autorské práva a licencia
rights_holder_content: ""       # vlastník obsahu (autor)
rights_holder_system: "CAA / KNIFE / LetItGrow"  # systémový držiteľ práv
license: "CC-BY-NC-SA-4.0"      # typ licencie
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2025 <autor>"     # copyrightový podpis

# 🔗 Provenance (Origin)
# Audit pôvodu zápisu
# -------------------------------------------------------------------
# origin_repo ............. názov repozitára, kde zápis vznikol
# origin_repo_url ......... URL zdroja
# origin_commit ........... commit hash
# origin_branch ........... branch / vetva
# origin_system ........... nadradený rámec (CAA, STHDF, LetItGrow…)
# origin_author ........... pôvodný autor zápisu
# origin_imported_from .... zdroj, ak importované
# origin_import_date ...... dátum importu
# -------------------------------------------------------------------
origin_repo: ""
origin_repo_url: ""
origin_commit: ""
origin_branch: ""
origin_system: "CAA"
origin_author: ""
origin_imported_from: ""
origin_import_date: ""

# 🧱 Reserved / Future use
fm_reserved1: ""
fm_reserved2: ""
---