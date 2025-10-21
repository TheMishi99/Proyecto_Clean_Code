"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProductFromCart = removeProductFromCart;
async function removeProductFromCart(dependencies, payload) {
    const { userId, productId } = payload;
    if (!userId || userId.trim() === "") {
        throw new Error("User ID is required");
    }
    if (!productId || productId.trim() === "") {
        throw new Error("Product ID is required");
    }
    await dependencies.productsService.getById(productId);
    await dependencies.usersService.getById(userId);
    return dependencies.cartService.removeProduct(userId, productId);
}
//# sourceMappingURL=remove-product.js.map