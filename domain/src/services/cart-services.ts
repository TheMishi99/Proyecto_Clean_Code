import { CartItem } from "../entities";
import { cartData } from "../mocks";

export interface CartService {
  hasProduct: (userId: string, productId: string) => Promise<boolean>;
  getByUserId: (userId: string) => Promise<CartItem[]>;
  addProduct: (
    userId: string,
    productId: string,
    quantity: number
  ) => Promise<boolean>;
  editProduct: (
    userId: string,
    productId: string,
    quantity: number
  ) => Promise<boolean>;
  removeProduct: (userId: string, productId: string) => Promise<boolean>;
}

export const cartServiceDemo: CartService = {
  hasProduct: async (userId: string, productId: string) => {
    return cartData.some(
      (item) => item.userId === userId && item.productId === productId
    );
  },
  getByUserId: async (userId: string) => {
    return cartData.filter((item) => item.userId === userId);
  },
  addProduct: async (userId: string, productId: string, quantity: number) => {
    const exists = await cartServiceDemo.hasProduct(userId, productId);
    if (!exists) {
      cartData.push({ userId, productId, quantity });
    } else {
      const updated = cartData.map((i) => {
        const isItemToUpdate = i.userId === userId && i.productId === productId;
        if (isItemToUpdate) {
          return { ...i, quantity: i.quantity + quantity };
        }
        return i;
      });

      cartData.splice(0, cartData.length, ...updated);
    }

    return true;
  },
  editProduct: async (userId: string, productId: string, quantity: number) => {
    const exists = await cartServiceDemo.hasProduct(userId, productId);
    if (!exists) {
      throw new Error("Product is not in your cart");
    }
    const updated = cartData.map((i) => {
      const isItemToUpdate = i.userId === userId && i.productId === productId;
      if (isItemToUpdate) {
        return { ...i, quantity };
      }
      return i;
    });
    cartData.splice(0, cartData.length, ...updated);
    return true;
  },
  removeProduct: async (userId: string, productId: string) => {
    const exists = await cartServiceDemo.hasProduct(userId, productId);
    if (!exists) {
      throw new Error("Product is not in your cart");
    }
    const updated = cartData.filter(
      (i) => !(i.userId === userId && i.productId === productId)
    );
    cartData.splice(0, cartData.length, ...updated);
    return true;
  },
};
