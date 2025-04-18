import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import BackScreenVector from "@/assets/vectors/introduce/BackScreenVector";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import ForgotPasswordForm from "@/components/forgot-password/form";

const ForgotPassword = () => {
  const router = useRouter();

  const handleBackScreen = () => {
    router.back();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["rgba(32, 33, 36, 0)", "#191B2F"]}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }}
        style={styles.container}
      >
        <View style={styles.contentContainer}>
          <View style={styles.bannerContainer}>
            <Image
              style={styles.imageBanner}
              source={require("../../assets/images/introduce/introduce-1.png")}
            />
            <Pressable
              style={styles.vectorContainer}
              onPress={handleBackScreen}
            >
              <BackScreenVector />
            </Pressable>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>Forgot Password</Text>
              <Text style={styles.textDescription}>
                Please enter your existing{"\n"}email address
              </Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <ForgotPasswordForm />
          </View>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  bannerContainer: {
    marginTop: 50,
    marginLeft: 25,
    gap: 30,
  },
  vectorContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "white",
  },
  textContainer: {
    gap: 4,
  },
  textTitle: {
    fontSize: 30,
    fontFamily: "Poppins-Bold",
    color: "#fff",
  },
  textDescription: {
    fontSize: 14,
    color: "#FFFFFF",
    fontFamily: "Poppins-Medium",
  },
  imageBanner: {
    position: "absolute",
    width: 400,
    height: 400,
    top: -100,
    right: -180,
  },
  formContainer: {
    height: "70%",
  },
});

export default ForgotPassword;
