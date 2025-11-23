# FitYaar CI/CD Setup Guide

## 🚀 GitHub Actions Workflow

This repository includes automated build and release workflows for Android and iOS.

## ⚡ Quick Start (First Time Setup)

**You must complete these steps locally before GitHub Actions can build:**

1. **Install EAS CLI** (if not already installed):
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**:
   ```bash
   eas login
   ```
   Enter your Expo credentials (or create account at expo.dev)

3. **Initialize EAS Project**:
   ```bash
   eas init
   ```
   This will:
   - Create a project on Expo servers
   - Add `projectId` to your `app.json`
   - Link your local project to Expo

4. **Commit the changes**:
   ```bash
   git add app.json
   git commit -m "Initialize EAS project"
   git push
   ```

Now GitHub Actions can build your app!

## 📋 Prerequisites

### 1. Expo Account
- Create an account at [expo.dev](https://expo.dev)
- Generate an access token at [expo.dev/accounts/[username]/settings/access-tokens](https://expo.dev/accounts/[username]/settings/access-tokens)

### 2. GitHub Secrets
Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

- `EXPO_TOKEN_FIT_YAAR`: Your Expo access token

### 3. EAS Configuration
The `eas.json` file is already configured with three build profiles:
- **development**: For development builds
- **preview**: For testing (APK for Android)
- **production**: For app store releases (AAB for Android, IPA for iOS)

## 🎯 How to Use

### Manual Build (Any Time)
1. Go to **Actions** tab in GitHub
2. Select **Build and Release** workflow
3. Click **Run workflow**
4. Choose platform: `android`, `ios`, or `all`
5. Click **Run workflow**

### Automatic Release (On Version Tag)
1. Create and push a version tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
2. GitHub Actions will automatically:
   - Build Android APK and AAB
   - Build iOS IPA
   - Create a GitHub Release

## 📱 Build Profiles

### Preview Build (Testing)
- **Android**: APK file (easy to install on devices)
- **iOS**: IPA file (can be installed via TestFlight)
- Triggered by manual workflow or tags

### Production Build (App Stores)
- **Android**: AAB file (for Google Play Store)
- **iOS**: IPA file (for App Store)
- Only triggered by version tags (v*.*.*)

## 🔧 First Time Setup

1. **Initialize EAS**:
   ```bash
   npm install -g eas-cli
   eas login
   eas build:configure
   ```

2. **Update eas.json** (if needed):
   - Add your Apple ID for iOS builds
   - Configure Android signing if needed

3. **Add Expo Token to GitHub**:
   - Generate token: https://expo.dev/accounts/[username]/settings/access-tokens
   - Add to GitHub Secrets as `EXPO_TOKEN_FIT_YAAR`

## 📦 Download Builds

After the workflow completes:
1. Go to [Expo Dashboard](https://expo.dev)
2. Navigate to your project
3. Go to **Builds** section
4. Download APK/AAB/IPA files

## 🎉 Release Process

1. **Test your changes** locally
2. **Update version** in `app.json`:
   ```json
   {
     "expo": {
       "version": "1.0.0"
     }
   }
   ```
3. **Commit and push** changes
4. **Create and push tag**:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
5. **Wait for builds** to complete on Expo
6. **Download and test** builds
7. **Submit to stores** (manual or via EAS Submit)

## 🔐 Security Notes

- Never commit `service-account-key.json` or other credentials
- Use GitHub Secrets for all sensitive data
- Keep your Expo token secure

## 📚 Resources

- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [EAS Submit Documentation](https://docs.expo.dev/submit/introduction/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
