import express from "express";
import { productsController } from "../controllers";
import { isLoggedMiddleware } from "../middlewares";
import { cartRouter } from "./cart-router";

export const productsRouter: express.Router = express.Router();

productsRouter.get("/", productsController.list);
productsRouter.use("/cart", isLoggedMiddleware, cartRouter);
productsRouter.get("/:id", productsController.detail);
