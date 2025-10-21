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
export declare function getProducts(dependencies: GetProductsDependencies, payload: GetProductsPayload): Promise<Product[]>;
//# sourceMappingURL=get-products.d.ts.map