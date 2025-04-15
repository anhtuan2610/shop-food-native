import DeliveryVector from "@/assets/vectors/home/delivery-vector";
import StarVector from "@/assets/vectors/home/star-vector";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const offerSpecials = [
  {
    id: 1,
    name: "Burger King",
    star: "4.5",
    price: "22.00",
    imageUrl: require("../../assets/images/home/special-1.png"),
    backgroundColorOffer: {
      backgroundColor: "#FF6B57",
    },
  },
  {
    id: 2,
    name: "Pizza King",
    star: "4.4",
    price: "19.00",
    imageUrl: require("../../assets/images/home/special-2.png"),
    backgroundColorOffer: {
      backgroundColor: "#72CF98",
    },
  },
];

const SpecialOffers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>Special Offers</Text>
        <Text style={styles.title2}>View All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.specialOffersContainer}>
          {offerSpecials.map((offer) => (
            <View
              style={[styles.specialOffersCard, offer.backgroundColorOffer]}
            >
              <Image
                style={styles.specialOffersImage}
                source={offer.imageUrl}
              />
              <View style={styles.specialOffersDescription}>
                <View style={styles.rateContainer}>
                  <StarVector />
                  <Text style={{ color: "#FFB8AE" }}>{offer.star}</Text>
                </View>
                <Text style={styles.offerName}>{offer.name}</Text>
                <View style={styles.deliveryContainer}>
                  <DeliveryVector />
                  <Text style={styles.deliveryText}>Free delivery</Text>
                </View>
                <View style={styles.buyContainer}>
                  <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Buy Now</Text>
                  </TouchableOpacity>
                  <View style={styles.priceContainer}>
                    <Text style={{ color: "#FFB8AE" }}>$</Text>
                    <Text style={{ color: "#FFFFFF" }}>{offer.price}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  titleContainer: {
    paddingRight: 24,
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
    flexDirection: "row",
    gap: 8,
  },
  specialOffersCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6B57",
    borderRadius: 15,

    // iOS shadow
    shadowColor: "rgba(254, 117, 76, 1)", // màu tương ứng
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 30,

    // Android shadow
    elevation: 10, // tăng số nếu muốn bóng đậm hơn
  },

  specialOffersImage: {
    width: 120,
    height: 110,
  },
  specialOffersDescription: {
    padding: 15,
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  offerName: {
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
    fontSize: 16,
  },
  deliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  deliveryText: {
    fontSize: 12,
    color: "#FFB8AE",
    fontWeight: 400,
  },
  buyContainer: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  buyButton: {
    backgroundColor: "#E54630",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buyButtonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 10,
    color: "#FFFFFF",
  },
  priceContainer: {
    flexDirection: "row",
  },
});

export default SpecialOffers;
