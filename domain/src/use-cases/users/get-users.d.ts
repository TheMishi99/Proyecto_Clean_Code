import { User } from "../../entities";
import { UsersService } from "../../services/users-service";
export interface GetUsersDependencies {
    usersService: UsersService;
}
export interface GetUsersPayload {
    options: {
        query?: string;
        limit?: number;
        offset?: number;
    };
}
export declare function getUsers(dependencies: GetUsersDependencies, payload: GetUsersPayload): Promise<User[]>;
//# sourceMappingURL=get-users.d.ts.map