import { User } from "../entities";

export let usersData: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@mail.com",
    password: "hashedpassword123",
    role: "admin",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@mail.com",
    password: "hashedpassword456",
    role: "user",
  },
];
