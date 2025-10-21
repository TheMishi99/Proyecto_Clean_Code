import { Product } from "../../entities";
import { ProductsService } from "../../services";

export interface GetProductsDependencies {
  productsService: ProductsService;
}

export interface GetProductsPayload {
  options?: {
    query?: string;
    limit?: number;
    offset?: number;
  };
}

export async function getProducts(
  dependencies: GetProductsDependencies,
  payload: GetProductsPayload
): Promise<Product[]> {
  const { options } = payload;
  if (options) {
    const { limit, offset } = options;
    if (limit !== undefined && limit <= 0) {
      throw new Error("Limit must be greater than zero");
    }
    if (offset !== undefined && offset < 0) {
      throw new Error("Offset must be greater than or equal to zero");
    }
  }

  return dependencies.productsService.getAll(options);
}
