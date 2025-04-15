import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import HomeVector from "@/assets/vectors/tab/HomeVector";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import ProfileVector from "@/assets/vectors/tab/ProfileVector";
import NotificationIcon from "@expo/vector-icons/Ionicons";
import HeaderTabs from "@/components/common/header-tabs";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#242731",
          paddingVertical: 16,
          paddingHorizontal: 22,
        },
      }}
      initialRouteName="home/home"
    >
      <Tabs.Screen
        name="home/home"
        options={{
          title: "",
          tabBarIcon: () => (
            <View style={styles.iconBar}>
              <HomeVector />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart/cart"
        options={{
          title: "",
          tabBarIcon: () => (
            <View style={styles.iconBar}>
              <FontAwesome5 name="shopping-cart" size={22} color="#747785" />
            </View>
          ),
        }}
      />{" "}
      <Tabs.Screen
        name="profile/profile"
        options={{
          title: "",
          tabBarIcon: () => (
            <View style={styles.iconBar}>
              <ProfileVector />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notification/notification"
        options={{
          title: "",
          tabBarIcon: () => (
            <View style={styles.iconBar}>
              <NotificationIcon
                name="notifications"
                size={22}
                color="#747785"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconBar: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
