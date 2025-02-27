const mongoose = require('mongoose');

const WorkoutPlanSchema = new mongoose.Schema({
  bodyType: {
    type: String,
    required: true,
    enum: ['male', 'female'],
  },
  plan: [
    {
      day: Number,
      title: String,
      exercises: [
        {
          name: String,
          sets: Number,
          reps: { type: Number, default: null },
          time: { type: String, default: null },
        },
      ],
    },
  ],
});

module.exports = mongoose.model('WorkoutPlan', WorkoutPlanSchema);