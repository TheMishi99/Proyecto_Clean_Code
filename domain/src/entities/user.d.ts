export declare const UserRole: {
    ADMIN: string;
    CUSTOMER: string;
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
}
export type LoginDTO = Pick<User, "email" | "password">;
export type SignUpDTO = Omit<User, "id" | "role">;
//# sourceMappingURL=user.d.ts.map