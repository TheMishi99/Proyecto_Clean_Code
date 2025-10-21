import { describe, test, expect } from "vitest";
import { signUp, SignUpDependencies, SignUpPayload } from "./sign-up";
import { usersServiceDemo } from "../../services";

describe("Sign Up Use Case", () => {
  const signUpDependencies: SignUpDependencies = {
    usersService: usersServiceDemo,
  };

  test("should be defined", () => {
    expect(signUp).toBeDefined();
  });

  test("should sign up user succesfully", async () => {
    const signUpPayload: SignUpPayload = {
      userData: {
        name: "mishi",
        email: "mishi@mail.com",
        password: "mishi123",
      },
    };
    const result = await signUp(signUpDependencies, signUpPayload);
    expect(result).toBeDefined();
  });

  test("should fail when name is missing", async () => {
    const signUpPayload: SignUpPayload = {
      userData: {
        name: "",
        email: "mishi@mail.com",
        password: "mishi123",
      },
    };
    const result = signUp(signUpDependencies, signUpPayload);
    await expect(result).rejects.toThrow("Name is required");
  });

  test("should fail when email is missing", async () => {
    const signUpPayload: SignUpPayload = {
      userData: {
        name: "mishi",
        email: "",
        password: "mishi123",
      },
    };
    const result = signUp(signUpDependencies, signUpPayload);
    await expect(result).rejects.toThrow("Email is required");
  });

  test("should fail when password is missing", async () => {
    const signUpPayload: SignUpPayload = {
      userData: {
        name: "mishi",
        email: "mishi@mail.com",
        password: "",
      },
    };
    const result = signUp(signUpDependencies, signUpPayload);
    await expect(result).rejects.toThrow("Password is required");
  });

  test("should fail when already exists an user with that mail", async () => {
    const signUpPayload: SignUpPayload = {
      userData: {
        name: "mishi",
        email: "johndoe@mail.com",
        password: "mishi123",
      },
    };
    const result = signUp(signUpDependencies, signUpPayload);
    await expect(result).rejects.toThrow("User already exists with that mail");
  });
});
