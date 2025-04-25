import ActionBar from "@/components/cart/action-bar";
import Address from "@/components/cart/address";
import CartEmpty from "@/components/cart/cart-empty";
import ProductCart from "@/components/cart/product-card";
import CartHeader from "@/components/cart/header";
import InputPromo from "@/components/cart/input-promo";
import PriceDetails from "@/components/cart/price-details";
import { useCartStore } from "@/stores/cart";
import { ScrollView, StyleSheet, View } from "react-native";
import { useEffect } from "react";
import { getCartByUserId } from "@/services/cart";
import { useAuthStore } from "@/stores/auth";

const Cart = () => {
  const { user } = useAuthStore();
  const cart = useCartStore((store) => store.cart);

  if (cart?.items.length == 0 || cart?.items === undefined) {
    return <CartEmpty />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <CartHeader />
        <ScrollView style={{ gap: 10 }} showsVerticalScrollIndicator={false}>
          {cart?.items.map((item) => (
            <ProductCart key={item.product.id} item={item} />
          ))}
        </ScrollView>
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
    paddingTop: 50,
    backgroundColor: "white",
  },
  contentContainer: {
    paddingHorizontal: 26,
    flex: 1,
  },
});

export default Cart;
