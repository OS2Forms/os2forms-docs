---
title: Release 2025/Q4 - testresultater
layout: default
nav_order: -4
parent: Releases
---

# Efterårsrelease 2025 - Testresultater

**Milepæle - revideret 17.10.2025:**

- 15.09.2025: Releasen er klart defineret, dokumenteret og estimeret
- 01.10.2025: Releasen blev godkendt af koordinationsgruppen (forsinket 2 arbejdsdage)
- 28.10.2025: Releasen er klar til test (forsinket 5 arbejdsdage)
- 29.10.2025: Kickoff på test/Virtuel møde med Bellcom kl. 10.00 – 11.00
- 14.11.2025: Releasen er testet og accepteret (udskudt 4 arbejdsdage)
- 20.11.2025: Releasen er gennemført (merget til main branch)  (udskudt 3 arbejdsdage)

---

## [#196](https://github.com/OS2Forms/os2forms/issues/196): Diskussion og fastlæggelse af sikkerhedsopdateringer og løbende vedligehold

1. [**#200**](https://github.com/OS2Forms/os2forms/issues/200)**: Modulet "CKEditor 4 (contrib) (ckeditor)" bør erstattes (af "CKEditor 5 (ckeditor5)") da det er deprecated**

   * Det blev besluttet på "Kickoff på test" at denne udgår af denne release og flyttes til næste release.

2. [**#205**](https://github.com/OS2Forms/os2forms/issues/205)**: Modulet "@fontyourface (fontyourface)" bør fjernes da brugerne afgiver cookies**

   * Testet og godkendt af følgende: Holstebro.

## [#194](https://github.com/OS2Forms/os2forms/issues/194): Diskussion og fastlæggelse af udfasninger af moduler

1. [**#207**](https://github.com/OS2Forms/os2forms/issues/207)**: Verificer at moduler der ikke kompatibel med Drupal 10 kan udfases (15 stk.)**

   * Testet og godkendt af følgende: Holstebro og Rebild.

2. [**#209**](https://github.com/OS2Forms/os2forms/issues/209)**: Undersøg om moduler der ikke anvendes og ikke er omfattet af central vedligehold kan fjernes (17 stk.)**

   * Testet og godkendt af følgende: Holstebro og Rebild.

3. **Undersøg om moduler hvor brugeren afgiver cookies (noncompliant med GDPR) kan fjernes (6 stk.)**

   * Testet og godkendt af følgende: Holstebro.

## [#210](https://github.com/OS2Forms/os2forms/issues/210): Diskussion og fastlæggelse af tilpasning af moduler

1. **Ændring af navne på elementerne der i dag indeholder navnet "NemID", da "NemID" ikke længere eksisterer. Ændringen må dog ikke få konsekvenser for eksisterende formularer/installationer. Nyt navn foreslås til "MitID"**

   * Testet og godkendt af følgende: Hillerød og Holstebro.

2. **Modulet "OS2web nemlogin Automated Logout" bør som standard være aktiveret i en OS2forms installation**

   * Testet og godkendt af følgende: Hillerød og Holstebro.

3. [**#188**](https://github.com/OS2Forms/os2forms/issues/188)**: OS2forms sync modul not working**

   * Testet af følgende: Holstebro (ikke godkendt). ITK melder retur til mig at de ikke får den fejl, som vi gør, så det tyder på en opsætning i vores testmiljø. Dette skal jeg selvfølgelig have undersøgt og hvis der er tale om kodefejl, tænker jeg at det skal løses via et quickfix, efter release. Jeg tænker nemlig at der vil påløbe mere tid med at fjerne koden fra dette issue inden release end at det tager at lave et fix efterfølgende.

## [#197](https://github.com/OS2Forms/os2forms/issues/197): Diskussion og fastlæggelse af udvikling bestilt af OS2 fællesskabet

1. [**#206**](https://github.com/OS2Forms/os2forms/issues/206)**: Release af Digital Signatur**

   * Testet og godkendt af følgende: Hillerød og Holstebro. Testet af følgende: Rebild (ikke godkendt). Der var en fejl i starten af testperioden som blev fikset, og Rebild blev bedt om at teste igen. Vi har ikke hørt mere fra dem siden, men Hillerød og Holstebro har efterfølgende godkendt det.

2. [**#170**](https://github.com/OS2Forms/os2forms/issues/170)**: Implement MeMo1.2 compliance \[SFRMS-129]**

   * Testet og godkendt af følgende: Hillerød og Holstebro.

## [#198](https://github.com/OS2Forms/os2forms/issues/198): Diskussion og fastlæggelse af bidrag fra Aarhus Kommune/ITK

1. [**PR #101**](https://github.com/OS2Forms/os2forms/pull/101)**: Keys and encrypt**

   * Da det er i databasen, så kan Koordinationsgruppen ikke teste dette. Århus kører allerede med dette på egne miljøer, mens der ikke er nogle kunder hos Bellcom der kører med det. Bellcom tester det i eget miljø efter release og evt. justeringer tages med ITK via PR/Hotfix.

2. [**#183**](https://github.com/OS2Forms/os2forms/issues/183)**: Fix: Webform Auto Exports settings issue**

   * Ingen tilbagemeldinger på dette issue. Bellcom har dog selv testet det og ikke fundet fejl.

3. [**#186**](https://github.com/OS2Forms/os2forms/issues/186)**: Fix: Name- and address protection multiple submission saves issue**

   * Testet og godkendt af følgende: Hillerød.

4. [**#190**](https://github.com/OS2Forms/os2forms/issues/190)**: Fix: os2forms\_forloeb: Send Maestro notification handler exception handling when sending digital post**

   * Testet og godkendt af følgende: Ballerup og Hillerød.

5. [**#195**](https://github.com/OS2Forms/os2forms/issues/195)**: Fix: os2forms\_forloeb: Maestro notification attempts sending digital post that will never be delivered**

   * Testet og godkendt af følgende: Hillerød og Holstebro.

6. [**#218**](https://github.com/OS2Forms/os2forms/issues/218)**: Fix: MitId Children select missing a succesful check**

   * Testet og godkendt af følgende: Ballerup, Hillerød og Holstebro.

7. [**#219**](https://github.com/OS2Forms/os2forms/issues/219)**: Fix: Maestro notification handler ignores conditions (vilkår)**

   * Testet og godkendt af følgende: Ballerup og Hillerød.

8. [**#221**](https://github.com/OS2Forms/os2forms/issues/221)**: Fix: Maestro digital post-notification sender label is set incorrectly**

   * Testet og godkendt af følgende: Ballerup og Hillerød. 

9. [**#227**](https://github.com/OS2Forms/os2forms/issues/227)**: Conditionals based on computed twig broken in Drupal ^10.3**

   * Testet og godkendt af følgende: Hillerød.

