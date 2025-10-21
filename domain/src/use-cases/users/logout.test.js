"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const logout_1 = require("./logout");
const services_1 = require("../../services");
(0, vitest_1.describe)("Logout Use Case", () => {
    const logoutDependencies = {
        usersService: services_1.usersServiceDemo,
    };
    (0, vitest_1.test)("should be defined", () => {
        (0, vitest_1.expect)(logout_1.logout).toBeDefined();
    });
    (0, vitest_1.test)("should logout succesfully", async () => {
        const logoutPayload = {};
        const result = await (0, logout_1.logout)(logoutDependencies, logoutPayload);
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.test)("should fail if user is not logged in", async () => {
        // Simulated
        const logoutPayload = {};
        const result = await (0, logout_1.logout)(logoutDependencies, logoutPayload);
        (0, vitest_1.expect)(!result).toBe(false);
    });
});
//# sourceMappingURL=logout.test.js.map