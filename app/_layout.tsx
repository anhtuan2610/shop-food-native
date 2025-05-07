import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import SignUp from "./screens/signup";
import Login from "./screens/login";
import ForgotPassword from "./screens/forgot-password";
import Verification from "./screens/verification";
import Cart from "./screens/cart";
import IntroduceScreen from "./screens";
import TabbarNavigation from "@/navigations/tabbar-navigation";
import { useAuthStore } from "@/stores/auth";
import { useCartStore } from "@/stores/cart";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import ProductDetailsModal from "@/components/product-details/product-details-modal";
import { useModalStore } from "@/stores/modal";
import ProductActionBar from "@/components/product-details/action-bar";
import AllProducts from "./screens/all-products";
import PostDetails from "./screens/post-details";
import DrawerNavigation from "@/navigations/drawer-navigation";
import Profile from "./screens/profile";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();
const { height } = Dimensions.get("window");

export default function RootLayout() {
  const modalizeRef = useRef<Modalize>(null);
  const [panGestureEnabled, setPanGestureEnabled] = useState(true);
  const loadAuthData = useAuthStore((state) => state.loadAuthData);
  const loadCartData = useCartStore((state) => state.loadCartData);
  const accessToken = useAuthStore((state) => state.accessToken);
  const { isOpen, onClose } = useModalStore();
  useFonts({
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
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        LogBox.ignoreAllLogs();
        await loadAuthData();
        await loadCartData();
        const timeout = setTimeout(() => {
          setIsReady(true);
        }, 1500);
        return () => clearTimeout(timeout);
      } catch (error) {
        // console.log(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (isOpen) {
      modalizeRef.current?.open();
      setPanGestureEnabled(true);
    } else {
      modalizeRef.current?.close();
    }
  }, [isOpen]);

  const handlePositionChange = (position: string) => {
    if (position === "top") {
      setPanGestureEnabled(false);
    }
  };

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={accessToken ? "drawers" : "index"}
      >
        <Stack.Screen name="index" component={IntroduceScreen} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="forgot-password" component={ForgotPassword} />
        <Stack.Screen name="verification" component={Verification} />
        <Stack.Screen name="drawers" component={DrawerNavigation} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="post-details" component={PostDetails} />
        <Stack.Screen name="all-products" component={AllProducts} />
        <Stack.Screen name="profile" component={Profile} />
        {/* <Stack.Screen name="+not-found" component={NotFoundScreen} /> */}
      </Stack.Navigator>
      <StatusBar style="auto" />
      <Modalize
        ref={modalizeRef}
        modalHeight={height} // full-screen khi vuốt lên
        snapPoint={height * (70 / 100)} // dừng ở 400px khi vuốt xuống
        disableScrollIfPossible={true}
        panGestureEnabled={panGestureEnabled}
        onPositionChange={handlePositionChange}
        // adjustToContentHeight
        // childrenStyle={{ height: 370 }}
        onClose={onClose}
        rootStyle={{ flex: 1 }}
        modalStyle={{ paddingTop: 10 }}
      >
        <ProductDetailsModal />
      </Modalize>
      {isOpen && (
        <View style={{ position: "absolute", bottom: 0, zIndex: 9999 }}>
          <ProductActionBar />
        </View>
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
