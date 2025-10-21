"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const get_users_1 = require("./get-users");
const users_service_1 = require("../../services/users-service");
(0, vitest_1.describe)("Get Users Use Case", () => {
    const getUsersDependencies = {
        usersService: users_service_1.usersServiceDemo,
    };
    (0, vitest_1.test)("should be defined", () => {
        (0, vitest_1.expect)(get_users_1.getUsers).toBeDefined();
    });
    (0, vitest_1.test)("should return all users when no payload is provided", async () => {
        const getUsersPayload = {
            options: {},
        };
        const users = await (0, get_users_1.getUsers)(getUsersDependencies, getUsersPayload);
        (0, vitest_1.expect)(Array.isArray(users)).toBe(true);
        (0, vitest_1.expect)(users.length).toBeGreaterThan(0);
    });
    (0, vitest_1.test)("should return users based on query, limit, and offset", async () => {
        const getUsersPayload = {
            options: { query: "john", limit: 2, offset: 0 },
        };
        const users = await (0, get_users_1.getUsers)(getUsersDependencies, getUsersPayload);
        (0, vitest_1.expect)(Array.isArray(users)).toBe(true);
        (0, vitest_1.expect)(users.length).toBeLessThanOrEqual(2);
    });
});
//# sourceMappingURL=get-users.test.js.map