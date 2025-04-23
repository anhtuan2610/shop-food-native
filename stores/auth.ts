import { TUserInfo } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

type TAuthStore = {
  accessToken: string | null;
  refreshToken: string | null;
  user: TUserInfo | null;
};

type TAuthAction = {
  setAuthData: ({
    accessToken,
    refreshToken,
    user,
  }: {
    accessToken: string;
    refreshToken: string;
    user: TUserInfo;
  }) => void;
  loadAuthData: () => void;
  clearAuthData: () => void;
};

export const useAuthStore = create<TAuthStore & TAuthAction>((set) => ({
  accessToken: null,
  refreshToken: null,
  user: null,
  setAuthData: async ({ accessToken, refreshToken, user }) => {
    await AsyncStorage.setItem(
      "authStorage",
      JSON.stringify({ accessToken, refreshToken, user })
    );
    set({ accessToken, refreshToken, user });
  },
  loadAuthData: async () => {
    const authStorage = await AsyncStorage.getItem("authStorage");
    if (authStorage) {
      const parse: TAuthStore = JSON.parse(authStorage);
      set({
        accessToken: parse.accessToken,
        refreshToken: parse.refreshToken,
        user: parse.user,
      });
    }
  },
  clearAuthData: async () => {
    await AsyncStorage.removeItem("authStorage");
    set({ accessToken: null, refreshToken: null, user: null });
  },
}));
