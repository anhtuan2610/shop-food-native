import { TCartState } from "@/types";
import { create } from "zustand";

type TCartStore = {
    cart: TCartState | null;
    setCart: (cart: TCartState | null) => void;
}

export const useCartStore = create<TCartStore>((set) => ({
  cart: null,
  setCart: (cart) => set(() => ({ cart })),
}));
