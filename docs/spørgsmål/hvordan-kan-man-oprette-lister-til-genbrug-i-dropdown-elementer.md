---
layout: default
title: "Hvordan kan man oprette lister til genbrug i dropdown elementer?"
parent: "Spørgsmål"
tags: ['Konfiguration/opsætning af installation', 'Spørgsmål', 'dropdown', 'genbrug', 'lister', 'options', 'question', 'valg', 'old-id:248']
---


#  Hvordan kan man oprette lister til genbrug i dropdown elementer?

Emne:  Konfiguration/opsætning af installation

A

Anonym bruger

07-10-2021

## Spørgsmål

Hvordan kan man oprette lister til genbrug i dropdown elementer?

Nøgleord: lister dropdown genbrug valg options

## Svar

A

Anonym bruger

07-10-2021 

 Svar direkte til dette svar 

I OS2Forms er det muligt for administratoren at oprette standard lister der kan bruges som valg muligheder i "Vælg" webform elementer.   
Dermed er det muligt at vedligeholde en liste af valgmuligheder ét sted og bruge dem på tværs af flere webforme, hvilket både gør det nemmere at opdatere hvis der er ændringer og det sikrer data-konsistens på tværs af webforme.

Hvordan gør man? 

Det kræver administratoradgang at oprette nye og redigere i eksisterende lister.   
Menuen hedder "Valg" og ligger under "Struktur"->"Webformularer" ( https://{os2forms-server}/admin/structure/webform )

Her kan man se en oversigt over standard lister som følger med Webform modulet i OS2forms og man har herfra mulighed for at redigere de eksisterende lister, samt tilføje nye.

Tilføj ny:

Klik på knappen "+ Tilføj muligheder"  


Angiv navn på den liste du gerne vil oprette. Sørg for at den har et beskrivende navn, så det er genkendeligt når listen senere skal anvendes i en webform.

Vælg eller angiv en ny kategori ("Anden...") til listen og tryk "Gem"

Rediger elementer i liste:

Find den liste du gerne vil redigere på oversigten. Brug evt. Filter funktion til at fremsøge den:  


Vælg "Rediger" under muligheder længst til højre.

Værdier for eksisterende muligheder kan nu redigere og der kan tilføjes nye ved hjælp af "Tilføj" knappen nederst.   
Evt. tomme linjer bliver ignoreret når der klikkes "Gem".  


Som vist i eksemplet ovenfor, behøver værdien ("OPTION VALUE") og teksten ("OPTION TEXT") på elementet ikke være den samme. 

Når listen anvendes vil det være værdien og ikke teksten der medtages i indsendelsedata.

Avanceret redigering af en liste

Hvis det er en meget stor liste kan man med fordel vælge "Kilde" øverst på redigeringssiden. Her kan man redigere listen direkte i YAML tekstformat.   


Syntaksen er ret lige til og angives som en <værdi>: <tekst> pr. linje.  
Man skal være opmærksom på, at hvis der er mellemrum i teksten, så skal man sætte anførselstegn rundt om, som vist i eksemplet.