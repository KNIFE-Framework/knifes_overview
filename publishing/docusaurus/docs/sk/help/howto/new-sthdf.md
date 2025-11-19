---
title: HOWTO – Nová STHDF inštancia
---

# HOWTO – Ako vytvoriť novú STHDF inštanciu

## 1. Predpoklady

- pripravený class‑template repozitár,
- Makefile so zakomponovaným targetom `sthdf-new`,
- funkčný generátor `new_item_instance.py`,
- existujúca štruktúra `content/docs/sk/sthdf/`.

---

## 2. Najjednoduchší spôsob – Makefile

Používame v kurze ako hlavný spôsob.

```
make sthdf-new ID=STHDF_2025_ST_001 NAME="STHDF 2025 ST 001" LOCALE=sk
```

Výsledkom je automatické vytvorenie:
- vetvy **projects**: `STHDF_2025_ST_001 – projekty`,
- vetvy **students**: `STHDF_2025_ST_001 – študenti`,
- základných súborov (`index.md`) so správne vyplneným Front Matter.

---

# Nová STHDF inštancia z CLI

> Spúšťaj z rootu repozitára `knifes_overview-03`.

## 3. Python CLI (macOS / Linux)

```
python3 core/scripts/tools/new_item_instance.py \
  --type sthdf \
  --config config/sthdf/sthdf_instance_config.yml \
  --id STHDF_2025_ST_001 \
  --title "STHDF 2025 ST 001" \
  --exists fail
```

## 4. Python CLI (Windows / MSYS2)

```
python core/scripts/tools/new_item_instance.py ^
  --type sthdf ^
  --config config/sthdf/sthdf_instance_config.yml ^
  --id STHDF_2025_ST_001 ^
  --title "STHDF 2025 ST 001" ^
  --exists fail
```

> 🔁 ID aj názov si doplň podľa konkrétneho študenta.

---

## 5. Čo znamenajú parametre

### `--type sthdf`
Generujeme **celú STHDF inštanciu**: root + projects + students.

### `--config config/sthdf/sthdf_instance_config.yml`
Nastavenia šablón, cieľových priečinkov a metadát.

### `--id STHDF_2025_ST_001`
Identifikátor študenta/inštancie.
Štandardný formát:
```
STHDF_<ROK>_ST_<PORADOVÉ_ČÍSLO>
```
Príklady:
- `STHDF_2025_ST_001`
- `STHDF_2025_ST_023`

### `--title "STHDF 2025 ST 001"`
Ľudský názov pre UI.
Používa sa ako základ pre automatické vytvorenie:
- `STHDF 2025 ST 001 – projekty`
- `STHDF 2025 ST 001 – študenti`

### `--exists fail`
Politika pri existujúcich súboroch.
- `fail` – bezpečná voľba, nič neprepíše.
- môžeš použiť aj `replace` alebo `skip` (ak sú definované v Makefile).

---

## 6. Štruktúra po vygenerovaní

```
content/docs/sk/sthdf/2025/STHDF_2025_ST_001/
├── projects/
│   └── index.md   → title: "STHDF 2025 ST 001 – projekty"
└── students/
    └── index.md   → title: "STHDF 2025 ST 001 – študenti"
```

---

## 7. Čo doplniť ručne

- "About me" (A1),
- Knowledge Contribution (A2 → môže ísť aj do KNIFE),
- Project Summary,
- Project Outcomes.

---

## 8. Overenie

Po vygenerovaní spusti:

```
make dev
```

Skontroluj:
- či sa obe vetvy zobrazujú v sidebare,
- či majú správne titulky (`… – projekty`, `… – študenti`),
- či build prebieha bez chýb.

---

## 9. Tip

Ak študent robí viac projektov, pod `projects/` môže vytvoriť ďalšie podpriečinky podľa potreby. Generátor mu garantuje jednotný úvodný základ.
