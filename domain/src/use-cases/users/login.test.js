"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const login_1 = require("./login");
const services_1 = require("../../services");
(0, vitest_1.describe)("Login User Use Case", () => {
    const loginDependencies = {
        usersService: services_1.usersServiceDemo,
    };
    (0, vitest_1.test)("should be defined", () => {
        (0, vitest_1.expect)(login_1.login).toBeDefined();
    });
    (0, vitest_1.test)("should login user", async () => {
        const loginPayload = {
            userData: {
                email: "johndoe@mail.com",
                password: "hashedpassword123",
            },
        };
        const result = (0, login_1.login)(loginDependencies, loginPayload);
        await (0, vitest_1.expect)(result).resolves.toStrictEqual({
            id: "1",
            name: "John Doe",
            email: "johndoe@mail.com",
            password: "hashedpassword123",
            role: "admin",
        });
    });
    (0, vitest_1.test)("should fail when email is missing", async () => {
        const loginPayload = {
            userData: {
                email: "",
                password: "hashedpassword123",
            },
        };
        const result = (0, login_1.login)(loginDependencies, loginPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Email is required");
    });
    (0, vitest_1.test)("should fail when password is missing", async () => {
        const loginPayload = {
            userData: {
                email: "johndoe@mail.com",
                password: "",
            },
        };
        const result = (0, login_1.login)(loginDependencies, loginPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Password is required");
    });
    (0, vitest_1.test)("should fail when user does not exist", async () => {
        const loginPayload = {
            userData: {
                email: "johndoe2@mail.com",
                password: "hashedpassword123",
            },
        };
        const result = (0, login_1.login)(loginDependencies, loginPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("User does not exist");
    });
    (0, vitest_1.test)("should fail when password does not match", async () => {
        const loginPayload = {
            userData: {
                email: "johndoe@mail.com",
                password: "password123",
            },
        };
        const result = (0, login_1.login)(loginDependencies, loginPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Password does not match");
    });
});
//# sourceMappingURL=login.test.js.map