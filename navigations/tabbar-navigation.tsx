import React from "react";
import Home from "@/app/screens/home";
import Notification from "@/app/screens/notification";
import Profile from "@/app/screens/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "@/components/common/custom-tabbar";
import TabbarLayout from "@/components/common/layout-tabbar";
// import HomeNavigation from "./home-navigation";

const Tab = createBottomTabNavigator();

const TabbarNavigation = () => {
  return (
    <TabbarLayout>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
        tabBar={() => <CustomTabBar />}
      >
        {/* <Tab.Screen name="home" component={HomeNavigation} /> */}
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="notification" component={Notification} />
        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
    </TabbarLayout>
  );
};

export default TabbarNavigation;
