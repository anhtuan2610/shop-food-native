import { Tabs, useRouter } from "expo-router";
import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import TabBarBackground from "@/components/ui/TabBarBackground";
import HomeVector from "@/assets/vectors/tab/HomeVector";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import ProfileVector from "@/assets/vectors/tab/ProfileVector";
import NotificationIcon from "@expo/vector-icons/Ionicons";
import HeaderTabs from "@/components/common/header-tabs";
import { CartContext } from "@/context/cart-context";

export default function TabLayout() {
  const cartContext = useContext(CartContext);
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        header: () => (
          <View style={styles.header}>
            <HeaderTabs />
          </View>
        ),
        tabBarStyle: styles.tabBarContainer,
        tabBarItemStyle: styles.tabBarItems,
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
          headerShown: false,
          tabBarStyle: { display: "none" },
          title: "",
          tabBarButton: ({ onPress, ...props }) => {
            const router = useRouter();
            return (
              <Pressable
                {...props} // giu nguyen thuoc tinh cu (khong thi no ko hien thi ui)
                onPress={() => {
                  router.push("/cart/cart");
                }}
              />
            );
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.iconContainer, focused && styles.bottomHighlight]}
            >
              <FontAwesome5
                name="shopping-cart"
                size={22}
                color={!focused ? "#747785" : "#FF6B57"}
              />
              {(cartContext?.cart.length ?? 0) > 0 && (
                <View style={styles.cartIconContainer}>
                  <Text style={styles.cartTextQuantity}>
                    {cartContext?.cart.length}
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
      />
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
  header: {
    paddingTop: 50,
    width: "100%",
    paddingHorizontal: 25,
    backgroundColor: "white",
  },
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
  tabBarContainer: {
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
  tabBarItems: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "absolute",
    top: 0,
    right: -10,
    backgroundColor: "rgba(255, 197, 41, 1)",
    borderRadius: 6,
    paddingHorizontal: 4,
    minWidth: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  cartTextQuantity: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
  },
});
