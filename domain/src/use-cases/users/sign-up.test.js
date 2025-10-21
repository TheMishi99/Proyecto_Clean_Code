"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sign_up_1 = require("./sign-up");
const services_1 = require("../../services");
(0, vitest_1.describe)("Sign Up Use Case", () => {
    const signUpDependencies = {
        usersService: services_1.usersServiceDemo,
    };
    (0, vitest_1.test)("should be defined", () => {
        (0, vitest_1.expect)(sign_up_1.signUp).toBeDefined();
    });
    (0, vitest_1.test)("should sign up user succesfully", async () => {
        const signUpPayload = {
            userData: {
                name: "mishi",
                email: "mishi@mail.com",
                password: "mishi123",
            },
        };
        const result = await (0, sign_up_1.signUp)(signUpDependencies, signUpPayload);
        (0, vitest_1.expect)(result).toBeDefined();
    });
    (0, vitest_1.test)("should fail when name is missing", async () => {
        const signUpPayload = {
            userData: {
                name: "",
                email: "mishi@mail.com",
                password: "mishi123",
            },
        };
        const result = (0, sign_up_1.signUp)(signUpDependencies, signUpPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Name is required");
    });
    (0, vitest_1.test)("should fail when email is missing", async () => {
        const signUpPayload = {
            userData: {
                name: "mishi",
                email: "",
                password: "mishi123",
            },
        };
        const result = (0, sign_up_1.signUp)(signUpDependencies, signUpPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Email is required");
    });
    (0, vitest_1.test)("should fail when password is missing", async () => {
        const signUpPayload = {
            userData: {
                name: "mishi",
                email: "mishi@mail.com",
                password: "",
            },
        };
        const result = (0, sign_up_1.signUp)(signUpDependencies, signUpPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("Password is required");
    });
    (0, vitest_1.test)("should fail when already exists an user with that mail", async () => {
        const signUpPayload = {
            userData: {
                name: "mishi",
                email: "johndoe@mail.com",
                password: "mishi123",
            },
        };
        const result = (0, sign_up_1.signUp)(signUpDependencies, signUpPayload);
        await (0, vitest_1.expect)(result).rejects.toThrow("User already exists with that mail");
    });
});
//# sourceMappingURL=sign-up.test.js.map