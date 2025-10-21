"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
async function login(dependencies, payload) {
    const { userData } = payload;
    const { email, password } = userData;
    if (!email || email.trim() === "") {
        throw new Error("Email is required");
    }
    if (!password || password.trim() === "") {
        throw new Error("Password is required");
    }
    return dependencies.usersService.login(userData);
}
//# sourceMappingURL=login.js.map