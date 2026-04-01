import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler"

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"

import * as SplashScreen from "expo-splash-screen"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@/theme";

SplashScreen.preventAutoHideAsync()

export default function Layout() {

    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    if (!fontsLoaded) {
       SplashScreen.hideAsync()
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.black}} edges={["top"]}>
                <GestureHandlerRootView style={{flex: 1}}>
                    <StatusBar barStyle="light-content"/>
                    {
                        fontsLoaded && <Slot />
                    }
                </GestureHandlerRootView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}