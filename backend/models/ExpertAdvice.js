const mongoose = require("mongoose");

const expertAdviceSchema = new mongoose.Schema({
  advice_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  advice_text: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  question: { type: String, required: true }
});

module.exports = mongoose.model("ExpertAdvice", expertAdviceSchema);
