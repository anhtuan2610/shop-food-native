import ActionBar from "@/components/cart/action-bar";
import Address from "@/components/cart/address";
import CartEmpty from "@/components/cart/cart-empty";
import FoodCard from "@/components/cart/product-card";
import CartHeader from "@/components/cart/header";
import InputPromo from "@/components/cart/input-promo";
import PriceDetails from "@/components/cart/price-details";
import { useCartStore } from "@/stores/cart";
import { StyleSheet, View } from "react-native";

const Cart = () => {
  const cart = useCartStore((store) => store.cart);
  const subTotal = cart?.items.reduce((subTotal, item) => {
    const total = item.totalPrice * item.quantity;
    return subTotal + total;
  }, 0);

  if (!cart) {
    return <CartEmpty />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <CartHeader />
        <View style={styles.foodCardsContainer}>
          {cart.items.map((item) => (
            <FoodCard key={item.product.id} item={item} />
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
