// models/DietPlan.js
const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  meal1: String,
  meal2: String,
  meal3: String,
  meal4: String,
  meal5: String,
  meal6: String
});

const dietPlanSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  goal: {
    type: String,
    required: true,
    enum: ['Build Muscle', 'Lose Weight', 'Maintain Weight']
  },
  description: {
    type: String,
    required: true
  },
  dailyMeals: {
    type: [mealSchema],
    required: true
  },
  exercises: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model("DietPlan", dietPlanSchema);