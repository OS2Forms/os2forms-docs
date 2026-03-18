---
layout: default
title: "Custom composite datelist konfigurering"
tags: ['Formular elementer', 'old-id:428']
---
I custom composite er der begrænset muligheder for at konfigurere datolister med valg, men det er stadig muligt at konfigurere, hvis man ved hvad man skal skrive i dette configurationsfelt. Hvis feltet ikke er der, kan der være behov for at du opretter et nyt element, hvor konfigurationen altid er mulig.

![Custom composite konfiguration](../sites/default/files/ansoegning_om_pasning_af_naertstaaende_med_handicap_eller_alvorlig_sygdom_selvbetjening.aarhuskommune_0.png)

Opgave | Konfiguration | Illustration  
---|---|---  
Felter og sortering |  date_part_order:  
\- day  
\- month  
\- year  
|  ![Dag, måned og år Datoliste ](../sites/default/files/ansoegning_om_pasning_af_naertstaaende_med_handicap_eller_alvorlig_sygdom_selvbetjening.aarhuskommune_1_0.png)  
Årrække begrænsning |  date_year_range: '2022:2050' date_year_range: '-1:+5'  |  ![Datoliste begrænsing](../sites/default/files/billede3.png)  
Årrække - største først |  date_year_range_reverse: true  
|  ![År rækkefølge](../sites/default/files/billede4.png)  
Vis hele månedsnavne |  date_abbreviate: false |  ![Måneder skrevet helt ud](../sites/default/files/billede2.png)  
Præudfyldt |  default_value: -1 month default_value: first day of last month |  ![præudfyldt dato](../sites/default/files/ansoegning_om_pasning_af_naertstaaende_med_handicap_eller_alvorlig_sygdom_selvbetjening.aarhuskommune_2_0.png)  
  
Ovenstående er også muligt via Kilde-visningen for formularen, hvis man har adgang til den. 

Hvis du vil have mere om datoformater, så tjek [Dato-formater](dato-formater.md).