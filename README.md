# FitYaar - React Native + Expo

> **A minimalist iOS-inspired workout tracker app built with React Native, Expo, and TypeScript**

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Expo Go app on your phone ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))
- Or a physical Android device with USB debugging enabled

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npx expo start
   ```

3. **Run on your device:**
   - **Expo Go (easiest):** Scan the QR code with Expo Go app
   - **Physical Android device:** Press `a` in the terminal
   - **iOS Simulator:** Press `i` in the terminal (macOS only)

### Testing on Physical Android Device (Codespaces)

If you're running in GitHub Codespaces and want to test on your physical Android device:

```bash
# Start Expo with tunnel mode for remote access
npx expo start --tunnel
```

Then scan the QR code with Expo Go app on your phone.

## 📱 Project Structure

```
FitYaar/
├── App.tsx                 # Main app entry point
├── app.json                # Expo configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── src/
│   ├── components/         # Reusable UI components
│   │   └── common/
│   │       └── Card.tsx    # Pastel card component
│   ├── screens/            # App screens
│   │   └── home/
│   │       └── HomeScreen.tsx  # Test home screen
│   ├── theme/              # Design system
│   │   ├── colors.ts       # Color palette
│   │   └── typography.ts   # Typography & spacing
│   ├── navigation/         # Navigation setup (coming soon)
│   ├── services/           # Firebase & API services (coming soon)
│   └── hooks/              # Custom React hooks (coming soon)
└── assets/                 # Images and media
```

## 🎨 Design System

FitYaar uses an iOS-inspired minimalist design with:
- **Light backgrounds** with pastel card accents
- **Bold typography** for clear hierarchy
- **Flat design** - no shadows or gradients
- **Pastel colors**: Blue, Beige, Green, Yellow, Pink, Purple

See `DESIGN_REFERENCE.md` for complete design guidelines.

## 🛠️ Tech Stack

- **Framework:** React Native with Expo
- **Language:** TypeScript
- **Navigation:** React Navigation
- **State Management:** Zustand
- **Backend:** Firebase (Auth, Firestore, Storage)
- **Camera:** Expo Camera (for workout snaps)
- **Video:** Expo AV (for exercise demos)

## 📝 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm run web` - Run in web browser

## 🔥 Features (Planned)

- ✅ iOS-inspired minimalist UI
- ✅ Pastel card design system
- ✅ TypeScript for type safety
- 🚧 User authentication (Firebase)
- 🚧 Workout tracking
- 🚧 Exercise library with video demos
- 🚧 Workout Snaps (24-hour photos)
- 🚧 Progress tracking and analytics

## 📚 Documentation

- [Implementation Plan](/.gemini/antigravity/brain/6917ccea-98f1-423c-a7b8-cc23e83dee40/implementation_plan.md)
- [Design Reference](/DESIGN_REFERENCE.md)
- [UI Mockups](/UI_MOCKUPS.md)
- [Product Plan](/plan.md)

## 🤝 Contributing

This is a personal project, but feedback and suggestions are welcome!

## 📄 License

Private project - All rights reserved

---

**Status:** 🚧 In Development  
**Version:** 1.0.0  
**Last Updated:** 2025-11-23
