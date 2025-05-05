import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { getProductsByCategory, TProduct } from "@/services/products";
import { categories } from "./categories-product";
import SpecialProductCard from "./special-product-card";

const SpecialOffers = ({ selectedCatId }: { selectedCatId: string }) => {
  const [products, setProducts] = useState<TProduct[]>([]);

  const getProduct = async () => {
    try {
      const findCat = categories.find((cat) => cat.id === selectedCatId);
      if (findCat) {
        const res = await getProductsByCategory({
          categorySlug: findCat?.slug,
        });
        if (res) {
          setProducts(res.products);
        }
      }
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [selectedCatId]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.titleContainer}>
          <Text style={styles.title1}>Special Offers</Text>
          <Text style={styles.title2}>View All</Text>
        </View>
      </TouchableWithoutFeedback>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SpecialProductCard key={item.id} product={item} />
        )}
        contentContainerStyle={styles.specialOffersContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {/* {productSelected && (
          <ProductDetailsModal
            onClose={onClose}
            productSelected={productSelected}
          />
        )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  titleContainer: {
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title1: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
  title2: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#FF6B57",
  },
  specialOffersContainer: {
    paddingHorizontal: 24,
    flexDirection: "row",
    gap: 8,
  },
});

export default SpecialOffers;
