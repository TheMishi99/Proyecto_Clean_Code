"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const remove_product_1 = require("./remove-product");
const services_1 = require("../../services");
(0, vitest_1.describe)("Remove Product From Cart Use Case", () => {
    const removeProductFromCartDependencies = {
        cartService: services_1.cartServiceDemo,
        usersService: services_1.usersServiceDemo,
        productsService: services_1.productsServiceDemo,
    };
    (0, vitest_1.test)("should be defined", () => {
        (0, vitest_1.expect)(remove_product_1.removeProductFromCart).toBeDefined();
    });
    (0, vitest_1.test)("should remove product from cart successfully", async () => {
        const removeProductFromCartPayload = {
            userId: "1",
            productId: "123",
        };
        const result = (0, remove_product_1.removeProductFromCart)(removeProductFromCartDependencies, removeProductFromCartPayload);
        await (0, vitest_1.expect)(result).resolves.toBe(true);
    });
    (0, vitest_1.test)("should fail when user ID is missing", async () => {
        const removeProductFromCartPayload = {
            userId: "",
            productId: "123",
        };
        const result = (0, remove_product_1.removeProductFromCart)(removeProductFromCartDependencies, removeProductFromCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("User ID is required");
    });
    (0, vitest_1.test)("should fail when user does not exist", async () => {
        const removeProductFromCartPayload = {
            userId: "999",
            productId: "123",
        };
        const result = (0, remove_product_1.removeProductFromCart)(removeProductFromCartDependencies, removeProductFromCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("User does not exist");
    });
    (0, vitest_1.test)("should fail when product ID is missing", async () => {
        const removeProductFromCartPayload = {
            userId: "1",
            productId: "",
        };
        const result = (0, remove_product_1.removeProductFromCart)(removeProductFromCartDependencies, removeProductFromCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Product ID is required");
    });
    (0, vitest_1.test)("should fail when product does not exist", async () => {
        const removeProductFromCartPayload = {
            userId: "1",
            productId: "789",
        };
        const result = (0, remove_product_1.removeProductFromCart)(removeProductFromCartDependencies, removeProductFromCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Product does not exist");
    });
    (0, vitest_1.test)("should fail when product is not in user's cart", async () => {
        const removeProductFromCartPayload = {
            userId: "1",
            productId: "456",
        };
        const result = (0, remove_product_1.removeProductFromCart)(removeProductFromCartDependencies, removeProductFromCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Product is not in your cart");
    });
});
//# sourceMappingURL=remove-product.test.js.map