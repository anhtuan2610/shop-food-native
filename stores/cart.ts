import { TCartItem, TCartState } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  loadCartData: () => void;
  clearCartData: () => void;
};

export const useCartStore = create<TCartStore & TCartAction>((set) => ({
  cart: null,
  setCart: async (cart) => {
    await AsyncStorage.setItem("cartStorage", JSON.stringify(cart));
    set({ cart });
  },
  addToCart: async (item) => {
    set((state) => {
      let updateState: TCartStore & TCartAction;
      if (!state.cart) {
        updateState = {
          ...state,
          cart: {
            items: [item],
            totalItems: 1,
            totalAmount: item.totalPrice,
          },
        };
        return updateState;
      } else {
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
          updateState = {
            ...state,
            cart: {
              ...state.cart,
              items: updateItems,
              totalAmount: state.cart.totalAmount + item.totalPrice,
            },
          };
        } else {
          updateState = {
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
        }
      }
      return updateState;
    });
    const currState = useCartStore.getState();
    await AsyncStorage.setItem("cartStorage", JSON.stringify(currState.cart));
  },
  removeFormCart: async (item) => {
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
    const currState = useCartStore.getState();
    await AsyncStorage.setItem("cartStorage", JSON.stringify(currState.cart));
  },
  decreaseItemQuantity: async (item) => {
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
    const currState = useCartStore.getState();
    await AsyncStorage.setItem("cartStorage", JSON.stringify(currState.cart));
  },
  increaseQuantity: async (item) => {
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
    const currState = useCartStore.getState();
    await AsyncStorage.setItem("cartStorage", JSON.stringify(currState.cart));
  },
  loadCartData: async () => {
    const cartStorage = await AsyncStorage.getItem("cartStorage");
    if (cartStorage) {
      const parse: TCartState = JSON.parse(cartStorage);
      set({ cart: parse });
    }
  },
  clearCartData: async () => {
    await AsyncStorage.removeItem("cartStorage");
    set({ cart: null });
  },
}));
