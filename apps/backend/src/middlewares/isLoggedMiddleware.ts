import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/app.config";

export const isLoggedMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token =
    (req.cookies && (req.cookies as Record<string, string>).token) ||
    req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    req.user = decoded; // requiere la declaración global de Request.user
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
