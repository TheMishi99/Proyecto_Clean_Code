import { Product } from "../entities";
export interface ProductsService {
    getAll: (options?: {
        query?: string;
        limit?: number;
        offset?: number;
    }) => Promise<Product[]>;
    getById: (id: string) => Promise<Product>;
}
export declare const productsServiceDemo: ProductsService;
//# sourceMappingURL=products-service.d.ts.map