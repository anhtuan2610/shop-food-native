import BackScreenVector from "@/assets/vectors/introduce/BackScreenVector";
import ActionBar from "@/components/cart/action-bar";
import Address from "@/components/cart/address";
import FoodCard from "@/components/cart/food-card";
import CartHeader from "@/components/cart/header";
import InputPromo from "@/components/cart/input-promo";
import PriceDetails from "@/components/cart/price-details";
import { CartContext } from "@/context/cart-context";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <CartHeader />
        <View style={styles.foodCardsContainer}>
          <FoodCard />
          <FoodCard />
        </View>
        <InputPromo />
        <PriceDetails />
      </View>
      <Address />
      <ActionBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white",
  },
  contentContainer: {
    paddingHorizontal: 26,
    flex: 1,
  },
  foodCardsContainer: {
    gap: 10,
  },
});

export default Cart;
