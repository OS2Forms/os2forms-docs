---
title: Drupal 11 - Oplæg
layout: default
nav_order: -3
parent: Releases
---

# Drupal 11 opgradering - oplæg til koordinationsgruppen

Overblik over Drupal 11 opgradering til koordinationsgruppens videre arbejde.

**Milepæle:**

- Uge 28-35: Opgradering af test.os2forms.dk til Drupal 11 (Bellcom)
- Uge 36: Code-review (ITK)
- Uge 37: Evt. rettelser efter code-review samt klargøring til Koordinationsgruppens test (Bellcom)
- Uge 38-39: Koordinationsgruppen tester på test.os2forms.dk (Koordinationsgruppen)
- Uge 40: Drupal 11 opgraderingen er gennemtestet og accepteret (Koordinationsgruppen)
- Uge 41: Drupal 11 opgraderingen merges til main-branch (Bellcom)

---

## [#247](https://github.com/OS2Forms/os2forms/issues/247): Opgradering til Drupal 11

Vi har gennemgået OS2forms installationen på test.os2forms.dk og som den ser ud her efter releasen 5.1.0, så er ca. 3 ud af 4 moduler allerede Drupal 11 kompatible.

Som vi ser det, så skal følgende gøres for få OS2forms op på Drupal 11:

Følgende moduler/profiler bliver pt. ikke brugt og kan derfor slettes fra OS2forms:

- CKEditor 4 (contrib) (ckeditor)
- OS2Forms EGBolig (os2forms_egbolig)
- Webform Scheduled Tasks (webform_scheduled_tasks) – ~~Holstebro har det installeret, men det ser ikke ud til at blive brugt. Hvis det bliver brugt, skal det opdateres sammen med custom-modulerne.~~ Holstebro bruger det ikke og har afinstalleret det.
- OS2Forms (os2forms8) – profil

Følgende core/contrib moduler skal opdateres:

- RDF (rdf)
- Sodium (sodium)
- Webform (webform)
- Webform REST (webform_rest)

Følgende custom-moduler skal opdateres:

- Beskedfordeler (beskedfordeler)
- Config Entity Revisions (config_entity_revisions)
- Events Logging (events_logging)
- OS2Forms (os2forms)
- OS2Forms sync (os2forms_sync)
- OS2Web datalookup (os2web_datalookup)
- OS2Web key (os2web_key)
- OS2Web Nemlogin (os2web_nemlogin)
- OS2Web SimpleSAML Authentication (os2web_simplesaml)
- Switch Page Theme (switch_page_theme)
- Webform Node Element (webform_node_element)
- os2forms_forloeb_profile (os2forms_forloeb_profile)

Følgende moduler i os2forms/os2forms skal opdateres:

- os2forms
- os2forms_attachment
- os2forms_autocomplete
- os2forms_dawa
- os2forms_digital_post
- os2forms_digital_signature
- os2forms_encrypt
- os2forms_fasit
- os2forms_fbs_handler
- os2forms_forloeb
- os2forms_nemid
- os2forms_permissions_by_term
- os2forms_sbsys
- os2forms_webform_list
- os2forms_webform_maps
- os2forms_webform_texts

Vores estimat på ovenstående er 115 timer, som er inkl. dokumentation, projektledelse og tests. Timerne er ekskl. codereview, som vi regner med at ITK skal stå for.