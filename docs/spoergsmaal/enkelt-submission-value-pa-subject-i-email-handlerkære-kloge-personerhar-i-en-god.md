---
layout: default
title: "Enkelt submission value på subject i email-handler?kære kloge personer.Har i en god…"
parent: "Spørgsmål"
permalink: /spoergsmaal/enkelt-submission-value-pa-subject-i-email-handlerkære-kloge-personerhar-i-en-god/
tags: ['Digitalisering', 'Formular konfiguration', 'Spørgsmål', 'question', 'old-id:438']
---


#  Enkelt submission value på subject i email-handler?kære kloge personer.Har i en god…

Emne:  Formular konfiguration

Faggruppe:  Digitalisering


Mads Leonard Fransgård

Digitaliseringskonsulent, Rudersdal

10-01-2023

## Spørgsmål

Enkelt submission value på subject i email-handler?

kære kloge personer.

Har i en god løsning til at få en værdi fra et givent element over i emnefeltet på den mail der sendes ud via en handler? Helt perfekt ville det være man kan tilføje den pågældende værdi i et custom subject såledea jeg kan skrive noget alá: Ansøgning til XX jf. Servicelovens § XX [Indsæt værdi fra element i formularen alá Webform:Token=skole" 

Håber i forstår og kan hjælpe :)

## Svar


Mads Leonard Fransgård

Digitaliseringskonsulent, Rudersdal

10-01-2023

Jeg tænker jeg skal finde svaret her: men er der nogen der kan hjælpe med at konkretisere lidt?

Indsendte værdier [[webform_submission:values:?]];) Webform tokens from submitted data. 

[Learn about submission value tokens](https://formular.rudersdal.dk/admin/structure/webform/manage/test_af_subject_mail_handler/handlers#webform-element-more--content)

Omit the '?' to output all values. Output all values as HTML using [webform_submission:values:html].  
To output individual elements, replace the '?' with… element_key element_key:format element_key:raw element_key:format:items element_key:delta element_key:sub_element_key element_key:delta:sub_element_key element_key:sub_element_key:format element_key:delta:sub_element_key:format element_key:delta:format element_key:delta:format:html element_key:entity:* element_key:delta:entity:* element_key:delta:entity:field_name:* element_key:sub_element_key:entity:* element_key:sub_element_key:entity:field_name:* element_key:delta:sub_element_key:entity:* element_key:checked:option_value element_key:selected:option_value 

All items after the 'element_key' are optional.  
The 'delta' is the numeric index for specific value  
The 'sub_element_key' is a composite element's sub element key.  
The 'checked' or 'selected' looks to see if an 'option_value' is checked or selected for an options element (select, checkboxes, or radios)  
The 'option_value' is options value for an options element (select, checkboxes, or radios).  
The 'format' can be 'value', 'raw', or custom format specifically associated with the element  
The 'items' can be 'comma', 'semicolon', 'and', 'ol', 'ul', or custom delimiter  
The 'entity:*' applies to the referenced entity  
Add 'html' at the end of the token to return HTML markup instead of plain text.  
For example, to display the Contact webform's 'Subject' element's value you would use the [webform_submission:values:subject] token. 


Pernille Thorsen

Projektleder, ITK, Aarhus Kommune

17-01-2023 

#### Andre svar

Det er helt korrekt at man kan bruge: [[webform_submission:values:navn]];), hvis fx ens elements nøgle/Key er "navn". Hvis man skal hente fra en radioknap eller dropdown, kan der være behov for at skriveskal man lidt længere

Du kan bruge tokens i næsten alle felter i os2forms, så det er blot at sætte det ind i det rigtige felt hvor du skal bruge det.