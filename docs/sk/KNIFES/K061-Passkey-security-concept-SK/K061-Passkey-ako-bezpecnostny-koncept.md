# K061 – Passkey ako bezpečnostný koncept
**Category**: Security / Identity Management  
**Status**: draft  
**Type**: Concept / HowTo  
**Priority**: High  
**SFIA**: Level 3–4 – Information Security, Authentication – *Adaptive → Emerging*  
**Date**: 2025-08-27

---

## 🔑 Čo je Passkey
- Náhrada za heslá podľa štandardu **FIDO2 / WebAuthn**.
- Funguje cez **kryptografický pár (súkromný/verejný kľúč)** uložený v zariadení (Secure Enclave/TPM/YubiKey).
- Prihlásenie potvrdzuješ **biometricky** (Touch ID/Face ID) alebo **PINom** – nie je čo „prepisovať“ ako heslo.

---

## ⚙️ Ako to funguje (high-level)
1. **Registrácia**: server si uloží **verejný kľúč** používateľa.  
2. **Login**: server pošle **challenge** (náhodnú výzvu).  
3. **Podpis**: zariadenie podpíše výzvu **súkromným kľúčom** (odblokovaným biometriou/PIN).  
4. **Overenie**: server overí podpis **verejným kľúčom** a pustí ťa dnu.  
➡️ Žiadne heslo necestuje sieťou, nie je čo phishovať ani dumpnúť z DB.

---

## 🛡️ Bezpečnostné benefity
- **Bez hesla** → odolnosť voči **phishingu** a **keyloggerom**.  
- **Žiadne hashy v DB** → minimalizácia dopadov úniku dát.  
- **Viazanie na zariadenie** → útočník bez tvojho zariadenia (a biometrie) neprejde.

---

## 👤 UX & prax
- **Pohodlie**: Touch/Face ID, žiadne memorovanie.  
- **Fallback**: môžeš mať aj **klasické heslo** pre staršie appky (voliteľné).  
- **Prenositeľnosť**: synchronizácia passkeys (napr. iCloud Keychain, Google Password Manager) alebo hardvérový kľúč.

---

## ⚠️ Limity / riziká
- **Strata zariadenia** → potrebuješ **recovery** (druhé zariadenie, záložný kľúč, SMS/e-mail ako „account recovery“).  
- **Kompatibilita**: nie každá služba/appka je už na 100 % WebAuthn-ready.  
- **Migrácia ekosystémov** (Apple ↔ Google ↔ Windows) môže vyžadovať plán (export/import, druhý faktor).

---

## 🧭 Metafora
**„Heslo, ktoré neexistuje“** – identita sa nedokazuje znalosťou reťazca znakov, ale **vlastníctvom kľúča** + **potvrdením prítomnosti** (biometria).

---

## 🔬 Porovnanie (skratka)
- **Heslo**: niekde uložené (často zneužiteľné), prenosné iba v hlave/správcovi hesiel.  
- **Passkey**: kryptografia v zariadení, neprenosné ako text, signuješ výzvy.

---

## 🧩 Kedy zvoliť čo?
- **Korporát / vysoká bezpečnosť**: Passkey + hardvérový kľúč (YubiKey) + MDM politiky.  
- **Bežný používateľ**: Passkey + synchronizácia v ekosystéme + fallback heslo len ak treba.

---

## 📊 Schéma (Mermaid)
```mermaid
sequenceDiagram
    participant U as User
    participant D as Zariadenie (Passkey)
    participant S as Server

    U->>D: Odblokovanie (Touch ID / Face ID / PIN)
    S->>D: Challenge (výzva)
    D->>S: Podpísaná výzva (súkromný kľúč)
    S->>S: Overenie podpisu (verejný kľúč)
    S-->>U: Prihlásenie úspešné