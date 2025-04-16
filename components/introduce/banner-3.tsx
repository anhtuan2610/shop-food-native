import IntroduceVector3 from "@/assets/vectors/introduce/IntroduceVector3";
import { Image, StyleSheet, Text, View } from "react-native";

const Banner3 = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image3}
        source={require("../../assets/images/introduce/introduce-3.png")}
      />

      <View style={styles.vector3}>
        <IntroduceVector3 />
      </View>

      <Text style={styles.textMain}>
        Good music and{"\n"}good food{"\n"}makes me{"\n"}happy.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFC529",
  },
  image3: {
    position: "absolute",
    top: -190,
    left: 15,
    width: 763,
    height: 763,
  },
  vector3: {
    position: "absolute",
    bottom: -100,
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
