---
layout: default
title: "Hvordan laver man udregninger med computed twig?"
tags: ['Digitalisering', 'Formular elementer', 'Spørgsmål', 'question', 'old-id:426']
---
Brugernavn

Adgangskode

#  Hvordan laver man udregninger med computed twig? 

[ Del med en kollega ](hvordan-laver-man-udregninger-med-computed-twig.md)

[ Contact editorial staff ](hvordan-laver-man-udregninger-med-computed-twig.md)

Spørgsmål

Emne:  [Formular elementer][notfound]

Faggruppe:  [Digitalisering][notfound]

![](../sites/default/files/styles/large/public/images/user_profiles/morten_gundelach_0.jpg%3Fitok=73ocLw--)

[Morten Gundelach][notfound]

IT-Projektleder, Hillerød Kommune, Digitalisering og IKT-drift

13-10-2022 

Spørgsmål

Hvordan laver man udregninger med computed twig? 

### Svar

![](../sites/default/files/styles/large/public/images/user_profiles/morten_gundelach_0.jpg%3Fitok=73ocLw--)

[Morten Gundelach][notfound]

IT-Projektleder, Hillerød Kommune, Digitalisering og IKT-drift

14-10-2022 

[ Svar direkte til dette svar ][notfound]

Hvordan man laver udregninger med Computed twig elementet, kan jeg ikke helt forklare, men jeg kan vise et eksempel

Hvordan man laver udregninger med Computed twig elementet kan jeg ikke helt forklare, men jeg kan give et eksempel på, hvordan det er gjort. Tak til udvikler Mikkel fra Aarhus ITK for at hjælpe mig med det.

I mit eksempel skal består regneopgaven i at lægge tal sammen fra et "Custom composite" element, der fungerer som en tabel. Resultatet præsenteres i formularen direkte af "Computed twig" elementet. Som et ekstra benspænd, kan brugeren tilføje flere rækker i tabellen, så det skal, der tages højde for. Se vedhæftede screenshot "Computed twig".

Koden skrives i feltet ”Computed value/markup” og ser sådan her ud:

{% raw %}
{{ data.ruten|default([])|reduce((carry, row) => carry + row.kilometer|default(0), 0) }}
{% endraw %}

I rullemenuen ”Remove whitespace around the” vælges “computed value and between HTML tags”.

Bilag