import { User } from "../../entities";
import { UsersService } from "../../services/users-service";

export interface GetUserDependencies {
  usersService: UsersService;
}

export interface GetUserPayload {
  id: string;
}

export async function getUser(
  dependencies: GetUserDependencies,
  payload: GetUserPayload
): Promise<User | undefined> {
  const { id } = payload;
  if (!id || id.trim() === "") {
    throw new Error("User ID is required");
  }
  return dependencies.usersService.getById(payload.id);
}
