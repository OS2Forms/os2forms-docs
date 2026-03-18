---
layout: default
title: "Kladder og Nemlogin"
tags: ['Formular konfiguration', 'old-id:452']
---
I nogle formularer har vi behov for at tilbyde brugeren mulighed for at gemme en kladde og finde den igen. Det kan godt lade sig gøre.

Trin | Handling | Illustration  
---|---|---  
1 | Gå til Indstillinger på den formular som skal tilbyde kladder. |   
2 | Gå til fanen Besvarelser |   
3 | Find Kladde indstillinger, hvor du skal være: Authentificerede og Anonyme brugere  |  ![vælg](../sites/default/files/selvbetjening.aarhuskommune.dk_da_admin_structure_webform_manage_test_release_13022022_settings_submissions_config_entitytest_release_13022022_2.png)  
4 | Hvis du ønsker brugeren kan gemme flere kladder, kan du aktivere; Tillad brugere at lave flere kladder  
Hvis der kun skal være én kladde, så lad den være deaktiv. |  ![indhold](../sites/default/files/selvbetjening.aarhuskommune.dk_da_admin_structure_webform_manage_test_release_13022022_settings_submissions_config_entitytest_release_13022022.png)  
5 | Hvis du har en stor formular med flere sider, kan du også aktivere at der automatisk gemmes kladder, når man skifter side.  
Det gøres ved at vælge: Gem kladde automatisk ved sideskift, midlertidig visning og når der er valideringsfejl.  |  ![Gem kladde automtatisk](../sites/default/files/selvbetjening.aarhuskommune.dk_da_admin_structure_webform_manage_test_release_13022022_settings_submissions_config_entitytest_release_13022022_1.png)  
6 | Hvis du ønsker at kladden automatisk skal loades ved load af formularen, kan du vælge: Autoudfyld med tidligere kladde |  ![Autoudfyld med kladde](../sites/default/files/selvbetjening.aarhuskommune.dk_da_admin_structure_webform_manage_test_release_13022022_settings_submissions_config_entitytest_release_13022022_3.png)  
6 | Gem indstillinger |  ![Gem](../sites/default/files/pernille_thorsen_selvbetjening.aarhuskommune.dk_2_0.png)  
7 | Gå til fanen Adgang, hvor du skal aktivere "Se egne indsendelser" for annonyme |  ![Adgang](../sites/default/files/selvbetjening.aarhuskommune.dk_da_admin_structure_webform_manage_test_release_13022022_access_config_entitytest_release_13022022.png)  
8 | Gem indstillinger |  ![Gem](../sites/default/files/pernille_thorsen_selvbetjening.aarhuskommune.dk_2_0.png)  
  
  
**Sådan ser borgeren funktionen**

Når borgeren besøger formularen og gemmer en kladde, får de næste gang de besøger siden en notifikation om at de har gemte kladder, som de kan hente.

![Kladdevisning borger](../sites/default/files/selvbetjening.aarhuskommune.dk_da_content_test-kladde.png)

Hvis man har tilbudt muligheden for at gemme flere kladder og der er mere end én kladde, kommer man til en tabel over alle kladder. Hvis der kun er én kladde kommer man til denne kladde. 

**Ændre listen over formularer, ved flere formularer**

Ændres under Besvarelser: Submission user colomns.

NB: funktionen virker kun på kladder og ikke på indsendte besvarelser.