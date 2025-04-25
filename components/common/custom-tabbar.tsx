import React, { useContext } from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import NotificationIcon from "@expo/vector-icons/Ionicons";
import HomeVector from "@/assets/vectors/tab/HomeVector";
import ProfileVector from "@/assets/vectors/tab/ProfileVector";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList, TabsParamList } from "@/types/navigation";
import { useCartStore } from "@/stores/cart";

const CustomTabBar = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const cart = useCartStore((state) => state.cart);

  const navState = navigation.getState();

  const tabState = navState.routes.find((r) => r.name === "tabs")?.state;
  // console.log("🚀 ~ CustomTabBar ~ tabState:", tabState?.routeNames);

  const currentTabRoute =
    tabState &&
    "index" in tabState &&
    Array.isArray(tabState.routes) &&
    typeof tabState.index === "number"
      ? tabState.routes[tabState.index].name
      : "home";

  const tabs = [
    { name: "home", icon: <HomeVector isFocus={currentTabRoute === "home"} /> },
    {
      name: "cart",
      icon: (
        <View style={styles.cartIconWrapper}>
          <FontAwesome5
            name="shopping-cart"
            size={22}
            color={currentTabRoute === "cart" ? "#FF6B57" : "#747785"}
          />
          {cart && (
            <View style={styles.cartIconContainer}>
              <Text style={styles.cartTextQuantity}>{cart?.items.length}</Text>
            </View>
          )}
        </View>
      ),
    },
    {
      name: "notification",
      icon: (
        <NotificationIcon
          name="notifications"
          size={26}
          color={currentTabRoute === "notification" ? "#FF6B57" : "#747785"}
        />
      ),
    },
    {
      name: "profile",
      icon: <ProfileVector isFocus={currentTabRoute === "profile"} />,
    },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <Pressable
          key={tab.name}
          style={[
            styles.iconContainer,
            currentTabRoute === tab.name && styles.bottomHighlight,
          ]}
          onPress={() => {
            if (tab.name === "cart") {
              navigation.navigate("cart");
            } else {
              navigation.navigate("tabs", {
                screen: tab.name as Exclude<keyof TabsParamList, "home">,
              });
            }
          }}
        >
          {tab.icon}
        </Pressable>
      ))}
    </View>
  );
};

//   else if (tab.name === "home") {
//   navigation.navigate("tabs", {
//     screen: "home",
//     params: {
//       screen: "home-main", // hoặc bất kỳ screen mặc định nào trong Home stack
//     },
//   });
// }

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    height: 59,
    flexDirection: "row",
    backgroundColor: "#242731",
    paddingVertical: 16,
    paddingHorizontal: 22,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 16,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    width: 42,
    height: 59,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomHighlight: {
    borderBottomWidth: 3,
    borderBottomColor: "#FF6B57",
  },
  cartIconWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  cartIconContainer: {
    position: "absolute",
    top: -8,
    right: -6,
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
