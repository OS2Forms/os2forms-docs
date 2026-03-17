---
layout: default
title: "Hvordan afleverer man data fra OS2Forms til SBSYS i Holstebro Kommune?"
tags: ['Formular konfiguration', 'Spørgsmål', 'aflevering', 'format', 'holstebro', 'question', 'sbsip', 'old-id:224']
---

#  Hvordan afleverer man data fra OS2Forms til SBSYS i Holstebro Kommune?

Spørgsmål

Emne:  Formular konfiguration

A

Anonym bruger

12-05-2021 

Spørgsmål

Hvordan afleverer man data fra OS2Forms til SBSYS i Holstebro Kommune?

Nøgleord: holstebro format aflevering sbsip

### Svar

A

Anonym bruger

12-05-2021 

 Svar direkte til dette svar 

I Holstebro Kommune afleveres data til SBSYS ved hjælp af SBSIP.  
Data sendes til SBSIP via en email handler der sørger for at sende dataene til postkasse som SBSIP'en tømmer.  
Dataene fra OS2Forms medsendes i form af et "Attachment SBSYS xml" formular element, der sørger for at der dannes en særlig XML fil som SBSIP kan fortolke.

Afleveringsregler 

Selvbetjeningsdesigneren har mulighed for at angive en eller flere standardiserede måder at få journaliseret data til SBSYS.

"sbsys_standard": her søges der først efter eksisterende sager på kombinationer af cpr eller cvr nummer samt det angive SBSYS sagskabelon id. Hvis en eksisterende skal findes vil data blive journaliseret til den eksisterende sag og ellers vil der blive oprette en ny sag. "sbsys_ny": her vil data altid blive journaliseret til en ny sag ud fra den angive SBSYS sagsskabelonid, oprettet med cpr eller cvr nummer som sagspart "sbsys_direkte_sag_2": her vil data blive journaliseret til direkte til en eksisterende sag. Når denne sag anvende skal der også medsendes et gyldigt SBSYS sagsnummer. "digital_post": her vil der blive sendt en besked til cpr eller cvr partens digitale postkasse. Der kan angives en kort besked i SBSYS attachment xml elementet og ellers vil reglen medtage alle dokumenter der følger navngivningenmønsteret "HK-<valgfri tekst>.pdf"   
Dette sikrer at der ikke medsendes en masse tilfældige dokumenter til en digital post kasse Hvordan gør man så? Trin 1: 

Afleveringsreglen skal angives i formularen ved at tilføje et element af typen "Værdi" med nøglenavnet "sbsip_rules_flow":  


Værdien af elementet sættes til den/de afleveringsregler man ønsker at anvende. Hvis der skal anvendes flere regler skal de stå på hver deres linie. Eksempel:   


Hvis reglen "sbsys_direkte_sag_2" anvendes skal man tilføje endnu et element af typen "Værdi" med nøglenavnet "sbsys_sags_nr".  


Værdien af elementet sættes til sagsnummeret på den SBSYS sag man ønsker at journalisere til:  


Trin 2: 

For at data kan fortolkes korrekt af SBSIP skal der tilføjes et "SBSYS Attachment xml" element til webformen.

I indstillinger for elementet angives relevante, obligatoriske data for journaliseringen, bl.a. hvilket SBSYS sagskabelon id der skal anvendes.

Filnavnet skal angives til "os2forms.xml" da SBSIP ellers vil ignorere filen:  


Hvis afleveringsreglen "digital_post" er angivet skal der angives en kort, tilpasset tekst i "bodyText". Her vælges "custom text..." i type:  


Kort besked der vises i e-boks angives i tekst feltet:  


De oplysninger man ønsker sendt til digital post indsættes i et "Attachment PDF" element og formateres som ønsket vha. twig og tokens.

Bemærk at det kun er PDF filer navngivet som "HK-<valgfri tekst>.pdf" der vil blive med sendt til digital post, så husk at angive korrekt navn på PDF element der ønskes medsendt som kvittering til digital post.

Trin 3: 

Data afleveres til SBSIP via email. Det betyder at der skal tilføjes en email handler til webformularen.

Modtager skal angives til "[formularinput@holstebro.dk](mailto:formularinput@holstebro.dk)":  


Under indstiller for email handleren skal man huske at sætte markering i "Inkluder filer som vedhæftninger":  


Brødtekst / Indhold af email er ligegyldig når der afleveres til SBSYS via SBSIP.