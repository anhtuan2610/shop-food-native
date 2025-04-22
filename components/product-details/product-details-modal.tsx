import { useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import ProductInformation from "./information";
import ProductTopping from "./topping";
import ProductActionBar from "./action-bar";
import { TProduct } from "@/services/products";

const ProductDetailsModal = ({
  products,
  isShowDetails,
  setIsShowDetails,
  productSelectedId,
}: {
  products: TProduct[];
  isShowDetails: boolean;
  setIsShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  productSelectedId: number;
}) => {
  const [product, setProduct] = useState<TProduct>();
  useEffect(() => {
    const findProduct = products.find(
      (product) => product.id === productSelectedId
    );
    setProduct(findProduct);
  }, [productSelectedId]);

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
            product={product}
            setIsShowDetails={setIsShowDetails}
          />
          <ProductTopping />
          <ProductActionBar
            product={product}
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
