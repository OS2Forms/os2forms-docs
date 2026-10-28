---
title: Opsætning af ortofotos til brug i OS2forms Webform Maps
layout: default
nav_order: 50
parent: Documentation / Instructions
---

# Opsætning af ortofotos til brug i OS2forms Webform Maps

Når du har installeret modulet **OS2forms Webform Maps**, kan du bruge modulet direkte med kort fra OpenStreetMap. Hvis du også vil kunne bruge ortofotos (luftfotos), kræver det en engangsopsætning i OS2forms.

Her er en kort guide til, hvordan du gør.

## 1. Opret et kortlag

1. Naviger til **Struktur → Leaflet Layers → Map layers**.
2. Klik på **+ Add Map layer**.
3. Udfyld felterne med følgende værdier:

   | Felt | Værdi |
   |---|---|
   | Etiket | `Kortforsyning` |
   | Select map type | `WMS` |
   | URL Template | `https://api.dataforsyningen.dk/orto_foraar_DAF?service=WMS&request=GetCapabilities&token=XXXXX` |
   | Layers | `orto_foraar` |
   | Gennemsigtig | Markér feltet, så det er aktiveret. |

4. Klik på **Gem**.

## 2. Opret en kortpakke

1. Naviger til **Struktur → Leaflet Layers → Map bundles**.
2. Klik på **+ Add Map bundle**.
3. Udfyld felterne med følgende værdier:

   | Felt | Værdi |
   |---|---|
   | Etiket | `ORTO foto` |

4. Under **Base layers** skal du markere **Aktiveret** for kortlaget med etiketten `Kortforsyning`.
5. Klik på **Gem**.

## 3. Vælg ortofoto i OS2forms

Når opsætningen er gennemført, kan du vælge `orto_foto` under **Map Bundles** i OS2forms-kortelementet. Kortet vil herefter blive vist med ortofotos som baggrund.

## Vigtigt: Husk din token

I URL'en under **URL Template** er token angivet som `XXXXX`. Denne værdi skal erstattes med din egen token. Du kan få oprettet en token via [Dataforsyningen.dk](https://dataforsyningen.dk/).
