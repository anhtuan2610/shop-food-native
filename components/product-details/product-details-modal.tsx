import { useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import ProductInformation from "./information";
import ProductTopping from "./topping";
import ProductActionBar from "./action-bar";
import { TProduct } from "@/services/products";

const ProductDetailsModal = ({
  isShowDetails,
  setIsShowDetails,
  productSelected,
}: {
  isShowDetails: boolean;
  setIsShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  productSelected: TProduct;
}) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={isShowDetails}
      onRequestClose={() => setIsShowDetails(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <ProductInformation
            productSelected={productSelected}
            setIsShowDetails={setIsShowDetails}
          />
          <ProductTopping />
          <ProductActionBar
            productSelected={productSelected}
            setIsShowDetails={setIsShowDetails}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(25, 27, 47, 0.4)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 25,
  },
});

export default ProductDetailsModal;
