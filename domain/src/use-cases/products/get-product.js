"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = getProduct;
async function getProduct(dependencies, payload) {
    const { id } = payload;
    if (!id || id.trim() === "") {
        throw new Error("Product ID is required");
    }
    return dependencies.productsService.getById(id);
}
//# sourceMappingURL=get-product.js.map