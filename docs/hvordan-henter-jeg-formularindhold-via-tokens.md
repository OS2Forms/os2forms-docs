---
layout: default
title: "Hvordan henter jeg formularindhold via tokens?"
tags: ['Formular elementer', 'IT', 'Spørgsmål', 'hent data', 'question', 'token', 'old-id:454']
---
Brugernavn

Adgangskode

#  Hvordan henter jeg formularindhold via tokens?

[ Del med en kollega ](hvordan-henter-jeg-formularindhold-via-tokens.md)

[ Contact editorial staff ](hvordan-henter-jeg-formularindhold-via-tokens.md)

Spørgsmål

Emne:  [Formular elementer][notfound]

Faggruppe:  [IT][notfound]

![](../sites/default/files/styles/large/public/images/user_profiles/pernille.jpg%3Fitok=WG8elh78)

[Pernille Thorsen][notfound]

Projektleder, ITK, Aarhus Kommune

21-04-2023 

Spørgsmål

Hvordan henter jeg formularindhold via tokens?

Nøgleord: [token][notfound] [hent data][notfound]

### Svar

![](../sites/default/files/styles/large/public/images/user_profiles/pernille.jpg%3Fitok=WG8elh78)

[Pernille Thorsen][notfound]

Projektleder, ITK, Aarhus Kommune

21-04-2023 

[ Svar direkte til dette svar ][notfound]

Det er muligt at hente eller vise forskellige og trikket er at du skal ramme ned i den korrekte type data for dit element.

Se nedenstående som også er hjælp man kan få når man åbner tokens indstillingerne.

Webform tokens from submitted data.

[Learn about submission value tokens](https://os2forms.admnonwin.aarhuskommune.dk/da/admin/structure/webform/manage/organisation_test#webform-element-more--CXCpDrp783c--content)

Omit the '?' to output all values. Output all values as HTML using [webform_submission:values:html].  
To output individual elements, replace the '?' with…

element_key element_key:format element_key:raw element_key:format:items element_key:delta element_key:sub_element_key element_key:delta:sub_element_key element_key:sub_element_key:format element_key:delta:sub_element_key:format element_key:delta:format element_key:delta:format:html element_key:entity:* element_key:delta:entity:* element_key:delta:entity:field_name:* element_key:sub_element_key:entity:* element_key:sub_element_key:entity:field_name:* element_key:delta:sub_element_key:entity:* element_key:checked:option_value element_key:selected:option_value 

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