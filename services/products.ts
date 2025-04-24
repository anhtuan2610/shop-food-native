import { get } from "./axios-config";

export type ProductResponse = {
  products: TProduct[];
};

export type TProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

export const getProductsByCategory = async ({
  categorySlug,
}: {
  categorySlug: string;
}) => {
  return await get<ProductResponse>({
    url: `/products/category/${categorySlug}`,
  });
};

export const get2Products = async () => {
  return await get<ProductResponse>({
    url: `/products`,
    params: { limit: 5 },
  });
};

export const getAllProducts = async () => {
  return await get<ProductResponse>({
    url: `/products`,
    params: { limit: 10 },
  });
};
