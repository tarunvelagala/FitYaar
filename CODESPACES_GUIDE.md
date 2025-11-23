# FitYaar - GitHub Codespaces Setup Guide

## 🚀 Quick Start with GitHub Codespaces

Your devcontainer is ready! Here's how to use it:

### Step 1: Push to GitHub

```bash
# Add remote (if not already added)
git remote add origin https://github.com/YOUR_USERNAME/FitYaar.git

# Push everything
git add .
git commit -m "Add devcontainer for Flutter development"
git push -u origin main
```

### Step 2: Open in Codespaces

1. Go to your GitHub repository
2. Click the green **"Code"** button
3. Select **"Codespaces"** tab
4. Click **"Create codespace on main"**

The container will automatically:
- ✅ Install Flutter
- ✅ Set up ADB
- ✅ Install VS Code extensions
- ✅ Configure development environment

### Step 3: Connect Your Phone

#### Option A: USB Connection (Recommended)
1. Enable **USB Debugging** on your Android phone:
   - Settings → About Phone → Tap "Build Number" 7 times
   - Settings → Developer Options → Enable "USB Debugging"

2. Connect phone via USB to your laptop

3. In Codespaces terminal:
   ```bash
   adb devices
   ```
   You should see your device listed!

#### Option B: Wireless ADB (Alternative)
1. Connect phone and laptop to same WiFi
2. On phone: Enable "Wireless Debugging" (Android 11+)
3. Get phone's IP address from Wireless Debugging settings
4. In Codespaces:
   ```bash
   adb connect <PHONE_IP>:5555
   ```

### Step 4: Run FitYaar

```bash
# Check connected devices
flutter devices

# Run on your phone
flutter run
```

---

## 📱 What's Included

### Flutter SDK
- Latest stable Flutter version
- Android SDK and tools
- Dart SDK

### VS Code Extensions
- Dart Code (official Dart support)
- Flutter (official Flutter support)
- Flutter Snippets
- Awesome Flutter Snippets
- Error Lens (better error display)
- GitLens (Git integration)

### ADB Tools
- Android Debug Bridge
- USB device support
- Wireless debugging support

---

## 🔧 Useful Commands

```bash
# Check Flutter setup
flutter doctor -v

# List connected devices
flutter devices
adb devices

# Run app
flutter run

# Hot reload (while app is running)
r

# Hot restart (while app is running)
R

# Quit app
q

# Install dependencies
flutter pub get

# Clean build
flutter clean
```

---

## 🐛 Troubleshooting

### Phone Not Detected?

```bash
# Restart ADB server
adb kill-server
adb start-server

# Check USB devices
lsusb

# Check ADB devices
adb devices
```

### Permission Issues?

On your phone, you might see "Allow USB Debugging?" - tap **Allow**

### Wireless Connection Issues?

```bash
# Make sure phone and codespace can communicate
adb tcpip 5555
adb connect <PHONE_IP>:5555
```

---

## ⚡ Pro Tips

1. **Hot Reload**: Press `r` while app is running to see changes instantly
2. **DevTools**: Run `flutter pub global activate devtools` for debugging tools
3. **Logs**: Use `flutter logs` to see real-time logs
4. **Performance**: Use `flutter run --profile` for performance testing

---

## 🎯 Next Steps

Once your Codespace is running:

1. ✅ Verify phone connection: `adb devices`
2. ✅ Create Flutter project: `flutter create .`
3. ✅ Run on phone: `flutter run`
4. ✅ Start building FitYaar! 🚀

---

## 💰 Codespaces Limits

**Free Tier:**
- 60 hours/month
- 2-core machine

**Tips to Save Hours:**
- Stop codespace when not using
- Use "Rebuild container" instead of creating new ones
- Delete unused codespaces

---

**Ready to start? Push to GitHub and open in Codespaces!** 🎉
