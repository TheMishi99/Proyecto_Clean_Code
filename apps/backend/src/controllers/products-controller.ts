// import { getProduct } from "../../../../domain/dist/use-cases/products";
import { Request, Response } from "express";
import { productsRepository } from "../services";

export const productsController = {
  list: async (_req: Request, res: Response) => {
    const products = await productsRepository.getAll();
    res.status(200).json(products);
  },
  detail: async (req: Request, res: Response) => {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).send("Product ID is required");
    }
    try {
      const productFound = await productsRepository.getById(productId);
      return res.status(200).json(productFound);
    } catch (error) {
      return res.status(404).send("Product not found");
    }
  },
};
