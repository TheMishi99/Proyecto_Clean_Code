import { SignUpDTO, User } from "../../entities";
import { UsersService } from "../../services";

export interface SignUpDependencies {
  usersService: UsersService;
}

export interface SignUpPayload {
  userData: SignUpDTO;
}

export async function signUp(
  dependencies: SignUpDependencies,
  payload: SignUpPayload
): Promise<User | undefined> {
  const { userData } = payload;
  const { name, email, password } = userData;
  if (!name || name.trim() === "") {
    throw new Error("Name is required");
  }
  if (!email || email.trim() === "") {
    throw new Error("Email is required");
  }
  if (!password || password.trim() === "") {
    throw new Error("Password is required");
  }
  return dependencies.usersService.signUp(userData);
}
