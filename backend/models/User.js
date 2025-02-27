const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, auto: true }
});

module.exports = mongoose.model("User", userSchema);
