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
  id?: number, // trường hợp cart chưa có cái nào, thì tạo cái đầu tiên không cần tới id để đẩy lên server tự tạo id
  items: TCartItem[],
  totalItems: number,
  totalAmount: number,
}

export type TUserInfo = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export type TUserLoginResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other'; // thêm 'other' nếu cần mở rộng
  image: string;
  accessToken: string;
  refreshToken: string;
}

export type TCartsResponse = {
  carts: TCart[]; // pick thằng đầu thôi
  total: number;
  skip: number;
  limit: number;
};

type TCart = {
  id: number;
  products: TCartProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

type TCartProduct = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
};

