---
layout: default
title: "API-key til brug på API's"
tags: ['Formular konfiguration', 'old-id:455']
---
Det er kun en administrator som kan gøre dette. 

Trin | Handling | Illustration  
---|---|---  
1 |  Opret bruger i drupal på [site]/da/admin/people. Brugeren skal have adgang til rollen API-read, hvis der skal kun skal læses. Hvis der skal skrives til formularen, så skal API-write aktiveres også.  |   
2 | Vis brugers profil, hvorefter du kan klikke på fanen Key authentification, [site]/da/user/[user]/key-auth |   
3 | Opret key authentifikation |   
4 | Du har oprettet key, som kan bruges på din handler |   
5 |  |   
  
**Ved personfølsom information**

Det er muligt at begrænse adgangen til data på formularen yderligere til den enkelte API-bruger, så der ikke er andre API-keys som får mulighed for at hente informationen. Det gøres på din formular.

Trin | Handling | Illustration  
---|---|---  
1 | Find din formulars indstillinger |   
2 | Find REST API overskriften og indtast i feltet tilladte brugere din netop oprettet API-bruger. |   
3 | Klik gem |