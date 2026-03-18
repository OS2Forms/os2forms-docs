---
layout: default
title: "Opsætning af Digital Post på en formular"
tags: ['Formular konfiguration', 'old-id:442']
---
Os2forms kan sende NgDP via <https://digitaliseringskataloget.dk/integration/sf1601>. Administratorer kan se om modulet er installeret. 

Forudsætninger for brug af funktionen er, at du på din formular har følgende 

  1. CPR nummer på borger, som digital post skal sendes til
  2. PDF attachement, som bliver til det brev der sendes. 



Hvis du ikke har det, skal du starte med at lave det i Byg/Build ( [site]/da/admin/structure/webform/manage/[form] ).

Trin | Handling | Illustration  
---|---|---  
1 | Gå til Indstillinger => e-mails/handlere |   
2 | Vælg "tilføj handler" |   
3 | Vælg Digital Post (sf1601) |   
4 |  Du skal nu udfylde de relevante felter  
  
**Titel** : Kun til intern brug  
**Type** : Hvordan digital post skal afsendes. Ved at vælge automatisk laves der først tjek af hvad borger er registreret til og sender derefter til den rigtige kanal.  
Fysisk post og Digital post kan bruges til at tvinge afsendelsesform afsted, men hvis der vælges Digital post og borger er fritaget for Digital post vil borgeren ikke   
  
**Element som indeholder CPR-nummer:** vælg tekstfelt, CPR eller CVR felt fra formularen.  
**Element som indeholder dokument som skal sendes:** Vælg Pdf attachement element fra formularen **Sender label:** afsenderens navn (sendes på SMS, hvis borger er tilmeldt NemSMS)  
**Besked:** besked titel    
**Actions:** Der kan vælges en til flere actions. Der er som standard kun oprettet én action, men når du gemmer elementet med en action, vil der komme mulighed for at oprette en action mere næste gang du redigerer.   
  
En action består af en type, en url og en tekst, som det ses nedenfor. Du kan definere teksten til venstre. Teksten til højre er defineret ud fra typen og du skriver url i actionen.   
  
![Actions eksempel](../sites/default/files/digitalpost.e-boks.dk_mailboxid_cb956922-204b-4adc-96d8-2f0791360aec_messageid_b7cb9a55-6b24-455f-b320-41ef1ddf516f_languageda.png) |   
5 | Klik gem. |