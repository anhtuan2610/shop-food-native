import { StyleSheet, Text, View } from "react-native";

const Address = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery Address</Text>
      <Text style={styles.description}>
        Avinguda Meridiana, 350, 358, 08027 Barcelona
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "rgba(36, 39, 49, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "rgba(255, 255, 255, 1)",
  },
  description: {
    maxWidth: "70%",
    fontFamily: "Poppins-Regular",
    color: "rgba(116, 119, 133, 1)",
  },
});

export default Address;
