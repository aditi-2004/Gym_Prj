// import React, { useState, useEffect } from "react";
// import "./DietPlans.css";

// function DietPlans() {
//   const [selectedGoal, setSelectedGoal] = useState("");
//   const [activityLevel, setActivityLevel] = useState("");
//   const [mealsPerDay, setMealsPerDay] = useState(3);
//   const [gender, setGender] = useState("");
//   const [generatedPlan, setGeneratedPlan] = useState(null);
//   const [mealPlans, setMealPlans] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchMealPlans();
//   }, []);

//   const fetchMealPlans = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('http://localhost:5000/api/diet');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
      
//       // Transform the data into the required format
//       const transformedPlans = data.reduce((acc, plan) => {
//         if (!acc[plan.gender]) {
//           acc[plan.gender] = {};
//         }
//         acc[plan.gender][plan.goal] = {
//           description: plan.description,
//           dailyMeals: plan.dailyMeals,
//           exercises: plan.exercises
//         };
//         return acc;
//       }, {});
      
//       setMealPlans(transformedPlans);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching meal plans:', error);
//       setError('Failed to load meal plans. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const generatePlan = () => {
//     if (!selectedGoal || !activityLevel || !mealsPerDay || !gender) {
//       alert("Please select all options!");
//       return;
//     }

//     // Check if mealPlans data is available
//     if (!mealPlans || !mealPlans[gender] || !mealPlans[gender][selectedGoal]) {
//       setError("Selected meal plan is not available. Please try again later.");
//       return;
//     }

//     const selectedPlan = mealPlans[gender][selectedGoal];
//     const adjustedMeals = selectedPlan.dailyMeals.map(dayMeals => {
//       const meals = [];
//       for (let i = 1; i <= mealsPerDay; i++) {
//         if (dayMeals[`meal${i}`]) {
//           meals.push(dayMeals[`meal${i}`]);
//         }
//       }
//       return meals;
//     });

//     setGeneratedPlan({
//       goal: selectedGoal,
//       description: selectedPlan.description,
//       meals: adjustedMeals,
//       exercises: selectedPlan.exercises,
//       gender: gender
//     });
//   };

//   if (loading) {
//     return (
//       <div className="diet-plans">
//         <h1>Loading meal plans...</h1>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="diet-plans">
//         <h1>Error</h1>
//         <p className="error-message">{error}</p>
//         <button onClick={fetchMealPlans}>Try Again</button>
//       </div>
//     );
//   }

//   return (
//     <div className="diet-plans">
//       <h1>Personalized Diet Plan</h1>
//       <div className="selection">
//         <label>Gender:</label>
//         <select value={gender} onChange={(e) => setGender(e.target.value)}>
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>

//         <label>Goal:</label>
//         <select value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)}>
//           <option value="">Select Goal</option>
//           <option value="Build Muscle">Build Muscle</option>
//           <option value="Lose Weight">Lose Weight</option>
//           <option value="Maintain Weight">Maintain Weight</option>
//         </select>

//         <label>Activity Level:</label>
//         <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
//           <option value="">Activity Level</option>
//           <option value="Sedentary">Sedentary</option>
//           <option value="Lightly Active">Lightly Active</option>
//           <option value="Moderately Active">Moderately Active</option>
//           <option value="Very Active">Very Active</option>
//           <option value="Extra Active">Extra Active</option>
//         </select>

//         <label>Meals Per Day:</label>
//         <select 
//           value={mealsPerDay} 
//           onChange={(e) => setMealsPerDay(Number(e.target.value))}
//         >
//           <option value="3">3 Meals per Day</option>
//           <option value="4">4 Meals per Day</option>
//           <option value="5">5 Meals per Day</option>
//           <option value="6">6 Meals per Day</option>
//         </select>

//         <button onClick={generatePlan}>Generate Meal Plan</button>
//       </div>

//       {generatedPlan && (
//         <div className="generated-plan-box">
//           <h2>{generatedPlan.gender === 'male' ? 'Male' : 'Female'} {generatedPlan.goal} Plan</h2>
//           <p>{generatedPlan.description}</p>
//           <h3>Meals:</h3>
//           {generatedPlan.meals.map((day, index) => (
//             <div key={index} className="day-plan">
//               <h4>Day {index + 1}</h4>
//               <ul>
//                 {day.map((meal, mealIndex) => (
//                   <li key={mealIndex}>{meal}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//           <h3>Suggested Exercises:</h3>
//           <ul>
//             {generatedPlan.exercises.map((exercise, index) => (
//               <li key={index}>{exercise}</li>
//             ))}
//           </ul>
//           <button onClick={() => setGeneratedPlan(null)}>Reset</button>
//         </div>
//       )}
//     </div>
//   );
// }
// export default DietPlans;





import React, { useState, useEffect } from "react";
import "./DietPlans.css";
import dietPlansData from '../data/dietplan.json'; // Import the local JSON file

function DietPlans() {
  const [selectedWeightCategory, setSelectedWeightCategory] = useState("");
  const [selectedHeightCategory, setSelectedHeightCategory] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [mealsPerDay, setMealsPerDay] = useState(3);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [mealPlans, setMealPlans] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use the local JSON data instead of fetching from API
    try {
      // Transform the data into the required format
      const transformedPlans = dietPlansData.reduce((acc, plan) => {
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
      setLoading(false);
    } catch (error) {
      console.error('Error loading meal plans:', error);
      setError('Failed to load meal plans. Please try again later.');
      setLoading(false);
    }
  }, []);

  const generatePlan = () => {
    if (!selectedWeightCategory || !selectedHeightCategory || !selectedGoal || !activityLevel || !mealsPerDay || !gender || !age) {
      alert("Please fill in all fields!");
      return;
    }

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

    // Tailor recommendation based on selected categories
    let recommendation = `Based on your selection - Weight: ${selectedWeightCategory}, Height: ${selectedHeightCategory} - `;
    if (selectedWeightCategory.includes("Lower") || selectedHeightCategory.includes("Lower")) {
      recommendation += "consider smaller portion sizes and lighter meals.";
    } else if (selectedWeightCategory.includes("Higher") || selectedHeightCategory.includes("Higher")) {
      recommendation += "consider increased protein and calorie intake for your plan.";
    } else {
      recommendation += "maintain balanced portions suitable for your category.";
    }
    recommendation += " Consult a nutritionist for personalized adjustments.";

    setGeneratedPlan({
      goal: selectedGoal,
      description: selectedPlan.description,
      meals: adjustedMeals,
      exercises: selectedPlan.exercises,
      gender: gender,
      age,
      weightCategory: selectedWeightCategory,
      heightCategory: selectedHeightCategory,
      recommendation
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
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="diet-plans">
      <h1>Personalized Diet Plan</h1>
      {/* Added Weight and Height Category Selection in Upper Section */}
      <div className="category-selection">
        <div className="category-row">
          <label>Weight Category:</label>
          <select value={selectedWeightCategory} onChange={(e) => setSelectedWeightCategory(e.target.value)} className="select-field">
            <option value="">Select Weight Category</option>
            <option value="Lower (40-60 kg)">Lower (40-60 kg)</option>
            <option value="Moderate 1 (60-80 kg)">Moderate 1 (60-80 kg)</option>
            <option value="Moderate 2 (80-100 kg)">Moderate 2 (80-100 kg)</option>
            <option value="Higher (100+ kg)">Higher (100+ kg)</option>
          </select>

          <label>Height Category:</label>
          <select value={selectedHeightCategory} onChange={(e) => setSelectedHeightCategory(e.target.value)} className="select-field">
            <option value="">Select Height Category</option>
            <option value="Lower (140-160 cm)">Lower (140-160 cm)</option>
            <option value="Moderate 1 (160-175 cm)">Moderate 1 (160-175 cm)</option>
            <option value="Moderate 2 (175-190 cm)">Moderate 2 (175-190 cm)</option>
            <option value="Higher (190+ cm)">Higher (190+ cm)</option>
          </select>
        </div>
      </div>

      <div className="selection">
        <div className="input-row">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="e.g., 21"
            className="input-field"
          />
        </div>
        <div className="option-row">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="select-field">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label>Goal:</label>
          <select value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)} className="select-field">
            <option value="">Select Goal</option>
            <option value="Build Muscle">Build Muscle</option>
            <option value="Lose Weight">Lose Weight</option>
            <option value="Maintain Weight">Maintain Weight</option>
          </select>

          <label>Activity Level:</label>
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="select-field">
            <option value="">Activity Level</option>
            <option value="Sedentary">Sedentary</option>
            <option value="Lightly Active">Lightly Active</option>
            <option value="Moderately Active">Moderately Active</option>
            <option value="Very Active">Very Active</option>
            <option value="Extra Active">Extra Active</option>
          </select>

          <label>Meals Per Day:</label>
          <select value={mealsPerDay} onChange={(e) => setMealsPerDay(Number(e.target.value))} className="select-field">
            <option value="3">3 Meals per Day</option>
            <option value="4">4 Meals per Day</option>
            <option value="5">5 Meals per Day</option>
            <option value="6">6 Meals per Day</option>
          </select>

          <button onClick={generatePlan} className="generate-btn">Generate Meal Plan</button>
        </div>
      </div>

      {generatedPlan && (
        <div className="generated-plan-box">
          <h2>{generatedPlan.gender === 'male' ? 'Male' : 'Female'} {generatedPlan.goal} Plan</h2>
          <p>{generatedPlan.description}</p>
          <p><strong>Weight Category:</strong> {generatedPlan.weightCategory} | <strong>Height Category:</strong> {generatedPlan.heightCategory} | <strong>Age:</strong> {generatedPlan.age} yrs</p>
          <p><strong>Recommendation:</strong> {generatedPlan.recommendation}</p>
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