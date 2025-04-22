import { TCategory } from "@/types";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export const categories: TCategory[] = [
  {
    id: "1",
    name: "Shirts",
    slug: "mens-shirts",
    imageUrl: require("../../assets/images/categories/shirt.png"),
  },
  {
    id: "2",
    name: "Shoes",
    slug: "mens-shoes",
    imageUrl: require("../../assets/images/categories/shoes.png"),
  },
  {
    id: "3",
    name: "Watches",
    slug: "mens-watches",
    imageUrl: require("../../assets/images/categories/watch.png"),
  },
  {
    id: "4",
    name: "Beauty",
    slug: "beauty",
    imageUrl: require("../../assets/images/categories/beauty.png"),
  },
  {
    id: "5",
    name: "Dresses",
    slug: "womens-dresses",
    imageUrl: require("../../assets/images/categories/dress.png"),
  },
];

const CategoriesProduct = ({
  selectedCatId,
  setSelectedCatId,
}: {
  selectedCatId: string;
  setSelectedCatId: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleOnClickCategory = (catId: string) => {
    setSelectedCatId(catId);
  };

  return (
    <View style={styles.container}>
      {categories.map((cat) => (
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
    paddingHorizontal: 24,
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

export default CategoriesProduct;
