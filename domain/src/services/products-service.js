"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsServiceDemo = void 0;
const mocks_1 = require("../mocks");
exports.productsServiceDemo = {
    getById: async (productId) => {
        const productFound = mocks_1.productData.find((product) => product.id === productId);
        if (!productFound) {
            throw new Error("Product does not exist");
        }
        return productFound;
    },
    getAll: async (options) => {
        if (options) {
            const { query, limit, offset } = options;
            return mocks_1.productData
                .filter((p) => p.title.toLowerCase().includes(query ? query.toLowerCase() : ""))
                .slice(offset || 0, (offset || 0) + (limit || mocks_1.productData.length));
        }
        return mocks_1.productData;
    },
};
//# sourceMappingURL=products-service.js.map