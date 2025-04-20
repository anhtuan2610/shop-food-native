import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import InputOtp from "../common/input-otp";
import { useRef } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";

const VerificationForm = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const inputsRef = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleClickSendCode = () => {
    try {
      navigation.navigate("verification"); // thay the url hien tai (sign up) thanh` login
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleOnChange = (value: string, index: number) => {
    if (value && index < inputsRef.length - 1) {
      inputsRef[index + 1].current?.focus();
    }
    if (value === "" && index > 0) {
      inputsRef[index - 1].current?.focus();
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
              <InputOtp
                key={index}
                inputRef={inputsRef[index]}
                index={index}
                handleOnChange={handleOnChange}
              />
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
