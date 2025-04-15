import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TabBarBackground from "@/components/ui/TabBarBackground";
import HomeVector from "@/assets/vectors/tab/HomeVector";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import ProfileVector from "@/assets/vectors/tab/ProfileVector";
import NotificationIcon from "@expo/vector-icons/Ionicons";
import HeaderTabs from "@/components/common/header-tabs";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        header: () => (
          <View
            style={{
              paddingTop: 50,
              width: "100%",
              paddingHorizontal: 25,
              backgroundColor: "white",
            }}
          >
            <HeaderTabs />
          </View>
        ),
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          height: 59,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#242731",
          paddingVertical: 16,
          paddingHorizontal: 22,
          marginBottom: 20,
          marginHorizontal: 20,
          borderTopWidth: 0,
          borderTopColor: "transparent",
          borderRadius: 16,
          position: "absolute",
        },
        tabBarItemStyle: {
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
      initialRouteName="home/home"
    >
      <Tabs.Screen
        name="home/home"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.iconContainer, focused && styles.bottomHighlight]}
            >
              <HomeVector isFocus={focused} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart/cart"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.iconContainer, focused && styles.bottomHighlight]}
            >
              <FontAwesome5
                name="shopping-cart"
                size={22}
                color={!focused ? "#747785" : "#FF6B57"}
              />
            </View>
          ),
        }}
      />{" "}
      <Tabs.Screen
        name="profile/profile"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.iconContainer, focused && styles.bottomHighlight]}
            >
              <ProfileVector isFocus={focused} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notification/notification"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.iconContainer, focused && styles.bottomHighlight]}
            >
              <NotificationIcon
                name="notifications"
                size={26}
                color={!focused ? "#747785" : "#FF6B57"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    height: 59,
    width: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomHighlight: {
    borderBottomWidth: 3,
    borderBottomColor: "#FF6B57",
  },
});
