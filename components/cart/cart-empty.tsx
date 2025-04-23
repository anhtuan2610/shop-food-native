import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EmptyVector from "@/assets/vectors/cart/empty-vector";
import CartHeader from "./header";

const CartEmpty = () => {
  return (
    <View style={styles.container}>
      <CartHeader />
      <View style={styles.contentContainer}>
        <View style={styles.vectorContainer}>
          <EmptyVector />
        </View>
        <Text style={styles.title}>Your cart is empty</Text>
        <Text style={styles.subtitle}>
          Looks like you haven’t added anything yet.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 22,
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
  },
});

export default CartEmpty;
