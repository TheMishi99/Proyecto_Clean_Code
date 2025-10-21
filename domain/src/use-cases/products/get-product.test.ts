import { describe, test, expect } from "vitest";
import {
  getProduct,
  GetProductDependencies,
  GetProductPayload,
} from "./get-product";
import { productsServiceDemo } from "../../services/products-service";

describe("Get Product Use Case", () => {
  const getProductDependencies: GetProductDependencies = {
    productsService: productsServiceDemo,
  };
  test("should be defined", () => {});
  test("should retrieve a product by its ID", async () => {
    const getProductPayload: GetProductPayload = {
      id: "123",
    };
    const result = await getProduct(getProductDependencies, getProductPayload);
    expect(result).toStrictEqual({
      id: "123",
      title: "Sample Product",
      description: "Sample Description",
      price: 100,
      stock: 10,
    });
  });

  test("shoul fail when product ID is missing", async () => {
    const getProductPayload: GetProductPayload = {
      id: "",
    };
    const result = getProduct(getProductDependencies, getProductPayload);
    await expect(result).rejects.toThrow("Product ID is required");
  });

  test("should fail when product does not exist", async () => {
    const getProductPayload: GetProductPayload = {
      id: "999",
    };
    const result = getProduct(getProductDependencies, getProductPayload);
    await expect(result).rejects.toThrow("Product does not exist");
  });
});
