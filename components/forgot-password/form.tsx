import { StyleSheet, View } from "react-native";
import InputForm from "../common/input-form";
import ButtonForm from "../common/button-form";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";

const schema = z.object({
  email: z
    .string({ required_error: "Email can't not empty" })
    .email("must follow example abc@gmail.com")
    .min(0, "Email can't not empty"),
});

export type FormForgotPassword = z.infer<typeof schema>;

const ForgotPasswordForm = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormForgotPassword>({
    resolver: zodResolver(schema),
  });
  const handleClickSendCode = async () => {
    try {
      navigation.navigate("verification"); // thay the url hien tai (sign up) thanh` login
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <InputForm
              labelName="E-Mail"
              placeHolder="example@gmail.com"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <View style={styles.buttonContainer}>
          <ButtonForm
            name="Send Code"
            actionFunction={handleSubmit(handleClickSendCode)}
          />
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
  },
  formContent: {
    flex: 1,
    gap: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
});

export default ForgotPasswordForm;
