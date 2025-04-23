// MainLayout.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderTabs from "./header-tabs";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";

const TabbarLayout = ({ children }: { children: React.ReactNode }) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const navState = navigation.getState();

  const tabState = navState.routes.find((r) => r.name === "tabs")?.state;

  const currentTabRoute =
    tabState &&
    "index" in tabState &&
    Array.isArray(tabState.routes) &&
    typeof tabState.index === "number"
      ? tabState.routes[tabState.index].name
      : "home";

  return (
    <View style={styles.container}>
      {currentTabRoute === "home" && <HeaderTabs />}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default TabbarLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
  },
});
