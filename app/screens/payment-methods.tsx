import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";
import BackScreenVector from "@/assets/vectors/introduce/BackScreenVector";
import CreditCard from "@/components/profile/credit-card";

const PaymentMethods = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const paymentMethods = [
    {
      id: "1",
      type: "Visa",
      lastFour: "1234",
      expiry: "12/26",
      icon: "card",
    },
    {
      id: "2",
      type: "PayPal",
      email: "carter.baker@x.dummyjson.com",
      icon: "logo-paypal",
    },
    {
      id: "3",
      type: "MasterCard",
      lastFour: "5678",
      expiry: "09/25",
      icon: "card",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.contentHeader}>
          <Pressable style={styles.vectorContainer} onPress={handleGoBack}>
            <BackScreenVector />
          </Pressable>
          <Text style={styles.headerTitle}>Payment Methods</Text>
          <View style={[styles.vectorContainer, { opacity: 0 }]} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <CreditCard />
      </View>
      <View style={styles.infoContainer}>
        {paymentMethods.map((method) => (
          <PaymentMethodItem
            key={method.id}
            icon={method.icon}
            label={method.type}
            value={
              method.lastFour
                ? `**** **** **** ${method.lastFour} (Expires: ${method.expiry})`
                : method.email
            }
          />
        ))}
        <TouchableOpacity style={styles.addButton}>
          <Ionicons
            name="add-circle"
            size={24}
            color="#4B5EAA"
            style={styles.icon}
          />
          <Text style={styles.addButtonText}>Add Payment Method</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const PaymentMethodItem = ({ icon, label, value, onEdit, onDelete }: any) => (
  <View style={styles.infoItem}>
    <TouchableOpacity style={styles.infoContent} onPress={onEdit}>
      <Ionicons name={icon} size={24} color="#4B5EAA" style={styles.icon} />
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={onDelete}>
      <Ionicons name="pencil" size={20} color="#EF4444" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  contentHeader: {
    width: "100%",
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  vectorContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2A44",
  },
  infoContainer: {
    padding: 20,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  infoContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginRight: 15,
  },
  label: {
    fontSize: 14,
    color: "#6B7280",
  },
  value: {
    fontSize: 16,
    color: "#1F2A44",
    fontWeight: "500",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  addButtonText: {
    fontSize: 16,
    color: "#4B5EAA",
    fontWeight: "500",
  },
});

export default PaymentMethods;
