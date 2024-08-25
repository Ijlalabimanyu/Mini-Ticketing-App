# Mini Ticketing App

## Overview

The Mini Ticketing App is a simple React Native application designed to manage events and validate tickets using QR codes. The app includes user authentication, event listing, event details, and QR code scanning functionality. It adheres to a provided Figma design and uses `react-native-qrcode-scanner` for QR code functionality.

## Features

- **User Authentication**: Hardcoded login and registration screens with basic error handling.
- **Event Listing**: Displays a list of mock events with navigation to event details.
- **Event Details**: Shows detailed information about a selected event.
- **QR Code Scanner**: Scans QR codes to validate tickets and navigate to event details.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Ijlalabimanyu/Mini-Ticketing-App.git
   cd min-ticketing-app

2. **Install Dependencies**

    npm install

3. **Install Additional Package**

    npm install @react-navigation/native @react-navigation/stack react-native-qrcode-scanner

## Design Choices

Authentication: Implemented using hardcoded credentials for simplicity. State management is handled using React’s useState for managing user login state.

Event Listing and Details: The FlatList component is used to render a list of events. Event data is hardcoded for demonstration purposes. Navigation is handled using react-navigation for seamless transitions between screens.

QR Code Scanning: Integrated react-native-qrcode-scanner to handle QR code scanning. The QR code scanner is designed to recognize event IDs and navigate to the corresponding event detail page or show an error if the ID is not found.

## Challenge Encountered

- **QR Code Scanner**: Configuring the QR code scanner to work with native Android files required modifying AndroidManifest.xml and ensuring all necessary permissions were granted.

- **Design Adherence**: Ensuring the app's UI closely followed the Figma design involved precise styling and layout adjustments. Special attention was given to alignment, spacing, and component styling.

## Running the App on an Android Emulator

1. **Start Android Emulator**
2. **Run The App** : npx react-native run-android
3. **Testing** : Use the hardcoded credentials test@example.com and password to log in.

