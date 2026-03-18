---
layout: default
title: "Guide til auto-slet (Automatic purge) af indsendte formularer"
tags: ['Formular konfiguration', 'old-id:465']
---
## Guide til auto-slet (Automatic purge) af indsendte formularer

Mange formularer indeholder personfølsomme oplysninger, hvorfor det kan være nødvendigt at sikre at disse ikke bliver opbevaret i en længere periode i OS2forms.

Med auto-purge funktionen, kan du konfigurere din formular således, at den selv sletter indsendelser efter X-antal dage (som du selv konfigurer).

  1. først går du ind på den ønskede formular og derefter  

     1. Indstillinger
     2. Indsendelser.



  1. Scroll ned til” Submission purge settings”



![](../sites/default/files/1.jpg.png)

  1. I drop down menuen vælger du ”Draft and completed” hvilket betyder, at formularen først betragtes som indsendt og nedtællingen til automatisk sletning først begynder når formularen 100% færdig.



  1. I feltet ”Days to retain Submissions” vælger du hvor mange dage der skal gå, før de pågældende indsendelser skal slettes. Koordinationsgruppen opfordrer til, at der vælges 30 dage.



![](../sites/default/files/1.jpg_0.png)

  1. Bemærk: Nogle konfigurationer af Os2forms gemmer vedhæftninger i selve løsningen. Det betyder at vedhæftninger _også_ slettes af denne funktion. Formularer der indeholder vedhæftninger er ikke sikret mod auto-purge selvom man har opsat en E-mail handler. Det betyder vedhæftninger i fx formularer hvor der skal vedhæftes dokumentation, skal man være sikker på at hente vedhæftningerne ned lokalt.