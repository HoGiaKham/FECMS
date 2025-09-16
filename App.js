// App.js
import React, { useCallback } from 'react';
import ManageScreen from './screens/ManageScreen';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // <-- 1. IMPORT PROVIDER

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // 2. BỌC TOÀN BỘ ỨNG DỤNG BẰNG SAFEAREADPROVIDER
    <SafeAreaProvider> 
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <ManageScreen />
      </View>
    </SafeAreaProvider>
  );
}