import MenuVector from "@/assets/vectors/home/menu-vector";
import { RootStackParamList } from "@/types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";

const HeaderTabs = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const handleRedirectProfile = () => {
    navigation.navigate("tabs", { screen: "profile" });
  };
  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.menuVector}>
          <MenuVector />
        </View>
        <View style={styles.midContent}>
          <Text style={styles.text1}>Deliver to</Text>
          <Text style={styles.text2}>387 Merdina</Text>
        </View>
        <Pressable onPress={handleRedirectProfile}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          />
        </Pressable>
      </View>
    </TouchableNativeFeedback>
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
