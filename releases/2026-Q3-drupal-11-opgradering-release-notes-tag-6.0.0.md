---
title: Drupal 11 - 2026/Q3
layout: default
nav_order: -3
parent: Releases
---

# Release notes

**Release date: 2026-09-30**  
**Release no.: Drupal 11 - 2026/Q3**  
**Release tag: 6.0.0**  
**GitHub Issue: [https://github.com/OS2Forms/os2forms/issues/247](https://github.com/OS2Forms/os2forms/issues/247)**

## Danish (english below):

Fokus for denne release er at gøre OS2forms klar til Drupal 11 samt at opdatere en række underliggende moduler og afhængigheder. Releasen indeholder desuden en mindre fejlrettelse i elementet til valg af børn.

**Uddybning af releasen:**

### [#346](https://github.com/OS2Forms/os2forms/issues/346): Opdatering til Drupal 11

OS2forms er blevet opdateret, så løsningen nu understøtter Drupal 11.

Opdateringen omfatter både OS2forms' egne moduler (de moduler der er omfattet som core-elementer) og en række af de moduler og integrationer, som OS2forms anvender. Blandt andet er modulerne til Serviceplatformen og Datafordeleren opdateret, så de kan anvendes sammen med Drupal 11.

I forbindelse med opdateringen er der også foretaget nødvendige ændringer i OS2forms' konfigurations- og indstillingssider samt i den automatiske kodeanalyse.

Som en del af Drupal 11-opdateringen er modulet `config_entity_revisions` fjernet, da det ikke længere anvendes.

Der er desuden foretaget opdateringer af blandt andet Webform REST, Sodium og dompdf.

### [#355](https://github.com/OS2Forms/os2forms/issues/355): Rettelse i elementet til valg af børn

Der er rettet en fejl i elementet til valg af børn, hvor teksten med information om adressebeskyttelse ikke blev håndteret korrekt.

Rettelsen sikrer, at advarslen vises korrekt, når elementet anvendes.

**Følgende ændringer er også inkluderet i releasen, men kræver ingen yderligere handling:**

- Opdatering af Webform REST.
- Opdatering af Sodium.
- Understøttelse af dompdf 3.0.
- Tilpasninger af OS2forms-moduler til Drupal 11.
- Fjernelse af config_entity_revisions.
- Opdatering af kodeanalyse til Drupal 11.
- Diverse mindre tekniske opdateringer og fejlrettelser.

---

## English:

The focus of this release is to prepare OS2forms for Drupal 11 and to update a number of underlying modules and dependencies. The release also includes a minor bug fix in the element for selecting children.

**Release details:**

### [#346](https://github.com/OS2Forms/os2forms/issues/346): Update to Drupal 11

OS2forms has been updated so that the solution now supports Drupal 11.

The update includes both OS2forms' own modules (the modules included as core elements) and a number of the modules and integrations used by OS2forms. Among other things, the modules for Serviceplatformen and Datafordeleren have been updated so that they can be used with Drupal 11.

As part of the update, necessary changes have also been made to OS2forms' configuration and settings pages, as well as to the automated code analysis.

As part of the Drupal 11 update, the `config_entity_revisions` module has been removed, as it is no longer used.

Updates have also been made to Webform REST, Sodium and dompdf, among others.

### [#355](https://github.com/OS2Forms/os2forms/issues/355): Fix in the element for selecting children

A bug has been fixed in the element for selecting children, where the text containing information about address protection was not handled correctly.

The fix ensures that the warning is displayed correctly when the element is used.

**The following changes are also included in the release but require no further action:**

- Update of Webform REST.
- Update of Sodium.
- Support for dompdf 3.0.
- Adaptations of OS2forms modules for Drupal 11.
- Removal of config_entity_revisions.
- Update of code analysis for Drupal 11.
- Various minor technical updates and bug fixes.
