---
layout: default
title: "Handler: GetOrganized"
tags: ['Konfiguration/opsætning af installation', 'old-id:413']
---
Det er muligt at journalisere til GetOrganized, hvis man bruger den som ESDH. Der findes i øjeblikket mulighed for at koble på emnesager og borgersager.

**Sådan opsætter du den (på din OS2forms installation)**

Funktionen er bygget ud fra: [https://github.com/itk-dev/os2forms_get_organized](https://github.com/itk-dev/os2forms_selvbetjening#getorganized)

  1. Modulet skal installeres og aktiveres.([site]/admin/modules)
  2. For at konfigurere følges vejledningen på <https://github.com/itk-dev/os2forms_selvbetjening#getorganized>
  3. Du skal væres sikker på at handleren er aktiveret på [site]/admin/structure/webform/config/handlers



**Sådan bruger du den**

Funktionen tager udgangspunkt i at du har tilføjet formular-elementet "PDF attachment" til formularen, og kan først bruges når der er tilføjet sådan en.  
Yderligere tager den udgangspunkt i at sagerne er oprettet i GetOrganized (medmindre det er borger-sager)

  1. På din formular går du til indstillinger => emails/handlers ([site]/admin/structure/webform/manage/[form]/handlers)
  2. Klik "tilføj handler"
  3. Klik "GetOrganized"  
  


![Handlerliste med GetOrganized fremhævet](../sites/default/files/start_proces_til_borger_test_auth_selvbetjening.aarhuskommune.dk_.png)




Standard

Trin | Handling | Illustration  
---|---|---  
1 | Titel og administrative noter er kun til brug for dig i OS2forms |  ![GetOrganised settings generel](../sites/default/files/test_borger_13-9-2022_selvbetjening.aarhuskommune.dk_1.png)  
2 | Du kan markere om denne formulars journalisering skal ind som ikke journaliseret eller journaliseret.  |  ![Vælg emnesager](../sites/default/files/test_borger_13-9-2022_selvbetjening.aarhuskommune.dk_.png)  
3 | Pdf'en er den fil som vil blive journaliseret. Du får en fil i dette felt ved at oprette "Attachement Pdf" som et element i formularen. |   
4 | Når du har udfyldt de generelle felter og udfyldt det nødvendige vedr. Borgersager eller Emnesager, så klikker du "gem" og din handler vil nu virke. |   
  
Emnesager

Trin | Handling | Illustration  
---|---|---  
1 | Du vælger emnesager ved at vælge "GetOrganized case ID" |  ![Vælg emnesager](../sites/default/files/test_borger_13-9-2022_selvbetjening.aarhuskommune.dk_.png)  
2 | Der kommer følgende felt, som skal udfyldes. Case ID er sagsnummeret og Sagsnummeret er det fylde sagsnummer i GetOrganized, som findes i GetOrganized url'en.  |  ![Case id felt](../sites/default/files/test_borger_13-9-2022_selvbetjening.aarhuskommune.dk_2.png)  
  
Borgersager 

Trin | Handling | Illustration  
---|---|---  
1 | Du vælger borgersager ved at vælge "Citizen CPR number" |  ![Vælg borgersager](../sites/default/files/test_borger_13-9-2022_selvbetjening.aarhuskommune.dk_3.png)  
2 | Borgersager har krav om at der er sagstitel og der er både CPR-nummer og Navn med, da det kan være borgersagen ikke er oprettet.  
  
Derfor skal du i formularen oprette felter med CPR value og CPR navn, som derved verificerer at borgerens sag journaliseres på den rigtige borger.  
  
Det er ikke muligt at bruge andre felter, hvilket er valgt ud fra et forsigtighedsprincip, som sikrer at der ikke kan journaliseres på andre borgere ved at man manuelt kan skrive et cpr nummer.  
  
|  ![Felter vedr. borgersager](../sites/default/files/test_borger_13-9-2022_selvbetjening.aarhuskommune.dk_4.png)  
  
NB: Det er ikke muligt at tilføje til en specifik sagsprofil, medmindre man lægger ind i en eksisterende sag, hvor sagsprofil er valgt. Hvis der laves test indhold beder GetOrganized om at der bruges "Til uddannelsesbrug" sagsprofilen, da dette indhold med jævne mellemrum vil blive slettet.