---
layout: default
title: "Er det muligt at lave alderskontrol på baggrund af CPR-nummer fra NemID?Fx for at sikre…"
tags: ['Formular elementer', 'Spørgsmål', 'question', 'old-id:211']
---


#  Er det muligt at lave alderskontrol på baggrund af CPR-nummer fra NemID?Fx for at sikre…

Emne:  Formular elementer

A

Anonym bruger

22-02-2021

## Spørgsmål

Er det muligt at lave alderskontrol på baggrund af CPR-nummer fra NemID?

Fx for at sikre at personen er fyldt 18 eller er mellem 18 og 67 år gammel?

## Svar

OG

Ole Gram Clausen

Digitaliseringskonsulent, Digitalisering

23-02-2021 

 Svar direkte til dette svar 

Umiddelbart tror jeg ikke det kan lade sig gøre. Det er muligt at lave vilkår for elementer hvor man kan bestemme om et eller flere elementer skal være synlige alt efter om CPR er større eller midre end en given værdi. Det kan løse problemet i dag, men værdien skal skiftes hver dag.

Der er en token "Current-date" der muligvis kan bruges til noget, men det kræver at CPR kan omsættes til fødselsdato i samme format for dags dato

AL

Anders Larsen

OS2Forms koordinator, Holstebro

27-10-2021 

 Svar direkte til dette svar 

Du kan lave beregninger på CPR Nummer med et calculated Twig element.

Twig indeholde standard strenge og arimetiske operationer som du burde kunne bruge til at konvertere CPR til dato.

A

Anonym bruger

27-10-2021 

 Svar direkte til dette svar 

Jeg fandt selv ud af at gøre det ved hjælp af Twig. 

Sig til hvis andre kan bruge løsningen.


Lars Lyngsøe Højberg

IT-Konsulent, Rebild Kommune / Center Børn og Unge

27-10-2021 

 Svar direkte til dette svar 

Hej Leif

Det kan vi! ;) Tak

A

Anonym bruger

27-10-2021 

 Svar direkte til dette svar 

{% raw %}
{% set bddate = data.cpr|slice(0,2) %}  
{#default value here:#}  
{% if not bddate|abs %}  
{%set bddate ="01" %}  
{% endif %} 

{% set bdmonth = data.cpr|slice(2,2) %}  
{#default value here:#}  
{% if not bdmonth|abs %}  
{%set bdmonth ="01" %}  
{% endif %} 

{% set bdyear = data.cpr|slice(4,2) %}  
{#default value here:#}  
{% if not bdyear|abs %}  
{%set bdyear ="01" %}  
{% endif %}

{# Finding century #}  
{% set check = data.cpr|slice(6,1) %}  
{#'Debug check: '~check#}  
{#default value here:#}  
{% if not check|abs %}  
{%set check ="1" %}  
{% endif %}

{% if check + 0 == 0 %}  
{% set century = "19" %}  
{#'century 0:' ~ century#}  
{% endif %}

{% if check + 0 < 4 %}  
{% set century = "19" %}  
{#'century 1:' ~ century#}  
{% endif %}

{% if check + 0 == 4 %}  
{% if bdyear < 39 %}  
{% set century = "20" %}  
{% else %}  
{% set century = "19" %}  
{% endif %}  
{#'century 2: '~ century#}   
{% endif %}

{% if 4 < check + 0 and check + 0 < 9 %}  
{% set century = "20" %}  
{#'century 3: '~ century#}   
{% endif %}

{% if check + 0 == 9 %}  
{% if bdyear < 37 %}  
{% set century = "20" %}  
{% else %}  
{% set century = "19" %}  
{% endif %}   
{#'century 4: '~ century#}   
{% endif %}

{% set bday = century ~ bdyear ~ bdmonth ~ bddate %}   
{% set today = "now"|date("Ymd") %}  
{% set agelong= today-bday %}

  
{{agelong//10000}}  
{% endraw %}

Husk at sætte output til "ren tekst".