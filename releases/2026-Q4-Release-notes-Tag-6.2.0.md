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

Release notes will appear here once the release is out.
