import {
  createCartByUserId,
  getCartByUserId,
  updateCartByCartId,
} from "@/services/cart";
import { TCartItem, TCartState } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { useAuthStore } from "./auth";

type TCartStore = {
  cart: TCartState | null;
  setCart: (cart: TCartState | null) => void;
};

type TCartAction = {
  addToCart: (item: TCartItem) => void;
  removeFormCart: (item: TCartItem) => void;
  decreaseItemQuantity: (item: TCartItem) => void;
  increaseItemQuantity: (item: TCartItem) => void;
  loadCartData: () => void;
  clearCartData: () => void;
};

export const useCartStore = create<TCartStore & TCartAction>((set) => ({
  cart: null,
  setCart: async (cart) => {
    // await AsyncStorage.setItem("cartStorage", JSON.stringify(cart));
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
    const user = useAuthStore.getState().user;
    const currState = useCartStore.getState();
    if (user) {
      if (currState.cart) {
        if (!currState.cart.id) {
          try {
            const products: { id: number; quantity: number }[] =
              currState.cart.items.map((item) => ({
                id: item.product.id,
                quantity: item.quantity,
              }));
            await createCartByUserId({
              userId: user.id,
              products: products,
            });
          } catch (error) {
            console.log("🚀 ~ addToCart: ~ error:", error);
          }
        } else if (currState.cart.id) {
          try {
            const products: { id: number; quantity: number }[] =
              currState.cart.items.map((item) => ({
                id: item.product.id,
                quantity: item.quantity,
              }));
            await updateCartByCartId({
              cartId: currState.cart.id,
              products: products,
            });
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
    // await AsyncStorage.setItem("cartStorage", JSON.stringify(currState.cart));
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
    if (currState && currState.cart && currState.cart.id) {
      const products: { id: number; quantity: number }[] =
        currState.cart.items.map((item) => ({
          id: item.product.id,
          quantity: item.quantity,
        }));
      await updateCartByCartId({
        cartId: currState.cart.id,
        products: products,
      });
    }
    // await AsyncStorage.setItem("cartStorage", JSON.stringify(currState.cart));
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
              quantity: item.quantity - 1,
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
    // const currState = useCartStore.getState();
    // if (currState && currState.cart && currState.cart.id) {
    //   const products: { id: number; quantity: number }[] =
    //     currState.cart.items.map((item) => ({
    //       id: item.product.id,
    //       quantity: item.quantity,
    //     }));
    //   await updateCartByCartId({
    //     cartId: currState.cart.id,
    //     products: products,
    //   });
    // }
    // await AsyncStorage.setItem("cartStorage", JSON.stringify(currState.cart));
  },
  increaseItemQuantity: async (item) => {
    set((state) => {
      if (!state.cart) {
        return state;
      }
      const updateItem = state.cart.items.map((itemCart) =>
        itemCart.product.id === item.product.id
          ? {
              ...item,
              totalPrice: itemCart.totalPrice + itemCart.product.price,
              quantity: item.quantity + 1,
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
    // const currState = useCartStore.getState();
    // if (currState && currState.cart && currState.cart.id) {
    //   const products: { id: number; quantity: number }[] =
    //     currState.cart.items.map((item) => ({
    //       id: item.product.id,
    //       quantity: item.quantity,
    //     }));
    //   await updateCartByCartId({
    //     cartId: currState.cart.id,
    //     products: products,
    //   });
    // }
    // await AsyncStorage.setItem("cartStorage", JSON.stringify(currState.cart));
  },
  loadCartData: async () => {
    const user = useAuthStore.getState().user;
    if (user) {
      const response = await getCartByUserId({ userId: user.id });
      if (response.carts.length > 0) {
        const cartItems: TCartItem[] = response.carts[0].products.map(
          (product) => ({
            product: {
              id: product.id,
              title: product.title,
              price: product.price,
              discountPercentage: product.discountPercentage,
              thumbnail: product.thumbnail,
              description: "",
              category: "",
              rating: 0,
              stock: 0,
              tags: [],
              brand: "",
              sku: "",
              weight: 0,
              dimensions: {
                width: 0,
                height: 0,
                depth: 0,
              },
              warrantyInformation: "",
              shippingInformation: "",
              availabilityStatus: "",
              reviews: [],
              returnPolicy: "",
              minimumOrderQuantity: 1,
              meta: {
                createdAt: "",
                updatedAt: "",
                barcode: "",
                qrCode: "",
              },
              images: [],
            },
            quantity: product.quantity,
            totalPrice: product.total,
          })
        );
        const cartState: TCartState = {
          id: response.carts[0].id,
          items: cartItems,
          totalAmount: response.carts[0].total,
          totalItems: response.carts[0].totalProducts,
        };
        set({ cart: cartState });
      }
    }
  },
  clearCartData: async () => {
    await AsyncStorage.removeItem("cartStorage");
    set({ cart: null });
  },
}));
