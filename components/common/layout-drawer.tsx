import { View } from "react-native";
import HeaderDrawers from "./header-drawer";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";

const DrawerLayout = ({ children }: { children: React.ReactNode }) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const navState = navigation.getState();
  const drawerState = navState.routes.find((r) => r.name === "drawers")?.state;
  const getCurrentRouteName = (state: any): string | undefined => {
    if (!state) return undefined;
    const route = state.routes[state.index];
    return route.state ? getCurrentRouteName(route.state) : route.name;
  }; // ?

  const currentRouteName = getCurrentRouteName(drawerState);
  console.log("🚀 ~ DrawerLayout ~ currentRouteName:", currentRouteName);

  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingTop: 40 }}>
      {children}
    </View>
  );
};

export default DrawerLayout;
