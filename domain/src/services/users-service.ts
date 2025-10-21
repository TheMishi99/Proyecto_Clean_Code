import { User, LoginDTO, SignUpDTO, UserRole } from "../entities";
import { usersData } from "../mocks";

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

export const usersServiceDemo: UsersService = {
  getById: async (userId: string): Promise<User> => {
    const userFound = usersData.find((user) => user.id === userId);
    if (!userFound) {
      throw new Error("User does not exist");
    }
    return userFound;
  },
  getAll: async (options: {
    query?: string;
    limit?: number;
    offset?: number;
  }): Promise<User[]> => {
    const { query, offset, limit } = options;
    return usersData
      .filter((u) =>
        u.name.toLowerCase().includes(query ? query.toLowerCase() : "")
      )
      .slice(offset || 0, (offset || 0) + (limit || usersData.length));
  },
  signUp: async (userData: SignUpDTO): Promise<User> => {
    const userFound = usersData.find((user) => user.email === userData.email);
    if (userFound) {
      throw new Error("User already exists with that mail");
    }
    const newUser: User = {
      id: crypto.randomUUID(),
      ...userData,
      role: UserRole.CUSTOMER,
    };
    usersData.push(newUser);
    return newUser;
  },
  login: async (userData: LoginDTO): Promise<User> => {
    const userFound = usersData.find((user) => user.email === userData.email);
    if (!userFound) {
      throw new Error("User does not exist");
    }
    if (userFound.password !== userData.password) {
      throw new Error("Password does not match");
    }
    return userFound;
  },
  logout: async (): Promise<boolean> => {
    return true;
  },
};
