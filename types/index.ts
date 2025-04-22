import { TProduct } from "@/services/products";
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

export type TFoodInCart = {
  food: TFood,
  quantity: number,
}

export type TCategory = {
    id: string,
    name: string,
    slug: string,
    imageUrl: ImageSourcePropType
}

export type TCartItem = {
  product: TProduct,
  totalPrice: number,
  quantity: number,
}

export type TCartState = {
  items: TCartItem[],
  totalItems: number,
  totalAmount: number,
}
