import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { FontAwesome5, MaterialIcons, Feather } from "@expo/vector-icons";

const notifications = [
  {
    id: "1",
    title: "New Message",
    description: "You have received a new message from John.",
    time: "5 min ago",
    icon: <MaterialIcons name="message" size={24} color="#007bff" />,
  },
  {
    id: "2",
    title: "Order Shipped",
    description: "Your order #1234 has been shipped.",
    time: "1 hour ago",
    icon: <Feather name="truck" size={24} color="#28a745" />,
  },
  {
    id: "3",
    title: "Reminder",
    description: "Don't forget your meeting at 3 PM.",
    time: "Today",
    icon: <FontAwesome5 name="bell" size={24} color="#ffc107" />,
  },
];

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.icon}>{item.icon}</View>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 30 }}
        contentContainerStyle={{ paddingBottom: 16, gap: 10 }}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },

  textTitle: {
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  card: {
    flexDirection: "row",
    padding: 12,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  time: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 4,
  },
});
