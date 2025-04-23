import { useAuthStore } from "@/stores/auth";
import { RootStackParamList } from "@/types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProfileInformation = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const clearAuthData = useAuthStore((state) => state.clearAuthData);
  const user = useAuthStore((state) => state.user);

  const handleSignOut = async () => {
    await clearAuthData();
    navigation.reset({
      routes: [{ name: "index" }],
    });
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
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={styles.textSignOut}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
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
});

export default ProfileInformation;
