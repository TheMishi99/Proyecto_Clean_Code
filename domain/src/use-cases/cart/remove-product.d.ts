import { CartService, UsersService, ProductsService } from "../../services";
export interface RemoveProductFromCartDependencies {
    cartService: CartService;
    usersService: UsersService;
    productsService: ProductsService;
}
export interface RemoveProductFromCartPayload {
    userId: string;
    productId: string;
}
export declare function removeProductFromCart(dependencies: RemoveProductFromCartDependencies, payload: RemoveProductFromCartPayload): Promise<boolean>;
//# sourceMappingURL=remove-product.d.ts.map