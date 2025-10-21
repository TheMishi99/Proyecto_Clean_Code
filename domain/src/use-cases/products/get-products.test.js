"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const get_products_1 = require("./get-products");
const services_1 = require("../../services");
(0, vitest_1.describe)("Get Products Use Cases", () => {
    const getProductsDependencies = {
        productsService: services_1.productsServiceDemo,
    };
    (0, vitest_1.test)("should be defined", () => { });
    (0, vitest_1.test)("should return all products when no payload is provided", async () => {
        const getProductsPayload = {
            options: {},
        };
        const result = await (0, get_products_1.getProducts)(getProductsDependencies, getProductsPayload);
        (0, vitest_1.expect)(Array.isArray(result)).toBe(true);
        (0, vitest_1.expect)(result.length).toBeGreaterThan(0);
    });
    (0, vitest_1.test)("should return products based on query, limit, and offset", async () => {
        const getProductsPayload = {
            options: {
                query: "laptop",
                limit: 3,
                offset: 0,
            },
        };
        const result = await (0, get_products_1.getProducts)(getProductsDependencies, getProductsPayload);
        (0, vitest_1.expect)(Array.isArray(result)).toBe(true);
        (0, vitest_1.expect)(result.length).toBeLessThanOrEqual(3);
    });
    (0, vitest_1.test)("should fail when limit less or equal than zero is provided", async () => {
        const getProductsPayload = {
            options: {
                query: "",
                limit: 0,
                offset: 0,
            },
        };
        const result = (0, get_products_1.getProducts)(getProductsDependencies, getProductsPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Limit must be greater than zero");
    });
    (0, vitest_1.test)("should fail when offset less than zero is provided", async () => {
        const getProductsPayload = {
            options: {
                query: "",
                limit: 5,
                offset: -1,
            },
        };
        const result = (0, get_products_1.getProducts)(getProductsDependencies, getProductsPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Offset must be greater than or equal to zero");
    });
});
//# sourceMappingURL=get-products.test.js.map