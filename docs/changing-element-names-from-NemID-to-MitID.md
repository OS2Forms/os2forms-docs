# Ændring af elementnavne fra NemID til MitID

Via modulet “OS2forms NemID” i OS2forms udstilles en række elementer, der kan vise data omkring et CPR eller CVR-nummer. Da modulet blev udviklet, blev navnet på modulet og elementerne navngivet så de indeholder ordet ”NemID”, men da ”NemID” ikke længere eksisterer og nu hedder ”MitID”, så skal dette selvfølgelig rettes til i OS2forms.

For at modulet og elementerne stadig vil virke efter hensigten (bagudkompatibelt), så er det blevet besluttet at navngivningen af elementerne bliver fastholdt, og at elementernes visningsnavn og evt. forklaring i hjælpeteksterne skulle ændres ved hjælp af oversættelsesmodulet i Drupal.

Hvis man ønsker at navngivningen skal ændres fra ”NemID” til ”MitID”, så skal man blot gøre følgende:

1. Download denne oversættelsesfil – [link til download](assets/translation-from-NemID-to-MitID.po)
2. Log ind som administrator i OS2forms
3. Naviger til ”Indstillinger” -> ”Region and language” -> ”Oversættelse af brugergrænseflade” (/admin/config/regional/translate)
4. Klik på fanen ”Importér”
5. Klik på ”Vælg fil” og find filen du downloadede under pkt. 1. De andre indstillinger på siden skal være således:

   1. Aktiver ”Opfat importerede tekststrenge som brugerdefinerede oversættelser”
   2. Aktiver ”Overskriv ikke-brugerdefinerede oversættelser”
   3. Aktiver ”Overskriv eksisterende brugerdefinerede oversættelser”

6. Klik på ”Importér” og lad OS2forms gøre arbejdet for dig.
