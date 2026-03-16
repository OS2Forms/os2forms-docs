---
layout: default
title: "Rettighedsstyring"
tags: ['old-id:433']
---
I nyere versioner af OS2forms (<https://github.com/OS2Forms/os2forms_forloeb_profile/releases/tag/1.10.0>) er det muligt at adskille hvilket indhold en selvbetjeningsdesigner og flowdesigner kan se, så de kun ser det indhold der vedrører dem.

Funktionen består af følgende

  1. Ændring af alle lister af sider, formularer og flows
  2. Ændring af alt oprettelse af sider, formularer og flows
  3. Tilføjelse til profil
  4. Tilføjelse af taxonomi



Ændringerne til lister er automatisk i nyere versioner, men kræver noget ekstra konfiguration for at visningen faktisk bliver tilpasset. Hvis der ikke er nogle begrænsninger i systemet bliver alt indhold vist.

**Konfiguration af modul**

Trin | Handling | Illustration  
---|---|---  
1 |  **Konfiguration af ADFS/OIDC** Din ADFS/OIDC skal (om)konfigureres så den

  * giver alle medarbejdere en drupal rolle "medarbejdere"
  * medsender alle medarbejderes afdeling

|   
2 |  **Brugerprofiler** Du skal sikre at brugerprofiler gemmer medarbejdersafdeling i forbindelse med ADFS eller OIDC login.  |  ![](../sites/default/files/rediger_ord_selvbetjening.aarhuskommune.dk_.png)  
3 |  **Sikre rigtige moduler er aktiveret**  
På Moduler, [site]/da/admin/modules, skal disse 3 moduler hanve denne indstilling: OS2Forms permissions by term (aktiveret)  
Permissions by Term (aktiveret)  
Webform Permissions by Term (deaktiveret) |  ![](../sites/default/files/taksonomi_selvbetjening.aarhuskommune.dk_.png)  
4 |  Som superadmin skal du koble Affiliation taxonomi på Permission by term [site]da/admin/permissions-by-term/settings |   
5 |  Tilføj Taxonomi På [site]da/admin/structure/taxonomy skal du tilføje ordforråd til taxonomi "Affiliation". Der skal altid laves en annonym. På denne er det særlig vigtigt at du sørger for at Tilladelser giver adgang til annonymt indhold. Yderligere skal du, for hver af dine ønskede brugergrupper. Her skal du ikke røre med tilladelser, da de blot vil følge brugerens rettigheder. |   
6 |  Tilføj permissions indstilling på node fra [site]/da/admin/structure/types/manage/webform/fields |   
  
**Yderligere medarbejder opkobling**

Medarbejdere vil med ovenstående indstillinger automatisk få adgang til det indhold der tilhører "deres afdeling" (fra taxonomien). Men det er muligt at tilføje en medarbejder til flere afdelinger.

Trin | Handling | Illustration  
---|---|---  
1 | Gå til [site]/en/admin/people |   
2 | Rediger den medarbejder, som skal have tilknyttet flere afdelinger |  ![](../sites/default/files/personer_selvbetjening.aarhuskommune.dk_.png)  
3 | Find listen over afdelinger |  ![](../sites/default/files/pernille_thorsen_selvbetjening.aarhuskommune.dk_.png)  
4 | Hold CTRL nede og vælg yderligere afdelinger, som brugeren skal have adgang til |  ![](../sites/default/files/pernille_thorsen_selvbetjening.aarhuskommune.dk_1.png)  
5 | Tryk Gem |  ![](../sites/default/files/pernille_thorsen_selvbetjening.aarhuskommune.dk_2.png)  
6 | Medarbejderen vil nu, ved et nyt login, kunne se indhold fra alle de afdelinger de har adgang til. |   
  
**Indhold til borgere og medarbejdere (som ikke er org)**

Når vi brugerbegrænser har vi også behov for at håndtere det indhold vi faktisk ikke vil have bliver brugerstyret.

På Indstillinger => Adgang skal formularer derfor sættes til "anonym bruger", for at borgere kan få lov til at se indhold.

På Selvbetjeningssider (nodes) trækker den automastik formularens indstilling, så den kun skal sættes en gang. 

**Indhold til medarbejdere**

Når vi brugerbegrænser har vi også behov for at håndtere det indhold vi faktisk ikke vil have bliver brugerstyret.

På Indstillinger => Adgang skal formularer derfor sættes til "godkendt bruger", for at medarbejdere får adgang til det.  
Yderligere stiller det krav til at OIDC/ADFS verificerer alle medarbejdere som enten "godkendt bruger" eller "medarbejder", så de ikke bliver afvist for at kunne se indhold.