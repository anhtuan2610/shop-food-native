import { StyleSheet, Text, View } from "react-native";

const ProfileHeader = () => {
  return (
    <View>
      <Text style={styles.textTitle}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
});

export default ProfileHeader;
