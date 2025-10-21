"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartServiceDemo = void 0;
const mocks_1 = require("../mocks");
exports.cartServiceDemo = {
    hasProduct: async (userId, productId) => {
        return mocks_1.cartData.some((item) => item.userId === userId && item.productId === productId);
    },
    getByUserId: async (userId) => {
        return mocks_1.cartData.filter((item) => item.userId === userId);
    },
    addProduct: async (userId, productId, quantity) => {
        const exists = await exports.cartServiceDemo.hasProduct(userId, productId);
        if (!exists) {
            mocks_1.cartData.push({ userId, productId, quantity });
        }
        else {
            const updated = mocks_1.cartData.map((i) => {
                const isItemToUpdate = i.userId === userId && i.productId === productId;
                if (isItemToUpdate) {
                    return { ...i, quantity: i.quantity + quantity };
                }
                return i;
            });
            mocks_1.cartData.splice(0, mocks_1.cartData.length, ...updated);
        }
        return true;
    },
    editProduct: async (userId, productId, quantity) => {
        const exists = await exports.cartServiceDemo.hasProduct(userId, productId);
        if (!exists) {
            throw new Error("Product is not in your cart");
        }
        const updated = mocks_1.cartData.map((i) => {
            const isItemToUpdate = i.userId === userId && i.productId === productId;
            if (isItemToUpdate) {
                return { ...i, quantity };
            }
            return i;
        });
        mocks_1.cartData.splice(0, mocks_1.cartData.length, ...updated);
        return true;
    },
    removeProduct: async (userId, productId) => {
        const exists = await exports.cartServiceDemo.hasProduct(userId, productId);
        if (!exists) {
            throw new Error("Product is not in your cart");
        }
        const updated = mocks_1.cartData.filter((i) => !(i.userId === userId && i.productId === productId));
        mocks_1.cartData.splice(0, mocks_1.cartData.length, ...updated);
        return true;
    },
};
//# sourceMappingURL=cart-services.js.map