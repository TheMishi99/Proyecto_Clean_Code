import { CartItem } from "../../entities";
import { CartService, UsersService } from "../../services";
export interface GetCartDependencies {
    cartService: CartService;
    usersService: UsersService;
}
export interface GetCartPayload {
    userId: string;
}
export declare function getCart(dependencies: GetCartDependencies, payload: GetCartPayload): Promise<CartItem[]>;
//# sourceMappingURL=get-cart.d.ts.map