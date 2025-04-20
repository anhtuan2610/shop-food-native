// MainLayout.tsx
import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import CustomTabBar from "@/components/common/custom-tabbar";
import HeaderTabs from "./header-tabs";

const TabbarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <HeaderTabs />
        <View style={styles.content}>{children}</View>
        <CustomTabBar />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TabbarLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
  },
});
