import { useAuthStore } from "@/stores/auth";
import { useCartStore } from "@/stores/cart";
import { RootStackParamList } from "@/types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import ProfileMenuItem from "./menu-item";

type TProfileItem = {
  itemIcon: React.JSX.Element;
  itemName: string;
  redirectName?: keyof RootStackParamList;
};

const profileItems: TProfileItem[] = [
  {
    itemIcon: <AntDesign name="user" size={24} color="black" />,
    itemName: "Your profile",
    redirectName: "profile-details",
  },
  {
    itemIcon: <MaterialIcons name="payments" size={24} color="black" />,
    itemName: "Payment Methods",
    redirectName: "payment-methods",
  },
  {
    itemIcon: <AntDesign name="setting" size={24} color="black" />,
    itemName: "Settings",
  },
  {
    itemIcon: <Feather name="help-circle" size={24} color="black" />,
    itemName: "Help Center",
  },
  {
    itemIcon: <AntDesign name="lock" size={24} color="black" />,
    itemName: "Privacy Policy",
  },
  {
    itemIcon: <AntDesign name="addusergroup" size={24} color="black" />,
    itemName: "Invites Friends",
  },
  {
    itemIcon: <AntDesign name="logout" size={24} color="black" />,
    itemName: "Log out",
  },
];

const ProfileInformation = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const clearAuthData = useAuthStore((state) => state.clearAuthData);
  const clearCartData = useCartStore((state) => state.clearCartData);
  const user = useAuthStore((state) => state.user);

  const handleSignOut = async () => {
    await clearCartData();
    await clearAuthData();
    navigation.reset({
      routes: [{ name: "index" }],
    });
  };

  const handleRedirect = (redirectName?: keyof RootStackParamList) => {
    if (redirectName) {
      if (redirectName == "profile-details") {
        navigation.navigate("profile-details");
      }
      if (redirectName == "payment-methods") {
        navigation.navigate("payment-methods");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
        style={styles.avatar}
      />
      <Text
        style={styles.textName}
      >{`${user?.firstName} ${user?.lastName}`}</Text>
      <View style={styles.itemsContainer}>
        {profileItems.map((item, index) => (
          <ProfileMenuItem
            key={index}
            itemIcon={item.itemIcon}
            itemName={item.itemName}
            actionFunction={
              item.itemName === "Log out"
                ? handleSignOut
                : () => handleRedirect(item?.redirectName)
            }
          />
        ))}
      </View>
      {/* <TouchableOpacity onPress={handleSignOut}>
        <Text style={styles.textSignOut}>Sign Out</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  textName: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 22,
  },
  textSignOut: {
    color: "rgba(250, 54, 54, 1)",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    marginTop: 16,
  },
  itemsContainer: {
    marginVertical: 40,
    gap: 20,
  },
});

export default ProfileInformation;
