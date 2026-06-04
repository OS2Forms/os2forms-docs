---
title: Release 2026/Q2
layout: default
nav_order: -2
parent: Releases
---

# Release notes

**Release date: 2026-06-03**  
**Release no.: 2026/Q2**  
**Release tag: 5.1.0**  
**GitHub Issue: [https://github.com/OS2Forms/os2forms/issues/211](https://github.com/OS2Forms/os2forms/issues/211)**

## Danish (english below):

Fokus for denne release er nødvendige opdateringer som følge af ændringer i den fælleskommunale infrastruktur samt nødvendige sikkerhedsopdateringer:

- [#200](https://github.com/OS2Forms/os2forms/issues/200): Versionsskift af CKEditor
- [#246](https://github.com/OS2Forms/os2forms/issues/246): Overgang til Klimadatastyrelsens nye adressevælger (udfasning af den gamle DAWA)
- [#248](https://github.com/OS2Forms/os2forms/issues/248): Overgang til den moderniserede Datafordeler (CVR-numre og P-numre) (udfasning af Serviceplatformen)
- [#251](https://github.com/OS2Forms/os2forms/issues/251): Problem med afinstallation af krypteringsmoduler
- [#323](https://github.com/OS2Forms/os2forms/issues/323): Sikkerhedsopdateringer af Drupal
- Diverse fejlrettelser, herunder rettelser i Digital Post og kortmodulet

**Uddybning af releasen:**

### [#200](https://github.com/OS2Forms/os2forms/issues/200): Modulet “CKEditor 4 (contrib) (ckeditor)” bør erstattes (af “CKEditor 5 (ckeditor5)”) da det er deprecated

De afhængigheder, der var i OS2Forms til det gamle modul "CKEditor 4 (contrib) (ckeditor)", er blevet fjernet, og det nye modul "CKEditor 5 (ckeditor5)" kan nu installeres og vælges som teksteditor.

Opsætningen af, hvilke knapper og funktioner der skal være tilgængelige i CKEditor 5, følger standardopsætningen, men kan tilpasses fra løsning til løsning.

### [#246](https://github.com/OS2Forms/os2forms/issues/246): DAWA (Danmarks Adressers Web API) lukker ned pr. 1. juli 2026

Modulet "OS2Forms DAWA (os2forms_dawa)" er blevet opdateret til at understøtte det nye API, "Adressevælgeren", fra Klimadatastyrelsen.

Adgangen til API'et styres via en token, som skal angives under (dette bør ændres af driftsleverandøren):<br>
`/admin/config/system/os2web-datalookup/datafordeler-address-lookup`

Da Klimadatastyrelsen endnu ikke har implementeret brugerstyring, skal token-værdien indtil videre sættes til:<br>
`adressevaelger123`

Læs mere om brugerstyringen her: [https://confluence.sdfi.dk/display/ADV/Brugerstyring](https://confluence.sdfi.dk/display/ADV/Brugerstyring)

***Vigtig information vedrørende eksisterende formularer med DAWA-elementer:***

Da det nye API ikke fungerer på helt samme måde som det gamle, anbefales det, at alle, der benytter DAWA-elementer, gennemgår og tilpasser de formularer, hvor elementerne anvendes.

**Det skal du gøre (som formularredaktør/selvbetjeningsdesigner):**
    1. Gennemgå jeres formularer og tjek, om der er sat en kommunekode på DAWA-elementerne
    2. Opdatér til 4-cifrede kommunekoder (hvis I bruger 3-cifrede kommunekoder, skal der tilføjes et foranstillet nul)
    3. Brug kun én kommunekode. Det er nu kun muligt at angive én kommunekode pr. element. Hvis I i dag bruger flere kommunekoder, skal formularen tilpasses, så der kun anvendes én

Link til API-dokumentationen: [https://confluence.sdfi.dk/pages/viewpage.action?pageId=234782998](https://confluence.sdfi.dk/pages/viewpage.action?pageId=234782998)

### [#248](https://github.com/OS2Forms/os2forms/issues/248): Ændringer på datafordeler.dk - fremover skal den moderniserede Datafordeler benyttes

Modulet "OS2Web Datalookup (os2web_datalookup)" er blevet opdateret til at understøtte den moderniserede Datafordelers API. Modulet skal konfigureres på følgende to sider i OS2Forms (dette bør ændres af driftsleverandøren):<br>
`/admin/config/system/os2web-datalookup/datafordeler-cvr`<br>
`/admin/config/system/os2web-datalookup/datafordeler-pnumber`

Webservice URL (LIVE):<br>
`https://graphql.datafordeler.dk/flexibleCurrent/v1`

For at kunne hente data fra det nye API skal der oprettes en API Key. Dette gøres på [https://portal.datafordeler.dk/](https://portal.datafordeler.dk/), hvor man enten skal oprette en ny bruger eller logge ind med en eksisterende bruger.

Når man er logget ind, skal man enten oprette OS2Forms som et nyt IT-system eller vælge OS2Forms, hvis det allerede er oprettet. Herefter oprettes en API Key under "API-Keys", hvorefter den genererede API Key kopieres. Denne API Key skal derefter indsættes i OS2Forms på ovenstående to konfigurationssider i det tilhørende felt.

Når konfigurationen er gennemført, fungerer modulet på samme måde som tidligere, og der kan fortsat hentes CVR-data ind i de relevante elementer.

Der skal ikke foretages ændringer i de enkelte formularer, som benytter elementerne med CVR-data.

### Følgende issues er også inkluderet i releasen, men kræver ingen yderligere handling:
- [#251](https://github.com/OS2Forms/os2forms/issues/251): Problem med afinstallation af “Webform Encrypt” og “OS2Forms Encrypt”
- [#323](https://github.com/OS2Forms/os2forms/issues/323): Opgradering til Drupal 10.6.x
- Diverse bug-fixes (pt. unreleased i Develop-branchen)
   * Fjernpost virker ikke efter skifte fra PostNord til DAO
   * Update Digital Post handler error messages
   * Update README
   * Add address information to Digital Post shipments to ensure “fjernprint” can be sent
   * Add option to add return address to Digital Post shipments
   * Fix IP validation in digital signature file download (CIDR support)
   * Updated code analysis script
   * Made digital signature text placement configurable
   * Webform encrypt uninstall problem fix
   * Git actions check
   * Added required “Zoom control position” to map element

---

## English:

The focus of this release is on necessary updates due to changes in the joint municipal infrastructure as well as necessary security updates:

- [#200](https://github.com/OS2Forms/os2forms/issues/200): CKEditor version change
- [#246](https://github.com/OS2Forms/os2forms/issues/246): Transition to Klimadatastyrelsens new address selector (phasing out the old DAWA)
- [#248](https://github.com/OS2Forms/os2forms/issues/248): Transition to the modernized Datafordeler (CVR numbers and P numbers) (phasing out Serviceplatformen)
- [#251](https://github.com/OS2Forms/os2forms/issues/251): Problem uninstalling encryption modules
- [#323](https://github.com/OS2Forms/os2forms/issues/323): Drupal security updates
- Various bug fixes, including fixes in Digital Post and the map module

**Elaboration of the release:**

### [#200](https://github.com/OS2Forms/os2forms/issues/200): Modulet “CKEditor 4 (contrib) (ckeditor)” bør erstattes (af “CKEditor 5 (ckeditor5)”) da det er deprecated

The dependencies that were in OS2Forms for the old module "CKEditor 4 (contrib) (ckeditor)" have been removed, and the new module "CKEditor 5 (ckeditor5)" can now be installed and selected as the text editor.

The configuration of which buttons and functions should be available in CKEditor 5 follows the default configuration, but can be customized from solution to solution.

### [#246](https://github.com/OS2Forms/os2forms/issues/246): DAWA (Danmarks Adressers Web API) lukker ned pr. 1. juli 2026

The module "OS2Forms DAWA (os2forms_dawa)" has been updated to support the new API, "Adressevælgeren", from Klimadatastyrelsen.

Access to the API is controlled via a token, which must be specified under (this should be changed by the operating supplier):<br>
`/admin/config/system/os2web-datalookup/datafordeler-address-lookup`

Since Klimadatastyrelsen has not yet implemented user management, the token value must be set to:<br>
`adressevaelger123`

Read more about user management here: [https://confluence.sdfi.dk/display/ADV/Brugerstyring](https://confluence.sdfi.dk/display/ADV/Brugerstyring)

***Important information regarding existing forms with DAWA elements:***

Since the new API does not work in exactly the same way as the old one, it is recommended that everyone who uses DAWA elements review and adapt the forms where the elements are used.

**This is what you need to do (as form editor):**
    1. Review your forms and check if a municipality code has been set on the DAWA elements.
    2. Update to 4-digit municipal codes (if you use 3-digit municipal codes, a leading zero must be added)
    3. Use only one municipality code. It is now only possible to specify one municipality code per element. If you currently use multiple municipality codes, the form must be adapted so that only one is used.

Link to the API documentation: [https://confluence.sdfi.dk/pages/viewpage.action?pageId=234782998](https://confluence.sdfi.dk/pages/viewpage.action?pageId=234782998)

### [#248](https://github.com/OS2Forms/os2forms/issues/248): Ændringer på datafordeler.dk - fremover skal den moderniserede Datafordeler benyttes

The module "OS2Web Datalookup (os2web_datalookup)" has been updated to support the modernized Datafordeler API. The module must be configured on the following two pages in OS2Forms (this should be changed by the operating supplier):<br>
`/admin/config/system/os2web-datalookup/datafordeler-cvr`<br>
`/admin/config/system/os2web-datalookup/datafordeler-pnumber`

Webservice URL (LIVE):<br>
`https://graphql.datafordeler.dk/flexibleCurrent/v1`

In order to retrieve data from the new API, an API Key must be created. This is done at [https://portal.datafordeler.dk/](https://portal.datafordeler.dk/), where you must either create a new user or log in with an existing user.

Once logged in, you must either create OS2Forms as a new IT system or select OS2Forms if it has already been created. An API Key is then created under "API Keys", after which the generated API Key is copied. This API Key must then be inserted into OS2Forms on the above two configuration pages in the corresponding field.

Once the configuration is complete, the module functions in the same way as before, and CVR data can still be retrieved into the relevant elements.

No changes need to be made to the individual forms that use the elements with CVR data.

### The following issues are also included in the release, but do not require any further action:
- [#251](https://github.com/OS2Forms/os2forms/issues/251): Problem med afinstallation af “Webform Encrypt” og “OS2Forms Encrypt”
- [#323](https://github.com/OS2Forms/os2forms/issues/323): Opgradering til Drupal 10.6.x
- Diverse bug-fixes (pt. unreleased i Develop-branchen)
   * Fjernpost virker ikke efter skifte fra PostNord til DAO
   * Update Digital Post handler error messages
   * Update README
   * Add address information to Digital Post shipments to ensure “fjernprint” can be sent
   * Add option to add return address to Digital Post shipments
   * Fix IP validation in digital signature file download (CIDR support)
   * Updated code analysis script
   * Made digital signature text placement configurable
   * Webform encrypt uninstall problem fix
   * Git actions check
   * Added required “Zoom control position” to map element
