const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cart_id: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
  status: { type: String, default: "Pending" },
  order_date: { type: Date, default: Date.now },
  order_id: { type: mongoose.Schema.Types.ObjectId, auto: true }
});

module.exports = mongoose.model("Order", orderSchema);
