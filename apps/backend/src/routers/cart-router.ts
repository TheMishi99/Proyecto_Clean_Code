import { Router } from "express";
import { cartController } from "../controllers";

export const cartRouter: Router = Router();
cartRouter.get("/", cartController.cart);
cartRouter.post("/:id", cartController.addProductToCart);
cartRouter.put("/:id", cartController.editProductInCart);
cartRouter.delete("/:id", cartController.removeProductFromCart);
