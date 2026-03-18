---
layout: default
title: "FBS handler opsætning"
tags: ['Formular konfiguration', 'old-id:460']
---
FBS handleren kan bruges til at oprette biblioteksbrugere som er under 18 år og oprette værge. 

For at kunne bruge denne vejledning skal FBS-handleren være installeret på din installation. Du kan se om den er installeret under Formular indstillinger og E-mails/handlers, hvis du kan vælge FBS handler. Som administrator kan du se om den er installeret i Udvid/modules.

Din leverandør kan hente den på <https://github.com/itk-dev/os2forms_selvbetjening/tree/develop/web/modules/custom/os2forms_fbs_handler>

Trin | Handling | Illustration  
---|---|---  
1 | Opret formular |   
2 | Sørg for at din formular er bygget op med følgende elementer (yml). Formularen er også mulig at finde via [OS2forms Deling af formularer på tværs af installationer](deling-af-formularer/index.md)  
  
barn_cpr:  
'#type': textfield  
'#title': barn_cpr  
barn_mail:  
'#type': email  
'#title': 'Angiv mail '  
'#description': 'V&aelig;r opm&aelig;rksom p&aring; at biblioteket vil benytte denne mailadresse til notifikationer.'  
'#required': true  
pinkode:  
'#type': textfield  
'#title': 'Skriv en 5-cifret pinkode'  
'#input_mask': '99999'  
'#required': true  
afhentningssted:  
'#type': select_other  
'#title': 'Vælg bibliotek/afhentningssted'  
'#options':  
DK-775122: Beder-Malling  
DK-775133: Bavnehøj  
DK-775144: Gellerup  
DK-775146: og så videre for egen kommune  
'#required': true  
guardian:  
'#type': fieldset  
'#title': 'Registrering af økonomisk ansvarlig'  
'#description': |-  
Som &oslash;konomisk ansvarlig indest&aring;r du for de &oslash;konomiske mellemv&aelig;render mellem bibliotekerne og barnet eller den unge.<br />  
Ved &oslash;konomiske mellemv&aelig;render vil du f&aring; besked i din digitale post.&nbsp;  
navn:  
'#type': textfield  
'#title': navn  
cpr:  
'#type': textfield  
'#title': cpr  
email:  
'#type': textfield  
'#title': e-mail  
'#states':  
invisible:  
':input[name="barn_cpr"]':  
filled: true  
'#states_clear': false  
'#default_value': [sgl+standard@aarhus.dk](mailto:sgl+standard@aarhus.dk)  
accept:  
'#type': checkbox  
'#title': 'Accept af betingelser'  
'#description': 'Jeg har l&aelig;st og accepteret Aarhus Kommunes Bibliotekers <a href="[https://www.aakb.dk/om-aarhus-kommunes-biblioteker/brug-af-bibliotekern…](https://www.aakb.dk/om-aarhus-kommunes-biblioteker/brug-af-bibliotekerne/reglement)">reglement</a>.'  
'#required': true  
  
|  ![Elementer til FBS handler](../sites/default/files/oprettelse-af-laaner-under-18-aar-ved-aarhus-bibliotekerne-selvbetjening-aarhuskommune-dk.png)  
3 | Gå i Indstillinger => E-mails/handlers og vælg "Tilføj handler" ud for "FBS" |   
4 |  Udfyld følgende felter: **ISL** : Dit biblioteks id i FBS **FBS endpoint url** : (bør være rigtig) **Username:** brugernavn på fbs API bruger som har adgang til at oprette brugere **Password:** password til ovenstående bruger. (dette brugernavn oprettes i FBS af en administrator) |  ![FBS configuration](../sites/default/files/fbs-handler-selvbetjening-aarhuskommune-dk.png)  
5 | Gem og formularen kan testes og burde virke. |