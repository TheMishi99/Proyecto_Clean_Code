import { User, LoginDTO, SignUpDTO } from "../entities";
export interface UsersService {
    getAll: (options: {
        query?: string;
        limit?: number;
        offset?: number;
    }) => Promise<User[]>;
    getById: (id: string) => Promise<User>;
    login: (userData: LoginDTO) => Promise<User>;
    signUp: (userData: SignUpDTO) => Promise<User>;
    logout: () => Promise<boolean>;
}
export declare const usersServiceDemo: UsersService;
//# sourceMappingURL=users-service.d.ts.map