import { useCartStore } from "@/stores/cart";
import { StyleSheet, Text, View } from "react-native";

const PriceDetails = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>${cart?.totalAmount.toFixed(2)}</Text>
        </View>
        <View style={styles.horizontalBar} />
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Tax and Fees</Text>
          <Text style={styles.text}>$2.00</Text>
        </View>
        <View style={styles.horizontalBar} />
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>$1.00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingBottom: 10,
    marginTop: 28,
    marginBottom: 10,
  },
  titleContainer: {
    gap: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "rgba(100, 105, 130, 1)",
    fontFamily: "Poppins-Normal",
    fontSize: 16,
  },
  horizontalBar: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(241, 242, 243, 1)",
  },
});

export default PriceDetails;
