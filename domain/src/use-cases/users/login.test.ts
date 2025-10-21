import { describe, test, expect } from "vitest";
import {
  login,
  LoginDependencies,
  LoginPayload,
} from "./login";
import { usersServiceDemo } from "../../services";

describe("Login User Use Case", () => {
  const loginDependencies: LoginDependencies = {
    usersService: usersServiceDemo,
  };

  test("should be defined", () => {
    expect(login).toBeDefined();
  });

  test("should login user", async () => {
    const loginPayload: LoginPayload = {
      userData: {
        email: "johndoe@mail.com",
        password: "hashedpassword123",
      },
    };
    const result = login(loginDependencies, loginPayload);
    await expect(result).resolves.toStrictEqual({
      id: "1",
      name: "John Doe",
      email: "johndoe@mail.com",
      password: "hashedpassword123",
      role: "admin",
    });
  });

  test("should fail when email is missing", async () => {
    const loginPayload: LoginPayload = {
      userData: {
        email: "",
        password: "hashedpassword123",
      },
    };
    const result = login(loginDependencies, loginPayload);
    await expect(result).rejects.toThrow("Email is required");
  });
  test("should fail when password is missing", async () => {
    const loginPayload: LoginPayload = {
      userData: {
        email: "johndoe@mail.com",
        password: "",
      },
    };
    const result = login(loginDependencies, loginPayload);
    await expect(result).rejects.toThrow("Password is required");
  });

  test("should fail when user does not exist", async () => {
    const loginPayload: LoginPayload = {
      userData: {
        email: "johndoe2@mail.com",
        password: "hashedpassword123",
      },
    };
    const result = login(loginDependencies, loginPayload);
    await expect(result).rejects.toThrow("User does not exist");
  });

  test("should fail when password does not match", async () => {
    const loginPayload: LoginPayload = {
      userData: {
        email: "johndoe@mail.com",
        password: "password123",
      },
    };
    const result = login(loginDependencies, loginPayload);
    await expect(result).rejects.toThrow("Password does not match");
  });
});
