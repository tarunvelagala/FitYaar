# FitYaar - GitHub Codespaces Setup Guide

> **Complete guide for developing FitYaar in GitHub Codespaces with React Native + Expo**

## 🎯 Overview

This guide will help you set up and run the FitYaar React Native app in GitHub Codespaces and test it on your physical Android/iOS device.

## 📋 Prerequisites

- GitHub account with Codespaces access
- Physical Android or iOS device
- **Expo Go app** installed on your device:
  - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Android - Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## 🚀 Getting Started

### 1. Open in Codespaces

1. Go to the FitYaar repository on GitHub
2. Click the green **Code** button
3. Select **Codespaces** tab
4. Click **Create codespace on main**

Wait for the environment to build (2-3 minutes first time).

### 2. Install Dependencies

The devcontainer should auto-install dependencies, but if needed:

```bash
npm install
```

### 3. Start Expo Development Server

```bash
npx expo start --tunnel
```

**Important:** Use `--tunnel` flag in Codespaces to create a public URL accessible from your phone.

### 4. Connect Your Device

**Using Expo Go (Recommended)**

1. Open Expo Go app on your phone
2. Scan the QR code shown in the terminal
3. App will load on your device automatically

That's it! No USB cables, no ADB setup needed. Expo's tunnel mode creates a secure connection between Codespaces and your phone over the internet.

## 📱 Testing on Your Device

### Expected Behavior

When the app loads, you should see:
- FitYaar test screen with pastel cards
- Interactive counter
- Three buttons (−, ↻, +)
- Success message confirming setup

### Hot Reload

Make changes to the code and:
- Press `r` in terminal to reload
- Or shake your device and tap "Reload"
- Changes appear instantly!

## 🛠️ Development Workflow

### Common Commands

```bash
# Start development server with tunnel
npx expo start --tunnel

# Start with cache cleared
npx expo start --tunnel -c

# View logs
npx expo start --tunnel --dev-client

# Install new package
npm install <package-name>
```

### File Structure

```
FitYaar/
├── App.tsx                 # Main entry point
├── src/
│   ├── components/         # Reusable components
│   ├── screens/            # App screens
│   ├── theme/              # Colors, typography
│   ├── navigation/         # Navigation setup
│   └── services/           # Firebase, API
├── app.json                # Expo config
└── package.json            # Dependencies
```

### Making Changes

1. Edit files in `src/` directory
2. Save the file
3. Press `r` in terminal or shake device
4. See changes instantly!

## 🔧 Troubleshooting

### Can't Connect to Development Server

**Problem:** QR code scan doesn't work

**Solution:**
```bash
# Use tunnel mode (creates public URL)
npx expo start --tunnel
```

### App Won't Load

**Problem:** App crashes or shows error

**Solution:**
```bash
# Clear cache and restart
npx expo start --tunnel -c

# Or reinstall dependencies
rm -rf node_modules
npm install
npx expo start --tunnel
```

### Slow Performance in Codespaces

**Problem:** Development server is slow

**Solution:**
- Use a smaller Codespace machine type
- Close unused browser tabs
- Restart Codespace if needed

### TypeScript Errors

**Problem:** Red squiggly lines in editor

**Solution:**
```bash
# Reinstall dependencies
npm install

# Restart TypeScript server in VS Code
# Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

## 🎨 Design System

FitYaar uses an iOS-inspired minimalist design:

### Colors
- **Backgrounds:** White (#FFFFFF), Light Gray (#F5F5F7)
- **Pastel Cards:** Blue, Beige, Green, Yellow, Pink, Purple
- **Text:** Black (#000000), Gray (#6B6B6B)

### Typography
- **Display:** 48px, bold
- **Heading:** 32px, bold
- **Body:** 17px, regular

See `src/theme/colors.ts` and `src/theme/typography.ts` for full design system.

## 📚 Resources

### Documentation
- [Expo Docs](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [Firebase Docs](https://firebase.google.com/docs)

### Community
- [Expo Discord](https://chat.expo.dev/)
- [React Native Community](https://reactnative.dev/community/overview)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/expo)

## 🔥 Firebase Setup (Coming Soon)

When ready to add Firebase:

1. Create Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Add web app to Firebase project
3. Copy configuration to `.env` file
4. Install Firebase: `npm install firebase`
5. Configure in `src/services/firebase/config.ts`

## 📝 Quick Reference

### Start Development
```bash
npx expo start --tunnel
```

### Clear Cache
```bash
npx expo start --tunnel -c
```

### Install Package
```bash
npm install <package-name>
```

### View Device Logs
```bash
npx expo start --tunnel --dev-client
```

### Build for Production (Future)
```bash
eas build --platform android
eas build --platform ios
```

## ✅ Checklist

Before starting development:

- [ ] Codespace is running
- [ ] Dependencies installed (`npm install`)
- [ ] Expo Go app installed on phone
- [ ] Development server started (`npx expo start --tunnel`)
- [ ] App loads on device
- [ ] Hot reload works
- [ ] Test screen displays correctly

## 🎯 Next Steps

1. **Verify Setup** - Run test app and confirm everything works
2. **Explore Code** - Check `src/` directory structure
3. **Read Plan** - Review `plan.md` for feature roadmap
4. **Start Building** - Begin implementing FitYaar features!

---

**Need help? Check the troubleshooting section or open an issue!** 🚀
