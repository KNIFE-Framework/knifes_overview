# Getting Started with GA4 + GTM

**Author:** Roman Kazička  
**Date:** 2025-08-24  
**Context:** Úvod do prepojenia Google Analytics 4 (GA4) a Google Tag Manager (GTM)

---

## 1. Základná logika

- **GA4** = miesto, kde sa zbierajú a zobrazujú dáta (reporty, metriky).  
- **GTM** = manažér značiek, ktorý **rozhoduje čo, kedy a kam sa odošle**.  
- **Web / app** = zdroj udalostí (klik, zobrazenie stránky, nákup, …).  

---

## 2. Prečo GTM šetrí úsilie

Bez GTM by si musel:  
- do kódu webu vkladať GA4 merací skript,  
- manuálne dopĺňať kódy pre každý nový event (klik na tlačidlo, stiahnutie PDF),  
- v prípade zmien vždy prepisovať zdrojový kód webu.  

S GTM:  
- na web vložíš **len 1x kontajnerový kód (gtm-XXXXXX)**,  
- všetky ďalšie nastavenia (eventy, pixely, custom metriky) robíš v **GTM rozhraní**,  
- zmeny sa nasadzujú **centrálne z GTM** (netreba editovať webový kód).  

---

## 3. Ako GTM vie *kam* posielať dáta

- V GTM vytvoríš **Tag typu GA4 Configuration**.  
- Do neho vložíš **Measurement ID** z konkrétneho GA4 Data Streamu (napr. G-ABC123).  
- Všetky ostatné **GA4 Event Tags** sa odkazujú na túto konfiguráciu.  
- Takto GTM „vie“, že má posielať dáta do konkrétnej GA4 Property → konkrétneho Streamu.  

---

## 4. Oprávnenia a prepojenie

- **GA4 Property**: prístup cez Admin → *Správa prístupu k účtu / property*.  
- **GTM Container**: prístup cez Admin → *User Management*.  
- Najjednoduchšie: použi rovnaký Google účet (`roman.kazicka@systemthinking.xyz`) ako **Admin v GA4 aj v GTM**.  
- Potom GTM môžeš bezpečne nastaviť, a ostatným užívateľom prideliť nižšie role (Viewer, Editor).  

---

## 5. Typický Getting Started postup

1. **Vytvor GA4 Account a Property**  
   - napr. `SystemThinking.sk` → Property: `Class_STHDF`  
   - vytvor Web Data Stream → dostaneš Measurement ID (G-XXXXXXX)  

2. **Vytvor GTM Container**  
   - Názov: `Class_STHDF`  
   - Platforma: Web  
   - GTM ti vygeneruje kód (`<script>` s gtm-XXXXXXX), vlož ho na web do `<head>`.  

3. **Prepoj GA4 a GTM**  
   - V GTM vytvor nový Tag → *GA4 Configuration*  
   - vlož Measurement ID (G-XXXXXXX) z Data Streamu  
   - Trigger: *All Pages*  
   - Publikuj  

4. **Pridaj Eventy**  
   - Napr. klik na tlačidlo „Registrácia“  
   - GTM → Tag: *GA4 Event* → Event Name: `registration_click`  
   - Trigger: klik na element (CSS selector alebo ID tlačidla)  
   - Publikuj  

5. **Otestuj v Preview Mode**  
   - GTM má *Preview* mód (Tag Assistant) → vidíš, čo sa odosiela  
   - Skontroluj v GA4 → DebugView (reálne prichádzajú eventy).  

---

## 6. ASCII Diagram

```plaintext
User action (klik, scroll, form)
         │
         ▼
 Google Tag Manager (gtm-XXXXXXX)
    ├── Tag: GA4 Configuration (G-XXXXXXX)
    └── Tag: GA4 Event (custom events)
         │
         ▼
 Google Analytics 4 Property (Class_STHDF)
    └── Data Stream: Web
```
## 6. Draw.io Diagram
---
[ga4_gtm_hierarchy_links.drawio](./ga4_gtm_hierarchy_links.drawio)
![ga4_gtm_hierarchy_links.png](./ga4_gtm_hierarchy_links.png)


## 🎯 Odporúčanie pre teba

- **Account**: SystemThinking  
- **Properties**: podľa projektov (Class_STHDF, LetItGrow, KNIFE…)  
- **Streams**: Web, neskôr iOS/Android  
- **GTM**: 1x kontajner na každý projekt (Property)  
- **Prístup**: rovnaký firemný Google účet (`roman.kazicka@systemthinking.xyz`) pre GA4 aj GTM
