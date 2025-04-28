import BackScreenVector from "@/assets/vectors/introduce/BackScreenVector";
import { RootStackParamList } from "@/types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CartHeader = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const handleBackScreen = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.contentHeader}>
      <Pressable style={styles.vectorContainer} onPress={handleBackScreen}>
        <BackScreenVector />
      </Pressable>
      <Text style={styles.textTitle}>Cart</Text>
      <View style={[styles.vectorContainer, { opacity: 0 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentHeader: {
    paddingBottom: 15,
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
