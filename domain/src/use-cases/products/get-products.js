"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = getProducts;
async function getProducts(dependencies, payload) {
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
//# sourceMappingURL=get-products.js.map