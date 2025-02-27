// src/services/fitnessService.js
export const generatePersonalizedPlan = async (userData) => {
  // Simulate API call or logic to generate a plan
  const bmr = calculateBMR(userData);
  const activityMultiplier = getActivityMultiplier(userData);
  const calories = Math.round(bmr * activityMultiplier);
  const macros = calculateMacros(calories, userData.goal);

  return {
    calories,
    macros,
    recommendedWorkout: userData.goal === 'muscle' ? 'muscleGain' :
                      userData.goal === 'weight-loss' ? 'fatLoss' : 'strengthTraining',
  };
};

// Helper functions (match with FitnessQuestionnaire)
const calculateBMR = (userData) => {
  const { weight, height, age, gender } = userData;
  if (gender === 'male') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
};

const getActivityMultiplier = (userData) => {
  const multipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    'very-active': 1.9
  };
  return multipliers[userData.activityLevel] || 1.2;
};

const calculateMacros = (calories, goal) => {
  let protein, carbs, fats;
  if (goal === 'muscle') {
    protein = Math.round(calories * 0.35 / 4); // 35% protein
    carbs = Math.round(calories * 0.45 / 4); // 45% carbs
    fats = Math.round(calories * 0.20 / 9); // 20% fats
  } else if (goal === 'weight-loss') {
    protein = Math.round(calories * 0.40 / 4); // 40% protein
    carbs = Math.round(calories * 0.30 / 4); // 30% carbs
    fats = Math.round(calories * 0.30 / 9); // 30% fats
  } else {
    protein = Math.round(calories * 0.30 / 4); // 30% protein
    carbs = Math.round(calories * 0.50 / 4); // 50% carbs
    fats = Math.round(calories * 0.20 / 9); // 20% fats
  }
  return { protein, carbs, fats };
};