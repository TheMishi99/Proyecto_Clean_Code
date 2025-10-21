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

export async function editProductInCart(
  dependencies: EditProductInCartDependencies,
  payload: EditProductInCartPayload
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

  await dependencies.productsService.getById(productId);
  await dependencies.usersService.getById(userId);
  return dependencies.cartService.editProduct(userId, productId, quantity);
}
