import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle } from "react-native-svg";
import { useAuthStore } from "@/stores/auth";

const { width } = Dimensions.get("window");

const CreditCard = () => {
  const { user } = useAuthStore();
  return (
    <LinearGradient
      colors={["#2B2B2B", "#1978BA"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <ImageBackground
        source={require("../../assets/images/profile/bg-card.png")} // hoặc từ URL: { uri: "https://..." }
        resizeMode="cover"
        style={{ padding: 20 }}
      >
        <Svg height="100" width="100" style={styles.circle}>
          <Circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.1)" />
        </Svg>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.bankName}>Finaci</Text>
          <Image
            source={require("../../assets/images/profile/name-card.png")}
          />
        </View>
        <Text style={styles.cardNumber}>**** **** **** 1234</Text>
        <Image source={require("../../assets/images/profile/chip-card.png")} />
        <View style={styles.footer}>
          <View>
            <Text style={styles.label}>Card Holder</Text>
            <Text style={styles.value}>
              {user?.firstName + " " + user?.lastName}
            </Text>
          </View>
          <View>
            <Text style={styles.label}>Expires</Text>
            <Text style={styles.value}>12/28</Text>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    height: 200,
    borderRadius: 20,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  circle: {
    position: "absolute",
    top: -20,
    right: -20,
  },
  bankName: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  cardNumber: {
    color: "white",
    fontSize: 20,
    letterSpacing: 3,
    marginTop: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  label: {
    color: "#ccc",
    fontSize: 12,
  },
  value: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default CreditCard;
