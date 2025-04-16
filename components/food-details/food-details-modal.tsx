import { useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { offerSpecials } from "../home/special-offers";
import { TFood } from "@/types";
import FoodInformation from "./information";
import FoodTopping from "./topping";
import FoodActionBar from "./action-bar";

const FoodDetailsModal = ({
  isShowDetails,
  setIsShowDetails,
  productSelectedId,
}: {
  isShowDetails: boolean;
  setIsShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  productSelectedId: string;
}) => {
  const [product, setProduct] = useState<TFood>();
  useEffect(() => {
    const findProduct = offerSpecials.find(
      (food) => food.id === productSelectedId
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
          <FoodInformation
            product={product}
            setIsShowDetails={setIsShowDetails}
          />
          <FoodTopping />
          <FoodActionBar product={product} />
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

export default FoodDetailsModal;
