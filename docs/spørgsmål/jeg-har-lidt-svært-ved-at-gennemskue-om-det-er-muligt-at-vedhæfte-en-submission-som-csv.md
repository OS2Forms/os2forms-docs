---
layout: default
title: "Jeg har lidt svært ved at gennemskue om det er muligt at vedhæfte en submission som .csv,…"
parent: "Spørgsmål"
tags: ['Arbejdsmarked', 'Digitalisering', 'Formular konfiguration', 'IT', 'Spørgsmål', 'csv', 'excel', 'mail', 'pdf', 'question', 'old-id:223']
---


#  Jeg har lidt svært ved at gennemskue om det er muligt at vedhæfte en submission som .csv,…

Emne:  Formular konfiguration

Faggruppe:  Arbejdsmarked Digitalisering IT

MS

Mads Skarnager

Digitaliseringskonsulent, Vordingborg Kommune - IT

26-04-2021

## Spørgsmål

Jeg har lidt svært ved at gennemskue om det er muligt at vedhæfte en submission som .csv, på samme måde som det kan gøres med en PDF handler. 

Alternativt at lave en scheduled mail som sender nye submissions siden sidst.

Er der nogen der har lavet noget der gør dette?

Nøgleord: excel csv pdf mail

## Svar

A

Anonym bruger

12-05-2021 

 Svar direkte til dette svar 

Hej Mads

Jeg ved ikke om der findes et attachment element der laver csv filer. Jeg tror eneste mulighed er at lave et scheduled job der email webform submissions på bestemte tidspunkter. Webformsubmission kan hentes som cvs filer og jeg har google mig frem til at man også godt kan få dem tilsendt.

Alternativt skal I kigge på at lave et view til webform submissions med et XML eller JSON display? Så vil I kunne trække submission data når i lyster over i f.eks. jeres datawarehouse.