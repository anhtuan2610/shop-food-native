import { createDrawerNavigator } from "@react-navigation/drawer";
import TabbarNavigation from "./tabbar-navigation";
import Profile from "@/app/screens/profile";
import HeaderDrawers from "@/components/common/header-drawer";
import CustomDrawerContent from "@/components/common/custom-drawer-content";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="tabs"
      screenOptions={{
        header: () => <HeaderDrawers />,
        drawerStyle: {
          width: "75%",
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="tabs" component={TabbarNavigation} />
      {/* <Drawer.Screen name="profile" component={Profile} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
