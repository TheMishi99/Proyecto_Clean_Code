import { Request, Response } from "express";
import { usersRepository } from "../services";
import jwt from "jsonwebtoken";
import { LoginDTO, SignUpDTO } from "../../../../domain/dist/entities";
import { isProduction, JWT_SECRET } from "../config";

export const usersController = {
  list: async (_req: Request, res: Response) => {
    // Placeholder implementation
    const allUsers = await usersRepository.getAll();
    res.status(200).json(allUsers);
  },
  detail: async (req: Request, res: Response) => {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).send("User ID is required");
    }
    try {
      const userFound = await usersRepository.getById(userId);
      return res.status(200).json(userFound);
    } catch (error) {
      return res.status(404).send("User not found");
    }
  },
  signUp: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const signUpDTO: SignUpDTO = {
      name,
      email,
      password,
    };
    try {
      const user = await usersRepository.signUp(signUpDTO);
      const token = jwt.sign(user, JWT_SECRET, {
        expiresIn: "2h",
      });
      req.user = user;
      return res
        .cookie("token", token, {
          maxAge: 1000 * 60 * 60 * 2,
          httpOnly: true,
          secure: isProduction,
          sameSite: "strict",
        })
        .status(200)
        .send("Signed Up successfully");
    } catch (error) {
      return res.status(400).send("Error logging in");
    }
  },
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const loginDTO: LoginDTO = {
      email,
      password,
    };
    try {
      const user = await usersRepository.login(loginDTO);
      const token = jwt.sign(user, JWT_SECRET, {
        expiresIn: "2h",
      });
      req.user = user;
      return res
        .cookie("token", token, {
          maxAge: 1000 * 60 * 60 * 2,
          httpOnly: true,
          secure: isProduction,
          sameSite: "strict",
        })
        .status(200)
        .send("Logged In successfully");
    } catch (error) {
      return res.status(400).send("Error logging in");
    }
  },
  logout: async (req: Request, res: Response) => {
    req.user = undefined;
    return res
      .clearCookie("token", {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
      })
      .status(204)
      .send("Logged Out successfully");
  },
};
