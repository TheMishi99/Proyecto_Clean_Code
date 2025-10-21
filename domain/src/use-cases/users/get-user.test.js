"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const users_service_1 = require("../../services/users-service");
const get_user_1 = require("./get-user");
(0, vitest_1.describe)("Get User Use Case", () => {
    const getUserDependencies = {
        usersService: users_service_1.usersServiceDemo,
    };
    (0, vitest_1.test)("should be defined", () => { });
    (0, vitest_1.test)("should retrieve a user by its ID", async () => {
        const getUserPayload = {
            id: "1",
        };
        const result = await (0, get_user_1.getUser)(getUserDependencies, getUserPayload);
        (0, vitest_1.expect)(result).toStrictEqual({
            id: "1",
            name: "John Doe",
            email: "johndoe@mail.com",
            password: "hashedpassword123",
            role: "admin",
        });
    });
    (0, vitest_1.test)("should handle non-existent user IDs", async () => {
        const getUserPayload = {
            id: "999",
        };
        const result = (0, get_user_1.getUser)(getUserDependencies, getUserPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("User does not exist");
    });
});
//# sourceMappingURL=get-user.test.js.map