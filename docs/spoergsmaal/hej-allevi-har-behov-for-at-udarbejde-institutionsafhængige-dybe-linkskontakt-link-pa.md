---
layout: default
title: "Hej alle.Vi har behov for at udarbejde institutionsafhængige dybe links/kontakt-link på…"
parent: "Spørgsmål"
permalink: /spoergsmaal/hej-allevi-har-behov-for-at-udarbejde-institutionsafhængige-dybe-linkskontakt-link-pa/
tags: ['Børn og Unge', 'Formular elementer', 'Spørgsmål', 'dybe links', 'question', 'referencer', 'old-id:240']
---

#  Hej alle.Vi har behov for at udarbejde institutionsafhængige dybe links/kontakt-link på…

Emne:  Formular elementer

Faggruppe:  Børn og Unge

Kenneth Poulsen

IT-konsulent, Rudersdal kommune, Dagtilbudsområdets Sekretariat

20-08-2021

## Spørgsmål

Hej alle.

Vi har behov for at udarbejde institutionsafhængige dybe links/kontakt-link på vores hjemmesider.

Ca. 40 institutioners hjemmesider skal hver have et link der fører til en webformular.Vi har brug for at trække URL på udgangssiden med over i formularen, så det korrekte børnehus er valgt og borgeren derfor ikke skal tage stilling til / selv vælge institution. 

Nogen der har et forslag til hvilket token der skal benyttes for at få institutions-URL'en med? Så skal jeg nemlig ikke lave ca. 40 dybe links..

Pft. Kenneth

Nøgleord: referencer dybe links

### Svar


Lars Lyngsøe Højberg

IT-Konsulent, Rebild Kommune / Center Børn og Unge

26-10-2021

Hej Kenneth

Har du fundet en løsning på problematikken? Vi kan eventuelt tage et 10-minutters Teamsmøde om udfordringen - så skal jeg prøve at lege lidt :)

/Lars

Kenneth Poulsen

IT-konsulent, Rudersdal kommune, Dagtilbudsområdets Sekretariat

27-10-2021 

#### Andre svar

Hej Lars

Nej, jeg har endnu ikke fundet en løsning. Jeg har prøvet mig frem med forskellige tokens, men er ikke blevet klogere. Er det noget du har afprøvet før med succes, for så giver jeg gerne en kop virtuel kaffe over Teams en dag ;-)

/kn1


Anonym bruger

29-10-2021 

#### Andre svar

Hvis du opretter et skjult e-mail felt og markerer det som "prepopulate".

Så kan du sende en parameter med over, fx /formular?modtager=[xyz@kommune.dk](mailto:xyz@kommune.dk)

Med lidt hokus-pokus kan du godt nøjes med at sende xyz med, og så tilføje @kommune.dk i formularen.

Du kan også vælge at indsætte formularen på en formularside, og så tilføje modtager i "Default submission data (YAML)" til modtagerfeltet. Her vil modtageradressen ikek være synlig.