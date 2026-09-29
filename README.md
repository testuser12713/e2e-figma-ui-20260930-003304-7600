# businesshandler

Klickbarer Mobile-App-Prototyp auf Basis des Figma-Designs „businesshandler" mit den drei wichtigsten Screens: Onboarding/Login, Dashboard und Money Management. Die App läuft als Expo-Web-Build bei 414×896 (Hochformat) ohne Backend — alle Daten sind Beispieldaten im Code.

## Tech Stack

- **Framework**: React Native (Expo SDK 57)
- **Sprache**: TypeScript
- **Navigation**: React Navigation (native-stack + bottom-tabs)
- **State**: lokaler React-State, keine Persistenz
- **Testing**: Jest (jest-expo) + @testing-library/react-native

## Installation

```bash
npm install
```

## Start auf Gerät / Simulator (Expo)

```bash
npx expo start
```

Danach im Expo-Go-Client scannen oder im Simulator öffnen.

## Web-Build

```bash
npm run build
```

Exportiert die App mit `expo export --platform web` nach `dist/`.

## Bedienung

- Die App startet im Login-Bereich (Onboarding).
- Ein Tippen auf die Schaltfläche **Login** führt zum Dashboard.
- Die untere Tab-Leiste wechselt sichtbar zwischen **Dashboard** und **Money Management**.

## Features

- Onboarding/Login-Screen mit Navigation zum Hauptbereich
- Bottom-Tab-Navigation (Dashboard ↔ Money Management)
- Theme-Tokens (Farben, Abstände, Typografie, Radien) aus `DESIGN.md`
- Screen-Stubs für Login, Dashboard und Money Management
