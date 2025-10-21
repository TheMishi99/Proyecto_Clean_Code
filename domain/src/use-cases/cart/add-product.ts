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
export async function addProductToCart(
  dependecies: AddProductToCartDependencies,
  payload: AddProductToCartPayload
): Promise<boolean> {
  const { userId, productId, quantity } = payload;
  if (!userId || userId.trim() === "") {
    throw new Error("User ID is required");
  }
  if (!productId || productId.trim() === "") {
    throw new Error("Product ID is required");
  }
  if (quantity <= 0) {
    throw new Error("Quantity must be greater than zero");
  }

  await dependecies.productsService.getById(productId);

  await dependecies.usersService.getById(userId);

  return dependecies.cartService.addProduct(userId, productId, quantity);
}
