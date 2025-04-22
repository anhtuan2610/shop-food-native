import { TCartItem, TCartState } from "@/types";
import { create } from "zustand";

type TCartStore = {
  cart: TCartState | null;
  setCart: (cart: TCartState | null) => void;
};

type TCartAction = {
  addToCart: (item: TCartItem) => void;
};

export const useCartStore = create<TCartStore & TCartAction>((set) => ({
  cart: null,
  setCart: (cart) => set(() => ({ cart })),
  addToCart: (item) => {
    set((state) => {
      if (!state.cart) {
        // case cart chưa tạo lần đầu (chưa có cart -> cart đang nul)
        return {
          ...state,
          cart: {
            items: [item],
            totalItems: 1,
            totalAmount: item.totalPrice * item.quantity,
          },
        };
      }

      const existItem = state.cart.items.find(
        (itemCart) => itemCart.product.id === item.product.id
      );
      if (existItem) {
        const updateItems = state.cart.items.map((itemCart) =>
          itemCart.product.id === item.product.id
            ? {
                ...itemCart,
                quantity: itemCart.quantity + item.quantity,
                totalPrice:
                  itemCart.totalPrice * (itemCart.quantity + item.quantity),
              }
            : itemCart
        );
        return {
          ...state,
          cart: {
            ...state.cart,
            items: updateItems,
            totalItems: state.cart.totalItems + item.quantity,
            totalAmount:
              state.cart.totalAmount + item.totalPrice * item.quantity,
          },
        };
      }

      return {
        ...state,
        cart: {
          ...state.cart,
          items: [
            ...state.cart?.items, // trường hợp không thể bê cái này lên case 1 luôn vì cart lúc đầu có thể null
            item,
          ],
          totalItems: state.cart.totalItems + 1,
          totalAmount: state.cart.totalAmount + item.totalPrice * item.quantity,
        },
      };
    });
  },
}));
