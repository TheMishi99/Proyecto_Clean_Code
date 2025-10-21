"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editProductInCart = editProductInCart;
async function editProductInCart(dependencies, payload) {
    const { userId, productId, quantity } = payload;
    if (!userId || userId.trim() === "") {
        throw new Error("User ID is required");
    }
    if (!productId || productId.trim() === "") {
        throw new Error("Product ID is required");
    }
    if (quantity <= 0) {
        throw new Error("Quantity must be greater than zero");
    }
    await dependencies.productsService.getById(productId);
    await dependencies.usersService.getById(userId);
    return dependencies.cartService.editProduct(userId, productId, quantity);
}
//# sourceMappingURL=edit-product.js.map