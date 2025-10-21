import { Product } from "../../entities";
import { ProductsService } from "../../services/products-service";
export interface GetProductDependencies {
    productsService: ProductsService;
}
export interface GetProductPayload {
    id: string;
}
export declare function getProduct(dependencies: GetProductDependencies, payload: GetProductPayload): Promise<Product | undefined>;
//# sourceMappingURL=get-product.d.ts.map