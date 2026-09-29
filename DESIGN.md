# Design — Project Identity

> This document is project-long-lived. Tokens are not changed without
> the Architect's approval. Developers MUST use these tokens
> instead of improvising their own colors/spacings.

## Style Direction

Helle, ruhige Finanz-App: #F4F5FA-Grund mit weißen Karten und weichen Schatten, ein einziger Grün-Akzent #6CC57C für Aktionen und Floating-Button, dunkles Navy #23233C als Textfarbe — Aleo-Slab-Headlines über Inter-Body, aufgeräumt und freundlich wie eine Banking-App.

## Colors

- `--color-bg`: **#F4F5FA**
- `--color-bg-alt`: **#F4F4F4**
- `--color-surface`: **#FFFFFF**
- `--color-surface-alt`: **#ECF1FA**
- `--color-surface-sunken`: **#DCE5F4**
- `--color-fg`: **#23233C**
- `--color-fg-alt`: **#1C1C1C**
- `--color-fg-black`: **#000000**
- `--color-accent`: **#6CC57C**
- `--color-accent-light`: **#61D27C**
- `--color-accent-deep`: **#179F2F**
- `--color-accent-card`: **#6CC57CA3**
- `--color-accent-85`: **#6CC57CD9**
- `--color-on-accent`: **#FFFFFF**
- `--color-secondary`: **#23233C**
- `--color-muted`: **#A5A5A5**
- `--color-muted-nav`: **#BBC7DB**
- `--color-muted-text`: **#8D8D8D**
- `--color-muted-link`: **#898888C9**
- `--color-muted-skip`: **#B4B4B4**
- `--color-muted-dot`: **#E3E3E3**
- `--color-border`: **#707070**
- `--color-border-strong`: **#2B2B2B**
- `--color-icon-navy`: **#181461**
- `--color-legend-deposit`: **#2B2B2B**
- `--color-shadow-soft`: **#00000014**
- `--color-shadow-nav`: **#60719329**
- `--color-shadow-fab`: **#00000029**
- `--color-shadow-input`: **#0D4E810D**
- `--color-shadow-social`: **#0000000F**
- `--color-shadow-header`: **#0000001A**
- `--color-chart-track`: **#E3E3E3**

## Typography

- `font_family`: Inter, Aleo, Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- `font_family_heading`: Aleo, 'Roboto Slab', Georgia, serif
- `font_family_body`: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- `font_family_nav`: Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- `heading_weight`: 700
- `body_weight`: 400
- `size_display_45`: Inter 500 45px/57px uppercase
- `size_welcome_40`: Aleo 700 40px/51px
- `size_button_20`: Aleo 700 20px/25px
- `size_headline_25`: Aleo 700 25px/30px
- `size_headline_24`: Aleo 700 24px/29px
- `size_headline_17`: Ubuntu 700 17px/20px
- `size_text_16`: Aleo 700 16px/19px
- `size_text_16_alt`: Inter 400 16px/19px
- `size_text_14`: Aleo 700 14px/17px
- `size_text_14_alt`: Inter 400 14px/17px
- `size_text_12`: Inter 100 12px/15px letter-spacing 2.4px uppercase
- `size_text_12_alt`: Inter 400 12px/14px
- `size_text_11`: Aleo 700 11px/12px letter-spacing 0.3px
- `size_text_10`: Inter 400 10px/13px
- `size_text_9`: Inter 100 9px/11px letter-spacing 1.8px uppercase
- `size_text_7`: Aleo 700 7px/5px
- `label_letter_spacing`: 2.4px (12px Labels), 2.8px (14px Header-Labels), 1.8px (9px Kategorie-Labels), 0.3px (Kalenderzahlen)

## Spacing Scale

- `--space-0`: 3px
- `--space-1`: 5px
- `--space-2`: 8px
- `--space-3`: 12px
- `--space-4`: 20px
- `--space-5`: 32px
- `--space-6`: 40px

## Border-Radii

- `--radius-sm`: 3px
- `--radius-md`: 5px
- `--radius-lg`: 8px
- `--radius-xl`: 10px
- `--radius-2xl`: 12px
- `--radius-button_login`: 18px
- `--radius-card`: 20px
- `--radius-pill`: 999px

## Components

### Button — Primary Dark (Login)

Login-Frame: 333×54, fill #23233C, radius 18px, Label 'Login' Aleo 700 20px/25px #FFFFFF, zentriert. Zustände: default fill #23233C; hover (nur Expo-Web) fill #23233C +8% Helligkeit (#33334F) ; active/pressed fill #1A1A2E und scale 0.985; disabled fill #23233C opacity 0.4, Label opacity 0.6, kein Press-Effekt. Touch-Target 54px hoch (≥44px).

### Button — Primary Green (Aktion)

Money Management 3 / Time Management 3: 334×43 (bzw. 336×43), fill #6CC57C, radius lg 8px, Schatten 0 3px 16px #00000014, Label Inter 400 16px/19px #FFFFFF zentriert ('Add Expense', 'Add a new appointment'). Zustände: default #6CC57C; hover #7ED08C; active/pressed #5FB86E; disabled #6CC57C opacity 0.5. Breite 334px innerhalb 40px Seitenrand. Erste Zeile der Buttons steht 72px unter dem letzten Feld.

### Button — Secondary Green (Overview)

Time Management: 336×43, fill #6CC57CD9 (85 % Grün, frameverbaut), radius lg 8px, Schatten 0 3px 16px #00000014, Label Inter 400 16px/19px #FFFFFF. Zustände: default #6CC57CD9; pressed #6CC57C; hover #6CC57CC2; disabled opacity 0.5. Abstand 24px unter dem vorigen Button.

### Button — Outline/Dashed Square (Quick Category)

Money Management: 55×55, fill #FFFFFF, stroke 1px #000000 dashed innenliegend, radius 12px (zweite Reihe ohne expliziten Radius: 0/quadratisch wie im Frame, Icon 36–42px #000000 zentriert). Zustände: default stroke dashed #000000; hover/active stroke solid #6CC57C + Icon #6CC57C; disabled stroke #A5A5A5 opacity 0.5. Raster 3 Spalten: x=69/175/284 (Spaltenabstand 91–106px), Reihe 1 y=530, Reihe 2 y=622.

### Button — Social Login (Facebook/Google)

Login-Frame: 82×51, fill #FFFFFF, radius 10px, Schatten 0 0 10px #0000000F, Icon 12–24px (#0F279E Facebook, Such-Icon 24×24) zentriert, kein Label. Zwei Stück bei x=115 und x=218, y=649. Zustände: default wie Frame; pressed Schatten 0 0 6px #00000014 + Icon-Farbe dunkler; hover Schatten 0 2px 12px #00000014; disabled opacity 0.4. Touch-Target 51px.

### Input — Login-Feld

Login-Frame: 336×54, fill #FFFFFF, radius 5px, Schatten 0 10px 10px #0D4E810D, Text (bzw. Platzhalterwert) Actor 400 14px/18px #23233C zentriert, trailing Icon 17–19px #23233C (check, view/eye) bei x=329. Felder bei y=321 (E-Mail) und y=411 (Passwort, Inhalt '***********'). Zustände: default wie Frame; focus Schatten 0 10px 16px #0D4E810D + 1px Border #6CC57C; filled Text #23233C; disabled fill #F4F5FA, Text #A5A5A5. Höhe 54px ≥44px.

### Input — Formularzeile mit Icon

Money Management 3 / Time Management 3: 334×43, x=40, fill #FFFFFF, radius lg 8px, Schatten 0 3px 16px #00000014, Label/Platzhalter Inter 400 16px/19px #1C1C1C, links Icon 14–16px #23233C bei x=55–57. Vertikaler Abstand zwischen den Zeilen 63px (y=176/239/302/365). Zustände: default weiß; focus Radius bleibt, Schatten 0 3px 20px #00000014 + Border 1px #6CC57C; filled Text #1C1C1C; disabled Text #A5A5A5. Zeilenhöhe 43px, damit Tap in der Zeile ≥44px (Padding 12px oben/unten für Web-Fallback).

### Bottom Tab Bar + Floating Add Button

Navbar: 413×77 bei y=778, fill #FFFFFF, Schatten 0 3px 20px #60719329, mit mittiger Aussparung (Notch) für den FAB. Icons 19–22px #BBC7DB, Labels Aleo 700 7px/5px #BBC7DB, Icon-Zentren x=35/93/212(FAB)/297/357, Labels y=862 ('Home','Products','Liked','Today'). Aktiver Tab: Icon und Label #6CC57C statt #BBC7DB (Zustand aus dem grünen FAB abgeleitet, Frames zeigen nur den Default). Floating Add Button: Ellipse 64×63, Mitte x=211, y=778 (ragt 32px über die Bar), Füllung linear-gradient(180deg, #6CC57C 0%, #179F2F 100%), Stroke 4px #FFFFFF innen, Schatten 0 3px 40px #00000029, Plus-Icon aus zwei Linien 20px lang, Stroke 3px #FFFFFF (1×20 und 20×1, gekreuzt auf x=212,5/y=808,5). Zustände FAB: default Gradient; pressed Gradient dunkler (#5FB86E → #148A28) und scale 0.94; hover Gradient #7ED08C → #1BAF35; disabled opacity 0.5, Plus #FFFFFF mit Opacity 0.7. Gesamte Tab-Bar bleibt über allen Screens fixiert, Inhalte scrollen darunter hindurch (Safe-Area-Padding unten).

### Karte — Quick Categories

Money Management: 330×276, x=45, y=453, fill #FFFFFF, radius 20px, kein Schatten im Frame. Titel 'Quick Categories' Inter 100 12px/15px letter-spacing 2.4px uppercase #000000, zentriert bei x=137/y=487. Inhalt: 6 gestrichelte Kacheln 55×55 (2 Reihen × 3 Spalten, y=530 und y=622).

### Karte — Transaktions-Karte / Terminkarte

Time Management - 2: 286×118, fill #6CC57CA3, keine Rundung im Frame (0px), Titel Ubuntu 700 11px/12px #23233C, Untertitel Ubuntu 400 10px/12px #000000 @42 %, Zeitzeile Ubuntu 700 7px/10px #23233C, Bild rechts 56×56 bei x=309, Trennlinie 1px #C48B30 @18 % am Kartenfuß. Zustände: default #6CC57CA3; pressed #6CC57CC2; disabled opacity 0.4.

### Listenzeile — Transaktion

Money Management 2: 326×302 Block x=28, y=436, Zeilenabstand 83px (y=436/519/602/685). Elemente: Illustration 53×53 links, Textspalte ab x=100–103 (Kategorie Inter 100 9px/11px letter-spacing 1.8px uppercase #000000, Beschreibung Inter 100 12px/15px #000000, Datum Inter 100 9px/11px uppercase #000000), Betrag rechtsbündig Inter 100 14px/18px #000000 bei x=306–308. Zustände: default ohne Fläche; pressed fill #F4F5FA (Zeilen-Tap); hover fill #F4F5FA (Web); disabled Text #A5A5A5. Zeilenhöhe ≥83px.

### Listenzeile — Termin (Upcoming)

Time Management: Zeile 336×57, Datum Inter 400 12px/22px #1C1C1C @40 %, Titel Aleo 700 14px/17px #1C1C1C, rechts Aktion 'Modify' Aleo 700 14px/17px #23233C, Info-Icon 12×12 und Pencil-Icon 12×12 #23233C, Trennlinie 1px #1C1C1C @20 % am Zeilenfuß (y=300/372/444). Zustände: default; pressed fill #FFFFFF; hover Text 'Modify' #6CC57C; disabled opacity 0.4.

### Abschnitts-Label (Section Label / Uppercase)

Money Management: 'MONTHLY EXPENSES' Inter 100 12px/15px letter-spacing 2.4px uppercase #000000. Money Management 2/3 Header: Inter 100 14px/18px letter-spacing 2.8px uppercase #000000, zentriert (x=129, y=61). Kein eigener Zustand — rein typografisch, Abstand 16px zum zugehörigen Inhalt.

### Betragsanzeige (Display Amount)

Money Management: '1,345.00€' Inter 500 45px/57px uppercase #000000, x=49, y=298, Breite 217; darüber das Section-Label bei y=282 (Abstand 16px). Zustände: default #000000; bei negativen Beträgen als Variante #23233C (Frames zeigen keine rote Farbe, daher kein neuer Token).

### Header — Zurück-Pfeil + Avatar

Zurück (Money Management): Icon 11×18 #181461 bei x=22, y=25, Tap-Fläche 44×44 um das Icon zentriert. Zeitraum-Header (Time Management 2): Aleo 700 24px/29px #23233C bei x=18, y=62 in einer 414×126 weißen Fläche mit Schatten 0 3px 16px #0000001A. Avatar-Kreis (Money Management): 51×51 #6CC57C, Schatten 0 3px 6px #00000029, Initiale Aleo 700 32px/41px #FFFFFF, bei x=296, y=77. Dark-Chevron-Back-Button (Money Management 2/3): gerundete Fläche 40×40 fill #23233C, Chevron #FFFFFF, links bei x=47/y=55. Zustände: default wie Frame; pressed Icon #6CC57C bzw. Fläche opacity 0.8; disabled Icon #BBC7DB.

### Onboarding-Slide (Login Slide / Login Slide 2)

Slide mit Bild/Illustration im oberen Bereich, Step-Dots 10×10 (aktiv #61D27C, inaktiv #E3E3E3) bei y=617, Abstand 21px. Headline Aleo 700 25px/30–32px #23233C (Login Slide 2: #6CC57C, zentriert, x=45, y=432). Body Inter 400 10px/13px #A5A5A5 zentriert. Skip-Text Inter 400 15px/19px #B4B4B4 bei x=53, y=835. Next-Button: 115×42 fill #6CC57C radius 8px bei x=251, y=825, Label 'Next' Inter 400 15px/19px #FFFFFF. Login-Frame-Fuß: grüner Streifen 414×174 #6CC57C (mit 20 %-Overlay #61D27C) ab y=722, darin 'saltar' links (x=42) und 'siguiente' rechts (x=308) Inter 500 15px/19px #FFFFFF. Zustände Next-Button: default #6CC57C; pressed #5FB86E; hover #7ED08C; disabled opacity 0.5. Zustände Dots: aktiv #61D27C, inaktiv #E3E3E3, aktiver Dot skaliert 1.0 und inaktive 0.8.

### Chart — Weekly Report Balken + Legende

Money Management 2: 7 Balken auf x=74–472, Balkenbreite ~13px, Radius sm 3px, Gesamthöhe ~200px ab y=110 bis 317; Segmente: Anteil #6CC57C (expenses) und #2B2B2B (deposit), Restspur #E3E3E3 (25 % Weiß-Restfläche wie im Frame, grau statt weiß auf grünem Grund). Legende bei y=358: Swatch 13×13 radius 3px (#6CC57C bzw. #2B2B2B) + Label Inter 100 9px/11px uppercase #000000, Einträge bei x=74 und x=158. Keine Interaktion (kein Hover/Active im Frame); optionaler Werte-Tooltip beim Tap in Frame-Farben (#FFFFFF Fläche, radius 5px, Schatten 0 10px 10px #0D4E810D, Text Inter 400 12px/14px #23233C).

### Collapsible Dashboard-Menü (Dashboard Menu)

In den Frames nicht als Text spezifiziert — im Stil ergänzt: Karte 330×H, x=45, fill #FFFFFF, radius 20px, Schatten 0 3px 16px #00000014; Menüzeilen 56px hoch, Icon 20×20 #23233C, Label Aleo 700 14px/17px #1C1C1C, Trennlinie 1px #1C1C1C @20 %; aufgeklappt mit animierter Höhe (200ms ease-out), Chevron Icon 12×12 #23233C rotiert 180°. Zustände: collapsed (Standard), expanded, Zeile pressed fill #F4F5FA, Zeile disabled Text #A5A5A5, Trigger mit Touch-Target 56px.

### Kennzahlen-Karte (Dashboard Stats)

In den Frames nicht als Text spezifiziert — im Stil ergänzt: Karte 330×120, fill #FFFFFF, radius 20px, Schatten 0 3px 16px #00000014, Label Inter 100 12px/15px letter-spacing 2.4px uppercase #000000, Wert Inter 500 25px/30px #23233C, Delta-Angabe Inter 400 12px/14px #6CC57C (positiv) bzw. #23233C (neutral — die Frames kennen kein Rot). 2 Karten pro Reihe mit 16px Abstand, Kartenhöhe mindestens 120px.

### Kennzahlen-Anzeige / Tabs (Upcoming/Past)

Time Management: Tab-Leiste 336×38, Labels Aleo 700 16px/19px; aktiver Tab #23233C mit 51×2px Unterstrich #23233C, inaktiver Tab Inter 400 16px/19px #1C1C1C, Basislinie 336×1 #1C1C1C @20 %. Zustände: active (Aleo 700, Unterstrich, #23233C), inactive (Inter 400, #1C1C1C), pressed opacity 0.6, disabled opacity 0.4. Touch-Target 44px hoch.

### Calendar Cell (Time Management - 2)

Tagesspalten x=34–362, Wochentagskürzel Ubuntu 400 13–15px/18–20px #000000, Datum Ubuntu 400 13–15px/18–20px #000000, gewählter Tag als Kreis 42×42 fill #6CC57C mit Zahl #000000. Zustände: default Text #000000; selected Kreis #6CC57C; pressed opacity 0.6; disabled Text #A5A5A5. Zelläquivalent 48×48 für das Tap-Target.

### Statustext / Neben-Link

'Forgot you password?' Inter 400 13px/17px #8D8D8D zentriert (x=139, y=489); 'Don't have an account? sign up' Aleo 700 13px/17px #898888C9 zentriert (x=119, y=602); '1/1 steps' Inter 400 16px/20px #000000 @54 % (x=39, y=750). Zustände: default gedämpft; pressed/gewählt Text #23233C; disabled opacity 0.4. Keine Unterstreichung im Frame.

## Layout Principles

- Ein einziges Viewport: 414×896px, Hochformat, fest verdrahtet — kein responsives Layout, keine Desktop-Breakpoints, kein max-width-Container. Der Expo-Web-Build rendert diesen einen Rahmen zentriert.
- Sicherer Bereich: Statusbar/Notch oben und Home-Indicator unten freihalten (SafeAreaView-Insets); Header-Inhalte starten bei y=25, die Bottom-Tab-Bar liegt fest bei y=778 (414×77) und scrollt nie mit.
- Scroll-Fläche liegt zwischen Header und Tab-Bar; sie scrollt unter der Tab-Bar und dem Floating-Add-Button hindurch, unten mit 96px Padding, damit die letzte Zeile nicht verdeckt wird.
- Seitenränder aus den Frames: 39–40px für Text und Formularzeilen (336 bzw. 334px breit), Karten mit 45px Einzug (330px, Quick Categories), 28px Einzug (326px, Transaktionsliste), 24–28px für Kartenreihen. Diese Werte nicht runden.
- Vertikaler Rhythmus: 63px Abstand zwischen Formularzeilen, 24px zwischen Buttons, 72px zwischen letztem Feld und Aktionsbutton, 83px Zeilenhöhe in der Transaktionsliste, 57px in der Terminliste.
- Navigation wie in den Frames: gestapelte Screens mit Zurück-Chevron (11×18 #181461 bei x=22/y=25, Tap-Fläche 44×44), Bottom-Tab-Bar als einzige Hauptnavigation — keine Top-Navigation, kein Hamburger-Menü, kein Sidebar.
- Raster und Ausrichtung: 3-spaltiges Kachelraster für Quick Categories (x=69/175/284), 7-spaltiges Balkenraster im Weekly Report, Icon-Links/Text-Links/Betrag-Rechts als Standard in allen Listenzeilen.
- Typografie-Regeln: Abschnitts-Labels immer uppercase mit letter-spacing (2.4px bei 12px, 2.8px bei 14px, 1.8px bei 9px), Zeilenbreite nie über die in den Frames gemessene Textbox hinaus; Zahlen bleiben Inter, Headlines Aleo, Kalender/Nav-Labels Ubuntu.
- Icons und Bilder ausschließlich als die in den Frames benannten Assets verwenden (design/figma/assets/*); wo Figma das Asset leer ausliefert (quick-category-Icons, navbar shop/favorite, Such-/Kalender-/Info-Icons), in derselben Strichstärke und Farbe (#000000 bzw. #BBC7DB, 14–42px) nachzeichnen — keine Flächen-Platzhalter.
- Zustände konsistent statt zusätzlicher Farben: Interaktion immer über den vorhandenen Grün-Akzent (#6CC57C / #179F2F) oder Opazität, nie über neue Farbtöne; nur Tap-Ziele unter 44px bekommen 12px unsichtbares Padding (nur Barrierefreiheit, ändert das Frame-Layout nicht).

## Source Frames

This design was taken from the Figma frames below. They are the reference; the tokens above were read from them. Each frame's spec carries its exact positions, sizes, colours, fonts and texts; `design/figma/README.md` is the index.

Platform: mobile app (`mobile-app`) — design viewport 414×896 (phone, portrait) — one viewport, the design is not responsive.

- **Money Management** · businesshandler — spec `design/figma/money-management.md` — `design/figma/money-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2446
- **Money Management 2** · businesshandler — spec `design/figma/money-management-2.md` — `design/figma/money-management-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2573
- **Money Management 3** · businesshandler — spec `design/figma/money-management-3.md` — `design/figma/money-management-3.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2673
- **Time Management** · businesshandler — spec `design/figma/time-management.md` — `design/figma/time-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-803
- **Time Management - 2** · businesshandler — spec `design/figma/time-management-2.md` — `design/figma/time-management-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-3047
- **Time Management - 3** · businesshandler — spec `design/figma/time-management-3.md` — `design/figma/time-management-3.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-1029
- **Login** · businesshandler — spec `design/figma/login.md` — `design/figma/login.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-81
- **Login Slide** · businesshandler — spec `design/figma/login-slide.md` — `design/figma/login-slide.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-20
- **Login Slide 2** · businesshandler — spec `design/figma/login-slide-2.md` — `design/figma/login-slide-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-208
- **Dashboard** · businesshandler — spec `design/figma/dashboard.md` — `design/figma/dashboard.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-681
- **Dashboard Menu** · businesshandler — spec `design/figma/dashboard-menu.md` — `design/figma/dashboard-menu.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2973
- **Dashboard Stats** · businesshandler — spec `design/figma/dashboard-stats.md` — `design/figma/dashboard-stats.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-900
