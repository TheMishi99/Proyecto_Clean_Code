import { describe, test, expect } from "vitest";
import { getUsers, GetUsersDependencies, GetUsersPayload } from "./get-users";
import { usersServiceDemo } from "../../services/users-service";

describe("Get Users Use Case", () => {
  const getUsersDependencies: GetUsersDependencies = {
    usersService: usersServiceDemo,
  };
  test("should be defined", () => {
    expect(getUsers).toBeDefined();
  });
  test("should return all users when no payload is provided", async () => {
    const getUsersPayload: GetUsersPayload = {
      options: {},
    };
    const users = await getUsers(getUsersDependencies, getUsersPayload);
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
  });
  test("should return users based on query, limit, and offset", async () => {
    const getUsersPayload: GetUsersPayload = {
      options: { query: "john", limit: 2, offset: 0 },
    };
    const users = await getUsers(getUsersDependencies, getUsersPayload);
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeLessThanOrEqual(2);
  });
});
