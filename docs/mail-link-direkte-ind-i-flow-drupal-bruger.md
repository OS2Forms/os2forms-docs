---
layout: default
title: "Mail-link direkte ind i flow (Drupal bruger)"
tags: ['Flows', 'old-id:419']
---
Det er muligt at få et direke link til en opgave i stedet for skulle igennem "/taskconsole".  
  
For at kunne gøre dette skal du 

  1. Have oprettet formularer
  2. Have oprettet flow
  3. Have koblet flow på formularer



På din første formular, skal du gøre følgende:

Trin | Handling | Illustration  
---|---|---  
1 | Gå i Indstillinger, derefter e-mail/handlers  
[site]/admin/structure/webform/manage/[formid]/handlers |   
2 | Tilføj handlers (e-mail) |  ![tilføj e-mail handler](../sites/default/files/organisationsdata_felt-look_selvbetjening.aarhuskommune.dk_.png)  
3 | I e-mail-handleren under Meddelelse kan man indsætte en Token. Der findes hjælp under "Gennemse tilgængelig tokens" |  ![Message info with Token sellection](../sites/default/files/organisationsdata_felt-look_selvbetjening.aarhuskommune.dk_3.png)  
4 |  I "Gennemse tilgængelige tokens" skal du under "Indsendte webforms" finde Token. Klik på det blå link til højre for titel og tokenen vil placeres hvor din mus er.  
  
|  ![View of tokens ](../sites/default/files/organisationsdata_felt-look_selvbetjening.aarhuskommune.dk_2.png)  
5 | Det er også muligt at sætte token manuelt i editorfeltet. Her skrives.  
[webform_submission:os2forms_forloeb_execute_task] |  ![message with token for execute task](../sites/default/files/organisationsdata_felt-look_selvbetjening.aarhuskommune.dk_1.png)  
6 | Klik gem i bunden af feltet, når du har skrevet resten af din e-mail vejledning. |   
7 |  Derefter vil der i mailen komme et link som bliver omformateret til noget som ligner nedenstående.  [site]/da/os2forms-forloeb/execute-task?os2forms-forloeb-ws-token=Dtu4cYiWvN5VImN8LCR8dIJAbhooWA32MEa5vZg6zBKXLc |