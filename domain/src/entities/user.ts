export const UserRole = {
  ADMIN: "ADMIN",
  CUSTOMER: "CUSTOMER",
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
