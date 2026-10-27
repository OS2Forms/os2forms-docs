---
title: Testvejledning
layout: default
nav_order: 2
parent: Release 2026/Q4
---

# Efterårsrelease 2026 - Testvejledning

Denne testvejledning beskriver hvilke ændringer i OS2forms der er foretaget og hvad du som minimum bør teste i testfasen.

URL til testmiljø: [test.os2forms.dk](https://test.os2forms.dk/).
Hvis du ikke har en bruger til at kunne logge ind med, så kontakt Bellcom på [support@bellcom.dk](mailto:support@bellcom.dk).

Hvis du finder fejl på et af nedenstående ændringer, så skal du melde fejlen ind ved at lave en kommentar på det issue, hvor du har fundet fejlen. På den måde kan alle nemlig se, hvad der er meldt ind - og vi har en historik i hvad der blev meldt ind. Husk at jo bedre du beskriver fejlen (hvad gjorde du umiddelbart før, er det kun ved specielle forhold at den fejler mv.), jo nemmere har vi ved at genskabe fejlen - og dermed få den rettet.

Når du har gennemført testen, så beder vi om at skrive en kommentar på [dette issue](https://github.com/OS2Forms/os2forms/issues/344), så vi ved at du har testet.

---

## [#344](https://github.com/OS2Forms/os2forms/issues/344): Efterårsreleasen 2026 (til diskussion og fastlæggelse af indhold)

- **[#331](https://github.com/OS2Forms/os2forms/issues/331): Deprecated datafordeler endpoints used for matrikel lookup**

   * Testvejledningen er endnu ikke klar! Ansvarlig: Bellcom.

- **[#342](https://github.com/OS2Forms/os2forms/issues/342): Fejl i OS2Forms Autocomplete elementet**

   * På [denne formular](https://test.os2forms.dk/da/form/bellcom-os2forms-autocomplete) er elementet "OS2Forms Autocomplete" sat op til benytte dette [API url](https://test.os2forms.dk/autocomplete_api.json) og når man så skriver noget der matcher en værdi i API'et, så kommer der resultater frem i elementet, hvorefter man kan vælge det resultat man ønsker. Test at der kommer de forventede resultater, når du søger.

- **[#334](https://github.com/OS2Forms/os2forms/issues/334): States on which handlers should run**

   * Testvejledningen er endnu ikke klar! Ansvarlig: ITK.

- **[#335](https://github.com/OS2Forms/os2forms/issues/335): "Display on" option for Map element**

   * Testvejledningen er endnu ikke klar! Ansvarlig: ITK.

- **[#329](https://github.com/OS2Forms/os2forms/issues/329): First, middle and last name nemid webform elements**

   * Testvejledningen er endnu ikke klar! Ansvarlig: ITK.

- **[#275](https://github.com/OS2Forms/os2forms/issues/275): Fra Jira: Filer fra indsendelser slettes ikke automatisk**

   * Der er ikke noget at teste på [test.os2forms.dk](https://test.os2forms.dk/), men du bør derimod kontrollerer at dine egne miljøer ikke gemmer indsendelser i længere tid end nødvendigt.

- **[#348](https://github.com/OS2Forms/os2forms/issues/348): Move digital signature configuration to the handler**

   * Testvejledningen er endnu ikke klar! Ansvarlig: ITK.

- **[#269](https://github.com/OS2Forms/os2forms/issues/269): Fra Jira: Filopload som bilag til digital post**

   * Testvejledningen er endnu ikke klar! Ansvarlig: ITK.

- **[#321](https://github.com/OS2Forms/os2forms/issues/321): SaveToFileWebformHandler**

   * Kontroller at handleren "EXPERIMENTAL: Save to file" ikke længere er mulig at benytte.

- **[#350](https://github.com/OS2Forms/os2forms/issues/350): SignSDK opdatering til NemLog-in signeringsløsning**

   * På [denne formular](https://test.os2forms.dk/da/form/bellcom-digital-signatur-test) kan du teste at du kan underskrive og indsende en formular. Husk at vælge "Test login"-fanen i NemLog-in og brug det brugernavn og adgangskode som står på formularen.

- **[#352](https://github.com/OS2Forms/os2forms/issues/352): Maestro inherit task: inherited data is not available during form preparation**

   * Testvejledningen er endnu ikke klar! Ansvarlig: ITK.

- **[#286](https://github.com/OS2Forms/os2forms/issues/286): OS2forms SBSYS integration og MitID børne elementerne**

   * På [denne formular](https://test.os2forms.dk/da/form/bellcom-test-af-sbsys-mitid-boer) kan du teste at du nu også kan vælge mellem alle MitID Børne-elementer på "Attachment SBSYS xml" elementet.

- **[#362](https://github.com/OS2Forms/os2forms/issues/362): Bug ved specifik adresse i DAWA Address-Matrikula (autocomplete) elementet**

   * På [denne formular](https://test.os2forms.dk/da/form/bellcom-dawa-address-matrikula) er der en vejledning i hvordan du kan teste det efter vores rettelse i koden.

- **[#312](https://github.com/OS2Forms/os2forms/issues/312): Reporting misconfigured handlers**

   * Testvejledningen er endnu ikke klar! Ansvarlig: ITK.

- **[#370](https://github.com/OS2Forms/os2forms/issues/370): Scrollbar mangler i elementer**

   * Denne er lidt svær at teste, da var tale om en periodisk fejl. Men når man klikkede på "Add element" inden på en formular, så kom scrollbaren ikke nødvendigvis altid frem. Se evt. [videoen fra Kristina](https://github.com/OS2Forms/os2forms/issues/370#issue-5811433826) for at se hvordan det så ud. Test at du kan få scrollbaren frem hver gang du trykker på "Add element".

- **[#358](https://github.com/OS2Forms/os2forms/issues/358): Opdatér Core med oversættelser fra Drupal**

   * Test at du kan tilgå [denne side](https://test.os2forms.dk/da/admin/config/regional/translate/settings). Hvis du kan, så er fixet implementeret.
