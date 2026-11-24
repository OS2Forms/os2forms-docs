---
title: Release 2026/Q4
layout: default
nav_order: -4
parent: Releases
---

# Release notes

**Release date: 2026-11-24**  
**Release no.: 2026/Q4**  
**Release tag: 6.2.0**  
**GitHub Issue: [https://github.com/OS2Forms/os2forms/issues/344](https://github.com/OS2Forms/os2forms/issues/344)**

## Danish (english below):

Fokus for denne release er forbedringer af eksisterende funktionalitet i OS2forms, herunder Digital Post, Digital Signatur, kortmodulet og håndtering af formularindsendelser mv.

Uddybning af releasen:

### [#331](https://github.com/OS2Forms/os2forms/issues/331): Deprecated datafordeler endpoints used for matrikel lookup

De tidligere anvendte Datafordeler REST-endpoints til opslag af matrikeloplysninger er blevet erstattet med de moderniserede GraphQL-endpoints.

Ændringen sikrer, at OS2forms fortsat kan hente matrikeloplysninger via elementet "DAWA Address-Matrikula (autocomplete)", når de eksisterende REST-endpoints udfases.

Opdateringen er nødvendig, da de tidligere endpoints er planlagt udfaset den 15. januar 2027.

### [#342](https://github.com/OS2Forms/os2forms/issues/342): Fejl i OS2Forms Autocomplete elementet

Der er foretaget fejlrettelser i OS2forms Autocomplete-elementet, herunder forbedret håndtering af visning af e-mailadresser.

Der er desuden rettet en fejl i logningen, så elementet håndterer oplysningerne mere korrekt.

### [#334](https://github.com/OS2Forms/os2forms/issues/334): States on which handlers should run

Det er nu muligt at konfigurere, hvilke indsendelsesstatusser der skal udløse afviklingen af en Webform Handler.

Som standard afvikles handlers, når en formularindsendelse får status som gennemført. Det er dog muligt at ændre dette, så en handler også kan afvikles ved andre relevante indsendelsesstatusser.

Funktionen er implementeret for følgende handlers:

* Digital Post
* Fasit
* FBS

### [#335](https://github.com/OS2Forms/os2forms/issues/335): “Display on” option for Map element

Kort-elementet er blevet udvidet med en ny indstilling, der gør det muligt at vælge, hvilke typer geografiske data der skal vises på kortet.

Det giver større fleksibilitet i opsætningen af kort og gør det muligt at tilpasse visningen til den enkelte formulars behov.

### [#329](https://github.com/OS2Forms/os2forms/issues/329): First, middle and last name nemid webform elements

Der er tilføjet tre nye elementer til OS2forms, som gør det muligt at hente og anvende følgende navneoplysninger:

* Fornavn
* Mellemnavn
* Efternavn

Elementerne kan anvendes separat i formularer, hvor der er behov for at arbejde med de enkelte navneoplysninger.

### [#275](https://github.com/OS2Forms/os2forms/issues/275): Fra Jira: Filer fra indsendelser slettes ikke automatisk

Der er foretaget en undersøgelse af håndteringen af filer, der er vedhæftet formularindsendelser.

Undersøgelsen viser, at filer bliver slettet korrekt, når den tilhørende formularindsendelse slettes – både ved manuel sletning og ved automatisk sletning efter formularens indstillede opbevaringsperiode.

Hvis der fortsat findes ældre filer i systemet, anbefales det, at den enkelte anvender kontakter sin driftsleverandør med henblik på at få undersøgt den konkrete installation.

### [#348](https://github.com/OS2Forms/os2forms/issues/348): Move digital signature configuration to the handler

Konfigurationen af Digital Signatur er blevet flyttet fra det enkelte OS2Forms Attachment-element til Digital Signatur-handleren.

Det betyder, at valg af det dokument, der skal underskrives, samt placeringen af valideringsteksten nu konfigureres direkte i Digital Signatur-handleren.

Eksisterende formularer bliver automatisk migreret til den nye konfiguration ved opdatering, så den eksisterende opsætning bevares.

### [#269](https://github.com/OS2Forms/os2forms/issues/269): Fra Jira: Filopload som bilag til digital post

Digital Post-handleren er blevet udvidet med mulighed for at vedhæfte filer fra formularens filelementer til Digital Post-meddelelser.

Det er nu muligt at vælge, hvilke filelementer der skal vedhæftes, når en Digital Post-meddelelse sendes. Vedhæftningerne indgår i selve Digital Post-meddelelsen (MeMo).

Derudover er der implementeret opslag i modtagerens Digital Post-registreringsstatus via SF1601 PostForespørg. Resultatet af opslaget bliver registreret i formularens indsendelseslog, så det er muligt at se modtagerens status i forbindelse med afsendelsen.

Der er indført validering af vedhæftninger, herunder filtyper, antal filer og den samlede dokumentstørrelse. Der kan maksimalt vedhæftes 10 filer, og den samlede størrelse må ikke overstige 70 MB.

### [#321](https://github.com/OS2Forms/os2forms/issues/321): SaveToFileWebformHandler

Den forældede SaveToFile-handler er blevet fjernet fra OS2forms.

Handleren har ikke længere en understøttet funktion i OS2forms og er derfor fjernet fra løsningen.

### [#350](https://github.com/OS2Forms/os2forms/issues/350): SignSDK opdatering til NemLog-in signeringsløsning

SignSDK er blevet opdateret til den nye version 2.2.0, som Digitaliseringsstyrelsen har udsendt til brug for NemLog-in-signeringsløsningen.

Opdateringen omfatter blandt andet en opdatering af Java-implementeringen til SignSDK 2.0.10 samt tilpasninger til den nye signeringsproces.

Der er samtidig foretaget tekniske opdateringer af signeringsserveren, herunder opdatering til Java 21 og Spring Boot 3.4.5.

Opdateringen sikrer, at OS2forms' Digital Signatur fortsat kan anvende den understøttede signeringsløsning fra NemLog-in.

### [#352](https://github.com/OS2Forms/os2forms/issues/352): Maestro inherit task: inherited data is not available during form preparation

Håndteringen af arvede data i Maestro er blevet forbedret, så data fra en overordnet opgave er tilgængelige allerede under forberedelsen af formularen.

Det sikrer en mere ensartet håndtering af data i formularer, der indgår i Maestro-forløb, og gør det muligt at anvende de arvede oplysninger tidligere i formularens behandling.

### [#286](https://github.com/OS2Forms/os2forms/issues/286): OS2forms SBSYS integration og MitID børne elementerne

SBSYS-integrationen er blevet udvidet, så MitID Børn-elementerne nu kan anvendes til at angive det CPR-nummer, som en formularindsendelse skal journaliseres på i SBSYS.

Tidligere var det ikke muligt at vælge MitID Børn-elementerne som kilde til CPR-nummeret i elementet "Attachment SBSYS xml".

Det betyder eksempelvis, at en forælder nu kan logge ind med MitID, udfylde en formular på vegne af sit barn og få oplysningerne journaliseret i SBSYS med barnets CPR-nummer.

### [#362](https://github.com/OS2Forms/os2forms/issues/362): Bug ved specifik adresse i DAWA Address-Matrikula (autocomplete) elementet

Der er rettet en fejl i DAWA Address-Matrikula (autocomplete)-elementet, som medførte, at opslag af matrikeloplysninger kunne fejle for bestemte adresser.

Fejlen skyldtes håndteringen af API'ets retursvar, når en adresse blev valgt. Dette er nu rettet, så matrikeloplysningerne kan hentes korrekt.

### [#312](https://github.com/OS2Forms/os2forms/issues/312): Reporting misconfigured handlers

Der er implementeret en ny validering af konfigurationen af Webform Handlers.

OS2forms kan nu automatisk kontrollere, om de enkelte handlers er korrekt konfigureret, og vise eventuelle fejlkonfigurationer på formularens opbygningsside og under oversigten over handlers.

Det gør det lettere for formularredaktører at identificere og rette fejl i opsætningen, inden de giver anledning til problemer med formularens funktionalitet.

### [#370](https://github.com/OS2Forms/os2forms/issues/370): Scrollbar mangler i elementer

Der er rettet en fejl, som i visse tilfælde medførte, at scrollbar ikke blev vist i vinduet med formularens tilgængelige elementer.

Fejlen kunne betyde, at formularredaktører ikke kunne rulle ned og se alle tilgængelige elementer, når de skulle tilføje nye elementer til en formular.

Rettelsen sikrer, at scrollbar vises korrekt i vinduet.

### [#358](https://github.com/OS2Forms/os2forms/issues/358): Opdatér Core med oversættelser fra Drupal

Der er foretaget en rettelse i håndteringen af oversættelsesindstillinger for OS2forms' kortmodul.

Rettelsen sikrer, at modulets oversættelsesindstillinger bliver registreret korrekt i Drupal, så det er muligt at tilgå og administrere oversættelserne under sproglige indstillinger.

### [#390](https://github.com/OS2Forms/os2forms/issues/390): Vis/skjul forhåndsvisning virker ikke

Der er rettet en fejl i Drupal 11, som medførte, at knapperne "Vis forhåndsvisning" og "Skjul forhåndsvisning" ikke fungerede korrekt, når man skulle indsætte et element i en formular.

Rettelsen sikrer, at det igen er muligt at skifte mellem visning og skjul af forhåndsvisningen under arbejdet med formularens elementer.

---

## English:

The focus of this release is on improvements to existing OS2forms functionality, including Digital Post, Digital Signature, the map element, form submissions, and more.

Further details about the release:

### [#331](https://github.com/OS2Forms/os2forms/issues/331): Deprecated datafordeler endpoints used for matrikel lookup

The previously used Datafordeler REST endpoints for retrieving cadastral information have been replaced with the modernised GraphQL endpoints.

This change ensures that OS2forms can continue to retrieve cadastral information through the "DAWA Address-Matrikula (autocomplete)" element when the existing REST endpoints are deprecated.

The update is necessary because the previous endpoints are scheduled for deprecation on 15 January 2027.

### [#342](https://github.com/OS2Forms/os2forms/issues/342): Fejl i OS2Forms Autocomplete elementet

Several issues in the OS2forms Autocomplete element have been fixed, including improved handling of email address display.

Additionally, an issue with logging has been fixed to ensure that the element handles information more correctly.

### [#334](https://github.com/OS2Forms/os2forms/issues/334): States on which handlers should run

It is now possible to configure which submission statuses should trigger the execution of a Webform Handler.

By default, handlers are executed when a form submission is marked as completed. However, this can be changed so that a handler can also be executed for other relevant submission statuses.

The functionality has been implemented for the following handlers:

* Digital Post
* Fasit
* FBS

### [#335](https://github.com/OS2Forms/os2forms/issues/335): “Display on” option for Map element

The Map element has been extended with a new setting that allows users to select which types of geographical data should be displayed on the map.

This provides greater flexibility when configuring maps and makes it possible to tailor the display to the requirements of each individual form.

### [#329](https://github.com/OS2Forms/os2forms/issues/329): First, middle and last name nemid webform elements

Three new elements have been added to OS2forms, allowing the following name information to be retrieved and used:

* First name
* Middle name
* Last name

The elements can be used separately in forms where there is a need to work with individual name components.

### [#275](https://github.com/OS2Forms/os2forms/issues/275): Fra Jira: Filer fra indsendelser slettes ikke automatisk

An investigation has been carried out into the handling of files attached to form submissions.

The investigation shows that files are deleted correctly when the associated form submission is deleted, both when deleted manually and when automatically deleted according to the form's configured retention period.

If older files are still present in the system, users are advised to contact their hosting provider to investigate the specific installation.

### [#348](https://github.com/OS2Forms/os2forms/issues/348): Move digital signature configuration to the handler

The Digital Signature configuration has been moved from the individual OS2Forms Attachment element to the Digital Signature handler.

This means that the selection of the document to be signed, as well as the placement of the validation text, is now configured directly in the Digital Signature handler.

Existing forms are automatically migrated to the new configuration during the update, preserving their existing setup.

### [#269](https://github.com/OS2Forms/os2forms/issues/269): Fra Jira: Filopload som bilag til digital post

The Digital Post handler has been extended to support attaching files from form file elements to Digital Post messages.

It is now possible to select which file elements should be attached when a Digital Post message is sent. The attachments are included directly in the Digital Post message (MeMo).

In addition, a lookup of the recipient's Digital Post registration status has been implemented using SF1601 PostForespørg. The result of the lookup is recorded in the form submission log, making it possible to see the recipient's status in connection with the message being sent.

Validation has been introduced for attachments, including file types, the number of files and the total document size. A maximum of 10 files can be attached, and the total size must not exceed 70 MB.

### [#321](https://github.com/OS2Forms/os2forms/issues/321): SaveToFileWebformHandler

The obsolete SaveToFile handler has been removed from OS2forms.

The handler is no longer supported in OS2forms and has therefore been removed from the solution.

### [#350](https://github.com/OS2Forms/os2forms/issues/350): SignSDK opdatering til NemLog-in signeringsløsning

SignSDK has been updated to the new version 2.2.0 released by the Danish Agency for Digital Government for use with the NemLog-in signing solution.

The update includes, among other things, an update of the Java implementation to SignSDK 2.0.10, as well as adjustments to the new signing process.

Technical updates have also been made to the signing server, including an upgrade to Java 21 and Spring Boot 3.4.5.

The update ensures that OS2forms' Digital Signature functionality can continue to use the supported signing solution from NemLog-in.

### [#352](https://github.com/OS2Forms/os2forms/issues/352): Maestro inherit task: inherited data is not available during form preparation

The handling of inherited data in Maestro has been improved so that data from a parent task is available during form preparation.

This ensures more consistent data handling in forms that are part of Maestro workflows and makes it possible to use inherited information earlier in the form processing workflow.

### [#286](https://github.com/OS2Forms/os2forms/issues/286): OS2forms SBSYS integration og MitID børne elementerne

The SBSYS integration has been extended to support the use of MitID Børn elements when specifying the CPR number under which a form submission should be registered in SBSYS.

Previously, it was not possible to select the MitID Børn elements as the source of the CPR number in the "Attachment SBSYS xml" element.

For example, this means that a parent can now log in using MitID, complete a form on behalf of their child and have the information registered in SBSYS using the child's CPR number.

### [#362](https://github.com/OS2Forms/os2forms/issues/362): Bug ved specifik adresse i DAWA Address-Matrikula (autocomplete) elementet

An issue has been fixed in the DAWA Address-Matrikula (autocomplete) element that could cause cadastral information lookups to fail for certain addresses.

The issue was caused by how the API response was handled when an address was selected. This has now been corrected, ensuring that cadastral information can be retrieved correctly.

### [#312](https://github.com/OS2Forms/os2forms/issues/312): Reporting misconfigured handlers

A new validation mechanism has been implemented for Webform Handler configurations.

OS2forms can now automatically check whether individual handlers are configured correctly and display any configuration errors on the form building page and in the handler overview.

This makes it easier for form administrators to identify and correct configuration errors before they cause problems with the form's functionality.

### [#370](https://github.com/OS2Forms/os2forms/issues/370): Scrollbar mangler i elementer

An issue has been fixed that, in certain cases, prevented the scrollbar from appearing in the window displaying the available form elements.

This could prevent form administrators from scrolling down to view all available elements when adding new elements to a form.

The fix ensures that the scrollbar is displayed correctly in the window.

### [#358](https://github.com/OS2Forms/os2forms/issues/358): Opdatér Core med oversættelser fra Drupal

An issue has been fixed in the handling of translation settings for the OS2forms Map module.

The fix ensures that the module's translation settings are registered correctly in Drupal, making it possible to access and manage translations through the language settings.

### [#390](https://github.com/OS2Forms/os2forms/issues/390): Vis/skjul forhåndsvisning virker ikke

An issue in Drupal 11 has been fixed that caused the "Show preview" and "Hide preview" buttons to malfunction when adding an element to a form.

The fix restores the ability to switch between showing and hiding the preview when working with form elements.
