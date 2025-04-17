import BackScreenVector from "@/assets/vectors/introduce/BackScreenVector";
import ActionBar from "@/components/cart/action-bar";
import Address from "@/components/cart/address";
import FoodCard from "@/components/cart/food-card";
import InputPromo from "@/components/cart/input-promo";
import PriceDetails from "@/components/cart/price-details";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Cart = () => {
  const router = useRouter();

  const handleBackScreen = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <TouchableOpacity onPress={handleBackScreen}>
            <View style={styles.vectorContainer}>
              <BackScreenVector />
            </View>
          </TouchableOpacity>
          <Text style={styles.textTitle}>Cart</Text>
          <View style={[styles.vectorContainer, { opacity: 0 }]}></View>
        </View>
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
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  vectorContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  foodCardsContainer: {
    gap: 10,
  },
});

export default Cart;
