import ActionBar from "@/components/cart/action-bar";
import Address from "@/components/cart/address";
import CartEmpty from "@/components/cart/cart-empty";
import FoodCard from "@/components/cart/food-card";
import CartHeader from "@/components/cart/header";
import InputPromo from "@/components/cart/input-promo";
import PriceDetails from "@/components/cart/price-details";
import { CartContext } from "@/context/cart-context";
import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const subTotal = cartContext?.cart.reduce((subTotal, item) => {
    const total = parseFloat(item.food.price) * item.quantity;
    return subTotal + total;
  }, 0);

  if (cartContext?.cart.length == 0) {
    return <CartEmpty />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <CartHeader />
        <View style={styles.foodCardsContainer}>
          {cartContext?.cart.map((item) => (
            <FoodCard key={item.food.id} item={item} />
          ))}
        </View>
        <InputPromo />
        <PriceDetails subTotal={subTotal} />
      </View>
      <Address />
      <ActionBar subTotal={subTotal} />
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
