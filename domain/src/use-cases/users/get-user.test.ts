import { describe, test, expect } from "vitest";
import { usersServiceDemo } from "../../services/users-service";
import { getUser, GetUserDependencies, GetUserPayload } from "./get-user";

describe("Get User Use Case", () => {
  const getUserDependencies: GetUserDependencies = {
    usersService: usersServiceDemo,
  };
  test("should be defined", () => {});
  test("should retrieve a user by its ID", async () => {
    const getUserPayload: GetUserPayload = {
      id: "1",
    };
    const result = await getUser(getUserDependencies, getUserPayload);
    expect(result).toStrictEqual({
      id: "1",
      name: "John Doe",
      email: "johndoe@mail.com",
      password: "hashedpassword123",
      role: "admin",
    });
  });
  test("should handle non-existent user IDs", async () => {
    const getUserPayload: GetUserPayload = {
      id: "999",
    };
    const result = getUser(getUserDependencies, getUserPayload);
    await expect(result).rejects.toThrow("User does not exist");
  });
});
