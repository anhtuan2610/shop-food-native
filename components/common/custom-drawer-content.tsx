import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useAuthStore } from "@/stores/auth";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DrawerItem from "./drawer-item";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";
import { useCartStore } from "@/stores/cart";

type TDrawerItem = {
  id: number;
  icon: React.JSX.Element;
  name: string;
  handleRedirect: () => void;
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { user } = useAuthStore();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const clearAuthData = useAuthStore((state) => state.clearAuthData);
  const clearCartData = useCartStore((state) => state.clearCartData);

  const drawerItems: TDrawerItem[] = [
    {
      id: 1,
      icon: <Ionicons name="home-outline" size={32} color="black" />,
      name: "Home",
      handleRedirect: () => {
        navigation.navigate("drawers", {
          screen: "tabs",
          params: {
            screen: "home",
          },
        });
      },
    },
    {
      id: 2,
      icon: <AntDesign name="user" size={32} color="black" />,
      name: "Profile",
      handleRedirect: () => {
        navigation.navigate("profile");
      },
    },
    {
      id: 3,
      icon: <MaterialIcons name="logout" size={32} color="black" />,
      name: "Log out",
      handleRedirect: async () => {
        await clearCartData();
        await clearAuthData();
        navigation.reset({
          routes: [{ name: "index" }],
        });
      },
    },
  ];

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require("../../assets/images/common/oke-min.png")}
        />
        <Text style={styles.username}>
          Hello, {user?.firstName + " " + user?.lastName}!
        </Text>
      </View>

      <View style={styles.menu}>
        {drawerItems.map((item) => (
          <DrawerItem
            key={item.id}
            icon={item.icon}
            name={item.name}
            handleRedirect={item.handleRedirect}
          />
        ))}
      </View>

      <View style={styles.footer}></View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  menu: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default CustomDrawerContent;
