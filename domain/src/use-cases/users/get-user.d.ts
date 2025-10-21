import { User } from "../../entities";
import { UsersService } from "../../services/users-service";
export interface GetUserDependencies {
    usersService: UsersService;
}
export interface GetUserPayload {
    id: string;
}
export declare function getUser(dependencies: GetUserDependencies, payload: GetUserPayload): Promise<User | undefined>;
//# sourceMappingURL=get-user.d.ts.map