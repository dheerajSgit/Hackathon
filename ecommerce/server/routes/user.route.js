import express from "express";
import {
  getCart,
  addProductToCart,
  removeProductFromCart,
  updateProductQuantity,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:email", getCart);
router.post("/:email/:id", addProductToCart);
router.delete("/:email/:id", removeProductFromCart);
router.put("/:email/:id", updateProductQuantity);

export default router;
