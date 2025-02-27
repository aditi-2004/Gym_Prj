const Cart = require("../models/Cart");

const addToCart = async (req, res) => {
  const { user_id, products } = req.body;
  try {
    const cart = new Cart({ user_id, products });
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCart = async (req, res) => {
  const { user_id } = req.params;
  try {
    const cart = await Cart.findOne({ user_id }).populate("products");
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addToCart, getCart };
