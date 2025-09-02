import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.1ae9bcaf673d438eabd22c65a9c97827',
  appName: 'RetroSplit Mobile',
  webDir: 'dist',
  server: {
    url: 'https://1ae9bcaf-673d-438e-abd2-2c65a9c97827.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    scheme: 'RetroSplit'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#007AFF',
      showSpinner: false
    },
    StatusBar: {
      style: 'default',
      backgroundColor: '#007AFF'
    }
  }
};

export default config;