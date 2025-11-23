#!/bin/bash

echo "🚀 Setting up FitYaar React Native + Expo Development Environment..."

# Switch to root for installations if needed
if [ "$(whoami)" != "root" ]; then
    echo "Switching to root for package installations..."
    exec sudo bash "$0" "$@"
fi

# Update package lists
echo "📦 Updating package lists..."
apt-get update

# Install basic development tools
echo "🛠️  Installing development tools..."
apt-get install -y \
    curl \
    git \
    unzip \
    wget \
    vim

# Install Watchman (for better file watching in React Native)
echo "👁️  Installing Watchman..."
apt-get install -y watchman || echo "⚠️  Watchman not available in apt, skipping..."

# Verify Node.js and npm are installed
echo "🔍 Verifying Node.js installation..."
node --version
npm --version

# Install Expo CLI globally
echo "📱 Installing Expo CLI and EAS CLI..."
npm install -g expo-cli eas-cli

# Install project dependencies if package.json exists
if [ -f "package.json" ]; then
    echo "📦 Installing project dependencies..."
    npm install
else
    echo "⚠️  No package.json found, skipping npm install"
fi

# Set up environment variables for Expo
echo "🔧 Setting up environment variables..."
export EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
echo "export EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0" >> ~/.bashrc

echo ""
echo "✅ Setup complete!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📱 FitYaar React Native + Expo Development Environment Ready!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🚀 Quick Start:"
echo ""
echo "   npx expo start --tunnel"
echo ""
echo "📱 Testing on Your Device:"
echo ""
echo "   1. Install Expo Go on your phone:"
echo "      • iOS:     https://apps.apple.com/app/expo-go/id982107779"
echo "      • Android: https://play.google.com/store/apps/details?id=host.exp.exponent"
echo ""
echo "   2. Start the development server:"
echo "      npx expo start --tunnel"
echo ""
echo "   3. Scan the QR code:"
echo "      • iOS:     Use Camera app"
echo "      • Android: Use Expo Go app"
echo ""
echo "   4. App will load on your device automatically!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📚 Documentation:"
echo "   • Quick Start:      QUICK_START.md"
echo "   • Codespaces Guide: CODESPACES_GUIDE.md"
echo "   • Test App Guide:   TEST_APP_GUIDE.md"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "💡 Tips:"
echo "   • Press 'r' in terminal to reload app"
echo "   • Press 'm' to toggle menu"
echo "   • Shake device to open developer menu"
echo ""
echo "🎨 Happy coding! Build something amazing! 🚀"
echo ""
