const ExpertAdvice = require("../models/ExpertAdvice");

const submitAdvice = async (req, res) => {
  const { user_id, advice_text, question } = req.body;
  try {
    const newAdvice = new ExpertAdvice({ user_id, advice_text, question });
    await newAdvice.save();
    res.status(201).json({ message: "Advice submitted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAdvice = async (req, res) => {
  try {
    const adviceList = await ExpertAdvice.find();
    res.status(200).json(adviceList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { submitAdvice, getAdvice };
