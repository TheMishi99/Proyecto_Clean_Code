import { UsersService } from "../../services";
export interface LogoutDependencies {
    usersService: UsersService;
}
export interface LogoutPayload {
}
export declare function logout(dependencies: LogoutDependencies, _payload: LogoutPayload): Promise<boolean>;
//# sourceMappingURL=logout.d.ts.map