import DeliveryVector from "@/assets/vectors/home/delivery-vector";
import StarVector from "@/assets/vectors/home/star-vector";
import { TFood } from "@/types";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SpecialFoodCard = ({
  setIsShowDetails,
  setFoodSelectedId,
  food,
}: {
  setIsShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setFoodSelectedId: React.Dispatch<React.SetStateAction<string | undefined>>;
  food: TFood;
}) => {
  const handleClickBuyNow = (id: string) => {
    setIsShowDetails(true);
    setFoodSelectedId(id);
  };

  return (
    <View
      key={food.id}
      style={[styles.specialOffersCard, food.backgroundColorOffer]}
    >
      <Image style={styles.specialOffersImage} source={food.imageUrl} />
      <View style={styles.specialOffersDescription}>
        <View style={styles.rateContainer}>
          <StarVector />
          <Text style={{ color: "#FFB8AE" }}>{food.star}</Text>
        </View>
        <Text style={styles.offerName}>{food.name}</Text>
        <View style={styles.deliveryContainer}>
          <DeliveryVector />
          <Text style={styles.deliveryText}>Free delivery</Text>
        </View>
        <View style={styles.buyContainer}>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => handleClickBuyNow(food.id)}
          >
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
          <View style={styles.priceContainer}>
            <Text style={{ color: "#FFB8AE" }}>$</Text>
            <Text style={{ color: "#FFFFFF" }}>{food.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  specialOffersCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    // backgroundColor: "#FF6B57",

    // // iOS shadow
    // shadowColor: "rgba(254, 117, 76, 1)", // màu tương ứng
    // shadowOffset: {
    //   width: 10,
    //   height: 10,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 30,

    // // Android shadow
    // elevation: 10, // tăng số nếu muốn bóng đậm hơn
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

export default SpecialFoodCard;
