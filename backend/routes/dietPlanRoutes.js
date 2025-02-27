// routes/dietPlanRoutes.js
const express = require('express');
const router = express.Router();
const dietPlanController = require('../controllers/dietPlanController');

router.post('/', dietPlanController.createDietPlan);
router.get('/', dietPlanController.getDietPlans);

module.exports = router;