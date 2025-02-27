// controllers/dietPlanController.js
const DietPlan = require('../models/DietPlan');

exports.createDietPlan = async (req, res) => {
  try {
    const { gender, goal, dailyMeals, exercises, description } = req.body;
    
    const newDietPlan = new DietPlan({
      gender,
      goal,
      description,
      dailyMeals,
      exercises
    });

    const savedPlan = await newDietPlan.save();
    res.status(201).json(savedPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDietPlans = async (req, res) => {
  try {
    const { gender, goal } = req.query;
    const query = {};
    if (gender) query.gender = gender;
    if (goal) query.goal = goal;
    
    const plans = await DietPlan.find(query);
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};