import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const InputPromo = () => {
  return (
    <View style={{ position: "relative" }}>
      <TextInput
        style={styles.promoteInput}
        placeholder="Promo Code"
        placeholderTextColor={"rgba(190, 190, 190, 1)"}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  promoteInput: {
    borderWidth: 1,
    borderColor: "rgba(238, 238, 238, 1)",
    borderRadius: 100,
    paddingLeft: 18,
    paddingVertical: 22,
  },
  addButton: {
    width: 84,
    borderRadius: 28,
    height: 44,
    backgroundColor: "rgba(255, 107, 87, 1)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    top: "50%", // top 1/2 -translate-y-1/2
    transform: [{ translateY: -22 }],
  },
  addButtonText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "rgba(255, 255, 255, 1)",
  },
});

export default InputPromo;
