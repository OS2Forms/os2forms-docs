---
layout: default
title: "Var det Ballerup der havde fundet en løsning på at regne alder ud fra CPR nummer? Og vil…"
parent: "Spørgsmål"
permalink: /spoergsmaal/var-det-ballerup-der-havde-fundet-en-løsning-pa-at-regne-alder-ud-fra-cpr-nummer-og-vil/
tags: ['Formular elementer', 'IT', 'Spørgsmål', 'question', 'old-id:271']
---


#  Var det Ballerup der havde fundet en løsning på at regne alder ud fra CPR nummer? Og vil…

Emne:  Formular elementer

Faggruppe:  IT

Ole Gram Clausen

Digitaliseringskonsulent, Digitalisering

11-11-2021

## Spørgsmål

Var det Ballerup der havde fundet en løsning på at regne alder ud fra CPR nummer? Og vil I dele?

## Svar


Anonym bruger

10-01-2022


Jeg har oprettet et Computed Twig med dette indhold:

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
  
Jeg har desuden oprettet et Værdifelt med minimumsalderen (fx 18).

En advarselsboks hvis alder < minimumsalder.

Knappen "Næste" er deaktiveret hvis alder < minimumsalder.