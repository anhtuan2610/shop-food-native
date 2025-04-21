import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useContext, useState } from "react";
import { TFood } from "@/types";
import { CartContext } from "@/context/cart-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";

const FoodActionBar = ({
  food,
  setIsShowDetails,
}: {
  food: TFood | undefined;
  setIsShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const cartContext = useContext(CartContext);
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
    if (!food) {
      return;
    }

    const itemIndex = cartContext?.cart.findIndex(
      (item) => item.food.id === food.id
    ); // khong tim thay index thi tra ve -1

    if (itemIndex !== -1) {
      cartContext?.setCart((prev) =>
        prev.map((item, index) =>
          index === itemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      cartContext?.setCart((prev) => [...prev, { food, quantity }]);
    }

    setIsShowDetails(false); // khong tat di thi no bi loi khi back ve khong click lai dc (kha nang la do modal van ton tai nhung khong hien thi)
    navigation.navigate("cart");
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
        <Text style={styles.buttonText2}>
          ${Number(food?.price) * quantity}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(24, 25, 29, 1)",
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
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

export default FoodActionBar;
