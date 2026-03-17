---
layout: default
title: "Hvordan kontrolleres om et indtastet CPR-nummer er korrekt?"
parent: "Spørgsmål"
tags: ['Formular elementer', 'IT', 'Spørgsmål', 'question', 'old-id:250']
---


#  Hvordan kontrolleres om et indtastet CPR-nummer er korrekt?

Emne:  Formular elementer

Faggruppe:  IT

A

Anonym bruger

29-10-2021

## Spørgsmål

Hvordan kontrolleres om et indtastet CPR-nummer er korrekt?

## Svar

A

Anonym bruger

29-10-2021 

 Svar direkte til dette svar 

Modulus-kontrol bruges ikke mere.

Vi kan lave et regulært udtryk (regex) på tekstfeltets validering / mønster sådan:

^(?:(?:31(?:0[13578]|1[02])|(?:30|29)(?:0[13-9]|1[0-2])|(?:0[1-9]|1[0-9]|2[0-8])(?:0[1-9]|1[0-2]))[0-9]{2}-?[0-9]|290200-?[4-9]|2902(?:(?!00)[02468][048]|[13579][26])-?[0-3])[0-9]{3}|000000-?0000$ 


Lars Lyngsøe Højberg

IT-Konsulent, Rebild Kommune / Center Børn og Unge

26-11-2021 

 Svar direkte til dette svar 

Hej Leif

Har du et link til valideringen af CPR, som man gør idag? - Jeg kunne godt tænke mig at nedbryde og forstå din regex med det i hovedet :)

Tak :)

A

Anonym bruger

29-11-2021 

 Svar direkte til dette svar 

Hvis det bare er Regex'en du vil se, så kan du bruge denne: <https://ihateregex.io/playground/> eller <https://regex101.com/>