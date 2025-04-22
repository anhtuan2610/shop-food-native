import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import CloseVector from "@/assets/vectors/cart/close-vector";
import Entypo from "@expo/vector-icons/Entypo";
import { TCartItem } from "@/types";

const ProductCart = ({ item }: { item: TCartItem }) => {
  const decreaseQuantity = (productId: number) => {
    // setCart((prev) => {
    //   const findItem = prev.find((item) => item.food.id === foodId);
    //   if (!findItem) return prev;
    //   const newQuantity = findItem.quantity - 1;
    //   if (newQuantity <= 0) {
    //     removeFoodFromCart(foodId);
    //   }
    //   return prev.map((item) =>
    //     item.food.id === foodId ? { ...item, quantity: newQuantity } : item
    //   );
    // });
  };

  const increaseQuantity = (productId: number) => {
    // cartContext?.setCart((prev) =>
    //   prev.map((item) =>
    //     item.food.id === foodId
    //       ? { ...item, quantity: item.quantity + 1 }
    //       : item
    //   )
    // );
  };

  const removeFoodFromCart = (productId: number) => {
    // const updateCart = cartContext?.cart.filter(
    //   (item) => item.food.id !== foodId
    // );
    // if (updateCart) {
    //   cartContext?.setCart(updateCart);
    // }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.foodImage}
        source={{ uri: item.product.images[0] }}
      />
      <View style={styles.contentContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.foodName}>{item.product.title}</Text>
          <Pressable onPress={() => removeFoodFromCart(item.product.id)}>
            <CloseVector />
          </Pressable>
        </View>
        <View style={styles.actionRow}>
          <Text style={styles.priceText}>${item.product.price}</Text>
          <View style={styles.quantityContainer}>
            <Pressable
              style={styles.quantityBtn}
              onPress={() => decreaseQuantity(item.product.id)}
            >
              <Entypo name="minus" size={22} color="black" />
            </Pressable>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <Pressable
              style={styles.quantityBtn}
              onPress={() => increaseQuantity(item.product.id)}
            >
              <Entypo name="plus" size={22} color="black" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  foodImage: {
    width: 106,
    height: 106,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 12,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodName: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "rgba(0, 0, 0, 1)",
    maxWidth: "80%",
    lineHeight: 18,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  priceText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "rgba(254, 114, 76, 1)",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  quantityBtn: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "rgba(36, 39, 49, 1)",
  },
});

export default ProductCart;
