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
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  fullName: yup.string().required("Full name can't not empty"),
  email: yup.string().required("Email can't not empty"),
  password: yup.string().required("Password can't not empty"),
});

export type FormRegisterType = yup.InferType<typeof schema>;

const SignUpForm = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormRegisterType>({
    resolver: yupResolver(schema),
  });

  const handleSignUp = async (data: FormRegisterType) => {
    try {
      // const res = await register(data);
      if (true) {
        navigation.reset({
          index: 0,
          routes: [{ name: "login" }],
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const redirectLogin = async () => {
    navigation.navigate("login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <Controller
          control={control}
          name="fullName"
          render={({ field: { value, onChange } }) => (
            <InputForm
              labelName="Full Name"
              placeHolder="Enter Name"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.fullName?.message}
            />
          )}
        />
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
              errorMessage={errors.password?.message}
              secureTextEntry={true}
            />
          )}
        />
        <View style={styles.buttonContainer}>
          <ButtonForm
            name="Sign Up"
            actionFunction={handleSubmit(handleSignUp)}
          />
        </View>
        <View style={{ gap: 5 }}>
          <Text style={styles.textOrSignUpWith}>Or Sign up with</Text>
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
        <Text style={styles.textAlready}>Already have an account? </Text>
        <Pressable onPress={redirectLogin}>
          <Text style={styles.textLogin}>Login</Text>
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
  buttonContainer: {
    alignItems: "center",
  },
  textOrSignUpWith: {
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

export default SignUpForm;
