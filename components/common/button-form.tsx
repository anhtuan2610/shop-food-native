import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonForm = ({
  name,
  actionFunction,
}: {
  name: string;
  actionFunction: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={actionFunction}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    paddingHorizontal: 93,
    backgroundColor: "#FF6B57",
    borderRadius: 30,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
});

export default ButtonForm;
