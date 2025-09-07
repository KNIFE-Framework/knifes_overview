# GitHub Deployment Strategie - Pre Zvedavých

Tento návod je určený pre študentov, ktorí chcú rýchlo a jednoducho nasadiť svoj projekt pomocou GitHubu.

## 3 kroky pre Branch Deploy (predvolené pre triedu)

1. **Vytvorte vetvu**  
   Vytvorte novú vetvu vo vašom repozitári, napríklad `deploy`.

2. **Pushnite zmeny**  
   Nahrajte svoje zmeny do tejto vetvy pomocou príkazu:
   ```
   git push origin deploy
   ```

3. **Skontrolujte nasadenie**  
   Po pushnutí zmeny sa automaticky spustí nasadenie a vaša stránka bude dostupná na GitHub Pages.

## 🔎 Porovnanie možností (jednoduché vysvetlenie)

|                     | 🌿 Branch Deploy          | ⚙️ Actions Deploy             | 🌐 Vlastná doména             |
|---------------------|--------------------------|------------------------------|------------------------------|
| **Jednoduchosť**     | 👍 Veľmi jednoduché       | 🤓 Trochu zložitejšie         | 😎 Nastavenie domény          |
| **Spoľahlivosť**     | ✅ Spoľahlivé             | ✅ Veľmi spoľahlivé           | ⚠️ Závisí od domény           |
| **Pre koho sa hodí** | 🧑‍🎓 Začiatočníci         | 👩‍💻 Pokročilejší používatelia | 🏠 Projekty s vlastnou značkou |
| **Vlastná doména**   | ❌ Nie                   | ❌ Nie                       | ✅ Áno                       |

---

## Pre zvedavých: Actions Deploy

Ak chcete mať väčšiu kontrolu nad nasadením, môžete použiť GitHub Actions. Tento spôsob umožňuje automatizovať nasadenie podľa vlastných potrieb a spúšťať ho napríklad pri každom pushi do hlavnej vetvy.

---

## Poznámka o vlastnej doméne (len pre projekty)

Ak máte projekt, ktorý chcete nasadiť na vlastnú doménu, môžete si ju nastaviť cez GitHub Pages v nastaveniach repozitára. Pre triedové projekty to nie je potrebné. Pri výbere názvu domény dodrž [naming konvenciu](./K067_NamingConventionPreDomeny.md) – nepoužívaj podtržník (`_`), iba písmená, čísla a pomlčky.
