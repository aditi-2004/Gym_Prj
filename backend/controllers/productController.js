const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addProduct = async (req, res) => {
  const { name, description, price, category } = req.body;
  try {
    const newProduct = new Product({ name, description, price, category });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllProducts, addProduct };
