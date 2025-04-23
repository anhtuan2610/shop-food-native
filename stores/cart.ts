import { TCartItem, TCartState } from "@/types";
import { create } from "zustand";

type TCartStore = {
  cart: TCartState | null;
  setCart: (cart: TCartState | null) => void;
};

type TCartAction = {
  addToCart: (item: TCartItem) => void;
  removeFormCart: (item: TCartItem) => void;
  decreaseItemQuantity: (item: TCartItem) => void;
  increaseQuantity: (item: TCartItem) => void;
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
            totalAmount: item.totalPrice,
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
                totalPrice: itemCart.totalPrice + item.totalPrice,
              }
            : itemCart
        );
        return {
          ...state,
          cart: {
            ...state.cart,
            items: updateItems,
            totalAmount: state.cart.totalAmount + item.totalPrice,
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
          totalAmount: state.cart.totalAmount + item.totalPrice,
        },
      };
    });
  },
  removeFormCart: (item) => {
    set((state) => {
      if (!state.cart) return state;
      const updateItems = state.cart.items.filter(
        (itemCart) => itemCart.product.id !== item.product.id
      );
      return {
        ...state,
        cart: {
          ...state.cart,
          items: updateItems,
          totalItems: state.cart.totalItems - 1,
          totalAmount: state.cart.totalAmount - item.totalPrice,
        },
      };
    });
  },
  decreaseItemQuantity: (item) => {
    set((state) => {
      if (!state.cart) return state;
      if (item.quantity === 1) {
        return state;
      }
      const updateItem = state.cart.items.map((itemCart) =>
        itemCart.product.id === item.product.id
          ? {
              ...item,
              totalPrice: itemCart.totalPrice - itemCart.product.price,
              quantity: itemCart.quantity - 1,
            }
          : itemCart
      );
      return {
        ...state,
        cart: {
          ...state.cart,
          items: updateItem,
          totalAmount: state.cart.totalAmount - item.product.price,
        },
      };
    });
  },
  increaseQuantity: (item) => {
    set((state) => {
      if (!state.cart) {
        return state;
      }
      const updateItem = state.cart.items.map((itemCart) =>
        itemCart.product.id === item.product.id
          ? {
              ...item,
              totalPrice: itemCart.totalPrice + itemCart.product.price,
              quantity: itemCart.quantity + 1,
            }
          : itemCart
      );
      return {
        ...state,
        cart: {
          ...state.cart,
          items: updateItem,
          totalAmount: state.cart.totalAmount + item.product.price,
        },
      };
    });
  },
}));
