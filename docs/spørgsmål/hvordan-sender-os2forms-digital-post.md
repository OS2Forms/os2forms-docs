---
layout: default
title: "Hvordan sender OS2Forms digital post?"
parent: "Spørgsmål"
tags: ['Formular konfiguration', 'IT', 'NGDP', 'Spørgsmål', 'aflevering', 'digital post', 'question', 'old-id:245']
---


#  Hvordan sender OS2Forms digital post?

Emne:  Formular konfiguration

Faggruppe:  IT

A

Anonym bruger

14-09-2021

## Spørgsmål

Hvordan sender OS2Forms digital post?

Nøgleord: NGDP digital post aflevering

## Svar

A

Anonym bruger

14-09-2021 

 Svar direkte til dette svar 

OS2Forms har ikke nogen direkte integration til Digital Post infrastrukturen, hverken den nuværende eller NgDP.

Som med alle andre afleveringer til specifikke fagsystemer, så skal afsendelse til digital post i OS2Forms håndtere af en 3. parts service, f.eks. en integrationsplatform. Mange OS2Forms anvendere bruger SBSIP platformen der har afleveringsmoduler til forskellige fagsystemer og digital post.

Hvorfor har vi ikke lavet en direkte integration til digital post infrastrukturen?  
Fordi de fleste kommuner allerede har mindst ét og typisk flere systemer der kan afsende beskeder som digital post. Dette er f.eks. OneTooX (Doc2Mail), Strålfors Connect, SBSIP og andre lokale proxykomponenter der benytter SF1600 eller SF1601.

OS2Forms projektet skal ikke finansiere udvikling og vedligehold af endnu et system til dette, men derimod understøtte at kunne aflevere data til alle disse services.

I forbindelse med NgDP er det endvidere et krav (anbefaling), at man skal begrænse antallet af afsender systemer der integrerer direkte NgDP infrastrukturen til max. 5.   
KOMBIT har på vegne af kommunerne realiseret Postkomponenten (hhv. SF1601 og SF1606) der netop skal anvendes som proxy ift. NgDP.   
Læs mere om postkomponenten her: [https://digitaliseringskataloget.dk/løsninger/postkomponenten](https://digitaliseringskataloget.dk/l%C3%B8sninger/postkomponenten)


Pernille Thorsen

Projektleder, ITK, Aarhus Kommune

21-09-2021 

 Svar direkte til dette svar 

Aarhus Kommune har ikke SBSIP og har derfor udviklet en forbindelse til serviceportalens sf1600.  
Modulet er indtil videre placeret på <https://github.com/itk-dev/os2forms_digital_post>.

For at bruge modulet skal man yderligere:

Finde Myndighedsid (kommunens e-boks administrator skal finde ID på "Serviceportalen" i den administrative indgang. Finde id på fjernprint leverandør opkobling på serviceportalen Oprette afsendersystem ved fjernprint løsningen og få id på afsendersystem Udfylde formular vedr. sammenkobling af system, e-boks og fjernprint (BILAG A - OPSÆTNING AF E-BOKS OG FJERNPRINT PÅ SERVICEPLATFORMEN. Vejledning til at finde: Download dokumentation fra [https://digitaliseringskataloget.dk/integration/sf1600](https://eur02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdigitaliseringskataloget.dk%2Fintegration%2Fsf1600&data=04%7C01%7Cperth%40aarhus.dk%7C746f3da7be2a4e1b247508d9370f820a%7C7d66e3797f9441f8a2bafc9740f2faa0%7C1%7C0%7C637601362023342409%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=xjSE1cIvKvlArHN6MzxUJEv16z5r14ma7AHdMEbST8s%3D&reserved=0) i zipfilen SF1600 Bilag 20200716.zip findes dokumentet Vejledning i Print 2.1.PDF Bilag A side 86) 

NB: I foråret 2022 planlægger AAK at flytte over på sf1601 (NgDP). sf1600 lukker ultimo 2023.