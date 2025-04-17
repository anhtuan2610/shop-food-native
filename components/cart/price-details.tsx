import { StyleSheet, Text, View } from "react-native";

const PriceDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>$12.20</Text>
        </View>
        <View style={styles.horizontalBar} />
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Tax and Fees</Text>
          <Text style={styles.text}>$4.10</Text>
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
    gap: 16,
    marginTop: 28,
  },
  titleContainer: {
    gap: 12,
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
