---
layout: default
title: "Hvordan man lave simple beregninger direkte i en formular?"
parent: "Spørgsmål"
tags: ['Formular elementer', 'Spørgsmål', 'beregninger', 'question', 'old-id:242']
---


#  Hvordan man lave simple beregninger direkte i en formular?

Emne:  Formular elementer

A

Anonym bruger

31-08-2021

## Spørgsmål

Hvordan man lave simple beregninger direkte i en formular?

Nøgleord: beregninger

## Svar

A

Anonym bruger

31-08-2021 

 Svar direkte til dette svar 

For at lave beregninger direkte i en formular kan man anvende elementet "Computed Twig".

Her er et simpelt eksempel på en formular der både kan lave beregninger på baggrund af værdier der indtastes direkte i et tekstfelt eller ud fra et "Antal" element hvor antallet ganges med en fast værdi. 

Formular 

Formular struktur 

Forklaring på formular elementer 

pris_bestilling_1: "Værdi" element der er sat til en fast pris. Værdien af elementet anvendes i beregningen.  
beregnet_total_: "Computed Twig" element der laver selve beregningen og dynamisk opdaterer værdien i formularen. Se detaljer forneden.  
direkte_udgift: "Tekstfelt" der anvendes til indtastning af et hel- eller komma-tal der adderes til den totale værdi.  
bestilling_1 + bestilling_2: "Antal" elementer der bruges til at vælge hvor mange af den angive type der ønske. Det angivne antal ganges med en fast pris og adderes til den beregnede total.

Beregninger i Computed Twig Element 

Computed Twig elementet "beregnet_total_" er konfigureret således.

Twig kode / markup 

Dette er indholdet af twig elementet.

Generelle tips: 

{% raw %}
{# #} bruges til kommentarer der ikke har nogen betydning for output eller beregninger. {% set "variabel" = "værdi" %} bruges til at definere variabler og give dem en værdi {{ <navn på variabel>|<fast tekst> }} bruges til output af den værdi twig elementet skal have. Indstillinger for elementet afgør om det skal vise på formularen og om det skal opdateres dynamisk. 

Læs evt. mere om Twig [her](https://twig.symfony.com/)

{# Her erklæres variabler til brug i beregninen #}  
{% set bestilling_1_pris = data.pris_bestilling_1 %}  
{% set bestilling_2_pris = 23.50 %}

{# Her udføres selve beregningen der gemmes i calc_total_pris #}  
{% set calc_total_pris = data.direkte_udgift_ + (data.bestilling_1 * bestilling_1_pris) + (data.bestilling_2 * bestilling_2_pris) %}

{# Dette er output som vises i formularen og i submission #}  
{{calc_total_pris}}  
{% endraw %}

A

Anonym bruger

31-08-2021 

 Svar direkte til dette svar 

Her er en kopi af vores "Tips og Tricks" formular der bl.a. indeholder eksemplet på beregninger med Computed Twig elementet.

Den kan importeres direkte i din egen løsning.

Bilag


Morten Gundelach

IT-Projektleder, Hillerød Kommune, Digitalisering og IKT-drift

16-03-2022 

 Svar direkte til dette svar 

Hej Anders,  
  
Det er super det her! Jeg har prøvede at se youtube videoer for at blive klogere på computed tokens, men som djøf'er er mine kode-skills ikke ligefrem øverst i kompetenceprofilen.   
  
Jeg har åbnet den i notepad og klippet den ind i kilde i en ny formular, men det ser ikke rigtigt ud.  
  
Jeg har hentet yaml-filen, men jeg kan simpelthen ikke gennemskue hvordan jeg bruger den. - Altså tips og trics.  
  
Mvh

Morten