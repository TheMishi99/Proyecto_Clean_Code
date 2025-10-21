import { describe, test, expect } from "vitest";
import {
  addProductToCart,
  AddProductToCartDependencies,
  AddProductToCartPayload,
} from "./add-product";
import {
  cartServiceDemo,
  productsServiceDemo,
  usersServiceDemo,
} from "../../services";

describe("Add Product to Cart Use Case", async () => {
  const addProductToCartDependencies: AddProductToCartDependencies = {
    cartService: cartServiceDemo,
    usersService: usersServiceDemo,
    productsService: productsServiceDemo,
  };

  test("shoul be defined", () => {
    expect(addProductToCart).toBeDefined();
  });

  test("should fail to add product to cart with invalid user ID", async () => {
    const addProductToCartPayload: AddProductToCartPayload = {
      userId: "",
      productId: "123",
      quantity: 2,
    };
    const result = addProductToCart(
      addProductToCartDependencies,
      addProductToCartPayload
    );
    await expect(result).rejects.toThrow("User ID is required");
  });

  test("should fail to add product to cart if user does not exist", async () => {
    const addProductToCartPayload: AddProductToCartPayload = {
      userId: "3",
      productId: "123",
      quantity: 2,
    };
    const result = addProductToCart(
      addProductToCartDependencies,
      addProductToCartPayload
    );
    await expect(result).rejects.toThrow("User does not exist");
  });

  test("should fail to add product to cart with invalid product ID", async () => {
    const addProductToCartPayload: AddProductToCartPayload = {
      userId: "1",
      productId: "",
      quantity: 2,
    };
    const result = addProductToCart(
      addProductToCartDependencies,
      addProductToCartPayload
    );
    await expect(result).rejects.toThrow("Product ID is required");
  });

  test("should add product to cart", async () => {
    const addProductToCartPayload: AddProductToCartPayload = {
      userId: "1",
      productId: "123",
      quantity: 2,
    };
    const result = addProductToCart(
      addProductToCartDependencies,
      addProductToCartPayload
    );
    await expect(result).resolves.toBe(true);
  });

  test("should fail to add product to cart if product does not exist", async () => {
    const addProductToCartPayload: AddProductToCartPayload = {
      userId: "1",
      productId: "789",
      quantity: 2,
    };
    const result = addProductToCart(
      addProductToCartDependencies,
      addProductToCartPayload
    );
    await expect(result).rejects.toThrow("Product does not exist");
  });

  test("should fail to add product to cart with quantity less or equal than zero", async () => {
    const addProductToCartPayload: AddProductToCartPayload = {
      userId: "1",
      productId: "123",
      quantity: -2,
    };
    const result = addProductToCart(
      addProductToCartDependencies,
      addProductToCartPayload
    );
    await expect(result).rejects.toThrow("Quantity must be greater than zero");
  });
});
