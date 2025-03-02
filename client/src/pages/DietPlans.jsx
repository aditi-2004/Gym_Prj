import React, { useState, useEffect } from "react";
import "./DietPlans.css";

function DietPlans() {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [mealsPerDay, setMealsPerDay] = useState(3);
  const [gender, setGender] = useState("");
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [mealPlans, setMealPlans] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMealPlans();
  }, []);

  const fetchMealPlans = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/diet');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      // Transform the data into the required format
      const transformedPlans = data.reduce((acc, plan) => {
        if (!acc[plan.gender]) {
          acc[plan.gender] = {};
        }
        acc[plan.gender][plan.goal] = {
          description: plan.description,
          dailyMeals: plan.dailyMeals,
          exercises: plan.exercises
        };
        return acc;
      }, {});
      
      setMealPlans(transformedPlans);
      setError(null);
    } catch (error) {
      console.error('Error fetching meal plans:', error);
      setError('Failed to load meal plans. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const generatePlan = () => {
    if (!selectedGoal || !activityLevel || !mealsPerDay || !gender) {
      alert("Please select all options!");
      return;
    }

    // Check if mealPlans data is available
    if (!mealPlans || !mealPlans[gender] || !mealPlans[gender][selectedGoal]) {
      setError("Selected meal plan is not available. Please try again later.");
      return;
    }

    const selectedPlan = mealPlans[gender][selectedGoal];
    const adjustedMeals = selectedPlan.dailyMeals.map(dayMeals => {
      const meals = [];
      for (let i = 1; i <= mealsPerDay; i++) {
        if (dayMeals[`meal${i}`]) {
          meals.push(dayMeals[`meal${i}`]);
        }
      }
      return meals;
    });

    setGeneratedPlan({
      goal: selectedGoal,
      description: selectedPlan.description,
      meals: adjustedMeals,
      exercises: selectedPlan.exercises,
      gender: gender
    });
  };

  if (loading) {
    return (
      <div className="diet-plans">
        <h1>Loading meal plans...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="diet-plans">
        <h1>Error</h1>
        <p className="error-message">{error}</p>
        <button onClick={fetchMealPlans}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="diet-plans">
      <h1>Personalized Diet Plan</h1>
      <div className="selection">
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label>Goal:</label>
        <select value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)}>
          <option value="">Select Goal</option>
          <option value="Build Muscle">Build Muscle</option>
          <option value="Lose Weight">Lose Weight</option>
          <option value="Maintain Weight">Maintain Weight</option>
        </select>

        <label>Activity Level:</label>
        <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
          <option value="">Activity Level</option>
          <option value="Sedentary">Sedentary</option>
          <option value="Lightly Active">Lightly Active</option>
          <option value="Moderately Active">Moderately Active</option>
          <option value="Very Active">Very Active</option>
          <option value="Extra Active">Extra Active</option>
        </select>

        <label>Meals Per Day:</label>
        <select 
          value={mealsPerDay} 
          onChange={(e) => setMealsPerDay(Number(e.target.value))}
        >
          <option value="3">3 Meals per Day</option>
          <option value="4">4 Meals per Day</option>
          <option value="5">5 Meals per Day</option>
          <option value="6">6 Meals per Day</option>
        </select>

        <button onClick={generatePlan}>Generate Meal Plan</button>
      </div>

      {generatedPlan && (
        <div className="generated-plan-box">
          <h2>{generatedPlan.gender === 'male' ? 'Male' : 'Female'} {generatedPlan.goal} Plan</h2>
          <p>{generatedPlan.description}</p>
          <h3>Meals:</h3>
          {generatedPlan.meals.map((day, index) => (
            <div key={index} className="day-plan">
              <h4>Day {index + 1}</h4>
              <ul>
                {day.map((meal, mealIndex) => (
                  <li key={mealIndex}>{meal}</li>
                ))}
              </ul>
            </div>
          ))}
          <h3>Suggested Exercises:</h3>
          <ul>
            {generatedPlan.exercises.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
          <button onClick={() => setGeneratedPlan(null)}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default DietPlans;