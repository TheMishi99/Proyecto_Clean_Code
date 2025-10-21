import { Product } from "../../entities";
import { ProductsService } from "../../services/products-service";

export interface GetProductDependencies {
  productsService: ProductsService;
}

export interface GetProductPayload {
  id: string;
}

export async function getProduct(
  dependencies: GetProductDependencies,
  payload: GetProductPayload
): Promise<Product | undefined> {
  const { id } = payload;
  if (!id || id.trim() === "") {
    throw new Error("Product ID is required");
  }
  return dependencies.productsService.getById(id);
}
