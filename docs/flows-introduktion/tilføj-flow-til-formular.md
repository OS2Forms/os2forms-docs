---
layout: default
title: "Tilføj flow til formular"
parent: "Flows introduktion"
tags: ['Open document', 'old-id:218']
---
**Fra formular**

Trin | Handling | Illustration  
---|---|---  
1 | Stå på den formular du ønsker at koble et flow på (/admin/structure/webform/manage/[DIN FORMULAR]) |   
2 | Gå til fanen "Indstillinger"  |   
3 | Gå til fanen "E-mail/Handlers" under "Indstillinger" |   
4 | Klik "Tilføj behandler" i øverste højre hjørne |   
5 | Vælg "Spawn Maestro Workflow" ved at klikke "Tilføj behandler" ud for titel |   
6 |  I højre side af skærmen udfylder du nu indstillinger for workflow, ved at

  * skrive en sigende titel
  * skrive en besked til brugeren ved submit
  * skrive en besked til brugeren hvis den går i fejl
  * Vælge en "Flow skabelon" /Maestro workflow template

|   
7 | Klik "Gem" |   
8 | Dit workflow er nu sat op og vil gå i gang ved udfyldelse af formularen. |   
  
**Fra maestro**

Trin | Handling | Illustration  
---|---|---  
1 | Stå på listen over workflows (/maestro/templates/list) |   
2 | På det workflow du ønsker at starte, vælger du handlingen "Start process"  |   
3 | Din proces er nu startet  |   
4 | De(n) initierende part(er) kan se det på "maestro task console" og kan sætte gang i flowet (/taskconsole) |   
5 |  |