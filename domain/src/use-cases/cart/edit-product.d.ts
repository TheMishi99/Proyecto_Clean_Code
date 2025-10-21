import { CartService, ProductsService, UsersService } from "../../services";
export interface EditProductInCartDependencies {
    cartService: CartService;
    usersService: UsersService;
    productsService: ProductsService;
}
export interface EditProductInCartPayload {
    userId: string;
    productId: string;
    quantity: number;
}
export declare function editProductInCart(dependencies: EditProductInCartDependencies, payload: EditProductInCartPayload): Promise<boolean>;
//# sourceMappingURL=edit-product.d.ts.map