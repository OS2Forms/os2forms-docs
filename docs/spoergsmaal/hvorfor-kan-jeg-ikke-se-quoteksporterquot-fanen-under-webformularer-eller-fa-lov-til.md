---
layout: default
title: "Hvorfor kan jeg ikke se &quot;Eksporter&quot; fanen under webformularer eller få lov til…"
parent: "Spørgsmål"
permalink: /spoergsmaal/hvorfor-kan-jeg-ikke-se-quoteksporterquot-fanen-under-webformularer-eller-fa-lov-til/
tags: ['Digitalisering', 'Konfiguration/opsætning af installation', 'Spørgsmål', 'question', 'old-id:209']
---


#  Hvorfor kan jeg ikke se &quot;Eksporter&quot; fanen under webformularer eller få lov til…

Emne:  Konfiguration/opsætning af installation

Faggruppe:  Digitalisering

Anonym bruger

17-12-2020

## Spørgsmål

Hvorfor kan jeg ikke se "Eksporter" fanen under webformularer eller få lov til at importere webformularer?

## Svar

Anonym bruger

17-12-2020

Din OS2Forms installation er muligvis ikke sat op til at tillade import og eksport af webformularer.

Følg vejledningen til Redigering af Formsdesigner-menuen:  
<https://os2forms.os2.eu/administrer-formsdesigner-menuen?collection=204>

Administratoren for OS2Forms installationen skal desuden tildele Formsdesigner rollen, rettigheder til at importere og eksportere webformularkonfigurationer.

Dette gøres under "Personer"->"Tilladelser" i administrationsmenuen.

Under hhv. Eksporter og Importer konfiguration skal der være flueben ud for Formsdesigner roller:


Pernille Thorsen

Projektleder, ITK, Aarhus Kommune

23-08-2021 

#### Andre svar

HVis man på sin installation skriver "/da/admin/config/development/configuration/single/import" efter sit domæne så bør man kunne importer/eksporter siden, hvis man har adgang.