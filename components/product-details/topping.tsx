import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const toppings = [
  {
    id: "1",
    name: "Olives",
    imageUrl: require("../../assets/images/details/topping-1.png"),
  },
  {
    id: "2",
    name: "Cheese",
    imageUrl: require("../../assets/images/details/topping-2.png"),
  },
  {
    id: "3",
    name: "Peanut",
    imageUrl: require("../../assets/images/details/topping-3.png"),
  },
  {
    id: "4",
    name: "Grape",
    imageUrl: require("../../assets/images/details/topping-4.png"),
  },
  {
    id: "5",
    name: "Grape",
    imageUrl: require("../../assets/images/details/topping-4.png"),
  },
  {
    id: "6",
    name: "Grape",
    imageUrl: require("../../assets/images/details/topping-4.png"),
  },
  {
    id: "7",
    name: "Grape",
    imageUrl: require("../../assets/images/details/topping-4.png"),
  },
  {
    id: "8",
    name: "Olives",
    imageUrl: require("../../assets/images/details/topping-1.png"),
  },
  {
    id: "9",
    name: "Cheese",
    imageUrl: require("../../assets/images/details/topping-2.png"),
  },
  {
    id: "10",
    name: "Peanut",
    imageUrl: require("../../assets/images/details/topping-3.png"),
  },
  {
    id: "11",
    name: "Grape",
    imageUrl: require("../../assets/images/details/topping-4.png"),
  },
];
const ProductTopping = () => {
  const [toppingSelectedIds, setToppingSelectedIds] = useState<string[]>([]);
  const handleSelectTopping = (toppingId: string) => {
    setToppingSelectedIds((prev) =>
      prev.includes(toppingId)
        ? prev.filter((id) => id !== toppingId)
        : [...prev, toppingId]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Toping for you</Text>
      {toppings.map((topping) => (
        <View key={topping.id} style={styles.toppingContainer}>
          <View style={styles.toppingInfoContainer}>
            <Image style={styles.toppingImage} source={topping.imageUrl} />
            <Text style={styles.toppingName}>{topping.name}</Text>
          </View>
          <Pressable
            style={[
              styles.checkTopping,
              toppingSelectedIds.includes(topping.id) && styles.checkedTopping,
            ]}
            onPress={() => handleSelectTopping(topping.id)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(36, 39, 49, 1)",
    marginTop: 1,
    paddingTop: 20,
    paddingBottom: 120,
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    gap: 10,
  },
  scrollViewContainer: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 180, // Thêm padding bottom cho nội dung
    gap: 15,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "rgba(255, 255, 255, 1)",
  },
  toppingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toppingInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  toppingImage: {
    width: 40,
    height: 40,
  },
  toppingName: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "rgba(255, 255, 255, 1)",
  },
  checkTopping: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "rgba(70, 73, 85, 1)",
  },
  checkedTopping: {
    backgroundColor: "rgba(255, 107, 87, 1)",
    borderColor: "rgba(255, 107, 87, 1)",
  },
});

export default ProductTopping;
