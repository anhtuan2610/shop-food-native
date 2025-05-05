import SearchInputVector from "@/assets/vectors/home/search-input-vector";
import BackScreenVector from "@/assets/vectors/introduce/BackScreenVector";
import { useDebounceSearch } from "@/hooks/useDebounceSearch";
import { getAllProducts, TProduct } from "@/services/products";
import { useModalStore } from "@/stores/modal";
import { RootStackParamList } from "@/types/navigation";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const AllProducts = () => {
  const route = useRoute();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const { isSearch } = (route.params as { isSearch?: boolean }) ?? {
    isSearch: false,
  };
  const { onOpen } = useModalStore();
  const [products, setProducts] = useState<TProduct[]>([]);
  const [searchString, setSearchString] = useState<string>("");
  const debouncedStringValue = useDebounceSearch(searchString);

  const handlePressProduct = (product: TProduct) => {
    onOpen({ productSelected: product });
  };

  const handleBackScreen = () => {
    navigation.goBack();
  };

  const handleOnChangeSearch = (textString: string) => {
    setSearchString(textString);
  };

  useEffect(() => {
    const getProducts = async (debouncedStringValue: string) => {
      try {
        const response = await getAllProducts({
          limit: 30,
          skip: 10,
          searchString: debouncedStringValue || undefined,
        });
        if (response) {
          setProducts(response.products);
        }
      } catch (error) {
        // console.log(error);
      }
    };
    getProducts(debouncedStringValue);
  }, [debouncedStringValue]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Pressable style={styles.vectorContainer} onPress={handleBackScreen}>
            <BackScreenVector />
          </Pressable>
          <Text style={styles.textTitle}>All Products</Text>
          <View style={[styles.vectorContainer, { opacity: 0 }]} />
        </View>
        {(isSearch ?? false) && (
          <View style={styles.searchContainer}>
            <View style={styles.searchVector}>
              <SearchInputVector />
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Search products by name"
              placeholderTextColor="#A9ABB4"
              onChangeText={(textString) => handleOnChangeSearch(textString)}
              value={searchString}
              autoFocus
            />
          </View>
        )}
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
    </TouchableWithoutFeedback>
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
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTitle: {
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  searchContainer: {
    position: "relative",
    justifyContent: "center",
    marginTop: 20,
  },
  searchInput: {
    paddingVertical: 16,
    paddingLeft: 47,
    backgroundColor: "#F9F9FA",
    borderRadius: 15,
  },
  searchVector: {
    position: "absolute",
    left: 16,
    zIndex: 1,
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
