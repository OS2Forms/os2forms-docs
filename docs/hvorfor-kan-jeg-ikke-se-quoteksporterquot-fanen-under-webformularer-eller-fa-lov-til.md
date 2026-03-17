---
layout: default
title: "Hvorfor kan jeg ikke se &quot;Eksporter&quot; fanen under webformularer eller få lov til…"
tags: ['Digitalisering', 'Konfiguration/opsætning af installation', 'Spørgsmål', 'question', 'old-id:209']
---


#  Hvorfor kan jeg ikke se &quot;Eksporter&quot; fanen under webformularer eller få lov til…



Spørgsmål

Emne:  Konfiguration/opsætning af installation

Faggruppe:  Digitalisering

A

Anonym bruger

17-12-2020 

Spørgsmål

Hvorfor kan jeg ikke se "Eksporter" fanen under webformularer eller få lov til at importere webformularer?

### Svar

A

Anonym bruger

17-12-2020 

 Svar direkte til dette svar 

Din OS2Forms installation er muligvis ikke sat op til at tillade import og eksport af webformularer.

Følg vejledningen til Redigering af Formsdesigner-menuen:  
<https://os2forms.os2.eu/administrer-formsdesigner-menuen?collection=204>

Administratoren for OS2Forms installationen skal desuden tildele Formsdesigner rollen, rettigheder til at importere og eksportere webformularkonfigurationer.

Dette gøres under "Personer"->"Tilladelser" i administrationsmenuen.

Under hhv. Eksporter og Importer konfiguration skal der være flueben ud for Formsdesigner roller:


Pernille Thorsen

Projektleder, ITK, Aarhus Kommune

23-08-2021 

 Svar direkte til dette svar 

HVis man på sin installation skriver "/da/admin/config/development/configuration/single/import" efter sit domæne så bør man kunne importer/eksporter siden, hvis man har adgang.