---
layout: default
title: "Pdf styling til digital post og e-mail"
tags: ['Formular konfiguration', 'old-id:449']
---
Det er muligt at få header, footer og kolofon på sin pdf, så den får afsender information. Det er muligt at oprette flere, så afdelinger eller magistratsafdelinger kan have forskellige. 

Nedenstående vejledning bygger på at man bruger elementet "attachement pdf", som kan bruges til både at sende i e-mails og digital post. 

**Opsætning (****administrator roll****)**

Trin | Handling | Illustration  
---|---|---  
1 | Gå til Formularer => Indstillinger => OS2forms attachement settings [site]/da/admin/structure/webform/config/os2forms_attachment_component |   
2 | Klik "Tilføj attachement component" |   
3 | Udfyld følgende  
  
**Label** : Titel som redaktører skal kunne finde den på  
**Type** : Vælg sidehoved, sidefod eller kolofon  
**Indhold** : Indsæt logo og tekst som skal stå i elementet. Det anbefales at clearer tekst fra wordformatering.  |   
4 | Klik Gem |   
5 | Gentag punkt 2-4 for alle de elementer du ønsker at oprette |   
  
**Sæt standarden for installationen (administrator rolle)**

Du sætter en standard for installationen og har derefter mulighed for at ændre det på den enkelte formular.

Trin | Handling | Illustration  
---|---|---  
1 | Gå til Formularer => Indstillinger => OS2forms   
[site]/da/admin/structure/webform/config/os2forms |   
2 | Fold skabelon ud |   
3 | Vælg din ønskede standard sidehoved, sidefod og kolofon |   
4 | Klik Gem indstillinger |   
  
**Ændre standard på den enkelte formular (selvbetjeningsdesigner rolle)**

Trin | Handling | Illustration  
---|---|---  
1 | Vælg den formular du ønsker at ændre pdf stylingen for, når du har sørget for at den er opsat, den du ønsker.  |   
2 | Vælg Indstillinger => OS2forms |   
3 | Fold skabelon ud |   
4 | Vælg din ønskede sidehoved, sidefod og kolofon for formularen |   
5 | Klik Gem indstillinger |   
6 | Pdf'en får nu den ønskede styling. |