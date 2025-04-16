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
