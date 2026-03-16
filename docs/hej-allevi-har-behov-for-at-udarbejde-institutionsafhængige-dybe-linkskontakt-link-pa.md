---
layout: default
title: "Hej alle.Vi har behov for at udarbejde institutionsafhængige dybe links/kontakt-link på…"
tags: ['Børn og Unge', 'Formular elementer', 'Spørgsmål', 'dybe links', 'question', 'referencer', 'old-id:240']
---
Brugernavn

Adgangskode

#  Hej alle.Vi har behov for at udarbejde institutionsafhængige dybe links/kontakt-link på…

[ Del med en kollega ](hej-allevi-har-behov-for-at-udarbejde-institutionsafhængige-dybe-linkskontakt-link-pa.md)

[ Contact editorial staff ](hej-allevi-har-behov-for-at-udarbejde-institutionsafhængige-dybe-linkskontakt-link-pa.md)

Spørgsmål

Emne:  [Formular elementer][notfound]

Faggruppe:  [Børn og Unge][notfound]

KP

[Kenneth Poulsen][notfound]

IT-konsulent, Rudersdal kommune, Dagtilbudsområdets Sekretariat

20-08-2021 

Spørgsmål

Hej alle.

Vi har behov for at udarbejde institutionsafhængige dybe links/kontakt-link på vores hjemmesider.

Ca. 40 institutioners hjemmesider skal hver have et link der fører til en webformular.Vi har brug for at trække URL på udgangssiden med over i formularen, så det korrekte børnehus er valgt og borgeren derfor ikke skal tage stilling til / selv vælge institution. 

Nogen der har et forslag til hvilket token der skal benyttes for at få institutions-URL'en med? Så skal jeg nemlig ikke lave ca. 40 dybe links..

Pft. Kenneth

Nøgleord: [referencer][notfound] [dybe links][notfound]

### Svar

![](../sites/default/files/styles/large/public/images/user_profiles/img_20210821_183356.png%3Fitok=F7z504qw)

[Lars Lyngsøe Højberg][notfound]

IT-Konsulent, Rebild Kommune / Center Børn og Unge

26-10-2021 

[ Svar direkte til dette svar ][notfound]

Hej Kenneth

Har du fundet en løsning på problematikken? Vi kan eventuelt tage et 10-minutters Teamsmøde om udfordringen - så skal jeg prøve at lege lidt :)

/Lars

KP

[Kenneth Poulsen][notfound]

IT-konsulent, Rudersdal kommune, Dagtilbudsområdets Sekretariat

27-10-2021 

[ Svar direkte til dette svar ][notfound]

Hej Lars

Nej, jeg har endnu ikke fundet en løsning. Jeg har prøvet mig frem med forskellige tokens, men er ikke blevet klogere. Er det noget du har afprøvet før med succes, for så giver jeg gerne en kop virtuel kaffe over Teams en dag ;-)

/kn1

A

Anonym bruger

29-10-2021 

[ Svar direkte til dette svar ][notfound]

Hvis du opretter et skjult e-mail felt og markerer det som "prepopulate".

Så kan du sende en parameter med over, fx /formular?modtager=[xyz@kommune.dk](mailto:xyz@kommune.dk)

Med lidt hokus-pokus kan du godt nøjes med at sende xyz med, og så tilføje @kommune.dk i formularen.

Du kan også vælge at indsætte formularen på en formularside, og så tilføje modtager i "Default submission data (YAML)" til modtagerfeltet. Her vil modtageradressen ikek være synlig.