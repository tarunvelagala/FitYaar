# FitYaar - Quick Start Guide

> Get FitYaar running on your device in minutes!

## 🚀 Prerequisites

- **Node.js** 18+ and npm
- **Expo Go app** on your phone:
  - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Android - Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## 📱 Running the App

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npx expo start
```

### Step 3: Run on Your Device

**Option A: Expo Go (Easiest)**
- Scan the QR code with:
  - **iOS**: Camera app
  - **Android**: Expo Go app

**Option B: Physical Device via USB**
```bash
npx expo start --android  # For Android
npx expo start --ios      # For iOS (macOS only)
```

**Option C: Tunnel Mode (for Codespaces)**
```bash
npx expo start --tunnel
```

## 🔥 Hot Reload

- Press `r` in the terminal to reload
- Or shake your device and tap "Reload"
- Changes appear instantly!

## 📝 Common Commands

```bash
# Start development server
npm start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios

# Clear cache and restart
npx expo start -c
```

## 🐛 Troubleshooting

**Can't connect to development server?**
- Make sure your phone and computer are on the same WiFi
- Try tunnel mode: `npx expo start --tunnel`

**App won't load?**
- Clear Expo cache: `npx expo start -c`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## 📚 Next Steps

- Read the [README.md](README.md) for project structure
- Check [DESIGN_REFERENCE.md](DESIGN_REFERENCE.md) for design guidelines
- Review [plan.md](plan.md) for feature roadmap

---

**Ready to build? Run `npx expo start` and scan the QR code!** 📱
