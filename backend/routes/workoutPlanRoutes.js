const express = require('express');
const router = express.Router();
const workoutPlanController = require('../controllers/workoutPlanController');

router.get('/', workoutPlanController.getWorkoutPlan);
router.post('/', workoutPlanController.createWorkoutPlan);

module.exports = router;