import {
  LoginDTO,
  SignUpDTO,
  User,
  UserRole,
} from "../../../../domain/dist/entities";
import { UsersService } from "../../../../domain/dist/services";

const users: User[] = [];

export class UsersRepository implements UsersService {
  async getAll(options?: {
    query?: string;
    limit?: number;
    offset?: number;
  }): Promise<User[]> {
    if (options) {
      const { query, limit, offset } = options;
      return users
        .filter((u) =>
          u.name.toLowerCase().includes(query ? query.toLowerCase() : "")
        )
        .slice(offset || 0, (offset || 0) + (limit || users.length));
    }
    return users;
  }
  async getById(id: string): Promise<User> {
    const userFound = users.find((user) => user.id === id);
    if (!userFound) {
      throw new Error("User does not exist");
    }
    return userFound;
  }
  async signUp(userData: SignUpDTO): Promise<User> {
    const userFound = users.find((user) => user.email === userData.email);
    if (userFound) {
      throw new Error("User already exists with that mail");
    }
    const newUser: User = {
      id: crypto.randomUUID(),
      ...userData,
      role: UserRole.CUSTOMER,
    };
    users.push(newUser);
    return newUser;
  }
  async login(userData: LoginDTO): Promise<User> {
    const userFound = users.find((user) => user.email === userData.email);
    if (!userFound) {
      throw new Error("User does not exist");
    }
    if (userFound.password !== userData.password) {
      throw new Error("Password does not match");
    }
    return userFound;
  }
  async logout(): Promise<boolean> {
    return true;
  }
}

export const usersRepository = new UsersRepository();
