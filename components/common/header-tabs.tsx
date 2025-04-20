import MenuVector from "@/assets/vectors/home/menu-vector";
import { Image, StyleSheet, Text, View } from "react-native";

const HeaderTabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuVector}>
        <MenuVector />
      </View>
      <View style={styles.midContent}>
        <Text style={styles.text1}>Deliver to</Text>
        <Text style={styles.text2}>387 Merdina</Text>
      </View>
      <View>
        <Image
          style={styles.avatar}
          source={require("../../assets/images/home/avatar.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  menuVector: {
    width: 40,
    height: 40,
    backgroundColor: "white", // 👈 Bắt buộc cho Android shadow
    padding: 10, // 👈 Tuỳ chỉnh nếu cần khoảng đệm
    borderRadius: 12, // 👈 Để trông đẹp hơn
    // iOS shadow
    shadowColor: "rgba(211, 209, 216, 1)",
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    // Android shadow
    elevation: 10,
  },

  midContent: {
    alignItems: "center",
  },
  text1: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    color: "#737477",
  },
  text2: {
    fontFamily: "Poppins-Medium",
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 12,
  },
});

export default HeaderTabs;
