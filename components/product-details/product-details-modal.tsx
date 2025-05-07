import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import ProductInformation from "./information";
import ProductHeader from "./product-header";

const windowHeight = Dimensions.get("window").height;

const ProductDetailsModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContent}>
        <ProductHeader />
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={Platform.OS === "ios" ? false : true}
        >
          <ProductInformation />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 25,
    marginTop: 15,
  },
});

export default ProductDetailsModal;
