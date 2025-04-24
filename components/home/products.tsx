import ClockVector from "@/assets/vectors/home/clock-vector";
import DeliveryVector2 from "@/assets/vectors/home/delivery-vector2";
import StarVector from "@/assets/vectors/home/star-vector";
import {
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { get2Products, TProduct } from "@/services/products";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const getProducts = async () => {
    const response = await get2Products();
    if (response) {
      setProducts(response.products);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.titleContainer}>
          <Text style={styles.title1}>Products</Text>
          <Text style={styles.title2}>View All</Text>
        </View>
      </TouchableWithoutFeedback>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.restaurantCard}>
              <View style={{ position: "relative" }}>
                <Image
                  style={styles.restaurantImage}
                  source={{ uri: item.images[0] }}
                />
                <View style={styles.favoriteIconContainer}>
                  <AntDesign name="heart" size={16} color="white" />
                </View>
              </View>
              <View style={styles.restaurantDescription}>
                <View style={styles.restaurantTitleContainer}>
                  <Text
                    style={styles.restaurantsName}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.title}
                  </Text>
                  <View style={styles.rateContainer}>
                    <StarVector />
                    <Text>4.5</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", gap: 16 }}>
                  <View style={styles.deliveryContainer}>
                    <DeliveryVector2 />
                    <Text style={{ color: "#7E8392", fontSize: 12 }}>
                      Free delivery
                    </Text>
                  </View>
                  <View style={styles.timeContainer}>
                    <ClockVector />
                    <Text style={{ color: "#7E8392", fontSize: 12 }}>
                      45 mins
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          contentContainerStyle={styles.restaurantsContainer}
          scrollEnabled={false}
        />
      </ScrollView>
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
  restaurantsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 24,
  },
  restaurantCard: {
    width: 280,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#fef6f6",
    padding: 10,
  },
  restaurantImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  restaurantDescription: {
    padding: 12,
    gap: 10,
    justifyContent: "space-between",
  },
  restaurantTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurantsName: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    flex: 1,
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  deliveryContainer: { flexDirection: "row", alignItems: "center", gap: 6 },
  timeContainer: { flexDirection: "row", alignItems: "center", gap: 6 },
  favoriteIconContainer: {
    width: 28,
    height: 28,
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "#695F5D",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Products;
