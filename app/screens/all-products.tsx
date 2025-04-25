import { getAllProducts, TProduct } from "@/services/products";
import { useModalStore } from "@/stores/modal";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

const AllProducts = () => {
  const { onOpen } = useModalStore();
  const [products, setProducts] = useState<TProduct[]>([]);

  const handlePressProduct = (product: TProduct) => {
    onOpen({ productSelected: product });
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProducts({ limit: 30, skip: 10 });
      if (response) {
        setProducts(response.products);
      }
    };
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>All Products</Text>
      <FlatList
        style={{ marginTop: 20 }}
        data={products}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePressProduct(item)}>
            <View style={styles.productContainer}>
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.thumbnail}
                resizeMode="contain"
              />
              <View style={styles.productInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                <Text style={styles.description} numberOfLines={2}>
                  {item.description}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  textTitle: {
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  productContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 2, // Hiệu ứng bóng cho Android
    shadowColor: "#000", // Hiệu ứng bóng cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1, // Thêm viền nhẹ để phân biệt thẻ trên nền trắng
    borderColor: "#e0e0e0",
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
  },
  price: {
    fontSize: 16,
    color: "#e91e63",
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: "#666666",
  },
});

export default AllProducts;
