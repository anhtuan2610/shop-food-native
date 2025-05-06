import MenuVector from "@/assets/vectors/home/menu-vector";
import { DrawersParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import MenuDropdown from "../home/menu-dropdown";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const HeaderDrawers = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawersParamList>>();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleRedirectProfile = () => {
    navigation.getParent()?.navigate("profile");
  };

  const toggleMenu = () => {
    // setIsMenuOpen(!isMenuOpen);
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuVector} onPress={toggleMenu}>
        <MenuVector />
      </TouchableOpacity>
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

      {isMenuOpen && <MenuDropdown setIsMenuOpen={setIsMenuOpen} />}
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
    paddingVertical: 10,
    paddingTop: 50,
  },
  menuVector: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
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
    fontSize: 15,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 12,
  },
});

export default HeaderDrawers;
