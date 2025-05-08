import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  index: undefined;
  signup: undefined;
  login: undefined;
  'forgot-password': undefined;
  verification: undefined;
  drawers: NavigatorScreenParams<DrawersParamList>;
  cart: undefined;
  profile: undefined;
  "profile-details": undefined;
  "payment-methods": undefined;
  "post-details": {postId: number};
  'all-products'?: { isSearch: boolean }
};

export type DrawersParamList = {
  tabs: NavigatorScreenParams<TabsParamList>;
}

export type TabsParamList = {
  home: undefined;
  notification: undefined;
  profile: undefined;
};

// export type HomeParamList = {
//   "home-main": undefined;
//   "all-products": undefined;
// }
