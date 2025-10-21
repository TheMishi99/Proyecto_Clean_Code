import { describe, test, expect } from "vitest";
import {
  getProducts,
  GetProductsDependencies,
  GetProductsPayload,
} from "./get-products";
import { productsServiceDemo } from "../../services";

describe("Get Products Use Cases", () => {
  const getProductsDependencies: GetProductsDependencies = {
    productsService: productsServiceDemo,
  };
  test("should be defined", () => {});
  test("should return all products when no payload is provided", async () => {
    const getProductsPayload: GetProductsPayload = {
      options: {},
    };
    const result = await getProducts(
      getProductsDependencies,
      getProductsPayload
    );
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
  test("should return products based on query, limit, and offset", async () => {
    const getProductsPayload: GetProductsPayload = {
      options: {
        query: "laptop",
        limit: 3,
        offset: 0,
      },
    };
    const result = await getProducts(
      getProductsDependencies,
      getProductsPayload
    );
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeLessThanOrEqual(3);
  });

  test("should fail when limit less or equal than zero is provided", async () => {
    const getProductsPayload: GetProductsPayload = {
      options: {
        query: "",
        limit: 0,
        offset: 0,
      },
    };
    const result = getProducts(getProductsDependencies, getProductsPayload);
    await expect(result).rejects.toThrow("Limit must be greater than zero");
  });

  test("should fail when offset less than zero is provided", async () => {
    const getProductsPayload: GetProductsPayload = {
      options: {
        query: "",
        limit: 5,
        offset: -1,
      },
    };
    const result = getProducts(getProductsDependencies, getProductsPayload);
    await expect(result).rejects.toThrow("Offset must be greater than or equal to zero");
  });
});
