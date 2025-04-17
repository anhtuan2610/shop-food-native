import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import CloseVector from "@/assets/vectors/cart/close-vector";
import Entypo from "@expo/vector-icons/Entypo";

const FoodCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.foodImage}
        source={require("../../assets/images/home/special-1.png")}
      />
      <View style={styles.contentContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.foodName}>Pizza margarita European</Text>
          <Pressable>
            <CloseVector />
          </Pressable>
        </View>
        <View style={styles.actionRow}>
          <Text style={styles.priceText}>$9.00</Text>
          <View style={styles.quantityContainer}>
            <Pressable style={styles.quantityBtn}>
              <Entypo name="minus" size={22} color="black" />
            </Pressable>
            <Text style={styles.quantityText}>2</Text>
            <Pressable style={styles.quantityBtn}>
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

export default FoodCard;
