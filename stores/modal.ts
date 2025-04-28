import { TProduct } from "@/services/products";
import { create } from "zustand";

type TModalStore = {
  isOpen: boolean | null;
  productSelected: TProduct | null;
  isFullView: boolean | null;
};

type TModalAction = {
  onOpen: ({ productSelected }: { productSelected: TProduct }) => void;
  onClose: () => void;
};

export const useModalStore = create<TModalStore & TModalAction>((set) => ({
  isOpen: null,
  productSelected: null,
  isFullView: null,
  onOpen: ({ productSelected }) => {
    set({ isOpen: true, productSelected });
  },
  onClose: () => {
    set({ isOpen: false, productSelected: null });
  },
}));
