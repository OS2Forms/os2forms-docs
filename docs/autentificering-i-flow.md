---
layout: default
title: "Autentificering i flow"
tags: ['old-id:424']
---
Du kan bruge denne vejeldning, hvis du har behov for at en formular skal være en del af et flow og borgeren skal kunne besøge formularen. NB: det virker i øjeblikket kun med OIDC som Nem-login ansvarlig.

  


På formularen som skal bruges til autentificering med Nem-login

Trin | Handling | Illustration  
---|---|---  
1 | Gå til indstillinger på din formular  
  
|   
2 |  Aktiver Nem-login ved at gøre følgende **Webform type** gøres til Personlig (når dette sættes kommer felterne User claim, Formular elementer og ) **Viderestil til Nem-login automatisk** aktiveres **Userclaim** : Sættes til CPR-nummer **Formular elementer** : vælg det felt i formularen, som du ønsker skal tjekkes op imod CPR-nummeret.  **Fejlmeddelse** : Skriv den besked som en borger skal have, hvis deres ID ikke matcher formular-elementet |  ![Nem-login indstillinger](../sites/default/files/test_borger_2_13-9-2022_selvbetjening.aarhuskommune.dk_.png)  
3 | Klik gem i bunden af siden og din autentificering skulle nu virke. |   
4 | **Sådan tester du**  
Du kan teste om det virker, ved at sætte defaultværdien på elementet som er tjek til dit cpr-nummer og på den måde verificere at det virker uden et flow. sættes der en anden værdi end til cpr-nummer, vil du blive afvist og møde fejlbeskedet.   
  
Husk at slette, når du er færdige med at teste. |  ![Sæt default værdi](../sites/default/files/test_borger_2_13-9-2022_selvbetjening.aarhuskommune.dk_1.png)  
  
Systemadministrator opsætning (admin-bruger adgang)

Trin | Handling | Illustration  
---|---|---  
1 |  På [sitename]/da/admin/config/system/os2web-nemlogin/OpenIDConnect skal der opsættes user claim Følg vejledningen under input feltet. |  ![User claims](../sites/default/files/configure_openidconnect_nemlogin_auth_provider_selvbetjening.aarhuskommune.dk_.png)