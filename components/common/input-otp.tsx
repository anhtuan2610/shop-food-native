import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const InputOtp = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <TextInput
      style={[styles.input, isFocus && styles.inputFocused]}
      keyboardType="numeric"
      maxLength={1}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 65,
    height: 65,
    borderRadius: 15,
    backgroundColor: "rgba(249, 249, 250, 1)",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: "red",
  },
});

export default InputOtp;
