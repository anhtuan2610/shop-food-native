import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/app/screens/home";
import AllProducts from "@/app/screens/all-products";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home-main"
    >
      <Stack.Screen name="home-main" component={Home} />
      <Stack.Screen name="all-products" component={AllProducts} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
