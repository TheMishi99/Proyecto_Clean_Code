import { describe, test, expect } from "vitest";
import { getCart, GetCartDependencies } from "./get-cart";
import { cartServiceDemo, usersServiceDemo } from "../../services";

describe("Get Cart Use Case", () => {
  const getCartDependencies: GetCartDependencies = {
    cartService: cartServiceDemo,
    usersService: usersServiceDemo,
  };

  test("should be defined", () => {
    expect(getCart).toBeDefined();
  });

  test("should return the current state of the cart", async () => {
    const getCartPayload = { userId: "1" };
    const result = await getCart(getCartDependencies, getCartPayload);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });

  test("shoul fail when user ID is missing", async () => {
    const getCartPayload = { userId: "" };
    const result = getCart(getCartDependencies, getCartPayload);
    await expect(result).rejects.toThrow("User ID is required");
  });

  test("shoul fail when user does not exist", async () => {
    const getCartPayload = { userId: "999" };
    const result = getCart(getCartDependencies, getCartPayload);
    await expect(result).rejects.toThrow("User does not exist");
  });
});
