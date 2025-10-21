// ...existing code...
import { NextFunction, Request, Response } from "express";

export const isGuessMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (user) {
    return res.status(403).send("You are already logged in");
  }
  next();
};
