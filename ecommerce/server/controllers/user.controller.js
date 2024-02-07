import User from "../models/user.model.js";
import Product from "../models/product.model.js";

// get cart of a user by email
export const getCart = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add product to cart
export const addProductToCart = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email }).populate('cart.product').exec();
    const product = await Product.findOne({
      id: req.params.id,
    });

    const quantity = req.body.quantity;

    // if product already exists in cart, update the quantity
    const existingProduct = user.cart.find((item) =>
      item.product.equals(product._id)
    );
    if (existingProduct) {
      existingProduct.quantity += quantity;
      await user.save();
      return res.status(200).json({
        message: "Product added to cart successfully!!!",
        cart: user.cart,
        success: true,
      });
    }

    user.cart.push({ product, quantity });
    await user.save();
    res.status(200).json({
      message: "Product added to cart successfully!!!",
      cart: user.cart,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// remove product from cart
export const removeProductFromCart = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    user.cart = user.cart.filter(
      (item) => item.product != req.params.productId
    );
    await user.save();
    res.status(200).json({
      message: "Product removed from cart successfully!!!",
      cart: user.cart,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// update product quantity in cart
export const updateProductQuantity = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    const product = user.cart.find(
      (item) => item.product == req.params.productId
    );
    product.quantity = req.body.quantity;
    await user.save();
    res.status(200).json({
      message: "Product quantity updated successfully!!!",
      cart: user.cart,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
