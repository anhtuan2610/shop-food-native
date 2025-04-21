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

const restaurants = [
  {
    id: 1,
    name: "Seafood maki sushi",
    star: "4.5",
    price: "22.00",
    imageUrl: require("../../assets/images/home/restaurant-1.png"),
  },
  {
    id: 2,
    name: "Noddle maki sushi",
    star: "4.4",
    price: "19.00",
    imageUrl: require("../../assets/images/home/restaurant-2.jpg"),
  },
];

const Restaurants = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.titleContainer}>
          <Text style={styles.title1}>Restaurants</Text>
          <Text style={styles.title2}>View All</Text>
        </View>
      </TouchableWithoutFeedback>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          data={restaurants}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.restaurantCard}>
              <View style={{ position: "relative" }}>
                <Image style={styles.restaurantImage} source={item.imageUrl} />
                <View style={styles.favoriteIconContainer}>
                  <AntDesign name="heart" size={16} color="white" />
                </View>
              </View>
              <View style={styles.restaurantDescription}>
                <View style={styles.restaurantTitleContainer}>
                  <Text style={styles.restaurantsName}>{item.name}</Text>
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
    width: 267,
    borderRadius: 15,
    overflow: "hidden",
    // Shadow for iOS
    shadowColor: "rgba(211, 209, 216, 1)", // dùng màu gốc, opacity set riêng
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25, // từ rgba alpha
    shadowRadius: 30, // spread trong box-shadow

    // Shadow for Android
    elevation: 10,
    backgroundColor: "#fff", // bắt buộc để shadow hiển thị đúng trên Android
  },
  restaurantImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  restaurantDescription: {
    padding: 12,
    gap: 2,
  },
  restaurantTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurantsName: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
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

export default Restaurants;
