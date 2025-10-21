import { User, LoginDTO } from "../../entities";
import { UsersService } from "../../services";
export interface LoginDependencies {
    usersService: UsersService;
}
export interface LoginPayload {
    userData: LoginDTO;
}
export declare function login(dependencies: LoginDependencies, payload: LoginPayload): Promise<User | undefined>;
//# sourceMappingURL=login.d.ts.map