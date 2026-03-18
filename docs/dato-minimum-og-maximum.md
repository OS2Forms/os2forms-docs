---
layout: default
title: "Dato minimum og maximum"
tags: ['old-id:423']
---
**Bemærk** , at dette kun begrænser de datoer der accepteres af forms. Det har intet med formateringen af dato formater at gøre. For ændring af dato formater se [https://os2forms.os2.eu/dato-formater](dato-formater.md).

Følgende dokumentation omhandler måden hvorpå man kan bruge dato minimum og maximum i følgende elementer

  * Dato
  * Dato/Tid
  * Date list



For at specificere min/max bruges GNU date input formatet (se <https://www.gnu.org/software/tar/manual/html_chapter/Date-input-formats.html#index-date-input-formats>). 

**Grundlæggende GNU formater**

  * +1 day
  * -2 week
  * +3 month



**Vær opmærksom på** , at hvis overstående formater bruges regner systemet ud fra **dags dato**. Det vil sige, at hvis jeg den 20/9/2022 udfylder et dato element der er konfigueret med en minimum dato på +3 months, vil den kun acceptere datoer på eller efter den 20/12/2022. 

Ønsker man mere præcise datoer mere præcist, f.eks. den første i næste måned, skal man bruge nogle mere avancerede formater:

**Avancerede GNU formater**

  * first day of this month
  * first day of +3 month
  * last day of -2 month
  * monday +1 week



**Eksempel**

En valgt dato skal ligge mellem den første næste måned og den sidste dag i måneden der ligger 3 måneder fremme.

Sættes dato min til

  * first day of +1 month



og dato max til

  * last day of +3 month



Vil jeg fra dagsdato (20/9/2022) kun kunne vælge datoer fra (og med) 1/10/2022 til (og med) den 31/12/2022.

**Brug af computed twig til at udregne min, max, default value**

Det er ikke alt udregning af datoer der kan lade sig gøre i GNU. 

Ønskes en dato baseret på hvor langt inde i den nuværende måned man er, f.eks.

  * dagens dato er mellem den 1. og den 15., ønskes den 16. efter 2 måneder,
  * ellers, den 1. efter 3 måneder



Computed twig element: 

{% raw %}
twig_if:  
'#type': computed_twig  
'#title': 'twig if'  
'#access': false  
'#template': |-  
{% if "today"|date("d") < 16 %}  
{% set testdate = "first day of +2 months"|date_modify("+15 day")|date("m/d/Y") %}  
{% else %}  
{% set testdate = "first day of +3 months"|date("m/d/Y") %}  
{% endif %}

{{ testdate }}
{% endraw %}

Bemærk, at vi her bruger det amerikanske dato format, da det er dette der skal bruges i dato-elementet for at sætte min, max eller default value.

Eksempel dato element:

dato_test2:  
'#type': date  
'#disabled': true  
'#title': 'Dato ud fra twig udregning'  
'#default_value': '[webform_submission:values:twig_if]'  
'#date_date_format': ''