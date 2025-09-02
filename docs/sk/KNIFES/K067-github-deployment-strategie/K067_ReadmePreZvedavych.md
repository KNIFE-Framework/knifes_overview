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

---

## Pre zvedavých: Actions Deploy

Ak chcete mať väčšiu kontrolu nad nasadením, môžete použiť GitHub Actions. Tento spôsob umožňuje automatizovať nasadenie podľa vlastných potrieb a spúšťať ho napríklad pri každom pushi do hlavnej vetvy.

---

## Poznámka o vlastnej doméne (len pre projekty)

Ak máte projekt, ktorý chcete nasadiť na vlastnú doménu, môžete si ju nastaviť cez GitHub Pages v nastaveniach repozitára. Pre triedové projekty to nie je potrebné.
