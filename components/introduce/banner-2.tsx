import IntroduceVector2 from "@/assets/vectors/introduce/IntroduceVector2";
import { Image, StyleSheet, Text, View } from "react-native";

const Banner2 = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/introduce/introduce-2.png")}
      />

      <View style={styles.vector}>
        <IntroduceVector2 />
      </View>

      <Text style={styles.textMain}>
        Donut worry,{"\n"}be happy and{"\n"}eat more{"\n"}donuts!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#7BD3A5",
  },
  image: {
    width: 1100, // 70% chiều rộng màn hình
    height: 500,
    top: 250,
    right: 440,
  },
  vector: {
    position: "absolute",
  },
  textMain: {
    fontFamily: "Poppins-Bold",
    position: "absolute",
    color: "white",
    fontSize: 36,
    top: 80,
    left: 24,
  },
});

export default Banner2;
