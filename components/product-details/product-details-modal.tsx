import { Dimensions, StyleSheet, View } from "react-native";
import ProductInformation from "./information";
import ProductTopping from "./topping";
import ProductActionBar from "./action-bar";

const windowHeight = Dimensions.get("window").height;

const ProductDetailsModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContent}>
        <ProductInformation />
        <ProductTopping />
      </View>
      <ProductActionBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ chiều cao
    height: windowHeight,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  modalContent: {
    flex: 1, // Phần nội dung chiếm phần còn lại
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 25,
  },
});

export default ProductDetailsModal;
