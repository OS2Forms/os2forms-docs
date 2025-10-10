---
title: Changing element names from NemID to MitID
layout: default
nav_order: 50
parent: Documentation / Instructions
---

# Changing element names from NemID to MitID

Via the module “OS2forms NemID” in OS2forms, a number of elements can display data about a CPR or CVR number. When the module was developed, the name of the module and the elements were named so that they contain the word “NemID”, but since “NemID” no longer exists and is now called “MitID”, this must of course be corrected in OS2forms.

In order for the module and elements to still work as intended (backwards compatible), it has been decided that the naming of the elements will not be changed, and that the display name of the elements and any explanation in the help texts should be changed using the translation module in Drupal.

If you want the naming to be changed from “NemID” to “MitID”, then you just have to do the following:

1. [Download this translation file](assets/translation-from-NemID-to-MitID.po)
2. Log in as administrator in OS2forms
3. Navigate to “COnfiguration” -> “Region and language” -> “User interface translation” (/admin/config/regional/translate)
4. Click on the “Import” tab
5. Click on “Select file” and find the file you downloaded under point 1. The other settings on the page should be as follows:

   1. Enable “Treat imported strings as custom translations”
   2. Enable “Overwrite non-customized translations”
   3. Enable “Overwrite existing customized translations”

6. Click on “Import” and let OS2forms do the work for you.

---

# Ændring af elementnavne fra NemID til MitID

Via modulet “OS2forms NemID” i OS2forms udstilles en række elementer, der kan vise data omkring et CPR eller CVR-nummer. Da modulet blev udviklet, blev navnet på modulet og elementerne navngivet så de indeholder ordet ”NemID”, men da ”NemID” ikke længere eksisterer og nu hedder ”MitID”, så skal dette selvfølgelig rettes til i OS2forms.

For at modulet og elementerne stadig vil virke efter hensigten (bagudkompatibelt), så er det blevet besluttet at navngivningen af elementerne bliver fastholdt, og at elementernes visningsnavn og evt. forklaring i hjælpeteksterne skulle ændres ved hjælp af oversættelsesmodulet i Drupal.

Hvis man ønsker at navngivningen skal ændres fra ”NemID” til ”MitID”, så skal man blot gøre følgende:

1. [Download denne oversættelsesfil](assets/translation-from-NemID-to-MitID.po)
2. Log ind som administrator i OS2forms
3. Naviger til ”Indstillinger” -> ”Region and language” -> ”Oversættelse af brugergrænseflade” (/admin/config/regional/translate)
4. Klik på fanen ”Importér”
5. Klik på ”Vælg fil” og find filen du downloadede under pkt. 1. De andre indstillinger på siden skal være således:

   1. Aktiver ”Opfat importerede tekststrenge som brugerdefinerede oversættelser”
   2. Aktiver ”Overskriv ikke-brugerdefinerede oversættelser”
   3. Aktiver ”Overskriv eksisterende brugerdefinerede oversættelser”

6. Klik på ”Importér” og lad OS2forms gøre arbejdet for dig.
