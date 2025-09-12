# Efterårsrelease 2025

Overblik over efterårsrelease til koordinationsgruppens videre arbejde.\!

* \#196: Diskussion og fastlæggelse af sikkerhedsopdateringer og løbende vedligehold  
  * \#200: Modulet "CKEditor 4 (contrib) (ckeditor)" bør erstattes (af "CKEditor 5 (ckeditor5)") da det er deprecated  
    * Afventer svar fra ITK (som har prøvet CKEditor 5 af  
  * \#205: Modulet "@fontyourface (fontyourface)" bør fjernes fra OS2forms da modulet ikke er compliant med GDPR  
    * Bellcoms anbefaling er at benytte “@fontyourface \- Local Fonts (local\_fonts)”, hvis der stadig ønskes en bestemt font i OS2forms. Estimat: 0,00 timer. De anvendere som ønsker at skifte til at bruge “@fontyourface \- Local Fonts (local\_fonts)” kan kontakte Bellcom for estimat på opgaven på deres installationer  
* \#194: Diskussion og fastlæggelse af udfasninger af moduler  
  * \#207: Verificer at moduler der ikke kompatibel med Drupal 10 kan udfases (15 stk.)  
    * Alle de nævnte moduler kan fjernes. Estimat: 6,00 timer  
  * \#209: Undersøg om moduler der ikke anvendes og ikke er omfattet af central vedligehold kan fjernes (17 stk.)  
    * 4 af modulerne kan fjernes. De andre moduler er enten core moduler i Drupal eller moduler som andre core moduler er afhængige af og derfor anbefaler Bellcom at disse moduler bliver en del af den centrale vedligeholdelsesaftale. Estimat: 2,00 timer  
  * Undersøg om moduler hvor brugeren afgiver cookies (noncompliant med GDPR) kan fjernes (6 stk.)  
    * Disse moduler kan ikke fjernes, hvis man stadig ønsker at “@fontyourface \- Local Fonts (local\_fonts)” skal kunne benyttes. Estimat: 0,00 timer  
* \#210: Diskussion og fastlæggelse af tilpasning af moduler  
  * Ændring af navne på elementerne der i dag indeholder navnet "NemID", da "NemID" ikke længere eksisterer. Ændringen må dog ikke få konsekvenser for eksisterende formularer/installationer. Nyt navn foreslås til "MitID"  
    * Ud fra Bellcoms anbefaling så er der 2 mulige løsninger på dette. Estimat: 2,00 til 4,00 timer (afhængig af valgt løsning)  
  * Modulet "OS2web nemlogin Automated Logout" bør som standard være aktiveret i en OS2forms installation  
    * Ingen hindring for Bellcom. Estimat: 0,00 timer  
* \#197: Diskussion og fastlæggelse af bidrag fra Bellcom (nyudvikling)  
  * \#206: Release af Digital Signatur  
    * Afventer internt review hos Bellcom. Estimat: 0,00 timer  
* \#198: Diskussion og fastlæggelse af bidrag fra Aarhus Kommune/ITK (nyudvikling)  
  * \#170: Implement MeMo1.2 compliance \[SFRMS-129\]  
    * Estimat: 3,50 timer til review (review er lavet, som aftalt på scopingmøde den 27/8-2025)  
  * \#183: Fix: Webform Auto Exports settings issue  
    * 0,00 timer til review (review er lavet \- gratis fra Bellcom)  
  * \#186: Fix: Name- and address protection multiple submission saves issue  
    * Estimat: 2,25 timer til review  
  * \#188: OS2forms sync modul not working  
    * Estimat: ITK har lavet review på Bellcoms rettelse og det er merged ind i deres kode. Bellcom skal bruge 2,00 timer på at sikre at modulet kommer ind med det nye tag/rettelse i OS2forms  
  * \#190: Fix: os2forms\_forloeb: Send Maestro notification handler exception handling when sending digital post  
    * Estimat: 1,00 timer til review  
  * \#195: Fix: os2forms\_forloeb: Maestro notification attempts sending digital post that will never be delivered  
    * Estimat: 1,00 timer til review  
  * \#218: Fix: MitId Children select missing a succesful check  
    * Estimat: Afventer estimat fra Bellcom  
  * \#219: Fix: Maestro notification handler ignores conditions (vilkår)  
    * Estimat: Afventer estimat fra Bellcom