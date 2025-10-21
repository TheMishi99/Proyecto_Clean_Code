import { describe, test, expect } from "vitest";
import {
  editProductInCart,
  EditProductInCartDependencies,
  EditProductInCartPayload,
} from "./edit-product";
import {
  cartServiceDemo,
  productsServiceDemo,
  usersServiceDemo,
} from "../../services";

describe("Edit Product In Cart Use Case", () => {
  const editProductInCartDependencies: EditProductInCartDependencies = {
    cartService: cartServiceDemo,
    usersService: usersServiceDemo,
    productsService: productsServiceDemo,
  };

  test("should be defined", () => {
    expect(editProductInCart).toBeDefined();
  });

  test("should edit a product in the cart", async () => {
    const editProductInCartPayload: EditProductInCartPayload = {
      userId: "1",
      productId: "123",
      quantity: 5,
    };
    const result = editProductInCart(
      editProductInCartDependencies,
      editProductInCartPayload
    );
    await expect(result).resolves.toBe(true);
  });

  test("should fail when user ID is missing", async () => {
    const editProductInCartPayload: EditProductInCartPayload = {
      userId: "",
      productId: "123",
      quantity: 5,
    };
    const result = editProductInCart(
      editProductInCartDependencies,
      editProductInCartPayload
    );
    await expect(result).rejects.toThrow("User ID is required");
  });
  test("should fail when user does not exist", async () => {
    const editProductInCartPayload: EditProductInCartPayload = {
      userId: "999",
      productId: "123",
      quantity: 5,
    };
    const result = editProductInCart(
      editProductInCartDependencies,
      editProductInCartPayload
    );
    await expect(result).rejects.toThrow("User does not exist");
  });

  test("should fail when product ID is missing", async () => {
    const editProductInCartPayload: EditProductInCartPayload = {
      userId: "1",
      productId: "",
      quantity: 5,
    };
    const result = editProductInCart(
      editProductInCartDependencies,
      editProductInCartPayload
    );
    await expect(result).rejects.toThrow("Product ID is required");
  });
  test("should fail when product does not exist", async () => {
    const editProductInCartPayload: EditProductInCartPayload = {
      userId: "1",
      productId: "999",
      quantity: 5,
    };
    const result = editProductInCart(
      editProductInCartDependencies,
      editProductInCartPayload
    );
    await expect(result).rejects.toThrow("Product does not exist");
  });

  test("should fail when quantity is zero or negative", async () => {
    const editProductInCartPayload: EditProductInCartPayload = {
      userId: "1",
      productId: "123",
      quantity: 0,
    };
    const result = editProductInCart(
      editProductInCartDependencies,
      editProductInCartPayload
    );
    await expect(result).rejects.toThrow("Quantity must be greater than zero");
  });

  test("should fail when product is not in user's cart", async () => {
    const editProductInCartPayload: EditProductInCartPayload = {
      userId: "1",
      productId: "456",
      quantity: 5,
    };
    const result = editProductInCart(
      editProductInCartDependencies,
      editProductInCartPayload
    );
    await expect(result).rejects.toThrow("Product is not in your cart");
  });
});
