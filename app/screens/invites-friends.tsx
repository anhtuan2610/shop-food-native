import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const InviteFriends = () => {
  const benefits = [
    {
      icon: "gift-outline",
      title: "Earn $5",
      description: "Both you and your friend receive a $5 reward.",
    },
    {
      icon: "people-outline",
      title: "Unlimited Invites",
      description: "Invite as many friends as you like!",
    },
    {
      icon: "checkmark-circle-outline",
      title: "Easy to Join",
      description: "Your friend signs up in just a few steps.",
    },
  ];

  const handleShare = async () => {
    try {
      await Share.share({
        message:
          "Join this awesome app and get $5! Sign up here: https://example.com/invite",
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Invite Friends & Earn Rewards</Text>
        <Text style={styles.subtitle}>
          Share your referral link and get rewards when your friends sign up!
        </Text>

        <View style={{ marginVertical: 20 }}>
          {benefits.map((item) => (
            <View style={styles.benefitItem} key={item.title}>
              <Ionicons name={item.icon as any} size={28} color="#4B5EAA" />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.benefitTitle}>{item.title}</Text>
                <Text style={styles.benefitDesc}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 2 }}>
          <Text style={styles.inputLabel}>
            Enter Your Invited Code (optional)
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="e.g. JOHN123"
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleShare}>
            <Ionicons name="share-social-outline" size={20} color="#FFF" />
            <Text style={styles.buttonText}>Share Invite Link</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1F2A44",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 8,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1F2A44",
  },
  benefitDesc: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },
  button: {
    backgroundColor: "#4B5EAA",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
  inputLabel: {
    fontSize: 14,
    color: "#1F2A44",
    marginBottom: 6,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#1F2A44",
    flex: 1,
  },
  applyButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  applyButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default InviteFriends;
