---
title: Testvejledning
layout: default
nav_order: 2
parent: Drupal 11 - 2026/Q3
---

# Drupal 11 opgradering - Testvejledning

Denne testvejledning beskriver hvilke ændringer i OS2forms der er foretaget og hvad du som minimum bør teste i testfasen.

URL til testmiljø: [test.os2forms.dk](https://test.os2forms.dk/).
Hvis du ikke har en bruger til at kunne logge ind med, så kontakt Bellcom på [support@bellcom.dk](mailto:support@bellcom.dk).

Hvis du finder fejl, så skal du melde fejlen ind ved at lave et "sub-issue" på [dette issue](https://github.com/OS2Forms/os2forms/issues/247). På den måde kan alle nemlig se, hvad der er meldt ind - og vi har en historik i hvad der blev meldt ind. Husk at jo bedre du beskriver fejlen (hvad gjorde du umiddelbart før, er det kun ved specielle forhold at den fejler mv.), jo nemmere har vi ved at genskabe fejlen - og dermed få den rettet.

![Create sub-issue](https://raw.githubusercontent.com/OS2Forms/os2forms-docs/main/docs/assets/2026-Q3-drupal-11-opgradering-testvejledning-create-sub-issue.jpg)

Når du har gennemført testen, så beder vi om at skrive en kommentar på [dette issue](https://github.com/OS2Forms/os2forms/issues/247), så vi ved at du har testet.

---

## Hvad er ændret?

Drupal der er motoren bag OS2forms er blevet opgraderet fra version 10 til version 11.

## Hvad bør som minimum blive testet?

1. **Oprettelse og rettelse af en simpel formular**<br>
   Opret en simpel formular, med nogle af de mest gængse elementer, som du ofte bruger. Sæt en handler på formularen og kontroller at handleren udfører den handling, som du har sat den til. Lav evt. nogle vilkår på nogle af elementerne, for at se at dette også virker som tidligere. Lav rettelser i formularen og kontroller at de rettelser slå igennem.

2. **Afprøv en formualr med flow**<br>
   For at sikre at flow-delen virker som forventet, så bedes du afprøve en formular med flow. Du kan enten afprøve [denne simple formular](https://test.os2forms.dk/da/form/bellcom-vi-leger-tagfat-step-1) eller oprette din egen formular og opsætte flow på den.

3. **Afprøv NemLog-in (MitID)**<br>
   Afprøv at NemLog-in virker, både med MitID privat og MitID erhverv. Det er vigtigt at du tester at data bliver udfyldt som det skal afhængig af om du vælger at logge ind som privatperson eller som virkesomhed. Det kan evt. gøres via [denne formular](https://test.os2forms.dk/da/form/bellcom-test-af-mitid-elementer).

   **Bemærk:** Vores testmiljø er sat op til at hente CPR data på CPR-nummer 1012628000 (Susanne Bech Hansentest), så selvom du prøvet at logge ind med dit private MitID, så vil det være Susanne Bech Hansentests data der bliver hentet ind i MitID elementerne. Dette bevirker også at hvis du prøver at bruge nogle af MitID børne-elementerne, så vil det stadig være Susanne Bech Hansentests data der kommer i de elementer.

4. **Digital Signatur**<br>
   Afprøv at Digital Signatur virker. Dette gøres nemmest via [denne formular](https://test.os2forms.dk/da/form/bellcom-digital-signatur-test), hvor du også kan se brugernavn/adgangskode til at kunne signere via den testperson, som er tilknyttet testmiljøet (du kan IKKE bruge dit eget MidID, hverken privat eller erhverv).

5. **Digital Post**<br>
   Afprøv at bruge handleren "Digital post (sf1601)" til at afsende Digital Post med. Dette kan evt. gøres via [denne simple formular](https://test.os2forms.dk/da/form/bellcom-digital-post-simpel-test).

   **Bemærk:** Vores testmiljø er sat op til at hente CPR data på CPR-nummer 1012628000 (Susanne Bech Hansentest), så der kan kun sendes Digital Post i det tidsrum herunder, hvor vi har sat testmiljøet til at benytte rigtig CPR data!

Udover ovenstående specifikke tests, så vil vi rigtig gerne have at du tester så meget at det som du normalt bruger i OS2forms til hverdag, som muligt. Så hvis der er nogle specielle elementer, som du ved I bruger i din kommune, så test dem gerne, så vi kan se at de også virker i Drupal 11.

## Periode med rigtig CPR data

I perioden fra **tirsdag den 22/9 kl. 8.00** til **fredag den 25/9 kl. 14.00** vil testmiljøet på [test.os2forms.dk](https://test.os2forms.dk/) være sat op til at benytte rigtig CPR data, hvorfor evt. resultater der indsendes i dette tidsrum bør slettes hurtigst muligt efter test.
