import { CartItem } from "../../../../domain/dist/entities";
import { CartService } from "../../../../domain/dist/services";

const cartItems: CartItem[] = [];

export class CartRepository implements CartService {
  async getByUserId(userId: string): Promise<CartItem[]> {
    return cartItems.filter((item) => item.userId === userId);
  }
  async hasProduct(userId: string, productId: string): Promise<boolean> {
    return cartItems.some(
      (item) => item.userId === userId && item.productId === productId
    );
  }
  async addProduct(
    userId: string,
    productId: string,
    quantity: number
  ): Promise<boolean> {
    const exists = await this.hasProduct(userId, productId);
    if (!exists) {
      cartItems.push({ userId, productId, quantity });
    } else {
      const updated = cartItems.map((i) => {
        const isItemToUpdate = i.userId === userId && i.productId === productId;
        if (isItemToUpdate) {
          return { ...i, quantity: i.quantity + quantity };
        }
        return i;
      });

      cartItems.splice(0, cartItems.length, ...updated);
    }

    return true;
  }
  async editProduct(
    userId: string,
    productId: string,
    quantity: number
  ): Promise<boolean> {
    const exists = await this.hasProduct(userId, productId);
    if (!exists) {
      throw new Error("Product is not in your cart");
    }
    const updated = cartItems.map((i) => {
      const isItemToUpdate = i.userId === userId && i.productId === productId;
      if (isItemToUpdate) {
        return { ...i, quantity };
      }
      return i;
    });
    cartItems.splice(0, cartItems.length, ...updated);
    return true;
  }
  async removeProduct(userId: string, productId: string): Promise<boolean> {
    const exists = await this.hasProduct(userId, productId);
    if (!exists) {
      throw new Error("Product is not in your cart");
    }
    const updated = cartItems.filter(
      (i) => !(i.userId === userId && i.productId === productId)
    );
    cartItems.splice(0, cartItems.length, ...updated);
    return true;
  }
}

export const cartRepository = new CartRepository();
