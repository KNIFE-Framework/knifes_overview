---
id: k060-export-drawio-do-a4-png
title: "K060 – Export Draw.io diagramu do A4 PNG"
slug: /sk/knifes/k060-export-drawio-do-a4-png
sidebar_label: "K060 – Export Draw.io → A4 PNG"
tags: ["draw.io","diagrams.net","export","A4","PNG"]
---

**Category**: User Guide  
**Status**: done md  
**Type**: HowTo  
**Priority**: Medium  
**Date**: 2025-08-24

**Cieľ**: Ako pripraviť draw.io (diagrams.net) obrázok tak, aby sa **vždy** zmestil na **A4** a mal ostré PNG.

## 1) Plátno a mierka
- **File → Page Setup** → **Paper size**: `A4`, **Orientation**: podľa potreby.
- Zapni grid, rozumný spacing (napr. 10 px).

## 2) Okraje a “fit”
- **Page Setup → Print**: nastav **Margins** (10–15 mm).
- **Arrange → Layout → Auto size** vypni, ak chceš striktne držať A4.

## 3) Veľkosť prvkov a textu
- Text **12–14 pt** (menšie bude nečitateľné).
- Hrúbka čiar **1.5–2 px**; konektory **2 px**.

## 4) Export do PNG
- **File → Export as → PNG**:
  - **Crop**: zapnúť.
  - **Transparent Background**: voliteľne.
  - **Scale**: **2–3×** pre ostrý výsledok na A4.
  - **Use page size**: zapnúť (A4), kvalitu dolaď cez **Scale**.

## 5) Overenie
- Skontroluj drobné popisky na **100 %** priblížení.
- Ak sú mäkké, zvýš **Scale** o 0.5–1× a export zopakuj.

### Tipy
- Na PDF: **Export as → PDF** + **Vector**.
- Pre web (Pages/MkDocs): šírka ~**1200–1600 px**.

**Tags**: draw.io, diagrams.net, export, A4, PNG