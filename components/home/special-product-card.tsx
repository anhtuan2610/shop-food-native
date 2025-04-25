import DeliveryVector from "@/assets/vectors/home/delivery-vector";
import StarVector from "@/assets/vectors/home/star-vector";
import { TProduct } from "@/services/products";
import { useModalStore } from "@/stores/modal";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SpecialProductCard = ({ product }: { product: TProduct }) => {
  const { onOpen } = useModalStore();

  const handleClickBuyNow = (product: TProduct) => {
    onOpen({ productSelected: product });
  };

  return (
    <View key={product.id} style={[styles.specialOffersCard]}>
      <Image
        style={styles.specialOffersImage}
        source={{ uri: product.thumbnail }}
        resizeMode="contain"
      />
      <View style={styles.specialOffersContent}>
        <View style={styles.rateContainer}>
          <StarVector />
          <Text style={{ color: "#FFB8AE" }}>4.5</Text>
        </View>
        <Text style={styles.offerName} numberOfLines={1} ellipsizeMode="tail">
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
            <Text style={{ color: "#FF6B6B" }}>$</Text>
            <Text style={{ color: "#1E1E1E" }}>{product.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  specialOffersCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#fffcfa",
    padding: 10,
    width: 280,
    elevation: 4, // Đổ bóng cho Android
    shadowColor: "#000", // Màu bóng cho iOS
    shadowOffset: { width: 0, height: 2 }, // Vị trí bóng (dưới thẻ)
    shadowOpacity: 0.15, // Độ mờ của bóng
    shadowRadius: 6,
    margin: 4,
  },
  specialOffersImage: {
    width: 100,
    height: 100,
  },
  specialOffersContent: {
    paddingRight: 100, // ?
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
    color: "#FF6B6B",
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
