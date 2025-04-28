import { useCartStore } from "@/stores/cart";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NumericFormat } from "react-number-format";

const ActionBar = () => {
  const cart = useCartStore((state) => state.cart);
  const finalTotal = (Number(cart?.totalAmount.toFixed(2)) ?? 0) + 2.0 + 1.0;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textTotal}>Total</Text>
        <NumericFormat
          value={Number(finalTotal)}
          displayType="text"
          thousandSeparator=","
          decimalSeparator="."
          decimalScale={2}
          fixedDecimalScale
          prefix="$"
          renderText={(formatText) => (
            <Text style={styles.textPrice}>{formatText}</Text>
          )}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Go to checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "rgba(24, 25, 29, 1)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textTotal: {
    fontFamily: "Poppins-Regular",
    color: "rgba(116, 119, 133, 1)",
    fontSize: 14,
  },
  textPrice: {
    fontFamily: "Poppins-Medium",
    fontSize: 24,
    color: "rgba(255, 255, 255, 1)",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 32,
    backgroundColor: "rgba(255, 107, 87, 1)",
  },
  buttonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "rgba(255, 255, 255, 1)",
  },
});

export default ActionBar;
