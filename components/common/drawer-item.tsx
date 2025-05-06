import { StyleSheet, Text, TouchableOpacity } from "react-native";

const DrawerItem = ({
  icon,
  name,
  handleRedirect,
}: {
  icon: React.JSX.Element;
  name: string;
  handleRedirect: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={handleRedirect}>
      {icon}
      <Text style={styles.itemText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 10,
    borderRadius: 3,
  },
  itemIcon: {
    marginRight: 16,
  },
  itemText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
});

export default DrawerItem;
