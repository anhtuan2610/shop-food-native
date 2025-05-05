import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const ProfileMenuItem = ({
  itemIcon,
  itemName,
  actionFunction,
}: {
  itemIcon: React.JSX.Element;
  itemName: string;
  actionFunction?: () => void;
}) => {
  return (
    <TouchableOpacity onPress={actionFunction}>
      <View style={{ gap: 20 }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View>{itemIcon}</View>
            <Text style={{ fontSize: 16, fontWeight: 400 }}>{itemName}</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </View>
        <View style={{ height: 1, backgroundColor: "#E0E0E0" }}></View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;
