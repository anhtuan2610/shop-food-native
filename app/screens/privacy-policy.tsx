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

const PrivacyPolicy = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.vectorContainer} onPress={handleGoBack}>
          <BackScreenVector />
        </Pressable>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text style={styles.headerTitle}>Privacy Policy</Text>
          <Ionicons name="shield-checkmark-outline" size={28} color="#4B5EAA" />
        </View>
        <View style={[styles.vectorContainer, { opacity: 0 }]} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.text}>
          This Privacy Policy explains how we collect, use, and share your
          personal information when you use our services. By using the services,
          you agree to this policy.
        </Text>

        <Text style={styles.title}>Information We Collect</Text>
        <Text style={styles.text}>
          We collect personal information such as name, email address, payment
          details, and more when you use our services.
        </Text>

        <Text style={styles.title}>How We Use Your Information</Text>
        <Text style={styles.text}>
          Your information is used to provide, improve, and personalize our
          services, communicate with you, and process payments.
        </Text>

        <Text style={styles.title}>Data Security</Text>
        <Text style={styles.text}>
          We take reasonable measures to protect your information from
          unauthorized access, disclosure, or destruction.
        </Text>

        <Text style={styles.title}>Changes to This Policy</Text>
        <Text style={styles.text}>
          We may update this Privacy Policy from time to time. Any changes will
          be posted here, and the updated policy will be effective immediately
          upon posting.
        </Text>

        <Text style={styles.text}>
          By continuing to use our services, you agree to any changes made to
          this Privacy Policy.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
  },
  headerTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
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
  content: {
    marginTop: 18,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    color: "#2C3E50",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#7F8C8D",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#4B5EAA",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default PrivacyPolicy;
