import { UsersService } from "../../services";

export interface LogoutDependencies {
  usersService: UsersService;
}

export interface LogoutPayload {}
export async function logout(
  dependencies: LogoutDependencies,
  _payload: LogoutPayload
): Promise<boolean> {
  return dependencies.usersService.logout();
}
