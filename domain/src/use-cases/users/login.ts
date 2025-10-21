import { User, LoginDTO } from "../../entities";
import { UsersService } from "../../services";

export interface LoginDependencies {
  usersService: UsersService;
}

export interface LoginPayload {
  userData: LoginDTO;
}

export async function login(
  dependencies: LoginDependencies,
  payload: LoginPayload
): Promise<User | undefined> {
  const { userData } = payload;
  const { email, password } = userData;
  if (!email || email.trim() === "") {
    throw new Error("Email is required");
  }
  if (!password || password.trim() === "") {
    throw new Error("Password is required");
  }
  return dependencies.usersService.login(userData);
}
