---
layout: default
title: "Hent lister fra API til formular (remote select element)"
tags: ['Konfiguration/opsætning af installation', 'old-id:415']
---
Trin | Handling | Illustration  
---|---|---  
1 | Opret/åben formular, som skal indeholde liste.  |   
2 | Klik "Opret element" |  ![Tilføj element](../sites/default/files/cvr-test_selvbetjening.aarhuskommune.dk_.png)  
3 | Vælg "Remote select element" |  ![Element selector remote element](../sites/default/files/cvr-test_selvbetjening.aarhuskommune.dk_3.png)  
4 |  Opsæt element, med følgende:  
  
**Endpoint:** url til API (fx sogne, <https://api.dataforsyningen.dk/sogne>) **Headers:** kan efterlades tom. **Response data key:** kan efterlades tom **Response items key:** værdi som adskiller værdierne fra hinanden (fx et id, i sogne tilfældet "kode") **Response items value:** værdi som skal vises for borgeren (fx sogn navn, i sogne tilfældet "navn") Yderligere kan der indstilles visningsmuligheder som tillad dubletter og definere tekst for tomme felter, samt brug af select2 (mulighed for at søge i listen fra API) |  ![Remote select konfiguration](../sites/default/files/cvr-test_selvbetjening.aarhuskommune.dk_1.png)  
5 | Gem elementet |