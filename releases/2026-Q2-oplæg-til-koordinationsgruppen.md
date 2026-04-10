---
title: Release 2026/Q2
layout: default
nav_order: -2
parent: Releases
---

# Forårsrelease 2026 - oplæg til koordinationsgruppen

Overblik over forårsrelease til koordinationsgruppens videre arbejde.

**Milepæle:**

- 15.04.2026: Udkast til release-indhold præsenteres for koordinationsgruppen
- 22.04.2026: Release-indhold med estimater (inkl. evt. ændringer fra udkastet) er klar fra Bellcom
- 29.04.2026: Release-indhold skal senest være godkendt af koordinationsgruppen
- 20.05.2026: Releasen er klar fra Bellcoms side til koordinationsgruppens test
- 27.05.2026: Releasen er testet og accepteret af koordinationsgruppen
- 03.06.2026: Releasen er gennemført af Bellcom (merget til main branch)

---

## [#211](https://github.com/OS2Forms/os2forms/issues/211): Diskussion og fastlæggelse af forårsreleasen 2026

1. **[#200](https://github.com/OS2Forms/os2forms/issues/200): Modulet "CKEditor 4 (contrib) (ckeditor)" bør erstattes (af "CKEditor 5 (ckeditor5)") da det er deprecated**
2. **[#248](https://github.com/OS2Forms/os2forms/issues/248): Ændringer på datafordeler.dk - fremover skal den moderniserede Datafordeler benyttes**

   * Denne opgave er godkendt og afventer ITK's Review. Estimat på 72 timer er godkendt fra koordinationsgruppen.

3. **[#246](https://github.com/OS2Forms/os2forms/issues/246): DAWA (Danmarks Adressers Web API) lukker ned pr. 1. juli 2026**

   * Denne opgave afventer pt. svar fra Klimadatastyrelsen omkring adgang til Adressevælgeren/API. Estimat/forundersøgelse på 8 timer er godkendt fra koordinationsgruppen.

4. Diverse bug-fixes (pt. unreleased i Develop-branchen)

   * Update Digital Post handler error messages
   * Update README
   * Add address information to Digital Post shipments to ensure "fjernprint" can be sent
   * Add option to add return address to Digital Post shipments
   * Fix IP validation in digital signature file download (CIDR support)
   * Updated code analysis script
   * Made digital signature text placement configurable
   * Webform encrypt uninstall problem fix
   * Git actions check
   * Added required "Zoom control position" to map element

## Release kandidater

1. **[#201](https://github.com/OS2Forms/os2forms/issues/201): CPR-validator-elementet skal IKKE acceptere bindestreg i cpr numre**
2. **[#237](https://github.com/OS2Forms/os2forms/issues/237): Vejledning i opsætning af Digital Post mod Serviceplatformenens testmiljø**
3. **[#288](https://github.com/OS2Forms/os2forms/issues/288): Fjernpost virker ikke efter skifte fra PostNord til DAO**
4. **[#243](https://github.com/OS2Forms/os2forms/issues/243): Integration til Fordelingskomponenten sf2900**
5. **[#226](https://github.com/OS2Forms/os2forms/issues/226): Dependabot bør sættes op i OS2forms GitHub**

## Ikke inkluderet i denne release

   * [#247](https://github.com/OS2Forms/os2forms/issues/247): Opgradering til Drupal 11
   * [#254](https://github.com/OS2Forms/os2forms/issues/254): CPR udfases på den fælleskommunale infrastruktur: Datafordeleren tager over
   * Opdatering til Maestro 4.1.4
   * Defination af et Core theme / core font
   * Forundersøgelse omkring Digital Fuldmagt
   * Er OS2forms complient ift. Single Digital Gateway
   * Betalingsmodul
