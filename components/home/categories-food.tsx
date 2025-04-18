import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const categoryData = [
  {
    id: "1",
    imageUrl: require("../../assets/images/home/cat-1.png"),
    name: "Burger",
  },
  {
    id: "2",
    imageUrl: require("../../assets/images/home/cat-2.png"),
    name: "Donats",
  },
  {
    id: "3",
    imageUrl: require("../../assets/images/home/cat-3.png"),
    name: "Pizza",
  },
  {
    id: "4",
    imageUrl: require("../../assets/images/home/cat-4.png"),
    name: "Hot Dog",
  },
  {
    id: "5",
    imageUrl: require("../../assets/images/home/cat-5.png"),
    name: "Pasta",
  },
];
const CategoriesFood = () => {
  const [selectedCatId, setSelectedCatId] = useState<string>("3");

  const handleOnClickCategory = (catId: string) => {
    setSelectedCatId(catId);
  };

  return (
    <View style={styles.container}>
      {categoryData.map((cat) => (
        <Pressable key={cat.id} onPress={() => handleOnClickCategory(cat.id)}>
          <View style={selectedCatId === cat.id && styles.catHighlight}>
            <View style={styles.catContainer}>
              <View style={styles.catImageContainer}>
                <Image style={styles.catImage} source={cat.imageUrl} />
              </View>
              <Text
                style={[
                  styles.catName,
                  selectedCatId === cat.id && styles.catHighLightText,
                ]}
              >
                {cat.name}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
  },
  catHighlight: {
    paddingHorizontal: 5,
    paddingTop: 5,
    height: 93,
    borderRadius: 100,
    backgroundColor: "#74D3A0",
  },
  catHighLightText: {
    fontFamily: "Poppins-SemiBold",
    color: "white",
    marginTop: 1,
  },
  catContainer: {
    gap: 3,
    alignItems: "center",
  },
  catImageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  catImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  catName: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
  },
});

export default CategoriesFood;
