---
title: Testvejledning
layout: default
nav_order: 2
parent: Release 2026/Q2
---

# Forårsrelease 2026 - Testvejledning

Denne testvejledning beskriver hvilke ændringer i OS2forms der er foretaget og hvad du som minimum bør teste i testfasen.

URL til testmiljø: [test.os2forms.dk](https://test.os2forms.dk/).
Hvis du ikke har en bruger til at kunne logge ind med, så kontakt Bellcom på [support@bellcom.dk](mailto:support@bellcom.dk).

Hvis du finder fejl på et af nedenstående ændringer, så skal du melde fejlen ind ved at lave en kommentar på det issue eller pull request, hvor du har fundet fejlen. På den måde kan alle nemlig se, hvad der er meldt ind - og vi har en historik i hvad der blev meldt ind. Husk at jo bedre du beskriver fejlen (hvad gjorde du umiddelbart før, er det kun ved specielle forhold at den fejler mv.), jo nemmere har vi ved at genskabe fejlen - og dermed få den rettet.

Når du har gennemført testen, så beder vi om at skrive en kommentar på [dette issue](https://github.com/OS2Forms/os2forms/issues/211), så vi ved at du har testet.

---

## [#211](https://github.com/OS2Forms/os2forms/issues/211): Diskussion og fastlæggelse af forårsreleasen 2026

1. **[#200](https://github.com/OS2Forms/os2forms/issues/200): Modulet "CKEditor 4 (contrib) (ckeditor)" bør erstattes (af "CKEditor 5 (ckeditor5)") da det er deprecated**

   * Modulet er fjernet fra OS2forms og erstattet med CKEditor 5. Der skal testes at de steder hvor I ser og bruger CKEditor 5 (se screenshot) stadig virker som det skal og at I kan bruge de funktioner som CKEditor 5 tilbyder (fed skrift, punktopstilling, links o.lign.).
![Fix: Test af CKEditor 5](https://raw.githubusercontent.com/OS2Forms/os2forms-docs/main/docs/assets/test-af-ckeditor-5.png)

2. **[#246](https://github.com/OS2Forms/os2forms/issues/246): DAWA (Danmarks Adressers Web API) lukker ned pr. 1. juli 2026**

   * På [https://test.os2forms.dk/da/admin/config/system/os2web-datalookup/datafordeler-address-lookup](https://test.os2forms.dk/da/admin/config/system/os2web-datalookup/datafordeler-address-lookup) kan I se at vi har oprettet et nyt konfigurationsside, hvor man kan indtaste den "token" som man skal bruge for at kunne benytte det nye API på adressevaelger.dk. Da Klimadatastyrelsen, som står bag det nye API, endnu ikke har brugerstyring på plads endnu, så skal alle der vil benytte API'et i første omgang bruge det samme API token (adressevaelger123). Klimadatastyrelsen forventer at have brugerstyring klar ultimo 2026 eller primo 2027 (8læs evt. mere om det her](https://confluence.sdfi.dk/display/ADV/Brugerstyring)).

   Det som du/I skal teste er den helt alm. brug af de to DAWA elementer "DAWA Address (autocomplete)" og "DAWA Address-Matrikula (autocomplete)". Elementet "DAWA Address (autocomplete)" består som før af ét felt, hvor man kan fremsøge en adresse og så kommer alle de valgmuligheder, som API'et retunerer. Elementet "DAWA Address-Matrikula (autocomplete)" består af to felter, også ligesom før. Ét felt hvor man kan skrive og vælge en adresse, som i "DAWA Address (autocomplete)", men når man så har valgt en adresse, så bliver der lavet et opslag på hvilke matrikler der findes på den pågældende adresse, som så kan vælges i felt nr. 2 (også helt som før).

   I det gamle API fra DAWA var det muligt at filtrere resultaterne til at være fra bestemte kommuner (altså også med mere end én kommune). I det nye API fra Klimadatastyrelsen er det også muligt, men det er begrænset til KUN at være én kommune, der kan filtres på. Hvis du vil begrænse resultaterne til en enkelt kommune, så skal du sætte kommunens ID ind i feltet "Limit by municipality". Her skal tallet sættes ind med 4 cifre, så det f.eks. er "0621" for Kolding og "0751" for Aarhus. Dette må I også meget gerne teste virker.

3. **[#248](https://github.com/OS2Forms/os2forms/issues/248): Ændringer på datafordeler.dk - fremover skal den moderniserede Datafordeler benyttes**

   * På [https://test.os2forms.dk/da/admin/config/system/os2web-datalookup/datafordeler-cvr](https://test.os2forms.dk/da/admin/config/system/os2web-datalookup/datafordeler-cvr) kan I se at API'et til opslag på CVR-numre er skiftet til Datafordelerens nye API. I kan teste det ved at sætte et CVR nummer ind i feltet "Test CVR nr." og så trykke på "Gem indstillinger", så vil siden lave et opslag på det indtastede CVR-nummer og komme med svaret fra API'et. I kan også teste ved at lave en formular der benytter et eller flere af "MitID Firma"-elementerne.

4. **[#251](https://github.com/OS2Forms/os2forms/issues/251): Problem med afinstallation af "Webform Encrypt" og "OS2Forms Encrypt"**

   * Teknisk opdatering. Kan kun testes af ITK og Bellcom.

5. **[#323](https://github.com/OS2Forms/os2forms/issues/323): Opgradering til Drupal 10.6.x**

   * [test.os2forms.dk](https://test.os2forms.dk/) er opdateret til Drupal 10.6.7. Da det er Drupal-kernen der er blevet opdateret, så er det lidt svært at sige hvad I skal teste - udover almen brug af Drupal og OS2forms testmiljøet i sin helhed.

6. **Diverse bug-fixes (pt. unreleased i Develop-branchen)**

   * [#288](https://github.com/OS2Forms/os2forms/issues/288): Fjernpost virker ikke efter skifte fra PostNord til DAO
        * Da Fjernpost ikke er opsat på test.os2forms.dk - og Bellcom bekendt kun bliver benyttet i Aarhus, så vil det kun være i Aarhus at dette kan testes.
   * [#PR-322](https://github.com/OS2Forms/os2forms/pull/322): Update Digital Post handler error messages
        * Efterspurgt testvejledning ved ITK.
   * [#PR-320](https://github.com/OS2Forms/os2forms/pull/320): Update README
        * Teknisk opdatering. Kan kun testes af ITK og Bellcom.
   * [#PR-301](https://github.com/OS2Forms/os2forms/pull/301): Add address information to Digital Post shipments to ensure "fjernprint" can be sent
        * Da Fjernpost ikke er opsat på test.os2forms.dk - og Bellcom bekendt kun bliver benyttet i Aarhus, så vil det kun være i Aarhus at dette kan testes.
   * Add option to add return address to Digital Post shipments
        * **Dette issue/fix kan kun testes på [test.os2forms.dk](https://test.os2forms.dk/), i det tidsrum, hvor test.os2forms.dk er sat til at hente CPR data fra Serviceplatformens prod. miljø og I vil derfor skulle sende Digital Post til jer selv for at kunne teste denne.** Vi sætter [test.os2forms.dk](https://test.os2forms.dk/) til at lave opslag med Serviceplatformens prod. miljø den 26/05-2026 ca. kl. 8.00 og slår retur til test-miljøet igen den 28/05-2026 ca. kl. 8.00, så I har 2 dage til at teste dette issue i.
        * Vi følger krav fra Digitaliseringsstyrelsen - [se krav her](https://raw.githubusercontent.com/OS2Forms/os2forms-docs/main/docs/assets/release-q2-2026-add-option-to-add-return-address-to-digital-post-shipments-krav-fra-digitaliseringsstyrelsen.pdf).
        * Forklaring af det udviklede kan ses [her](https://raw.githubusercontent.com/OS2Forms/os2forms-docs/main/docs/assets/release-q2-2026-add-option-to-add-return-address-to-digital-post-shipments-forklaring-af-det-udviklede.pdf).
        * Der er plads til 70 tegn jvf. DAOs anvisninger.
        * Det er op til selvbetjeningsdesigner hvordan returadressen angives, og om der skal angives en sådan.
        * Acceptkriterie: via Digital Post handler kan selvbetjeningsdesigner / formularbygger sætte returadressse på Digital Post attachment.
        * TEST:
             1. Verificer at adressen påsættes på OS2Forms Attachments (PDF'er) sendt gennem digital post .
             2. Verificer at adressen IKKE indsættes i OS2Forms Attachment i alle andre kontekster (Fasit-, GO-, API-handler) 
             3. Kontrollér at justeringer af marginer i PDF'en er ok
             4. Kontrollér at header, footer og kolofon ser ok ud
             5. Kontrollér at borgers CPR nummer IKKE fremgår af brevruden
             6. Korrekt placering af returadresse
   * [#PR-305](https://github.com/OS2Forms/os2forms/pull/305): Fix IP validation in digital signature file download (CIDR support)
        * Teknisk opdatering. Kan kun testes af ITK og Bellcom.
   * [#PR-317](https://github.com/OS2Forms/os2forms/pull/317): Updated code analysis script
        * Teknisk opdatering. Kan kun testes af ITK og Bellcom.
   * [#PR-306](https://github.com/OS2Forms/os2forms/pull/306): Made digital signature text placement configurable
        * Kan testes på en formular der benytter Digital Signatur (f.eks. [denne](https://test.os2forms.dk/da/admin/structure/webform/manage/bellcom_digital_signatur_test)), hvor man på OS2forms Attachment elementet nu kan styre, hvor man ønsker "Digital signature position".
   * [#251](https://github.com/OS2Forms/os2forms/issues/251): Webform encrypt uninstall problem fix
        * Teknisk opdatering. Kan kun testes af ITK og Bellcom.
   * Git actions check
        * Teknisk opdatering. Kan kun testes af ITK og Bellcom.
   * [#PR-289](https://github.com/OS2Forms/os2forms/pull/289): Added required "Zoom control position" to map element
        * Efterspurgt testvejledning ved ITK.
