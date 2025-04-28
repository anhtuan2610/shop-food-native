import HeartVector from "@/assets/vectors/details/heart-vector";
import CloseVector from "@/assets/vectors/details/close-vector";
import DeliveryVector2 from "@/assets/vectors/home/delivery-vector2";
import ClockVector from "@/assets/vectors/home/clock-vector";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StarVector from "@/assets/vectors/details/star-vector";
import { useModalStore } from "@/stores/modal";
import ProductTopping from "./topping";

const ProductInformation = () => {
  const { productSelected } = useModalStore();

  return (
    <View>
      <View style={styles.descriptionContainer}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.imageDetails}
            source={{ uri: productSelected?.thumbnail }}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.mainText}>{productSelected?.title}</Text>
          <Text style={styles.priceText}>${productSelected?.price}</Text>
        </View>
        <View style={styles.informationDeliveryRate}>
          <View style={{ flexDirection: "row", gap: 16 }}>
            <View style={styles.deliveryContainer}>
              <DeliveryVector2 />
              <Text style={{ color: "#7E8392", fontSize: 12 }}>
                Free delivery
              </Text>
            </View>
            <View style={styles.timeContainer}>
              <ClockVector />
              <Text style={{ color: "#7E8392", fontSize: 12 }}>45 mins</Text>
            </View>
          </View>
          <View style={styles.rateContainer}>
            <StarVector />
            <Text style={{ textDecorationLine: "underline" }}>4.5</Text>
          </View>
        </View>
        <View>
          <Text style={styles.textDescription}>
            Succulent butter and garlic infused shrimp sizzling in a flavorful
            cream sauce, tossed with perfectly cooked pasta.{" "}
          </Text>
        </View>
      </View>
      <ProductTopping />
    </View>
  );
};

const styles = StyleSheet.create({
  headerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 25,
  },
  closeButtonContainer: {
    width: 38,
    height: 38,
    alignSelf: "flex-start",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",

    // iOS shadow
    shadowColor: "rgba(211, 209, 216, 1)", // hoặc '#D3D1D8'
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,

    // Android shadow
    elevation: 10,
    backgroundColor: "rgba(255, 255, 255, 1)", // cần có để shadow hiện trên Android
  },

  imageDetails: {
    width: 260,
    height: 220,
  },
  favoriteIconContainer: {
    width: 38,
    height: 38,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    // iOS Shadow
    shadowColor: "rgba(211, 209, 216, 1)", // Màu gốc
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,

    // Android Shadow
    elevation: 10,
  },
  descriptionContainer: {
    marginBottom: 20,
    gap: 10,
    paddingHorizontal: 25,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainText: {
    fontSize: 26,
    maxWidth: "70%",
    fontFamily: "Poppins-Bold",
  },
  priceText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
    color: "rgba(255, 107, 87, 1)",
  },
  deliveryContainer: { flexDirection: "row", alignItems: "center", gap: 6 },
  timeContainer: { flexDirection: "row", alignItems: "center", gap: 6 },
  informationDeliveryRate: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  textDescription: {
    fontFamily: "Poppins-Regular",
    color: "rgba(100, 105, 130, 1)",
  },
  topingContainer: {},
});

export default ProductInformation;
