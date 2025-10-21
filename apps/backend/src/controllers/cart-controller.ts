import { Request, Response } from "express";

import { cartRepository } from "../services";

export const cartController = {
  cart: async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).send("User ID is required");
    }
    try {
      const userCart = await cartRepository.getByUserId(userId);
      return res.status(200).json(userCart);
    } catch (error) {
      return res.status(400).send("Error Fetching User Cart");
    }
  },
  addProductToCart: async (req: Request, res: Response) => {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).send("Product ID is required");
    }

    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).send("User ID is required");
    }

    const { quantity } = req.body;
    try {
      await cartRepository.addProduct(userId, productId, quantity);
      return res.status(201).send("Product added successfully");
    } catch (error) {
      return res.status(400).send("Error Adding Product To Cart");
    }
  },
  editProductInCart: async (req: Request, res: Response) => {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).send("Product ID is required");
    }

    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).send("User ID is required");
    }

    const { quantity } = req.body;
    try {
      await cartRepository.editProduct(userId, productId, quantity);
      return res.status(201).send("Product edited successfully");
    } catch (error) {
      return res.status(400).send("Error Editing Product In Cart");
    }
  },
  removeProductFromCart: async (req: Request, res: Response) => {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).send("Product ID is required");
    }

    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).send("User ID is required");
    }

    try {
      await cartRepository.removeProduct(userId, productId);
      return res.status(201).send("Product removed successfully");
    } catch (error) {
      return res.status(400).send("Error Removing Product From Cart");
    }
  },
};
