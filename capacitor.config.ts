import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.taku-cloud.tasukeai',
  appName: 'tasukeai',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    splashScreen: {
      launchShowDuration: 0
    }
  },
};

export default config;
