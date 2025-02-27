const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cart_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  total_price: { type: Number, default: 0 }
});

module.exports = mongoose.model("Cart", cartSchema);
