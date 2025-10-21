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
export async function removeProductFromCart(
  dependencies: RemoveProductFromCartDependencies,
  payload: RemoveProductFromCartPayload
): Promise<boolean> {
  const { userId, productId } = payload;
  if (!userId || userId.trim() === "") {
    throw new Error("User ID is required");
  }
  if (!productId || productId.trim() === "") {
    throw new Error("Product ID is required");
  }
  await dependencies.productsService.getById(productId);
  await dependencies.usersService.getById(userId);
  return dependencies.cartService.removeProduct(userId, productId);
}
