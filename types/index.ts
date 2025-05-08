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

export type TPostResponse = {
  posts: TPost[],
  total: number,
  skip: number,
  limit: number
}

export type TPost = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

export type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: "admin" | "moderator" | "user";
}
