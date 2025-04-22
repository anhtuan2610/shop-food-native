import { TFoodInCart } from "@/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import SignUp from "./screens/signup";
import Login from "./screens/login";
import ForgotPassword from "./screens/forgot-password";
import Verification from "./screens/verification";
import Cart from "./screens/cart";
import IntroduceScreen from "./screens";
import TabbarNavigation from "@/navigations/tabbar-navigation";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-BlackItalic": require("../assets/fonts/Poppins-BlackItalic.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-BoldItalic": require("../assets/fonts/Poppins-BoldItalic.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraBoldItalic": require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-ExtraLightItalic": require("../assets/fonts/Poppins-ExtraLightItalic.ttf"),
    "Poppins-Italic": require("../assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-LightItalic": require("../assets/fonts/Poppins-LightItalic.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-MediumItalic": require("../assets/fonts/Poppins-MediumItalic.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-SemiBoldItalic": require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    // IntroduceImage1: require("../assets/images/introduce/introduce-1.png"),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (loaded) {
      const timeout = setTimeout(() => {
        setIsReady(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [loaded]);

  if (!isReady) {
    return (
      <ImageBackground
        source={require("../assets/images/Splash.png")}
        style={styles.splashContainer}
        resizeMode="cover"
      />
    );
  }

  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="index"
      >
        <Stack.Screen name="index" component={IntroduceScreen} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="forgot-password" component={ForgotPassword} />
        <Stack.Screen name="verification" component={Verification} />
        <Stack.Screen name="tabs" component={TabbarNavigation} />
        <Stack.Screen name="cart" component={Cart} />
        {/* <Stack.Screen name="+not-found" component={NotFoundScreen} /> */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
