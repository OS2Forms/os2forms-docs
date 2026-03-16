---
layout: default
title: "Hvordan dealer I med indgang til løsningen? Hvis der skal være indgang for både nemid…"
tags: ['Formular elementer', 'IT', 'Spørgsmål', 'question', 'old-id:431']
---
Brugernavn

Adgangskode

#  Hvordan dealer I med indgang til løsningen? Hvis der skal være indgang for både nemid…

[ Del med en kollega ](hvordan-dealer-i-med-indgang-til-løsningen-hvis-der-skal-være-indgang-for-bade-nemid.md)

[ Contact editorial staff ](hvordan-dealer-i-med-indgang-til-løsningen-hvis-der-skal-være-indgang-for-bade-nemid.md)

Spørgsmål

Emne:  [Formular elementer][notfound]

Faggruppe:  [IT][notfound]

[Ida Tengstedt][notfound]

Digitaliseringskonsulent, Skanderborg Kommune

25-11-2022 

Spørgsmål

Hvordan dealer I med indgang til løsningen? Hvis der skal være indgang for både nemid/mitid og medarbejdersignatur og evt. mulighed for intet login

### Svar

![](../sites/default/files/styles/large/public/images/user_profiles/pernille.jpg%3Fitok=WG8elh78)

[Pernille Thorsen][notfound]

Projektleder, ITK, Aarhus Kommune

25-11-2022 

[ Svar direkte til dette svar ][notfound]

Vi skildrer mellem om det er medarbejdere (redaktører) som skall have adgang, hvor vi kan bruge AD-login/medarbejder-login.   
Borgere bliver ikke oprettet i systemet (efter privacy by design princippet), men kan via Nem-login verificere at de er sig selv.

Begge disse løsninger - og i princippet flere til - kan være ved siden af hinanden.

[Ida Tengstedt][notfound]

Digitaliseringskonsulent, Skanderborg Kommune

29-11-2022 

[ Svar direkte til dette svar ][notfound]

Kan du vise hvordan det ser ud inde i Byg, når der er flere logins sat på?

![](../sites/default/files/styles/large/public/images/user_profiles/pernille.jpg%3Fitok=WG8elh78)

[Pernille Thorsen][notfound]

Projektleder, ITK, Aarhus Kommune

29-11-2022 

[ Svar direkte til dette svar ][notfound]

Det er faktisk ikke noget man indstiller i byg, men i stedet under "indstillinger".   
Her er indstilling for at få formularen til automatisk at viderestille til Nemlogin, når formularen besøges.

  
Hvis du ikke vil have at den automatisk viderestiller og i stedet have et link på siden. Så skal du i byg indsætte elementet "Nemid login". (den har de fleste installationer vist - Aarhus har dog ikke, så den er jeg ikke helt skarp i. Det ved jeg til gengæld Rebild er)  
  
Hvis du vil have borgere til at blive mødt af login på formularen, så skal du ændre i adgangen til formularen. Det gøres under indstillinger => Adgang, hvor dine indstilling skal være så der ikke er annonym adgang som nedenfor. Når dette er sat vil man ved besøg af formular blive bedt om at logge ind i drupal og bliver derefter sendt tilbage til formularen.  
[[{"fid":"256","view_mode":"default","fields":{"format":"default","alignment":"","field_file_image_alt_text[und][0][value]":"Indstillinger Adgang","field_file_image_title_text[und][0][value]":"Indstillinger Adgang"},"type":"media","field_deltas":{"1":{"format":"default","alignment":"","field_file_image_alt_text[und][0][value]":"Indstillinger Adgang","field_file_image_title_text[und][0][value]":"Indstillinger Adgang"}},"attributes":{"alt":"Indstillinger Adgang","title":"Indstillinger Adgang","class":"media-element file-default","data-delta":"1"}}]]