---
title: Release 2025/Q4 - testvejledning
layout: default
nav_order: -3
parent: Releases
---

# Efterårsrelease 2025 - Testvejledning

Denne testvejledning beskriver hvilke ændringer i OS2forms der er foretaget og hvad du som minimum bør teste i testfasen.

URL til testmiljø: [https://test.os2forms.dk/](https://test.os2forms.dk/)

Hvis du finder en fejl, så skal den meldes ind via denne formular: [https://forms.bellcom.dk/rapportering-af-fejl-i-os2forms-q425-release](https://forms.bellcom.dk/rapportering-af-fejl-i-os2forms-q425-release). Husk at jo bedre du beskriver fejlen (hvad gjorde du umiddelbart før, er det kun ved specielle forhold at den fejler mv.), jo nemmere har vi ved at genskabe fejlen og dermed få den rettet.

---

## [#196](https://github.com/OS2Forms/os2forms/issues/196): Diskussion og fastlæggelse af sikkerhedsopdateringer og løbende vedligehold

1. [**#200**](https://github.com/OS2Forms/os2forms/issues/200)**: Modulet "CKEditor 4 (contrib) (ckeditor)" bør erstattes (af "CKEditor 5 (ckeditor5)") da det er deprecated**

   * Testvejledning endnu ikke klar!

2. [**#205**](https://github.com/OS2Forms/os2forms/issues/205)**: Modulet "@fontyourface (fontyourface)" bør fjernes da brugerne afgiver cookies**

   * Modulet findes stadig på test.os2forms.dk, men er ikke installeret, så det kan ikke afgive cookies til 3. part. Der var kun tre anvendere der havde det installeret og de to af dem brugte det ikke i deres produktionsmiljøer. Det er svært for jer at teste, men I vil trods alt kunne se hvilken skrifttype der er standard skrifttypen i OS2forms med Custom Theme valgt som frontend tema.

## [#194](https://github.com/OS2Forms/os2forms/issues/194): Diskussion og fastlæggelse af udfasninger af moduler

1. [**#207**](https://github.com/OS2Forms/os2forms/issues/207)**: Verificer at moduler der ikke kompatibel med Drupal 10 kan udfases (15 stk.)**

   * Modulerne er fjernet. Det er svært at teste på noget der er fjernet, så vi kan ikke helt sige hvad I skal teste her - anden end at den generelle funktion i OS2forms virker som før de blev fjernet.

2. [**#209**](https://github.com/OS2Forms/os2forms/issues/209)**: Undersøg om moduler der ikke anvendes og ikke er omfattet af central vedligehold kan fjernes (17 stk.)**

   * Modulerne er fjernet. Det er svært at teste på noget der er fjernet, så vi kan ikke helt sige hvad I skal teste her - anden end at den generelle funktion i OS2forms virker som før de blev fjernet.

3. **Undersøg om moduler hvor brugeren afgiver cookies (noncompliant med GDPR) kan fjernes (6 stk.)**

   * Modulerne findes stadig på test.os2forms.dk, men er ikke installeret, så de kan ikke afgive cookies til 3. part. Der var kun tre anvendere der havde et af modulerne installeret og de to af dem brugte det ikke i deres produktionsmiljøer. Det er svært for jer at teste, men I vil trods alt kunne se hvilken skrifttype der er standard skrifttypen i OS2forms med Custom Theme valgt som frontend tema.

## [#210](https://github.com/OS2Forms/os2forms/issues/210): Diskussion og fastlæggelse af tilpasning af moduler

1. **Ændring af navne på elementerne der i dag indeholder navnet "NemID", da "NemID" ikke længere eksisterer. Ændringen må dog ikke få konsekvenser for eksisterende formularer/installationer. Nyt navn foreslås til "MitID"**

   * Elementerne har skiftet navn på test.os2forms.dk og der er udarbejdet en vejledning/dokumentation til hvordan det gøres her: [https://os2forms.github.io/os2forms-docs/docs/changing-element-names-from-NemID-to-MitID.html](https://os2forms.github.io/os2forms-docs/docs/changing-element-names-from-NemID-to-MitID.html)

2. **Modulet "OS2web nemlogin Automated Logout" bør som standard være aktiveret i en OS2forms installation**

   * Modulet er aktivt på test.os2forms.dk og er blevet aktiveret på alle kunder hos Bellcom - både i testmiljøer og i produktionsmiljøer.

3. [**#188**](https://github.com/OS2Forms/os2forms/issues/188)**: OS2forms sync modul not working**

   * På [https://test.os2forms.dk/da/admin/os2forms/sync/webform](https://test.os2forms.dk/da/admin/os2forms/sync/webform) kan man importere en enkelt simpel formular fra demo.os2forms.dk.

## [#197](https://github.com/OS2Forms/os2forms/issues/197): Diskussion og fastlæggelse af udvikling bestilt af OS2 fællesskabet

1. [**#206**](https://github.com/OS2Forms/os2forms/issues/206)**: Release af Digital Signatur**

   * Digital Signatur kan testes via denne formular: [https://test.os2forms.dk/da/form/bellcom-digital-signatur-test](https://test.os2forms.dk/da/form/bellcom-digital-signatur-test). Vores signaturserver er sat op til at benytte testmiljøet, hvorfor du ikke kan logge ind med dit eget MitID, men skal bruge fanen for “Test login”. Du kan se brugernavn og adgangskode til testpersonen i formularen.

2. [**#170**](https://github.com/OS2Forms/os2forms/issues/170)**: Implement MeMo1.2 compliance \[SFRMS-129]**

   * ITK's testvejledning findes her: [https://github.com/itk-dev/os2forms\_selvbetjening/wiki/Test-af-MeMo-1.2](https://github.com/itk-dev/os2forms_selvbetjening/wiki/Test-af-MeMo-1.2)

## [#198](https://github.com/OS2Forms/os2forms/issues/198): Diskussion og fastlæggelse af bidrag fra Aarhus Kommune/ITK

1. [**PR #101**](https://github.com/OS2Forms/os2forms/pull/101)**: Keys and encrypt**

   * Keyes handler om at der er kommet en konfigurationsmulighed i backenden ift. at opbevare certifikater eksternt: Under menupunktet i indstillinger der hedder ’nøgler’, kan man (admin) oprette en ny type nøgle, der passer til hashicorp keyvault – det er ikke noget men kan se i brugergrænsefladen. Det ændrer ikke eksisterende funktionalitet medmindre man ændrer indstillinger på modulerne, hvor dette er en mulighed. Det vil sige testen kan bestå i at koordinationsgruppen blot konstaterer at denne mulighed er til stede i den instans der testes på.
   * Ifølge ITK kan det encrypt ikke testes, da det ligger i databasen, som ikke kan ses fra brugergrænsefladen.

2. [**#183**](https://github.com/OS2Forms/os2forms/issues/183)**: Fix: Webform Auto Exports settings issue**

   Acceptkriterie: Når siteadmin klikker på "gem indstillinger" under "Automatisk export" skal indstillingerne gemmes, så systemet faktisk kan eksportere.
   ![Fix: Webform Auto Exports settings issue](https://raw.githubusercontent.com/OS2Forms/os2forms-docs/main/docs/assets/webform-auto-exports-settings-issue.png)

3. [**#186**](https://github.com/OS2Forms/os2forms/issues/186)**: Fix: Name- and address protection multiple submission saves issue**

   Acceptkriterie: CPR Børn modulet skal fungere hensigtsmæssigt ift. brugere med navne— og adressebeskyttelse, dvs. modulet skal referere til eksisterende korrekte filer, så der ikke optræder falske fejl i (error)log oversigten.

   * Testes med bruger der har navne og adressebeskyttelse. Test at systemet kan sende email til borger, og at der i log oversigt kun fremgår afsendelse af én email med status succesful -  ikke to, hvoraf den ene (altid) vil være fejlet.

4. [**#190**](https://github.com/OS2Forms/os2forms/issues/190)**: Fix: os2forms\_forloeb: Send Maestro notification handler exception handling when sending digital post**

   * Test: Hvis OS2forms får en fejl tilbage fra Digital Post (ifm. flow) bliver den aldrig skrevet i Advanced queue. Dette ved jeg ikke om forretningen selv kan teste, det kræver i al fald adgang til kø-systemet, og at testmiljøet simulerer en fejl i digital post eller at tester selv kan simulere dette.

5. [**#195**](https://github.com/OS2Forms/os2forms/issues/195)**: Fix: os2forms\_forloeb: Maestro notification attempts sending digital post that will never be delivered**

   Baggrund: Digital post, SF1601, kræver, at modtager-ID'et er cifret og enten 8 eller 10 af dem, afhængigt af om det er et CVR- eller CPR-nummer. Det er beskrevet på side 19 i "SF1601 Postkomponent - KombiPostAfsend - Feltbeskrivelse", som findes i KOMBITs komprimerede dokumentationspakke.  Derfor er bindestreger ikke tilladt i CPR-numre.
   OS2forms logs viser, at når OS2forms sender en anmodning til SF1601 (KombiPostAfsend) med en bindestreg, er:

      * Produktion: 200 ok - men de facto aldrig modtaget af slutbruger
      * Test: 400 forkert anmodning

   Dette håndteres utilsigtet under behandlingen af ​​job fra den normale Digital Post-håndterer ved at fjerne alle ikke-cifrede tegn, hvilket den eneste hensigt var at hjælpe med at opdage, om vi havde at gøre med CVR eller CPR.Det håndteres ikke (bevidst eller utilsigtet) under behandlingen af ​​Maestro-notifikationsjob. Det betyder, at tilfælde, hvor Maestro-meddelelser er blevet sendt med CPR-numre med bindestreg, aldrig vil være modtaget af slutbruger, på trods af at indsendelsesloggen hævder, at de er sendt. Dette er nu rettet, således CPR numre i Digital Post via Maestro, bliver normaliserede.
   OBS! ovenstående kan kun testes af forretningen såfremt digital post test er sat korrekt op til fjernprint.

   * Indsæt cpr nummer med bindestreg i maestro notifikation. Konstater at systemet kan sende digital post til pågældende borger.
   * Indsæt cpr nummer uden bindestreg i maestro notifikation. Konstater at systemet kan sende digital post til pågældende borger.

6. [**#218**](https://github.com/OS2Forms/os2forms/issues/218)**: Fix: MitId Children select missing a succesful check**

   Acceptkriterie: Som borger (forældre) ønsker jeg at jeg kan vælge et barn og derefter fravælge det, og fortsætte formularen, så jeg kan færdiggøre indsendelsen. 

   * Trin 1: indsæt et "MitID Children Select" element på flere formularer.
   * Trin 2: log ind som borger (forældre) og vælg et barn
   * Trin 3: vælg derefter "Ingen"
   * Trin 4: konstater at der ikke kommer nogen fejlmeddelelse og og data fra forrige sider på formularen IKKE forsvinder.

7. [**#219**](https://github.com/OS2Forms/os2forms/issues/219)**: Fix: Maestro notification handler ignores conditions (vilkår)**

   Acceptkriterie: Som flowdesigner ønsker jeg at kunne sætte vilkår på en Maestro notifikation, så borgeren kun får den notifikation, der er relevant.

   * Trin 1: opret et flow med 3 forskellige maestro notifications på formularen, som er vilkårsstyret af et radiobutton element.

8. [**#221**](https://github.com/OS2Forms/os2forms/issues/221)**: Fix: Maestro digital post-notification sender label is set incorrectly**

   Baggrund: Ifølge MaestroHelper::sendNotificationDigitalPost er både besked- og afsenderetiketten indstillet til det konfigurerede Maestro-notifikationsemne. Men faktisk bruges den konfigurerede afsenderetikette aldrig. Dette resulterer i, at modtagerne får digital post med samme afsender- og beskedetikette.

   * Kontroller at borger kan modtage en maestro notifikation med forskellig afsender og beskedertikette, som konfigureret under Maestro-notifikationsemne.   * 

9. [**#227**](https://github.com/OS2Forms/os2forms/issues/227)**: Conditionals based on computed twig broken in Drupal ^10.3**

   * Testvejledning endnu ikke klar!
