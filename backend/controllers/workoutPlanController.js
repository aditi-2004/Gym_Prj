const WorkoutPlan = require('../models/WorkoutPlan');

exports.getWorkoutPlan = async (req, res) => {
  const { bodyType, fitnessGoal, activityLevel } = req.query;

  try {
    const basePlan = await WorkoutPlan.findOne({ bodyType });
    if (!basePlan) {
      return res.status(404).json({ message: 'Workout plan not found' });
    }

    let plan = JSON.parse(JSON.stringify(basePlan.plan)); // Deep copy

    // Apply activity level adjustments
    if (activityLevel === 'beginner') {
      plan = plan.map(day => ({
        ...day,
        exercises: day.exercises.map(ex => ({
          ...ex,
          sets: Math.max(1, ex.sets - 1), // Minimum 1 set
          reps: ex.reps ? Math.round(ex.reps * 0.8) : ex.reps, // Reduce reps by 20%
        })),
      }));
    } else if (activityLevel === 'advanced') {
      plan = plan.map(day => ({
        ...day,
        exercises: day.exercises.map(ex => ({
          ...ex,
          sets: ex.sets + 1, // Increase by 1 set
          reps: ex.reps ? Math.round(ex.reps * 1.2) : ex.reps, // Increase reps by 20%
        })),
      }));
    } // Intermediate uses base plan as is

    // Apply fitness goal adjustments
    if (fitnessGoal === 'muscle_gain') {
      plan = plan.map(day => ({
        ...day,
        exercises: day.exercises.map(ex => ({
          ...ex,
          sets: ex.sets === 3 ? 4 : ex.sets,
          reps: ex.reps === 12 ? 15 : ex.reps,
        })),
      }));
    } else if (fitnessGoal === 'weight_loss') {
      plan = plan.map(day => ({
        ...day,
        exercises: day.exercises.map(ex => ({
          ...ex,
          reps: ex.reps === 12 ? 20 : ex.reps,
        })),
      }));
    }

    res.json({ plan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createWorkoutPlan = async (req, res) => {
  const { bodyType, plan } = req.body;

  try {
    // Update existing plan or create a new one if it doesn't exist
    const updatedPlan = await WorkoutPlan.findOneAndUpdate(
      { bodyType }, // Find by bodyType
      { bodyType, plan }, // Update with new data
      { new: true, upsert: true } // Return updated doc, create if not found
    );

    res.status(201).json(updatedPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};