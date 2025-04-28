import CloseVector from "@/assets/vectors/details/close-vector";
import HeartVector from "@/assets/vectors/details/heart-vector";
import { useModalStore } from "@/stores/modal";
import { Pressable, StyleSheet, View } from "react-native";

const ProductHeader = () => {
  const { onClose } = useModalStore();
  return (
    <View style={styles.headerDetails}>
      <Pressable style={styles.closeButtonContainer} onPress={() => onClose()}>
        <CloseVector />
      </Pressable>
      <View style={styles.favoriteIconContainer}>
        <HeartVector />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 25,
  },
  closeButtonContainer: {
    width: 38,
    height: 38,
    alignSelf: "flex-start",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",

    // iOS shadow
    shadowColor: "rgba(211, 209, 216, 1)", // hoặc '#D3D1D8'
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,

    // Android shadow
    elevation: 10,
    backgroundColor: "rgba(255, 255, 255, 1)", // cần có để shadow hiện trên Android
  },
  favoriteIconContainer: {
    width: 38,
    height: 38,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    // iOS Shadow
    shadowColor: "rgba(211, 209, 216, 1)", // Màu gốc
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,

    // Android Shadow
    elevation: 10,
  },
});

export default ProductHeader;
