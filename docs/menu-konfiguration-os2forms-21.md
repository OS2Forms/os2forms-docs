---
layout: default
title: "Menu konfiguration (os2forms 2.1)"
tags: ['Konfiguration/opsætning af installation', 'old-id:249']
---
Nedenfor ses den menu som vi foreslår at kommunerne laver ved installation. (grunden til at den ikke er lavet er at det koster 20-50 timer at lave, hvilket er mange kommuner som skal komme på, for at få værdien tilbage. Da dette kan implementeres på 1 time).  
  
NB:

  1. installationerne kan være forskellige i forhold til om url indeholder "/da/", så vær opmærksom på det ved oprettelse af menupunkterne at teste af løbende. 
  2. Rettighedsstyringen er tilpasser til at henholdsvis selvbetjeningsdesigner og flowdesigner. 

**Menupunkt** **/ rolle** |  **url (menu navn)** **/opgave** |  **Borger** |  **Virksomhed** |  **Medarbejder** |  **Sagsbehandler** |  **Leder** |  **Selvbetjenings designer** |  **Forløbsdesigner** |  **Flowdesigner** |  **Administrator**  
---|---|---|---|---|---|---|---|---|---|---  
Opgaver  |  Hop til overblik  |  |  |  |  X  |  x  |  x  |  X  |  x  |  x   
\- Overblik  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/da/taskconsole](https://os2forms-test.magenta.dk/da/taskconsole) (Task console)  |  |  |  |  x  |  X  |  X  |  X  |  X  |  X   
\- Mine selvbetjeningsforløb  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/da/outstanding-tasks](https://os2forms-test.magenta.dk/da/outstanding-tasks) (Outstanding tasks)  |  |  |  |  X  |  x  |  X  |  X  |  X  |  X   
\- Ny opgave  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/da/sagsbehandler-overblik](https://os2forms-test.magenta.dk/da/sagsbehandler-overblik) (Sagsbehandling)  |  |  |  |  x  |  X  |  X  |  X  |  X  |  X   
\- Alle opgaver  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/da/maestro-all-in-production-tasks](https://os2forms-test.magenta.dk/da/maestro-all-in-production-tasks) (All active tasks)  |  |  |  |  |  x  |  X  |  X  |  X  |  X   
Selvbetjeningsløsninger  |  Hop til overblik  |  |  |  |  |  |  X  |  X  |  X  |  X   
\- Overblik  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/admin/content](https://stg.os2forms.itkdev.dk/admin/content) |  |  |  |  |  |  X  |  X  |  X  |  X   
\- Tilføj formular  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/da/admin/structure/webform/add](https://os2forms-test.magenta.dk/da/admin/structure/webform/add) (Tilføj webformular)  |  |  |  |  |  |  X  |  X  |  X  |  X   
\- Tilføj flow  |  [[dit domæne]/da/maestro/templates/add](https://os2forms-test.magenta.dk/da/maestro/templates/add) (Tilføj skabelon)  |  |  |  |  |  |  |  |  X  |  X   
\- Tilføj selvbetjeningsside  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/node/add/webform](https://stg.os2forms.itkdev.dk/node/add/webform) (Tilføj webform)  |  |  |  |  |  |  X  |  X  |  X  |  X   
Formularer  |  Hop til overblik  |  |  |  |  |  X  |  X  |  X  |  X  |  X   
\- Overblik  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/da/admin/structure/webform](https://os2forms-test.magenta.dk/da/admin/structure/webform) (Webformularer)  |  |  |  |  |  |  X  |  X  |  X  |  X   
\- Skabeloner  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/da/admin/structure/webform/templates](https://os2forms-test.magenta.dk/da/admin/structure/webform/templates) (Webformularer: Skabeloner)  |  |  |  |  |  |  X  |  X  |  X  |  X   
\- Tilføj formular  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/da/admin/structure/webform/add](https://os2forms-test.magenta.dk/da/admin/structure/webform/add) (Tilføj webformular)  |  |  |  |  |  |  X  |  X  |  X  |  X   
\- Tilføj formular fra skabelon  |  ### Vil være forskellig fra kommune til kommune, men skal fungere som dublicate funktionen ###  |  |  |  |  |  |  X  |  X  |  X  |  X   
Flows  |  Hop til overblik  |  |  |  |  |  |  |  |  X  |  X   
\- Overblik  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/da/maestro/templates/list](https://os2forms-test.magenta.dk/da/maestro/templates/list) (Flow templates)  |  |  |  |  |  |  |  |  X  |  X   
\- Tilføj flow  |  [[dit domæne]/da/maestro/templates/add](https://os2forms-test.magenta.dk/da/maestro/templates/add) (Tilføj skabelon)  |  |  |  |  |  |  |  |  X  |  X   
Fælles tekster  |  Hop til overblik  |  |  |  |  |  |  |  |  X  |  X   
\- Overblik*  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)/da/[admin/content/webformular_tekster](https://demo.os2forms.dk/admin/content/webformular_tekster) |  |  |  |  |  |  |  |  X  |  X   
\- Tilføj fælles tekst*  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/node/add/os2forms_webform_text](https://demo.os2forms.dk/node/add/os2forms_webform_text) |  |  |  |  |  |  |  |  X  |  X   
Import/eksport  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/da/admin/config/development/configuration/single/import](https://os2forms-test.magenta.dk/da/admin/config/development/configuration/single/import) (Enkelt import)  |  |  |  |  |  |  |  |  X  |  X   
Oversættelser  |  [[dit domæne]](https://os2forms-test.magenta.dk/da/maestro/templates/add)[/da/admin/config/regional/translate](https://os2forms-test.magenta.dk/da/admin/config/regional/translate) (Oversættelse af brugergrænseflade)  |  |  |  |  |  |  |  |  X  |  X   
  
**Ikoner på menu**

Sørg for at følgende modul er aktiveret på [site]/da/modules: Menu Link Attributes 

På hvert menupunkt sættes classerne jf <https://github.com/itk-dev/os2forms_selvbetjening/blob/develop/web/sites/default/files/gin-custom.css>