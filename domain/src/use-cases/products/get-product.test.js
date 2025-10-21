"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const get_product_1 = require("./get-product");
const products_service_1 = require("../../services/products-service");
(0, vitest_1.describe)("Get Product Use Case", () => {
    const getProductDependencies = {
        productsService: products_service_1.productsServiceDemo,
    };
    (0, vitest_1.test)("should be defined", () => { });
    (0, vitest_1.test)("should retrieve a product by its ID", async () => {
        const getProductPayload = {
            id: "123",
        };
        const result = await (0, get_product_1.getProduct)(getProductDependencies, getProductPayload);
        (0, vitest_1.expect)(result).toStrictEqual({
            id: "123",
            title: "Sample Product",
            description: "Sample Description",
            price: 100,
            stock: 10,
        });
    });
    (0, vitest_1.test)("shoul fail when product ID is missing", async () => {
        const getProductPayload = {
            id: "",
        };
        const result = (0, get_product_1.getProduct)(getProductDependencies, getProductPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Product ID is required");
    });
    (0, vitest_1.test)("should fail when product does not exist", async () => {
        const getProductPayload = {
            id: "999",
        };
        const result = (0, get_product_1.getProduct)(getProductDependencies, getProductPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Product does not exist");
    });
});
//# sourceMappingURL=get-product.test.js.map