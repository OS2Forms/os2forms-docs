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

   * Estimat: 6 timer til Bellcom.

2. **[#246](https://github.com/OS2Forms/os2forms/issues/246): DAWA (Danmarks Adressers Web API) lukker ned pr. 1. juli 2026**

   * Denne opgave afventer pt. svar fra Klimadatastyrelsen omkring adgang til Adressevælgeren/API. Estimat/forundersøgelse på 8 timer er godkendt fra koordinationsgruppen og bliver faktureret i april 2026.
   * Estimat: 41 timer til Bellcom (udover de 8 timer der er brugt pr. 27/04-2026).

3. **[#248](https://github.com/OS2Forms/os2forms/issues/248): Ændringer på datafordeler.dk - fremover skal den moderniserede Datafordeler benyttes**

   * Denne opgave er godkendt, ITK har lavet Review. Bellcom sørger for at det kan komme med i denne release. Estimat på 72 timer til Bellcom er godkendt fra koordinationsgruppen.

4. **[#323](https://github.com/OS2Forms/os2forms/issues/323): Opgradering til Drupal 10.6.x**

   * Estimat: Er en del af den centrale vedligeholdelsesaftale, så intet estimat her.

5. **Diverse bug-fixes (pt. unreleased i Develop-branchen)**

   * Fjernpost virker ikke efter skifte fra PostNord til DAO
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

---

## Ikke inkluderet i denne release

   * [#243](https://github.com/OS2Forms/os2forms/issues/243): Integration til Fordelingskomponenten sf2900
   * [#247](https://github.com/OS2Forms/os2forms/issues/247): Opgradering til Drupal 11
   * [#254](https://github.com/OS2Forms/os2forms/issues/254): CPR udfases på den fælleskommunale infrastruktur: Datafordeleren tager over
   * Opdatering til Maestro 4.1.4
   * Defination af et Core theme / core font
   * Forundersøgelse omkring Digital Fuldmagt
   * Er OS2forms complient ift. Single Digital Gateway
   * Betalingsmodul

## Release kandidater (som ikke skal medtages jf. mail fra den 30/04-2026 fra Koordinationsgruppen)

1. **[#188](https://github.com/OS2Forms/os2forms/issues/188): OS2forms sync modul not working**

   * Estimat: 12 timer til Bellcom.

2. **[#201](https://github.com/OS2Forms/os2forms/issues/201): CPR-validator-elementet skal IKKE acceptere bindestreg i cpr numre**

   * Estimat: 4,5 timer til Bellcom.

3. **[#226](https://github.com/OS2Forms/os2forms/issues/226): Dependabot bør sættes op i OS2forms GitHub**

   * Estimat: 6 timer til Bellcom.

4. **[#237](https://github.com/OS2Forms/os2forms/issues/237): Vejledning i opsætning af Digital Post mod Serviceplatformenens testmiljø**

   * Estimat: 8 timer til Bellcom.

5. **[#244](https://github.com/OS2Forms/os2forms/issues/244): Non-installable dependencies due to non-updated modules**

   * Estimat: 12 timer til Bellcom.

6. **[#251](https://github.com/OS2Forms/os2forms/issues/251): Problem med afinstallation af "Webform Encrypt" og "OS2Forms Encrypt"**

   * Estimat: 3 timer til Bellcom.

7. **[#321](https://github.com/OS2Forms/os2forms/issues/321): SaveToFileWebformHandler**

   * Estimat: 3 timer til Bellcom.

## Afventende hotfixes (PR fra ITK, som mangler review mv.) (som ikke skal medtages jf. mail fra den 30/04-2026 fra Koordinationsgruppen)

* [#224](https://github.com/OS2Forms/os2forms/pull/224): Added custom list builder class for webform submissions

   * Opgaven ligger pt. ved ITK, som skal godkende de rettelser/ændringer vi fandt under review. Der er lavet review, som er afregnet. Der kommer derfor ikke yderligere fakturering fra Bellcom, med mindre at ITK vil have os til at lave et re-Review, når de har lavet de rettelser/ændringer vi fandt under Review.

* [#307](https://github.com/OS2Forms/os2forms/pull/307): Added proper entity access en preview routes

   * Estimat: 9 timer til Bellcom. Vores estimat er baseret på at vi opdaterer modulet i OS2forms' repository, så det benytter samme kode som ITK benytter.

* [#315](https://github.com/OS2Forms/os2forms/pull/315): Added “Display on“ options to Map element

   * Estimat: 2 timer til Bellcom.
