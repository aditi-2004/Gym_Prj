const Order = require("../models/Order");

const createOrder = async (req, res) => {
  const { user_id, cart_id } = req.body;
  try {
    const newOrder = new Order({ user_id, cart_id });
    await newOrder.save();
    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrders = async (req, res) => {
  const { user_id } = req.params;
  try {
    const orders = await Order.find({ user_id });
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createOrder, getOrders };
