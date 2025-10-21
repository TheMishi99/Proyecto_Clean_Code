"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
async function getUsers(dependencies, payload) {
    const { options } = payload;
    return dependencies.usersService.getAll(options);
}
//# sourceMappingURL=get-users.js.map