import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputForm from "../common/input-form";
import ButtonForm from "../common/button-form";
import AntDesign from "@expo/vector-icons/AntDesign";
import FacebookVector from "@/assets/vectors/introduce/FacebookVector";
import GoogleVector from "@/assets/vectors/introduce/GoogleVector";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { login } from "@/services/users";
import { useRouter } from "expo-router";

const schema = z.object({
  email: z
    .string({ required_error: "Email can't not empty" })
    .email("must follow example abc@gmail.com")
    .min(0, "Email can't not empty"),
  password: z
    .string({ required_error: "Password can't not empty" })
    .min(0, "Password can't not empty"),
});

export type FormRegisterType = z.infer<typeof schema>;

const LoginForm = () => {
  const router = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormRegisterType>({
    resolver: zodResolver(schema),
  });

  const redirectSignUp = async () => {
    router.replace("/screens/signup");
  };

  const handleLogin = async (data: FormRegisterType) => {
    try {
      const res = await login(data);
      if (res.length > 0) {
        router.replace("/(tabs)/home/home"); // de la home thi duoc , de la index thi lai khong duoc
      }
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
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange } }) => (
            <InputForm
              labelName="Password"
              placeHolder="* * * * * * * * * *"
              iconInput={<AntDesign name="eye" size={22} color="#D3D1D8" />}
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <View>
          <Text style={styles.textForgotPassword}>Forgot Password</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonForm name="Login" actionFunction={handleSubmit(handleLogin)} />
        </View>
        <View style={{ gap: 5 }}>
          <Text style={styles.textOrLoginWith}>Or login with</Text>
          <View style={styles.thirdPartyContainer}>
            <TouchableOpacity style={styles.facebookContainer}>
              <FacebookVector />
              <Text style={styles.textThirdParty}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleContainer}>
              <GoogleVector />
              <Text style={styles.textThirdParty}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.textAlready}>Don’t have an account? </Text>
        <Pressable onPress={redirectSignUp}>
          <Text style={styles.textLogin}>Sign Up</Text>
        </Pressable>
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
  textForgotPassword: {
    textAlign: "center",
    color: "#FF6B57",
    fontFamily: "Poppins-Medium",
    fontSize: 12,
  },
  buttonContainer: {
    alignItems: "center",
  },
  textOrLoginWith: {
    fontFamily: "Poppins-Regular",
    color: "#D3D1D8",
    textAlign: "center",
  },
  thirdPartyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  facebookContainer: {
    width: 147,
    height: 57,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 9.92,
    borderRadius: 28.5,
  },
  googleContainer: {
    width: 147,
    height: 57,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 9.92,
    borderRadius: 28.5,
  },
  textThirdParty: {
    fontFamily: "Poppins-Medium",
  },
  bottomContainer: {
    marginBottom: 33,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textAlready: {
    textAlign: "center",
    color: "#646982",
    fontFamily: "Poppins-Medium",
  },
  textLogin: {
    color: "#FF6B57",
    fontFamily: "Poppins-SemiBold",
  },
});

export default LoginForm;
