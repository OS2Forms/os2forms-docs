---
layout: default
title: "Kvittering til Digital postVi er i gang med at sætte OS2Forms op således at borgerne kan…"
parent: "Spørgsmål"
permalink: /spoergsmaal/kvittering-til-digital-postvi-er-i-gang-med-at-sætte-os2forms-op-saledes-at-borgerne-kan/
tags: ['Formular konfiguration', 'IT', 'Spørgsmål', 'question', 'old-id:222']
---


#  Kvittering til Digital postVi er i gang med at sætte OS2Forms op således at borgerne kan…

Emne:  Formular konfiguration

Faggruppe:  IT

Ole Gram Clausen

Digitaliseringskonsulent, Digitalisering

22-04-2021

## Spørgsmål

Kvittering til Digital post

Vi er i gang med at sætte OS2Forms op således at borgerne kan få en kvittering på det de har udfyldt sendt til deres E-Boks. Vi har fået etableret snitfladen fra OS2Forms til CIS og videre til E-boks og der kommer en kvittering igennem, men det er ikke særligt kønt. Når det lander i E-boks er det en lang tekststreng.

Er der nogen der har lavet noget der fungere og kan give et hint?

## Svar


Pernille Thorsen

Projektleder, ITK, Aarhus Kommune

04-05-2021


Hej Ole

Hvis du tilføjer elementet "Attachement PDF" til din formular burde du kunne bruge denne PDF til at sende med. 

Vi arbejder på at koble vores OS2forms på serviceplatformen (<https://digitaliseringskataloget.dk/integration/sf1600>) i ITK, Aarhus kommune, som bliver en del af flow versionen.


Anonym bruger

12-05-2021

#### Andre svar

Hej Ole,

I SBSYS attachment elementet Kan der kun angives en kort tekst i feltet "bodyText customText" og uanset hvordan du formaterer det vil det fremstå som en lang streng i e-boks. Vores ser sådan ud, selv om vi godt ved den bliver til en lang streng:   


Vi har vedtaget at tekststrengen bare skal være kort i stil med med "Kopi af dine indsendte data" og at alt relevant information man ønsker at oplyse borgeren eller virksomheden om, skal laves i PDF dokumentet der vedhæftes som der netop kan formateres som man ønsker med logo osv.


Anonym bruger

12-05-2021

#### Andre svar

Hej Ole,

Se desuden det indlæg jeg har lavet der i hovedtræk forklarer hvordan jeg har sat SBSIP op i Holstebro kommune så selvbetjeningsdesignere selv kan vælge hvordan data skal afleveres til SBSYS. 

Denne tilgang sikrer at I ikke skal lave en regel til hver eneste OS2forms formular, men kan nøjes med et simpelt sæt generiske regler.  
[https://os2forms.os2.eu/hvordan-afleverer-man-data-fra-os2forms-til-sbs…](hvordan-afleverer-man-data-fra-os2forms-til-sbsys-i-holstebro-kommune.md)