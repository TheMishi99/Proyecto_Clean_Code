"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const get_cart_1 = require("./get-cart");
const services_1 = require("../../services");
(0, vitest_1.describe)("Get Cart Use Case", () => {
    const getCartDependencies = {
        cartService: services_1.cartServiceDemo,
        usersService: services_1.usersServiceDemo,
    };
    (0, vitest_1.test)("should be defined", () => {
        (0, vitest_1.expect)(get_cart_1.getCart).toBeDefined();
    });
    (0, vitest_1.test)("should return the current state of the cart", async () => {
        const getCartPayload = { userId: "1" };
        const result = await (0, get_cart_1.getCart)(getCartDependencies, getCartPayload);
        (0, vitest_1.expect)(Array.isArray(result)).toBe(true);
        (0, vitest_1.expect)(result.length).toBeGreaterThanOrEqual(0);
    });
    (0, vitest_1.test)("shoul fail when user ID is missing", async () => {
        const getCartPayload = { userId: "" };
        const result = (0, get_cart_1.getCart)(getCartDependencies, getCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("User ID is required");
    });
    (0, vitest_1.test)("shoul fail when user does not exist", async () => {
        const getCartPayload = { userId: "999" };
        const result = (0, get_cart_1.getCart)(getCartDependencies, getCartPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("User does not exist");
    });
});
//# sourceMappingURL=get-cart.test.js.map