import { ImageSourcePropType } from "react-native";

export type TFood = {
  id: string;
  name: string;
  star: String;
  price: string;
  imageUrl: ImageSourcePropType;
  backgroundColorOffer: {
    backgroundColor: string;
  };
};

export type TFoodCart = {
  product: TFood,
  quantity: number,
  totalPrice: string,
}
