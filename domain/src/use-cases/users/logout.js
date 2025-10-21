"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = logout;
async function logout(dependencies, _payload) {
    return dependencies.usersService.logout();
}
//# sourceMappingURL=logout.js.map