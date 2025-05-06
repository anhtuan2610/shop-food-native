import { TProduct } from "@/services/products";
import { RootStackParamList } from "@/types/navigation";
import { NavigationProp } from "@react-navigation/native";
import { create } from "zustand";

type TModalStore = {
  isOpen: boolean | null;
  productSelected: TProduct | null;
  isFullView: boolean | null;
  navigationContext: NavigationProp<RootStackParamList> | null;
};

type TModalAction = {
  onOpen: ({ productSelected }: { productSelected: TProduct }) => void;
  onClose: () => void;
  setNavigationContext: ({ navigationContext }: { navigationContext: NavigationProp<RootStackParamList> }) => void
};

export const useModalStore = create<TModalStore & TModalAction>((set) => ({
  isOpen: null,
  productSelected: null,
  isFullView: null,
  navigationContext: null,
  onOpen: ({ productSelected }) => {
    set({ isOpen: true, productSelected });
  },
  onClose: () => {
    set({ isOpen: false, productSelected: null });
  },
  setNavigationContext: ({ navigationContext }) => {
    set({ navigationContext})
  }
}));
