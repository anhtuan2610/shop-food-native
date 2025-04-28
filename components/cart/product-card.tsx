import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import CloseVector from "@/assets/vectors/cart/close-vector";
import Entypo from "@expo/vector-icons/Entypo";
import { TCartItem } from "@/types";
import { useCartStore } from "@/stores/cart";
import { useDebounceQuantity } from "@/hooks/useDebounceQuantity";
import { useEffect, useState } from "react";
import { updateCartByCartId } from "@/services/cart";
import { NumericFormat } from "react-number-format";

const ProductCart = ({ item }: { item: TCartItem }) => {
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const quantityDebounceValue = useDebounceQuantity({ quantity: quantity });

  const decreaseItemQuantity = useCartStore(
    (state) => state.decreaseItemQuantity
  );
  const increaseItemQuantity = useCartStore(
    (state) => state.increaseItemQuantity
  );
  const removeFormCart = useCartStore((state) => state.removeFormCart);
  const cart = useCartStore((state) => state.cart);

  const handleDecreaseQuantity = (item: TCartItem) => {
    decreaseItemQuantity({
      ...item,
    });
    setQuantity(item.quantity - 1);
  };
  const handleIncreaseQuantity = (item: TCartItem) => {
    increaseItemQuantity({
      ...item,
    });
    setQuantity(item.quantity + 1);
  };
  const handleRemoveProductFormCart = (item: TCartItem) => {
    removeFormCart(item);
  };

  useEffect(() => {
    const updateCart = async () => {
      if (cart?.id) {
        await updateCartByCartId({
          cartId: cart.id,
          products: [
            {
              id: item.product.id,
              quantity: quantityDebounceValue,
            },
          ],
        });
        // console.log(
        //   `update success productId: ${item.product.id} with quantity: ${item.quantity}`
        // );
      }
    };
    updateCart();
  }, [quantityDebounceValue]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.foodImage}
        source={{ uri: item.product.thumbnail }}
      />
      <View style={styles.contentContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.foodName}>{item.product.title}</Text>
          <Pressable onPress={() => handleRemoveProductFormCart(item)}>
            <CloseVector />
          </Pressable>
        </View>
        <View style={styles.actionRow}>
          <NumericFormat
            value={Number(item.totalPrice)}
            displayType="text"
            thousandSeparator=","
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale
            prefix="$"
            renderText={(formattedValue) => (
              <Text style={styles.priceText}>{formattedValue}</Text>
            )}
          />
          <View style={styles.quantityContainer}>
            <Pressable
              style={styles.quantityBtn}
              onPress={() => handleDecreaseQuantity(item)}
            >
              <Entypo name="minus" size={22} color="black" />
            </Pressable>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <Pressable
              style={styles.quantityBtn}
              onPress={() => handleIncreaseQuantity(item)}
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
