import { CartItem } from "../entities";
export interface CartService {
    hasProduct: (userId: string, productId: string) => Promise<boolean>;
    getByUserId: (userId: string) => Promise<CartItem[]>;
    addProduct: (userId: string, productId: string, quantity: number) => Promise<boolean>;
    editProduct: (userId: string, productId: string, quantity: number) => Promise<boolean>;
    removeProduct: (userId: string, productId: string) => Promise<boolean>;
}
export declare const cartServiceDemo: CartService;
//# sourceMappingURL=cart-services.d.ts.map