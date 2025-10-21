"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const add_product_1 = require("./add-product");
const services_1 = require("../../services");
(0, vitest_1.describe)("Add Product to Cart Use Case", async () => {
    const addProductToCartDependencies = {
        cartService: services_1.cartServiceDemo,
        usersService: services_1.usersServiceDemo,
        productsService: services_1.productsServiceDemo,
    };
    (0, vitest_1.test)("shoul be defined", () => {
        (0, vitest_1.expect)(add_product_1.addProductToCart).toBeDefined();
    });
    (0, vitest_1.test)("should fail to add product to cart with invalid user ID", async () => {
        const addProductToCartPayload = {
            userId: "",
            productId: "123",
            quantity: 2,
        };
        const result = (0, add_product_1.addProductToCart)(addProductToCartDependencies, addProductToCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("User ID is required");
    });
    (0, vitest_1.test)("should fail to add product to cart if user does not exist", async () => {
        const addProductToCartPayload = {
            userId: "3",
            productId: "123",
            quantity: 2,
        };
        const result = (0, add_product_1.addProductToCart)(addProductToCartDependencies, addProductToCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("User does not exist");
    });
    (0, vitest_1.test)("should fail to add product to cart with invalid product ID", async () => {
        const addProductToCartPayload = {
            userId: "1",
            productId: "",
            quantity: 2,
        };
        const result = (0, add_product_1.addProductToCart)(addProductToCartDependencies, addProductToCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Product ID is required");
    });
    (0, vitest_1.test)("should add product to cart", async () => {
        const addProductToCartPayload = {
            userId: "1",
            productId: "123",
            quantity: 2,
        };
        const result = (0, add_product_1.addProductToCart)(addProductToCartDependencies, addProductToCartPayload);
        await (0, vitest_1.expect)(result).resolves.toBe(true);
    });
    (0, vitest_1.test)("should fail to add product to cart if product does not exist", async () => {
        const addProductToCartPayload = {
            userId: "1",
            productId: "789",
            quantity: 2,
        };
        const result = (0, add_product_1.addProductToCart)(addProductToCartDependencies, addProductToCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Product does not exist");
    });
    (0, vitest_1.test)("should fail to add product to cart with quantity less or equal than zero", async () => {
        const addProductToCartPayload = {
            userId: "1",
            productId: "123",
            quantity: -2,
        };
        const result = (0, add_product_1.addProductToCart)(addProductToCartDependencies, addProductToCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Quantity must be greater than zero");
    });
});
//# sourceMappingURL=add-product.test.js.map