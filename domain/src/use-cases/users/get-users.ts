import { User } from "../../entities";
import { UsersService } from "../../services/users-service";

export interface GetUsersDependencies {
  usersService: UsersService;
}

export interface GetUsersPayload {
  options: { query?: string; limit?: number; offset?: number };
}

export async function getUsers(
  dependencies: GetUsersDependencies,
  payload: GetUsersPayload
): Promise<User[]> {
  const { options } = payload;
  return dependencies.usersService.getAll(options);
}
