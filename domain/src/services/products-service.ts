import { Product } from "../entities";
import { productData } from "../mocks";

export interface ProductsService {
  getAll: (options?: {
    query?: string;
    limit?: number;
    offset?: number;
  }) => Promise<Product[]>;
  getById: (id: string) => Promise<Product>;
}

export const productsServiceDemo: ProductsService = {
  getById: async (productId: string): Promise<Product> => {
    const productFound = productData.find(
      (product) => product.id === productId
    );
    if (!productFound) {
      throw new Error("Product does not exist");
    }
    return productFound;
  },
  getAll: async (options?: {
    query?: string;
    limit?: number;
    offset?: number;
  }): Promise<Product[]> => {
    if (options) {
      const { query, limit, offset } = options;
      return productData
        .filter((p) =>
          p.title.toLowerCase().includes(query ? query.toLowerCase() : "")
        )
        .slice(offset || 0, (offset || 0) + (limit || productData.length));
    }
    return productData;
  },
};
