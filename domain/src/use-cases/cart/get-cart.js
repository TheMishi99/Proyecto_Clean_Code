"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCart = getCart;
async function getCart(dependencies, payload) {
    const { userId } = payload;
    if (!userId || userId.trim() === "") {
        throw new Error("User ID is required");
    }
    await dependencies.usersService.getById(userId);
    return dependencies.cartService.getByUserId(userId);
}
//# sourceMappingURL=get-cart.js.map