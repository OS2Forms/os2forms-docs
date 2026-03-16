---
layout: default
title: "Forudfyld formular elementer fra URL"
tags: ['Formular konfiguration', 'old-id:417']
---
Du kan sende oplysninger med i url, for at kunne have én formular som sendes til forskellige modtagere eller fordi du ved noget som udfylder ikke ved.

Trin | Handling | Illustration  
---|---|---  
1 | Gå til eller opret formular med de ønskede felter. I dette eksempel vil jeg sørge for at feltet "Oplysning" er markeret, når formularen besøges  
  
|  ![Formular med udfyldt afkrydsningsfelt](../sites/default/files/formular_medbragt_data_selvbetjening.aarhuskommune.dk_1.png)  
2 |  Du skal aktivere at det er muligt. Gå til Indstillinger => Formular [site]/admin/structure/webform/manage/[formular]/settings/form Her skal du markere "Prepopulate" => Allow all elements to be populated using query string parameters |   
3 |  Nu skal du lave den url du gerne vil have. Du skal bruge nøglen for feltet og værdien, som skal bringes videre.  
Disse findes på Byg-siden: [site]/da/admin/structure/webform/manage/[formular]  
Notér disse. Fx. modtager og oplysning |  ![Find nøgle og værdi](../sites/default/files/formular_medbragt_data_selvbetjening.aarhuskommune.dk_.png)  
4 |  Tilføj til slutningen af url'en: "?[nøgle]=[værdi]" fx. fra ovenstående: "?modtager=oplysning"  
  
**NB** : hvis der allerede er "?" i url, skal du i stedet indsætte "&" |   
5 |  |