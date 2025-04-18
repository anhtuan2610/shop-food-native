import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import InputOtp from "../common/input-otp";

const VerificationForm = () => {
  const router = useRouter();
  const handleClickSendCode = () => {
    try {
      router.push("/screens/verification"); // thay the url hien tai (sign up) thanh` login
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ gap: 6 }}>
        <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12 }}>Code</Text>
        <View style={styles.inputContainer}>
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <InputOtp key={index} />
            ))}
        </View>
      </View>
      <View style={styles.formContent}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleClickSendCode}>
            <Text style={styles.textResend}>Resend Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 20,
  },
  formContent: {
    flex: 1,
    gap: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  textResend: {
    color: "#FF6B57",
    fontFamily: "Poppins-Bold",
    fontSize: 13,
  },
});

export default VerificationForm;
