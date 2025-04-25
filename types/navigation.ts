import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  index: undefined;
  signup: undefined;
  login: undefined;
  'forgot-password': undefined;
  verification: undefined;
  tabs: NavigatorScreenParams<TabsParamList>;
  cart: undefined
};

export type TabsParamList = {
  home: NavigatorScreenParams<HomeParamList>;
  notification: undefined;
  profile: undefined;
};

export type HomeParamList = {
  "home-main": undefined;
  "all-products": undefined;
}
