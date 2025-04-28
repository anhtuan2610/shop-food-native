import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";
import { useCartStore } from "@/stores/cart";
import { TCartItem } from "@/types";
import { useModalStore } from "@/stores/modal";
import { NumericFormat } from "react-number-format";

const ProductActionBar = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const addToCart = useCartStore((state) => state.addToCart);
  const { onClose, productSelected } = useModalStore();
  const [quantity, setQuantity] = useState<number>(1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (productSelected) {
      const newItem: TCartItem = {
        product: productSelected,
        quantity: quantity,
        totalPrice: quantity * productSelected.price,
      };
      addToCart(newItem);
      onClose(); // khong tat di thi no bi loi khi back ve khong click lai dc (kha nang la do modal van ton tai nhung khong hien thi)
      navigation.navigate("cart");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.quantityContainer}>
        <Pressable onPress={decreaseQuantity}>
          <AntDesign
            name="minuscircle"
            size={22}
            color="rgba(116, 119, 133, 1)"
          />
        </Pressable>
        <Text style={styles.quantityText}>{quantity}</Text>
        <Pressable onPress={increaseQuantity}>
          <AntDesign
            name="pluscircle"
            size={22}
            color="rgba(116, 119, 133, 1)"
          />
        </Pressable>
      </View>
      <TouchableOpacity
        style={styles.buttonAddToCart}
        onPress={handleAddToCart}
      >
        <Text style={styles.buttonText1}>
          Add <Text style={styles.quantityText}>{quantity}</Text> to cart
        </Text>

        <NumericFormat
          value={Number(productSelected?.price) * quantity}
          displayType="text"
          thousandSeparator=","
          decimalSeparator="."
          decimalScale={2}
          prefix="$"
          renderText={(formattedValue) => (
            <Text style={styles.buttonText2}>{formattedValue}</Text>
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "rgba(24, 25, 29, 1)",
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  quantityContainer: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 18,
  },
  quantityText: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: "rgba(255, 255, 255, 1)",
  },
  buttonAddToCart: {
    flexDirection: "row",
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 107, 87, 1)",
    gap: 10,
    textAlign: "center",
    width: "55%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText1: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "rgba(255, 255, 255, 1)",
  },
  buttonText2: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: "rgba(255, 255, 255, 1)",
  },
});

export default ProductActionBar;
