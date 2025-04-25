import { TCartsResponse } from "@/types";
import { get, post, update } from "./axios-config";

export const getCartByUserId = async ({ userId }: { userId: number }) => {
  return await get<TCartsResponse>({
    url: `/carts/user/${userId}`,
  });
};

export const createCartByUserId = async ({
  userId,
  products,
}: {
  userId: number;
  products: { id: number; quantity: number }[];
}) => {
  return await post({
    url: `/carts/add`,
    data: {
      userId,
      products,
    },
  });
};

export const updateCartByCartId = async ({
  cartId,
  products,
}: {
  cartId: number;
  products: { id: number; quantity: number }[];
}) => {
  return await update({
    url: `/carts/${cartId}`,
    data: {
      products,
    },
  });
};
