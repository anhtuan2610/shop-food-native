import DeliveryVector from "@/assets/vectors/home/delivery-vector";
import StarVector from "@/assets/vectors/home/star-vector";
import { TProduct } from "@/services/products";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SpecialProductCard = ({
  setIsShowDetails,
  setProductSelected,
  product,
}: {
  setIsShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setProductSelected: React.Dispatch<
    React.SetStateAction<TProduct | undefined>
  >;
  product: TProduct;
}) => {
  const handleClickBuyNow = (product: TProduct) => {
    setIsShowDetails(true);
    setProductSelected(product);
  };

  return (
    <View key={product.id} style={[styles.specialOffersCard]}>
      <Image
        style={styles.specialOffersImage}
        source={{ uri: product.images[0] }}
        resizeMode="contain"
      />
      <View style={styles.specialOffersDescription}>
        <View style={styles.rateContainer}>
          <StarVector />
          <Text style={{ color: "#FFB8AE" }}>4.5</Text>
        </View>
        <Text style={styles.offerName} numberOfLines={2} ellipsizeMode="tail">
          {product.title}
        </Text>
        <View style={styles.deliveryContainer}>
          <DeliveryVector />
          <Text style={styles.deliveryText}>Free delivery</Text>
        </View>
        <View style={styles.buyContainer}>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => handleClickBuyNow(product)}
          >
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
          <View style={styles.priceContainer}>
            <Text style={{ color: "#FFB8AE" }}>$</Text>
            <Text style={{ color: "#FFFFFF" }}>{product.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  specialOffersCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#ECECEC",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    width: 280,
    overflow: "hidden",
  },
  specialOffersImage: {
    width: 100,
    height: 100,
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
    color: "#1E1E1E",
    fontSize: 16,
    overflow: "hidden", // Ensures that text is clipped
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

export default SpecialProductCard;
