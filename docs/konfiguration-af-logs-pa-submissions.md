---
layout: default
title: "Konfiguration af logs på submissions"
tags: ['Konfiguration/opsætning af installation', 'old-id:434']
---
Hvis du ønsker at få logget hvordan dine submissionss handlers virker, kan det indstilles i drupal med en standard indstilling.

**Konfiguration, for at det virker**

Trin | Handling  
---|---  
1 | Programmør: Find [config/sync/webform.settings.yml](https://github.com/itk-dev/os2forms_selvbetjening/pull/105/files#diff-0f12135f8e10f380747e3e0db5d6e01246e34fe9bbdd0cbdea20f1e68e81d462 "config/sync/webform.settings.yml") og sæt: default_submission_log: true  
  
2 | Admin/Site admin: Gå til Webform => Indstillinger => Besvarelser ([site]da/admin/structure/webform/config/submissions)  
  
Vælg: Log all submission events for all webforms  
  
Tryk gem.   
  
  
  
**Find som redaktør**

Trin | Handling | Illustration  
---|---|---  
1 | Find din formular |   
2 | Vælg Besvarelser |   
3 | Vælg Logs ([site]da/admin/structure/webform/manage/[form]/results/log) |   
4 | Her kan du se dels at submissions er blevet gemt samt hvilke handlere der er aktiveret og hvordan det er gået.  |   
5 |  |