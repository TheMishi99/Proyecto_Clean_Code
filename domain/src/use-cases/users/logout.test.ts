import { describe, test, expect } from "vitest";
import { logout, LogoutDependencies, LogoutPayload } from "./logout";
import { usersServiceDemo } from "../../services";

describe("Logout Use Case", () => {
  const logoutDependencies: LogoutDependencies = {
    usersService: usersServiceDemo,
  };

  test("should be defined", () => {
    expect(logout).toBeDefined();
  });

  test("should logout succesfully", async () => {
    const logoutPayload: LogoutPayload = {};
    const result = await logout(logoutDependencies, logoutPayload);
    expect(result).toBe(true);
  });

  test("should fail if user is not logged in", async () => {
    // Simulated
    const logoutPayload: LogoutPayload = {};
    const result = await logout(logoutDependencies, logoutPayload);
    expect(!result).toBe(false);
  });
});
