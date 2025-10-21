"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
async function getUser(dependencies, payload) {
    const { id } = payload;
    if (!id || id.trim() === "") {
        throw new Error("User ID is required");
    }
    return dependencies.usersService.getById(payload.id);
}
//# sourceMappingURL=get-user.js.map