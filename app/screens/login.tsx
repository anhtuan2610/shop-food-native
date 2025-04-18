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
import LoginForm from "@/components/login/form";

const Login = () => {
  const router = useRouter();

  const handleBackScreen = () => {
    router.back();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["rgba(32, 33, 36, 0)", "#191B2F"]}
        start={{ x: 1, y: 0 }} // Tương ứng với góc 268.87 độ
        end={{ x: 0, y: 0 }}
        style={styles.container}
      >
        <View style={styles.contentContainer}>
          <View style={styles.bannerContainer}>
            <Image
              style={styles.imageBanner}
              source={require("../../assets/images/login/login-banner.png")}
            />
            <Pressable
              style={styles.vectorContainer}
              onPress={handleBackScreen}
            >
              <BackScreenVector />
            </Pressable>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>Login</Text>
              <Text style={styles.textDescription}>
                Please sign in to your{"\n"}existing account
              </Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <LoginForm />
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
  },
  formContainer: {
    height: "70%",
  },
});

export default Login;
