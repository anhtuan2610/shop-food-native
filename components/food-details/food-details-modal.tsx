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
  foodSelectedId,
}: {
  isShowDetails: boolean;
  setIsShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  foodSelectedId: string;
}) => {
  const [food, setFood] = useState<TFood>();
  useEffect(() => {
    const findFood = offerSpecials.find((food) => food.id === foodSelectedId);
    setFood(findFood);
  }, [foodSelectedId]);

  return (
    <Modal
      transparent
      animationType="slide"
      visible={isShowDetails}
      onRequestClose={() => setIsShowDetails(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <FoodInformation food={food} setIsShowDetails={setIsShowDetails} />
          <FoodTopping />
          <FoodActionBar food={food} setIsShowDetails={setIsShowDetails} />
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
