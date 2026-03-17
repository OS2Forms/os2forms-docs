---
layout: default
title: "Hvordan skjuler eller viser jeg felter i en formular når der f.eks. klikkes på en…"
parent: "Spørgsmål"
tags: ['Formular elementer', 'Spørgsmål', 'betingelser', 'question', 'old-id:228']
---


#  Hvordan skjuler eller viser jeg felter i en formular når der f.eks. klikkes på en…

Emne:  Formular elementer

A

Anonym bruger

21-05-2021

## Spørgsmål

Hvordan skjuler eller viser jeg felter i en formular når der f.eks. klikkes på en checkbox?

Nøgleord: betingelser

## Svar

A

Anonym bruger

21-05-2021 

 Svar direkte til dette svar 

I OS2Forms kan man anvende "vilkår" til at afgøre om et webform element skal vises ellers skjules.

Typisk anvendes dette når man designer en intelligent webformular der guider anvenderen (borgeren, virksomhed, medarbejder) igennem en række spørgsmål med det formål at sikre, at man får fyldestgørende data ud af henvendelsen.

Hvordan gør man? 

Typisk vil det element man ønsker at vise på baggrund af en betingelse indeholde flere webform elementer, så i udgangspunktet er det en god idé, at gruppere dem i et "Feltgruppe" element.

Når man har oprettet de Feltgrupper man ønsker at have betinget visning af, kan man tilføje et webform element det skal bruges til at afgøre om Feltgruppen skal vises ellers skjules. Det kan f.eks. være checkbox, et options element eller bare et alm. input felt.  
Når det er tilføjet formularen, kan man under "Vilkår" for Feltgrupperne specificere hvilken betingelse der skal være opfyldt for at Feltgruppen skal vises ellers skjules.

Eksempel 

Her har vi en webform med to Feltgrupper der hver indeholder et inputfelt:  


For at tilføre betingelser for visning af Feltgrupperne skal du gå til "Rediger->Vilkår" for Feltgruppen. Her kan vælges hvilken betingelse skal være opfyldt for at Feltgruppen skal være vist. I eksemplet skal Feltgruppen være synlig hvis Checkboxen ikke er markeret:

Den anden Feltgruppen kan så sættes til den omvendte betingelse. Dvs. den er skjult hvis checkbox ikke er markeret.

Resultat 

Ikke markeret:   


Markeret: