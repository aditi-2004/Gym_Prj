const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  product_description: { type: String, required: true },
  product_category: { type: String, required: true },
  price: { type: Number, required: true },
  brand_name: { type: String, required: true },
  product_id: { type: mongoose.Schema.Types.ObjectId, auto: true }
});

module.exports = mongoose.model("Product", productSchema);
