import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { StatusBar, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ contentStyle: styles.content }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="movie/details" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.dark.background,
    marginTop: StatusBar.currentHeight,
  },
});
