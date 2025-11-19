---
title: Release 2025/Q4
layout: default
nav_order: -1
parent: Releases
---

# Release notes

**Release date: 2025-11-19**  
**Release no.: 2025/Q4**  
**Release tag: 5.0.0**  
**GitHub Issue: [https://github.com/OS2Forms/os2forms/issues/193](https://github.com/OS2Forms/os2forms/issues/193)**

**Modules that are recommended to be uninstalled (will be removed in the next release):**
- @fontyourface (fontyourface)
- @fontyourface - Adobe Edge Fonts (adobe_edge_fonts)
- @fontyourface - Font Squirrel (fontsquirrel_api)
- @fontyourface - Fonts.com (fontscom_api)
- @fontyourface - Google Fonts (google_fonts_api)
- @fontyourface - Local Fonts (local_fonts)
- @fontyourface - Typekit (typekit_api)

**Modules that have been deleted:**
- CKEditor Balloon Panel (ckeditor_balloonpanel)
- Clientside Validation (clientside_validation)
- Clientside Validation Demo (clientside_validation_demo)
- Clientside Validation jQuery (clientside_validation_jquery)
- Drupal Upgrade (migrate_upgrade)
- Embed (embed)
- Header and Footer Scripts (header_and_footer_scripts)
- Migrate Advanced Example Setup (migrate_example_advanced_setup)
- Migrate Example (Advanced) (migrate_example_advanced)
- Migrate Example (migrate_example)
- Migrate Example Setup (migrate_example_setup)
- Migrate JSON Example (migrate_json_example)
- Migrate Plus (migrate_plus)
- Migrate Tools (migrate_tools)
- Simple LDAP (simple_ldap)
- Simple LDAP SSO (simple_ldap_sso)
- Simple LDAP User (simple_ldap_user)
- Upgrade Status (upgrade_status)
- Webform Permissions by Term (webform_permissions_by_term)

**New features/recommendations:**
- Ændring af navne på elementerne der i dag indeholder navnet “NemID”, da “NemID” ikke længere eksisterer. Ændringen må dog ikke få konsekvenser for eksisterende formularer/installationer. Nyt navn foreslås til “MitID”
- Modulet “OS2web nemlogin Automated Logout” bør som standard være aktiveret i en OS2forms installation
- Release af Digital Signatur
- Keys and encrypt

**Hotfixes that have been added:**
- OS2forms sync modul not working
- Implement MeMo1.2 compliance [SFRMS-129]
- Fix: Webform Auto Exports settings issue
- Fix: Name- and address protection multiple submission saves issue
- Fix: os2forms_forloeb: Send Maestro notification handler exception handling when sending digital post
- Fix: os2forms_forloeb: Maestro notification attempts sending digital post that will never be delivered
- Fix: MitId Children select missing a succesful check
- Fix: Maestro notification handler ignores conditions (vilkår)
- Fix: Maestro digital post-notification sender label is set incorrectly
- Conditionals based on computed twig broken in Drupal ^10.3
