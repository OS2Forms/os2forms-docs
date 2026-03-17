---
layout: default
title: "Hvordan angives standard dato-format for et datovælger element i webform?Datoformatet…"
parent: "Spørgsmål"
tags: ['Konfiguration/opsætning af installation', 'Spørgsmål', 'dato', 'datovælger', 'format', 'pdf', 'question', 'old-id:202']
---


#  Hvordan angives standard dato-format for et datovælger element i webform?Datoformatet…

Emne:  Konfiguration/opsætning af installation

A

Anonym bruger

15-12-2020

## Spørgsmål

Hvordan angives standard dato-format for et datovælger element i webform?

Datoformatet skal anvendes når elementet printes til et PDF dokument eller der dannes et SBSYS attachment XML fil.

Nøgleord: dato pdf format datovælger

## Svar

A

Anonym bruger

15-12-2020 

 Svar direkte til dette svar 

Formattering af dato format i Datovælger elementer kan specificeres under "Avanceret" -> "Submission Display" for dato-vælger elementet (se eksempel forneden).

Her vælges det standard format man ønsker eller der kan angives et specielt format ved at vælge "Custom". 

Administratoren for Os2Forms installationen kan definere hvordan standard indstillingerne skal være ved at tilgå /admin/config/regional/date-time

Det anbefales at man holder sig til 3 dato formater:

Standard kort dato Standard lang dato Standard mellem dato 

Eksempel på valg af dato format:

[[{"fid":"145","view_mode":"default","fields":{"format":"default","alignment":"","field_file_image_alt_text[und][0][value]":false,"field_file_image_title_text[und][0][value]":false},"type":"media","field_deltas":{"1":{"format":"default","alignment":"","field_file_image_alt_text[und][0][value]":false,"field_file_image_title_text[und][0][value]":false}},"attributes":{"style":"font-size: 1em;","class":"media-element file-default","data-delta":"1"}}]]