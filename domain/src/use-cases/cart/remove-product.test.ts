import { describe, test, expect } from "vitest";
import {
  removeProductFromCart,
  RemoveProductFromCartDependencies,
  RemoveProductFromCartPayload,
} from "./remove-product";
import {
  cartServiceDemo,
  productsServiceDemo,
  usersServiceDemo,
} from "../../services";

describe("Remove Product From Cart Use Case", () => {
  const removeProductFromCartDependencies: RemoveProductFromCartDependencies = {
    cartService: cartServiceDemo,
    usersService: usersServiceDemo,
    productsService: productsServiceDemo,
  };

  test("should be defined", () => {
    expect(removeProductFromCart).toBeDefined();
  });

  test("should remove product from cart successfully", async () => {
    const removeProductFromCartPayload: RemoveProductFromCartPayload = {
      userId: "1",
      productId: "123",
    };

    const result = removeProductFromCart(
      removeProductFromCartDependencies,
      removeProductFromCartPayload
    );
    await expect(result).resolves.toBe(true);
  });

  test("should fail when user ID is missing", async () => {
    const removeProductFromCartPayload: RemoveProductFromCartPayload = {
      userId: "",
      productId: "123",
    };
    const result = removeProductFromCart(
      removeProductFromCartDependencies,
      removeProductFromCartPayload
    );
    await expect(result).rejects.toThrow("User ID is required");
  });

  test("should fail when user does not exist", async () => {
    const removeProductFromCartPayload: RemoveProductFromCartPayload = {
      userId: "999",
      productId: "123",
    };
    const result = removeProductFromCart(
      removeProductFromCartDependencies,
      removeProductFromCartPayload
    );
    await expect(result).rejects.toThrow("User does not exist");
  });

  test("should fail when product ID is missing", async () => {
    const removeProductFromCartPayload: RemoveProductFromCartPayload = {
      userId: "1",
      productId: "",
    };
    const result = removeProductFromCart(
      removeProductFromCartDependencies,
      removeProductFromCartPayload
    );
    await expect(result).rejects.toThrow("Product ID is required");
  });

  test("should fail when product does not exist", async () => {
    const removeProductFromCartPayload: RemoveProductFromCartPayload = {
      userId: "1",
      productId: "789",
    };
    const result = removeProductFromCart(
      removeProductFromCartDependencies,
      removeProductFromCartPayload
    );
    await expect(result).rejects.toThrow("Product does not exist");
  });

  test("should fail when product is not in user's cart", async () => {
    const removeProductFromCartPayload: RemoveProductFromCartPayload = {
      userId: "1",
      productId: "456",
    };
    const result = removeProductFromCart(
      removeProductFromCartDependencies,
      removeProductFromCartPayload
    );
    await expect(result).rejects.toThrow("Product is not in your cart");
  });
});
