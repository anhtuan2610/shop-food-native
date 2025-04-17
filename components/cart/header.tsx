import BackScreenVector from "@/assets/vectors/introduce/BackScreenVector";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CartHeader = () => {
  const router = useRouter();
  const handleBackScreen = () => {
    router.back();
  };

  return (
    <View style={styles.contentHeader}>
      <TouchableOpacity onPress={handleBackScreen}>
        <View style={styles.vectorContainer}>
          <BackScreenVector />
        </View>
      </TouchableOpacity>
      <Text style={styles.textTitle}>Cart</Text>
      <View style={[styles.vectorContainer, { opacity: 0 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  vectorContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
});

export default CartHeader;
