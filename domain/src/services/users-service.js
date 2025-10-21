"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersServiceDemo = void 0;
const entities_1 = require("../entities");
const mocks_1 = require("../mocks");
exports.usersServiceDemo = {
    getById: async (userId) => {
        const userFound = mocks_1.usersData.find((user) => user.id === userId);
        if (!userFound) {
            throw new Error("User does not exist");
        }
        return userFound;
    },
    getAll: async (options) => {
        const { query, offset, limit } = options;
        return mocks_1.usersData
            .filter((u) => u.name.toLowerCase().includes(query ? query.toLowerCase() : ""))
            .slice(offset || 0, (offset || 0) + (limit || mocks_1.usersData.length));
    },
    signUp: async (userData) => {
        const userFound = mocks_1.usersData.find((user) => user.email === userData.email);
        if (userFound) {
            throw new Error("User already exists with that mail");
        }
        const newUser = {
            id: crypto.randomUUID(),
            ...userData,
            role: entities_1.UserRole.CUSTOMER,
        };
        mocks_1.usersData.push(newUser);
        return newUser;
    },
    login: async (userData) => {
        const userFound = mocks_1.usersData.find((user) => user.email === userData.email);
        if (!userFound) {
            throw new Error("User does not exist");
        }
        if (userFound.password !== userData.password) {
            throw new Error("Password does not match");
        }
        return userFound;
    },
    logout: async () => {
        return true;
    },
};
//# sourceMappingURL=users-service.js.map