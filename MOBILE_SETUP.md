# RetroSplit Mobile - Capacitor Setup

## Overview
RetroSplit Mobile is built with React + Capacitor for native iOS/Android capabilities while maintaining the iOS Human Interface Guidelines design.

## Development Setup

### 1. Initial Setup
The project includes Capacitor configuration. To set up for mobile development:

```bash
# Initialize Capacitor (already configured)
npx cap init

# Add platforms
npx cap add ios
npx cap add android
```

### 2. Building and Syncing

```bash
# Build the web app
npm run build

# Sync changes to native projects
npx cap sync
```

### 3. Running on Device/Simulator

```bash
# Run on iOS (requires macOS + Xcode)
npx cap run ios

# Run on Android (requires Android Studio)
npx cap run android
```

## Mobile Features

- **iOS-native Design**: Follows Apple Human Interface Guidelines
- **Tab Navigation**: Profile, Groups, Settings with badge support
- **Native Components**: Lists, navigation bars, buttons in iOS style
- **Responsive**: Optimized for mobile screens with safe area support
- **PWA Ready**: Can be installed as a web app

## Key Components

- `IOSTabBar`: Bottom navigation with iOS styling
- `IOSNavigationBar`: Top navigation with back buttons and actions  
- `IOSList`: Native-style list components with chevrons and icons
- `IOSIcon`: Wrapper for Lucide icons with iOS sizing

## Configuration

The app is configured in `capacitor.config.ts` with:
- App ID: `app.lovable.1ae9bcaf673d438eabd22c65a9c97827`
- Hot reload URL for development
- iOS-specific settings for status bar and splash screen

## Next Steps

To deploy to a physical device:
1. Export project to GitHub via Lovable
2. Clone and run `npm install`
3. Follow the build and sync steps above
4. Use Xcode/Android Studio to deploy to device

For more details, see: https://lovable.dev/blogs/TODO