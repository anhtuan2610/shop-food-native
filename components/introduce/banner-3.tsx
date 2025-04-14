import IntroduceVector1 from "@/assets/vectors/introduce/IntroduceVector1";
import { Image, StyleSheet, Text, View } from "react-native";

const Banner3 = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image1}
        source={require("../../assets/images/introduce/introduce-1.png")}
      />

      <View style={styles.vector1}>
        <IntroduceVector1 />
      </View>

      <Text style={styles.textMain}>
        I don't feel like{"\n"}cooking. Let's{"\n"}order food{"\n"}delivery.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FF6B57",
  },
  image1: {
    position: "absolute",
    top: -190,
    left: 15,
    width: 763,
    height: 763,
  },
  vector1: {
    position: "absolute",
    bottom: -30,
    left: 0,
    width: 400,
    height: 500,
  },
  textMain: {
    fontFamily: "Poppins-Bold",
    position: "absolute",
    color: "#242731",
    fontSize: 36,
    bottom: 180,
    left: 24,
  },
});

export default Banner3;
