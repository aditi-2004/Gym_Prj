const express = require("express");
const { submitAdvice, getAdvice } = require("../controllers/expertAdviceController");

const router = express.Router();

router.post("/", submitAdvice);
router.get("/", getAdvice);

module.exports = router;
