"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = signUp;
async function signUp(dependencies, payload) {
    const { userData } = payload;
    const { name, email, password } = userData;
    if (!name || name.trim() === "") {
        throw new Error("Name is required");
    }
    if (!email || email.trim() === "") {
        throw new Error("Email is required");
    }
    if (!password || password.trim() === "") {
        throw new Error("Password is required");
    }
    return dependencies.usersService.signUp(userData);
}
//# sourceMappingURL=sign-up.js.map