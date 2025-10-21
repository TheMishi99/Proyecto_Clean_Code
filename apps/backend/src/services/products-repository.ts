import { Product } from "../../../../domain/dist/entities";
import { ProductsService } from "../../../../domain/dist/services";

const products: Product[] = [];
export class ProductsRepository implements ProductsService {
  async getAll(options?: {
    query?: string;
    limit?: number;
    offset?: number;
  }): Promise<Product[]> {
    if (options) {
      const { query, limit, offset } = options;
      return products
        .filter((p) =>
          p.title.toLowerCase().includes(query ? query.toLowerCase() : "")
        )
        .slice(offset || 0, (offset || 0) + (limit || products.length));
    }
    return products;
  }
  async getById(id: string): Promise<Product> {
    const productFound = products.find((product) => product.id === id);
    if (!productFound) {
      throw new Error("Product not found");
    }
    return productFound;
  }
}

export const productsRepository = new ProductsRepository();
