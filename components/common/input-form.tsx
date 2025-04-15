import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface InputFormProps {
  labelName: string;
  placeHolder: string;
  iconInput?: React.ReactNode;
  value?: string;
  onChangeText?: (text: string) => void;
  errorMessage?: string;
  secureTextEntry?: boolean;
}

const InputForm = ({
  labelName,
  placeHolder,
  iconInput,
  value,
  onChangeText,
  errorMessage,
  secureTextEntry,
}: InputFormProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShow, setIsShow] = useState<boolean | undefined>(secureTextEntry);
  const handleChangeShowPassword = () => {
    setIsShow(!isShow);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelForm}>{labelName}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          errorMessage && styles.inputError,
        ]}
      >
        <TextInput
          style={styles.inputForm}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeHolder}
          placeholderTextColor="##A0A5BA"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isShow}
        />
        {iconInput && (
          <Pressable onPress={handleChangeShowPassword}>
            <View>{iconInput}</View>
          </Pressable>
        )}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  labelForm: {
    fontFamily: "Poppins-Medium",
  },
  inputContainer: {
    backgroundColor: "#F9F9FA",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "transparent",
  },
  inputForm: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 16,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
  inputError: {
    borderColor: "red",
  },
});

export default InputForm;
