# Google Account vs Google Workspace

**Author:** Roman Kazička  
**Date:** 2025-08-21  
**Context:** Firemný e-mail `roman.kazicka@systemthinking.xyz` bez Google Workspace (solo use)

---

## 🔑 Firemný účet s vlastnou doménou vs Workspace

- Google ti umožní použiť **firemnú adresu** (napr. `roman.kazicka@systemthinking.xyz`) ako **login do Google služieb** bez toho, aby si mal Google Workspace.  
  - Pri zakladaní účtu vyberieš možnosť **„Na osobné použitie“**.  
  - Vtedy je to **osobný Google účet**, ktorý má login na vlastnej doméne.
  -   
 *UPOZORNENIE*
 
 Preni sa do INKOGNITO reýimu, aby sa to dal použiť vlastný účet
  
  - Funguje vo všetkých službách (Analytics, Tag Manager, Ads, YouTube, Drive).  
  - Účet patrí **individuálne tebe**, nie organizácii.

- Google Workspace je platená služba, kde sa firemná doména pripojí do **admin konzoly** a každý používateľ má svoj účet spravovaný firmou.  
  - Účty sú vlastníctvom organizácie.  
  - Výhodné pri tímoch a väčšom počte používateľov.  
  - Zahŕňa Gmail na vlastnej doméne, firemný Drive a správu prístupov.

➡️ **Záver:**  
Na solo použitie nepotrebuješ Workspace. Stačí vytvoriť **osobný Google účet s loginom `roman.kazicka@systemthinking.xyz`** a použiť ho na všetky Google služby.  

---

## 🗂️ Diagram vzťahov


Google Account (Identita)
│
├── roman.kazicka@systemthinking.xyz   ← Osobný Google účet s vlastnou doménou
│   │
│   ├── Google služby (Analytics, Tag Manager, Ads, YouTube, Drive, ...)
│   │
│   └── Pridaní používatelia (napr. osobný Gmail ako záložný admin)
│
└── Google Workspace (ak by bol použitý)
    ├── Centrálna správa účtov
    ├── Firemný Gmail a Drive
    └── Účty vlastnené organizáciou



📊 Porovnanie: Osobný Google účet vs Workspace
| Kritérium | Osobný Google účet (aj s vlastnou doménou) | Google Workspace (firemný účet) |
|-----------|--------------------------------------------|----------------------------------|
| **Cena** | ✅ Zadarmo | 💲 cca 5–12 €/mesačne / používateľ |
| **Identita** | Účet patrí konkrétnej osobe (napr. `roman.kazicka@systemthinking.xyz`) | Účty spravuje firma (napr. `meno@systemthinking.xyz`), vlastnené organizáciou |
| **Použitie služieb (GA4, GTM, Ads, Drive, YouTube...)** | Funguje rovnako – žiadne obmedzenie | Funguje rovnako – navyše možnosť firemného vlastníctva |
| **Gmail s doménou** | ❌ Nie (musíš používať vlastného mail providera) | ✅ Áno, Gmail priamo pre @systemthinking.xyz |
| **Drive/Docs** | Len individuálny priestor | Firemný Drive, zdieľané priečinky, centrálna správa |
| **Správa používateľov** | Nie je – každý účet si spravuje vlastník sám | Centrálna admin konzola (pridávanie/mazanie účtov, nastavenie hesiel, 2FA, prístupové politiky) |
| **Bezpečnosť** | Individuálne nastavenia | Firemné politiky (povinná 2FA, kontrola zariadení, audity) |
| **Škálovanie (viac ľudí)** | Nevhodné | Optimálne pre tímy |
| **Vlastníctvo účtov** | Účet patrí osobe | Účty patria firme |
| **Typické použitie** | Freelance, solo projekty | Firmy, školy, agentúry |

# Google Accounts Flowchart

**Author:** Roman Kazička  
**Date:** 2025-08-21  
**Context:** Rozdelenie použitia osobného a firemného Google účtu

---

## 📊 Decision Flowchart
# Google Accounts Flowchart

**Author:** Roman Kazička  
**Date:** 2025-08-21  
**Context:** Rozdelenie použitia osobného a firemného Google účtu

---

## 📊 Decision Flowchart

```plaintext
                 [Potrebujem účet pre...]
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   Osobné veci        Firemné služby     Neviem / zmiešané
 (Android, Fotky,    (Analytics, Ads,     (napr. Drive,
  YouTube, rodina)    GTM, GitHub CI,      projekty)
                        KNIFE, projekty)
        │                  │                  │
        ▼                  ▼                  ▼
 Použi účet:         Použi účet:          Pýtaj sa:
 systemthinking.xyz  roman.kazicka@       "Je to bližšie
 @google.com         systemthinking.xyz   k OSOBNÉMU alebo
                                          FIREMNÉMU?"
                                          │
                                          ▼
                          Rozdeľ podľa účelu (NEmiešaj)


[GA4 vs GTM- Koncepčný diagram](./img/ga4_gtm_parallel_links.png)