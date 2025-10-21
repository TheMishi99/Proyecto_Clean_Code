"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const edit_product_1 = require("./edit-product");
const services_1 = require("../../services");
(0, vitest_1.describe)("Edit Product In Cart Use Case", () => {
    const editProductInCartDependencies = {
        cartService: services_1.cartServiceDemo,
        usersService: services_1.usersServiceDemo,
        productsService: services_1.productsServiceDemo,
    };
    (0, vitest_1.test)("should be defined", () => {
        (0, vitest_1.expect)(edit_product_1.editProductInCart).toBeDefined();
    });
    (0, vitest_1.test)("should edit a product in the cart", async () => {
        const editProductInCartPayload = {
            userId: "1",
            productId: "123",
            quantity: 5,
        };
        const result = (0, edit_product_1.editProductInCart)(editProductInCartDependencies, editProductInCartPayload);
        await (0, vitest_1.expect)(result).resolves.toBe(true);
    });
    (0, vitest_1.test)("should fail when user ID is missing", async () => {
        const editProductInCartPayload = {
            userId: "",
            productId: "123",
            quantity: 5,
        };
        const result = (0, edit_product_1.editProductInCart)(editProductInCartDependencies, editProductInCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("User ID is required");
    });
    (0, vitest_1.test)("should fail when user does not exist", async () => {
        const editProductInCartPayload = {
            userId: "999",
            productId: "123",
            quantity: 5,
        };
        const result = (0, edit_product_1.editProductInCart)(editProductInCartDependencies, editProductInCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("User does not exist");
    });
    (0, vitest_1.test)("should fail when product ID is missing", async () => {
        const editProductInCartPayload = {
            userId: "1",
            productId: "",
            quantity: 5,
        };
        const result = (0, edit_product_1.editProductInCart)(editProductInCartDependencies, editProductInCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Product ID is required");
    });
    (0, vitest_1.test)("should fail when product does not exist", async () => {
        const editProductInCartPayload = {
            userId: "1",
            productId: "999",
            quantity: 5,
        };
        const result = (0, edit_product_1.editProductInCart)(editProductInCartDependencies, editProductInCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Product does not exist");
    });
    (0, vitest_1.test)("should fail when quantity is zero or negative", async () => {
        const editProductInCartPayload = {
            userId: "1",
            productId: "123",
            quantity: 0,
        };
        const result = (0, edit_product_1.editProductInCart)(editProductInCartDependencies, editProductInCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Quantity must be greater than zero");
    });
    (0, vitest_1.test)("should fail when product is not in user's cart", async () => {
        const editProductInCartPayload = {
            userId: "1",
            productId: "456",
            quantity: 5,
        };
        const result = (0, edit_product_1.editProductInCart)(editProductInCartDependencies, editProductInCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Product is not in your cart");
    });
});
//# sourceMappingURL=edit-product.test.js.map