const express = require("express");
const { addToCart, getCart } = require("../controllers/cartController");

const router = express.Router();

router.post("/", addToCart);
router.get("/:user_id", getCart);

module.exports = router;
