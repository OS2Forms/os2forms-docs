---
layout: default
title: "HejNår man har udfyldt en formular og trykker indsend. Så vil jeg gerne sende formular…"
tags: ['Formular konfiguration', 'IT', 'Spørgsmål', 'question', 'old-id:231']
---


#  HejNår man har udfyldt en formular og trykker indsend. Så vil jeg gerne sende formular…



Spørgsmål

Emne:  Formular konfiguration

Faggruppe:  IT

DJ

Ditte Jensen

Softwareudvikler, Randers Kommune

03-06-2021 

Spørgsmål

Hej

Når man har udfyldt en formular og trykker indsend. Så vil jeg gerne sende formular-informationerne til en medarbejders e-mailadresse. Hvordan gør jeg det?

Er det noget, der skal sættes op inde i OS2Forms og hvordan? Eller skal det ske udenfor? 

### Svar


Jacky Hansen

IT og digitaliseringskonsulent, Holstebro kommune

03-06-2021 

 Svar direkte til dette svar 

Hej Ditte...

Jeg har vedhæftet en lille vejledning på det jeg tror du mener. Sig til hvis det ikke var den infomation du søgte.

Bilag

OG

Ole Gram Clausen

Digitaliseringskonsulent, Digitalisering

03-06-2021 

 Svar direkte til dette svar 

Det kan man godt. Man kan lave en email handle der sender til en custom mailadresse og generere en mailadresse udfra de data der er tastet ind i formulaen. eks.

[webform_submission:values:initialer_paa_medarbejder_der_skal_have_tildelt_sapa_jobfunktion]@rudersdal.dk

[webform_submission:values:initialer_paa_medarbejder_der_skal_have_tildelt_sapa_jobfunktion] er en token som kan vælges ved den enkelte formular (gennemse tilgængelige tokens)

Så hvis der skrives OLE i initialer i formularen så sendes mailen til [ole@rudersdal.dk](mailto:ole@rudersdal.dk)

Vi bruger det til at sende en vejledning til medarbejderene når en chef bestiller en adgang til SAPA

OG

Ole Gram Clausen

Digitaliseringskonsulent, Digitalisering

03-06-2021 

 Svar direkte til dette svar 

Hov, nu gør vi det vist lidt mere komplekst end det behøves at være. Hvis det er den samme medarbejder der skal have alle indsendelser så vælges "Custom mailadresse" og medarbejderens emailadresse skrives

OG

Ole Gram Clausen

Digitaliseringskonsulent, Digitalisering

03-06-2021 

 Svar direkte til dette svar 

Hov, nu gør vi det vist lidt mere komplekst end det behøves at være. Hvis det er den samme medarbejder der skal have alle indsendelser så vælges "Custom mailadresse" og medarbejderens emailadresse skrives

A

Anonym bruger

04-06-2021 

 Svar direkte til dette svar 

Hvis du har sat din ADFS op og konfigureret simplesaml så den mapper data fra ADFS til dine brugerkonti, så kan du sørge for at en bruger ikke selv skal udfylde sin mail adresse. 

I Holstebro har vi sat simplesaml op til automatisk at provisionere brugere på baggrund af deres SAML data, samt sørget for at når man tilgår en formular til intern brug, dvs. alt der hos ligger i /content/intern, så bliver man tvunget til at logget på med singe sign on.

User provisioning i simplesaml settings:   


Tvunget login fra intern IP på intern formular:  


DJ

Ditte Jensen

Softwareudvikler, Randers Kommune

08-06-2021 

 Svar direkte til dette svar 

Hej Alle

Mange tak for svar.

Jacky, tak for vejledningen, det er præcist det, jeg har gjort. Jeg har sat min egen mail på som test, men der kommer intet. Men kan være jeg mangler et eller andet setup på formularen. Skal den gøres public, eller skal der sættes et flueben et sted for at sætte den i produktion/drift?

Anders, vi har endnu ikke sat ADFS op og konfigureret simplesaml, men det skal vi helt sikkert have kigget på. 

A

Anonym bruger

08-06-2021 

 Svar direkte til dette svar 

Hej Ditte, 

For at Drupal kan sende emails, skal konfigurationen være på plads.

Mail konfigurationen i PHP skal være sat op Der skal være en mail relay server som tillader at OS2Forms serveren sender mails via den. Drupal skal være konfigureret til at sende mails via et funktionelt mail system, typisk via PHP indbyggede mail funktion. 

Hvis mails ikke sendes, så kig i Drupals system log (under /admin/reports/dblog) og kig efter smtp fejl. 

DJ

Ditte Jensen

Softwareudvikler, Randers Kommune

08-06-2021 

 Svar direkte til dette svar 

Hej Anders 

Ok, tak for svar :)