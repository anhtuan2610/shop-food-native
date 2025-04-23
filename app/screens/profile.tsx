import ProfileHeader from "@/components/profile/header";
import ProfileInformation from "@/components/profile/information";
import { StyleSheet, View } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <ProfileInformation />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
