import { CartItem } from "../../entities";
import { CartService, UsersService, usersServiceDemo } from "../../services";
export interface GetCartDependencies {
  cartService: CartService;
  usersService: UsersService;
}
export interface GetCartPayload {
  userId: string;
}

export async function getCart(
  dependencies: GetCartDependencies,
  payload: GetCartPayload
): Promise<CartItem[]> {
  const { userId } = payload;
  if (!userId || userId.trim() === "") {
    throw new Error("User ID is required");
  }
  await dependencies.usersService.getById(userId);

  return dependencies.cartService.getByUserId(userId);
}
