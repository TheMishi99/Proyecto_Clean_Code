import { Router } from "express";
import { usersController } from "../controllers/users-controller";
import { isGuessMiddleware, isLoggedMiddleware } from "../middlewares";

export const usersRouter: Router = Router();

usersRouter.get("/", usersController.list);
usersRouter.get("/:id", usersController.detail);
usersRouter.post("/sign-up", isGuessMiddleware, usersController.signUp);
usersRouter.post("/login", isGuessMiddleware, usersController.login);
usersRouter.post("/logout", isLoggedMiddleware, usersController.logout);
