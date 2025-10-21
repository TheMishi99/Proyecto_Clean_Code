import { SignUpDTO, User } from "../../entities";
import { UsersService } from "../../services";
export interface SignUpDependencies {
    usersService: UsersService;
}
export interface SignUpPayload {
    userData: SignUpDTO;
}
export declare function signUp(dependencies: SignUpDependencies, payload: SignUpPayload): Promise<User | undefined>;
//# sourceMappingURL=sign-up.d.ts.map