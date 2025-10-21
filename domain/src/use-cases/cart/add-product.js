"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductToCart = addProductToCart;
async function addProductToCart(dependecies, payload) {
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
    await dependecies.productsService.getById(productId);
    await dependecies.usersService.getById(userId);
    return dependecies.cartService.addProduct(userId, productId, quantity);
}
//# sourceMappingURL=add-product.js.map