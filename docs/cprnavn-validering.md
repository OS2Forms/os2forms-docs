---
layout: default
title: "CPR/navn validering"
tags: ['Formular elementer', 'old-id:416']
---
Det er muligt at tilføje et sammensat element til din formular, hvor du beder medarbejdere eller borgere om at indtaste andres CPR nummer og navn. Dette kan fx bruges til at ansøge på vegne af andre, som børn eller forældre eller partnere, eller til at sikre at et brev/formular sendes det rigtige sted hen og ikke til en anden borger.  
  
Denne funktion laver et CPR opslag på at fornavnet stemmer overens med CPR-nummeret. Hvis det ikke stemmer overens kan brugeren ikke få lov til at få videre med formularen og får afvide at cpr-nummer og navn ikke stemmer overens. Det er kun fornavnet, for at opslaget ikke kan bruges til opslag af fulde navne på cpr-numre og af hensyn til de personer med bindestreg, aprostoffer og lignende. 

Du skal være opmærksom på at du ikke tilbyder ondsindede at finde personers navne/cpr numre ved brug af dette element. Derfor er validering ikke direkte i formularen, men først ved videre/indsend-knapperne det valideres.

Sørg for

  * at formular med elementet er bag MitID (så laver folk opslag fra deres bruger og misbrug er mindre sandsynligt)
  * at gemme indsendelser ved sideskift (så opbevares forsøg og du kan melde som sikkerhedsbrud, hvis du opdager flere indsendelser)
  * at vurdére behov for feltet faktisk er der 



Trin | Handling | Illustration  
---|---|---  
1 | Gå til eller opret formular |   
2 | Vælg tilføj element |  ![Tilføj element](../sites/default/files/cvr-test_selvbetjening.aarhuskommune.dk__0.png)  
3 | Vælg "CPR/navn opslag" |  ![cpr/navn select](../sites/default/files/cpr_validering_selvbetjening.aarhuskommune.dk_.png)  
4 | Ændre evt. titel på felter.  
  
NB: Du må ikke fravælge cpr eller navn som synlige, da funktionen så ikke vil virke.  |   
5 | Klik "Gem" |   
  
Funktionen fungerer med digitaliseringskataloget (rammearkitekturen) og virker med sf1520 og sf1320, hvis kommunen har lavet forbindelse til en af servicene og har konfigureret CPR opslag på [site]/admin/config/system/os2web-datalookup.