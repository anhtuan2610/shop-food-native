import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BackScreenVector from "@/assets/vectors/introduce/BackScreenVector";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";

const HelpCenter = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const topics = [
    {
      id: "1",
      icon: "help-circle-outline",
      title: "FAQs",
    },
    {
      id: "2",
      icon: "document-text-outline",
      title: "User Guide",
    },
    {
      id: "3",
      icon: "chatbox-ellipses-outline",
      title: "Contact Support",
    },
    {
      id: "4",
      icon: "shield-checkmark-outline",
      title: "Privacy Policy",
    },
    {
      id: "5",
      icon: "alert-circle-outline",
      title: "Report an Issue",
    },
  ];

  const handleBackScreen = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentHeader}>
        <Pressable style={styles.vectorContainer} onPress={handleBackScreen}>
          <BackScreenVector />
        </Pressable>
        <Text style={styles.textTitle}>Help Center</Text>
        <View style={[styles.vectorContainer, { opacity: 0 }]} />
      </View>
      <View style={styles.listContainer}>
        {topics.map((item) => (
          <TouchableOpacity key={item.id} style={styles.item}>
            <Ionicons
              name={item.icon as any}
              size={22}
              color="#4B5EAA"
              style={styles.icon}
            />
            <Text style={styles.itemText}>{item.title}</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#9CA3AF"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  listContainer: {
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  icon: {
    marginRight: 16,
  },
  itemText: {
    fontSize: 16,
    color: "#1F2A44",
  },
  contentHeader: {
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  vectorContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
});

export default HelpCenter;
