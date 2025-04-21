import { useState } from "react";
import {
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FoodDetailsModal from "../food-details/food-details-modal";
import { TFood } from "@/types";
import SpecialFoodCard from "./special-food-card";

export const offerSpecials: TFood[] = [
  {
    id: "1",
    name: "Burger King",
    star: "4.5",
    price: "22.00",
    imageUrl: require("../../assets/images/home/special-1.png"),
    backgroundColorOffer: {
      backgroundColor: "#FF6B57",
    },
  },
  {
    id: "2",
    name: "Pizza King",
    star: "4.4",
    price: "19.00",
    imageUrl: require("../../assets/images/home/special-2.png"),
    backgroundColorOffer: {
      backgroundColor: "#72CF98",
    },
  },
  {
    id: "3",
    name: "Sushi Queen",
    star: "4.8",
    price: "25.00",
    imageUrl: require("../../assets/images/home/special-3.png"),
    backgroundColorOffer: {
      backgroundColor: "#5DA3FA",
    },
  },
  {
    id: "4",
    name: "Taco Master",
    star: "4.6",
    price: "18.50",
    imageUrl: require("../../assets/images/home/special-4.png"),
    backgroundColorOffer: {
      backgroundColor: "#FFC529",
    },
  },
];

const SpecialOffers = () => {
  const [isShowDetails, setIsShowDetails] = useState<boolean>(false);
  const [foodSelectedId, setFoodSelectedId] = useState<string | undefined>(
    undefined
  );

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.titleContainer}>
          <Text style={styles.title1}>Special Offers</Text>
          <Text style={styles.title2}>View All</Text>
        </View>
      </TouchableWithoutFeedback>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          data={offerSpecials}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SpecialFoodCard
              key={item.id}
              setIsShowDetails={setIsShowDetails}
              setFoodSelectedId={setFoodSelectedId}
              food={item}
            />
          )}
          contentContainerStyle={styles.specialOffersContainer}
          scrollEnabled={false}
        />
      </ScrollView>
      {isShowDetails && foodSelectedId && (
        <FoodDetailsModal
          isShowDetails={isShowDetails}
          setIsShowDetails={setIsShowDetails}
          foodSelectedId={foodSelectedId}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  titleContainer: {
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title1: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
  title2: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#FF6B57",
  },
  specialOffersContainer: {
    paddingHorizontal: 24,
    flexDirection: "row",
    gap: 8,
  },
});

export default SpecialOffers;
