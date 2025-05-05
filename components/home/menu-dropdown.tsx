import { useAuthStore } from "@/stores/auth";
import { useCartStore } from "@/stores/cart";
import { RootStackParamList } from "@/types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MenuDropdown = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const clearAuthData = useAuthStore((state) => state.clearAuthData);
  const clearCartData = useCartStore((state) => state.clearCartData);

  const handleSignOut = async () => {
    await clearCartData();
    await clearAuthData();
    navigation.reset({
      routes: [{ name: "index" }],
    });
  };

  const handleRedirectProfile = () => {
    navigation.navigate("tabs", { screen: "profile" });
  };

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={handleRedirectProfile}
      >
        <Text style={styles.dropdownText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={handleRedirectProfile}
      >
        <Text style={styles.dropdownText}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={handleSignOut}>
        <Text style={styles.dropdownText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "white",
    borderRadius: 12,
    width: 150,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 1000,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  dropdownText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#333",
  },
});

export default MenuDropdown;
