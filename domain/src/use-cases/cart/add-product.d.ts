import { CartService, ProductsService, UsersService } from "../../services";
export interface AddProductToCartDependencies {
    cartService: CartService;
    usersService: UsersService;
    productsService: ProductsService;
}
export interface AddProductToCartPayload {
    userId: string;
    productId: string;
    quantity: number;
}
export declare function addProductToCart(dependecies: AddProductToCartDependencies, payload: AddProductToCartPayload): Promise<boolean>;
//# sourceMappingURL=add-product.d.ts.map