// // import React, { useState } from "react";
// // import "./DietPlans.css";

// // function DietPlans() {
// //   const [selectedGoal, setSelectedGoal] = useState("");
// //   const [activityLevel, setActivityLevel] = useState("");
// //   const [mealsPerDay, setMealsPerDay] = useState(3);
// //   const [gender, setGender] = useState("");
// //   const [generatedPlan, setGeneratedPlan] = useState(null);

// //   // Enhanced meal plans with gender-specific options
// //   const mealPlans = {
// //     male: {
// //       "Build Muscle": {
// //         description: "High-protein meals optimized for male muscle growth.",
// //         dailyMeals: [
// //           {
// //             meal1: "Large Bowl of Oatmeal + 3 Eggs + Protein Shake (40g)",
// //             meal2: "8oz Chicken Breast + 2 cups Brown Rice + Vegetables",
// //             meal3: "Post-Workout Protein Shake (50g) + Banana + 2 tbsp Peanut Butter",
// //             meal4: "8oz Lean Beef + Sweet Potato + Broccoli",
// //             meal5: "2 cups Greek Yogurt + 1oz Almonds + Honey",
// //             meal6: "6oz Cottage Cheese + 2 tbsp Peanut Butter + Casein Protein"
// //           },
// //           {
// //             meal1: "6 Scrambled Eggs + Whole Grain Toast + Avocado",
// //             meal2: "8oz Turkey + 1.5 cups Quinoa + Mixed Vegetables",
// //             meal3: "50g Whey Protein + Large Apple + 2oz Mixed Nuts",
// //             meal4: "8oz Salmon + 2 cups Brown Rice + Asparagus",
// //             meal5: "Large Protein Smoothie + 2oz Granola",
// //             meal6: "8oz Greek Yogurt + 40g Casein Protein + Nuts"
// //           },
// //           {
// //             meal1: "Omelette with Spinach + 2 Slices Whole Grain Bread",
// //             meal2: "8oz Chicken Thighs + Couscous + Steamed Veggies",
// //             meal3: "Protein Bar + 1 Banana",
// //             meal4: "8oz Cod + Mashed Sweet Potato + Green Beans",
// //             meal5: "Greek Yogurt Parfait with Berries and Honey",
// //             meal6: "Casein Shake + 1oz Walnuts"
// //           },
// //           {
// //             meal1: "Pancakes with Egg Whites + Syrup + Blueberries",
// //             meal2: "8oz Ground Turkey + Quinoa Salad",
// //             meal3: "Protein Shake + 1 Apple",
// //             meal4: "8oz Pork Chops + Roasted Potatoes + Asparagus",
// //             meal5: "Cottage Cheese with Pineapple",
// //             meal6: "Almond Butter + Rice Cake"
// //           },
// //           {
// //             meal1: "Egg White Omelette + Avocado Toast",
// //             meal2: "8oz Chicken Breast + Lentils + Mixed Greens",
// //             meal3: "Protein Smoothie + 1 Orange",
// //             meal4: "8oz Steak + Baked Potato + Broccoli",
// //             meal5: "Greek Yogurt with Granola and Honey",
// //             meal6: "Protein Pudding + 1oz Almonds"
// //           },
// //           {
// //             meal1: "Scrambled Eggs + Oatmeal + Berries",
// //             meal2: "8oz Salmon + Wild Rice + Steamed Carrots",
// //             meal3: "Protein Bar + 1 Pear",
// //             meal4: "8oz Bison + Quinoa + Kale",
// //             meal5: "Greek Yogurt with Honey and Nuts",
// //             meal6: "Casein Shake + 1oz Cashews"
// //           },
// //           {
// //             meal1: "3 Eggs + Whole Grain Toast + Avocado",
// //             meal2: "8oz Turkey Breast + Sweet Potato + Green Beans",
// //             meal3: "Protein Shake + 1 Banana",
// //             meal4: "8oz Chicken Thighs + Couscous + Broccoli",
// //             meal5: "Greek Yogurt with Berries and Honey",
// //             meal6: "Cottage Cheese + 1oz Almonds"
// //           }
// //         ],
// //         exercises: ["Heavy Weight Training", "Compound Lifts", "Progressive Overload"]
// //       },
// //       "Lose Weight": {
// //         description: "Calorie-controlled meals for male fat loss while preserving muscle.",
// //         dailyMeals: [
// //           {
// //             meal1: "4 Egg Whites + 1 Whole Egg + Oatmeal",
// //             meal2: "6oz Chicken Breast + Large Green Salad + 1tbsp Olive Oil",
// //             meal3: "Whey Protein Shake + Apple + Small Handful Almonds",
// //             meal4: "6oz White Fish + Quinoa + Roasted Vegetables",
// //             meal5: "1 cup Greek Yogurt + Berries",
// //             meal6: "5oz Turkey Breast + Vegetables"
// //           },
// //           {
// //             meal1: "3 Egg Whites + Oatmeal + Berries",
// //             meal2: "5oz Chicken Breast + Mixed Greens + 1tsp Olive Oil",
// //             meal3: "Protein Shake + 1 Apple",
// //             meal4: "5oz Tilapia + Couscous + Steamed Veggies",
// //             meal5: "Greek Yogurt with Honey and Nuts",
// //             meal6: "Turkey Wrap with Lettuce"
// //           },
// //           {
// //             meal1: "Omelette with Spinach + 1 Slice Whole Grain Bread",
// //             meal2: "5oz Turkey Breast + Quinoa + Mixed Veggies",
// //             meal3: "Protein Bar + 1 Banana",
// //             meal4: "5oz Cod + Sweet Potato + Green Beans",
// //             meal5: "Cottage Cheese with Pineapple",
// //             meal6: "Casein Shake + 1oz Almonds"
// //           },
// //           {
// //             meal1: "Pancakes with Egg Whites + Syrup + Berries",
// //             meal2: "5oz Ground Turkey + Salad",
// //             meal3: "Protein Shake + 1 Orange",
// //             meal4: "5oz Pork Chops + Roasted Potatoes + Asparagus",
// //             meal5: "Greek Yogurt with Granola and Honey",
// //             meal6: "Almond Butter + Rice Cake"
// //           },
// //           {
// //             meal1: "Egg White Omelette + Avocado Toast",
// //             meal2: "5oz Chicken Breast + Lentils + Mixed Greens",
// //             meal3: "Protein Smoothie + 1 Pear",
// //             meal4: "5oz Steak + Baked Potato + Broccoli",
// //             meal5: "Greek Yogurt with Honey and Nuts",
// //             meal6: "Casein Shake + 1oz Cashews"
// //           },
// //           {
// //             meal1: "Scrambled Eggs + Oatmeal + Berries",
// //             meal2: "5oz Salmon + Wild Rice + Steamed Carrots",
// //             meal3: "Protein Bar + 1 Banana",
// //             meal4: "5oz Bison + Quinoa + Kale",
// //             meal5: "Greek Yogurt with Berries and Honey",
// //             meal6: "Cottage Cheese + 1oz Almonds"
// //           },
// //           {
// //             meal1: "3 Egg Whites + Whole Grain Toast + Avocado",
// //             meal2: "5oz Turkey Breast + Sweet Potato + Green Beans",
// //             meal3: "Protein Shake + 1 Apple",
// //             meal4: "5oz Chicken Thighs + Couscous + Broccoli",
// //             meal5: "Greek Yogurt with Berries and Honey",
// //             meal6: "Cottage Cheese + 1oz Almonds"
// //           }
// //         ],
// //         exercises: ["HIIT", "Weight Training", "Cardio"]
// //       },
// //       "Maintain Weight": {
// //         description: "Balanced meals to maintain weight and support overall health.",
// //         dailyMeals: [
// //           {
// //             meal1: "3 Eggs + Whole Grain Toast + Avocado",
// //             meal2: "6oz Chicken Breast + Brown Rice + Vegetables",
// //             meal3: "Protein Shake + 1 Banana",
// //             meal4: "6oz Salmon + Quinoa + Asparagus",
// //             meal5: "Greek Yogurt with Berries and Honey",
// //             meal6: "Cottage Cheese + 1oz Almonds"
// //           },
// //           {
// //             meal1: "Omelette with Spinach + 1 Slice Whole Grain Bread",
// //             meal2: "6oz Turkey Breast + Couscous + Mixed Veggies",
// //             meal3: "Protein Bar + 1 Apple",
// //             meal4: "6oz Cod + Sweet Potato + Green Beans",
// //             meal5: "Greek Yogurt with Granola and Honey",
// //             meal6: "Casein Shake + 1oz Almonds"
// //           },
// //           {
// //             meal1: "Pancakes with Egg Whites + Syrup + Berries",
// //             meal2: "6oz Ground Turkey + Salad",
// //             meal3: "Protein Shake + 1 Orange",
// //             meal4: "6oz Pork Chops + Roasted Potatoes + Asparagus",
// //             meal5: "Greek Yogurt with Honey and Nuts",
// //             meal6: "Almond Butter + Rice Cake"
// //           },
// //           {
// //             meal1: "Egg White Omelette + Avocado Toast",
// //             meal2: "6oz Chicken Breast + Lentils + Mixed Greens",
// //             meal3: "Protein Smoothie + 1 Pear",
// //             meal4: "6oz Steak + Baked Potato + Broccoli",
// //             meal5: "Greek Yogurt with Berries and Honey",
// //             meal6: "Casein Shake + 1oz Cashews"
// //           },
// //           {
// //             meal1: "Scrambled Eggs + Oatmeal + Berries",
// //             meal2: "6oz Salmon + Wild Rice + Steamed Carrots",
// //             meal3: "Protein Bar + 1 Banana",
// //             meal4: "6oz Bison + Quinoa + Kale",
// //             meal5: "Greek Yogurt with Granola and Honey",
// //             meal6: "Cottage Cheese + 1oz Almonds"
// //           },
// //           {
// //             meal1: "3 Egg Whites + Whole Grain Toast + Avocado",
// //             meal2: "6oz Turkey Breast + Sweet Potato + Green Beans",
// //             meal3: "Protein Shake + 1 Apple",
// //             meal4: "6oz Chicken Thighs + Couscous + Broccoli",
// //             meal5: "Greek Yogurt with Berries and Honey",
// //             meal6: "Cottage Cheese + 1oz Almonds"
// //           },
// //           {
// //             meal1: "Omelette with Spinach + 1 Slice Whole Grain Bread",
// //             meal2: "6oz Chicken Breast + Brown Rice + Vegetables",
// //             meal3: "Protein Bar + 1 Banana",
// //             meal4: "6oz Salmon + Quinoa + Asparagus",
// //             meal5: "Greek Yogurt with Granola and Honey",
// //             meal6: "Casein Shake + 1oz Almonds"
// //           }
// //         ],
// //         exercises: ["Moderate Weight Training", "Cardio", "Flexibility Exercises"]
// //       }
// //     },
// //     female: {
// //       "Build Muscle": {
// //         description: "Balanced protein meals for female muscle development.",
// //         dailyMeals: [
// //           {
// //             meal1: "Medium Bowl of Oatmeal + 2 Eggs + Protein Shake (25g)",
// //             meal2: "6oz Chicken Breast + 1.5 cups Brown Rice + Vegetables",
// //             meal3: "Post-Workout Protein Shake (30g) + Banana",
// //             meal4: "6oz Lean Fish + Sweet Potato + Greens",
// //             meal5: "1.5 cups Greek Yogurt + 0.5oz Almonds",
// //             meal6: "4oz Cottage Cheese + 1 tbsp Peanut Butter + Protein"
// //           },
// //           {
// //             meal1: "4 Scrambled Eggs + Toast + 1/4 Avocado",
// //             meal2: "6oz Turkey + 1 cup Quinoa + Mixed Vegetables",
// //             meal3: "30g Whey Protein + Apple + 1oz Mixed Nuts",
// //             meal4: "6oz Salmon + 1.5 cups Brown Rice + Asparagus",
// //             meal5: "Medium Protein Smoothie + 1oz Granola",
// //             meal6: "6oz Greek Yogurt + 25g Casein Protein"
// //           },
// //           {
// //             meal1: "Omelette with Spinach + 1 Slice Whole Grain Bread",
// //             meal2: "6oz Chicken Thighs + Couscous + Steamed Veggies",
// //             meal3: "Protein Bar + 1 Banana",
// //             meal4: "6oz Cod + Mashed Sweet Potato + Green Beans",
// //             meal5: "Greek Yogurt Parfait with Berries and Honey",
// //             meal6: "Casein Shake + 1oz Walnuts"
// //           },
// //           {
// //             meal1: "Pancakes with Egg Whites + Syrup + Blueberries",
// //             meal2: "6oz Ground Turkey + Quinoa Salad",
// //             meal3: "Protein Shake + 1 Apple",
// //             meal4: "6oz Pork Chops + Roasted Potatoes + Asparagus",
// //             meal5: "Cottage Cheese with Pineapple",
// //             meal6: "Almond Butter + Rice Cake"
// //           },
// //           {
// //             meal1: "Egg White Omelette + Avocado Toast",
// //             meal2: "6oz Chicken Breast + Lentils + Mixed Greens",
// //             meal3: "Protein Smoothie + 1 Orange",
// //             meal4: "6oz Steak + Baked Potato + Broccoli",
// //             meal5: "Greek Yogurt with Granola and Honey",
// //             meal6: "Protein Pudding + 1oz Almonds"
// //           },
// //           {
// //             meal1: "Scrambled Eggs + Oatmeal + Berries",
// //             meal2: "6oz Salmon + Wild Rice + Steamed Carrots",
// //             meal3: "Protein Bar + 1 Pear",
// //             meal4: "6oz Bison + Quinoa + Kale",
// //             meal5: "Greek Yogurt with Honey and Nuts",
// //             meal6: "Casein Shake + 1oz Cashews"
// //           },
// //           {
// //             meal1: "3 Eggs + Whole Grain Toast + Avocado",
// //             meal2: "6oz Turkey Breast + Sweet Potato + Green Beans",
// //             meal3: "Protein Shake + 1 Banana",
// //             meal4: "6oz Chicken Thighs + Couscous + Broccoli",
// //             meal5: "Greek Yogurt with Berries and Honey",
// //             meal6: "Cottage Cheese + 1oz Almonds"
// //           }
// //         ],
// //         exercises: ["Resistance Training", "Compound Exercises", "Progressive Overload"]
// //       },
// //       "Lose Weight": {
// //         description: "Nutrient-dense, calorie-controlled meals for female fat loss.",
// //         dailyMeals: [
// //           {
// //             meal1: "3 Egg Whites + 1 Whole Egg + Small Bowl Oatmeal",
// //             meal2: "5oz Chicken Breast + Green Salad + 1tsp Olive Oil",
// //             meal3: "Protein Shake + Small Apple + 10 Almonds",
// //             meal4: "5oz White Fish + Quinoa + Vegetables",
// //             meal5: "3/4 cup Greek Yogurt + Berries",
// //             meal6: "4oz Turkey Breast + Vegetables"
// //           },
// //           {
// //             meal1: "Omelette with Spinach + 1 Slice Whole Grain Bread",
// //             meal2: "5oz Turkey Breast + Quinoa + Mixed Veggies",
// //             meal3: "Protein Bar + 1 Banana",
// //             meal4: "5oz Cod + Sweet Potato + Green Beans",
// //             meal5: "Cottage Cheese with Pineapple",
// //             meal6: "Casein Shake + 1oz Almonds"
// //           },
// //           {
// //             meal1: "Pancakes with Egg Whites + Syrup + Berries",
// //             meal2: "5oz Ground Turkey + Salad",
// //             meal3: "Protein Shake + 1 Orange",
// //             meal4: "5oz Pork Chops + Roasted Potatoes + Asparagus",
// //             meal5: "Greek Yogurt with Granola and Honey",
// //             meal6: "Almond Butter + Rice Cake"
// //           },
// //           {
// //             meal1: "Egg White Omelette + Avocado Toast",
// //             meal2: "5oz Chicken Breast + Lentils + Mixed Greens",
// //             meal3: "Protein Smoothie + 1 Pear",
// //             meal4: "5oz Steak + Baked Potato + Broccoli",
// //             meal5: "Greek Yogurt with Honey and Nuts",
// //             meal6: "Casein Shake + 1oz Cashews"
// //           },
// //           {
// //             meal1: "Scrambled Eggs + Oatmeal + Berries",
// //             meal2: "5oz Salmon + Wild Rice + Steamed Carrots",
// //             meal3: "Protein Bar + 1 Banana",
// //             meal4: "5oz Bison + Quinoa + Kale",
// //             meal5: "Greek Yogurt with Berries and Honey",
// //             meal6: "Cottage Cheese + 1oz Almonds"
// //           },
// //           {
// //             meal1: "3 Egg Whites + Whole Grain Toast + Avocado",
// //             meal2: "5oz Turkey Breast + Sweet Potato + Green Beans",
// //             meal3: "Protein Shake + 1 Apple",
// //             meal4: "5oz Chicken Thighs + Couscous + Broccoli",
// //             meal5: "Greek Yogurt with Berries and Honey",
// //             meal6: "Cottage Cheese + 1oz Almonds"
// //           },
// //           {
// //             meal1: "Omelette with Spinach + 1 Slice Whole Grain Bread",
// //             meal2: "5oz Chicken Breast + Brown Rice + Vegetables",
// //             meal3: "Protein Bar + 1 Banana",
// //             meal4: "5oz Salmon + Quinoa + Asparagus",
// //             meal5: "Greek Yogurt with Granola and Honey",
// //             meal6: "Casein Shake + 1oz Almonds"
// //           }
// //         ],
// //         exercises: ["HIIT", "Strength Training", "Low-Impact Cardio"]
// //       },
// //       "Maintain Weight": {
// //         description: "Balanced meals to maintain weight and support overall health.",
// //         dailyMeals: [
// //           {
// //             meal1: "3 Eggs + Whole Grain Toast + Avocado",
// //             meal2: "6oz Chicken Breast + Brown Rice + Vegetables",
// //             meal3: "Protein Shake + 1 Banana",
// //             meal4: "6oz Salmon + Quinoa + Asparagus",
// //             meal5: "Greek Yogurt with Berries and Honey",
// //             meal6: "Cottage Cheese + 1oz Almonds"
// //           },
// //           {
// //             meal1: "Omelette with Spinach + 1 Slice Whole Grain Bread",
// //             meal2: "6oz Turkey Breast + Couscous + Mixed Veggies",
// //             meal3: "Protein Bar + 1 Apple",
// //             meal4: "6oz Cod + Sweet Potato + Green Beans",
// //             meal5: "Greek Yogurt with Granola and Honey",
// //             meal6: "Casein Shake + 1oz Almonds"
// //           },
// //           {
// //             meal1: "Pancakes with Egg Whites + Syrup + Berries",
// //             meal2: "6oz Ground Turkey + Salad",
// //             meal3: "Protein Shake + 1 Orange",
// //             meal4: "6oz Pork Chops + Roasted Potatoes + Asparagus",
// //             meal5: "Greek Yogurt with Honey and Nuts",
// //             meal6: "Almond Butter + Rice Cake"
// //           },
// //           {
// //             meal1: "Egg White Omelette + Avocado Toast",
// //             meal2: "6oz Chicken Breast + Lentils + Mixed Greens",
// //             meal3: "Protein Smoothie + 1 Pear",
// //             meal4: "6oz Steak + Baked Potato + Broccoli",
// //             meal5: "Greek Yogurt with Berries and Honey",
// //             meal6: "Casein Shake + 1oz Cashews"
// //           },
// //           {
// //             meal1: "Scrambled Eggs + Oatmeal + Berries",
// //             meal2: "6oz Salmon + Wild Rice + Steamed Carrots",
// //             meal3: "Protein Bar + 1 Banana",
// //             meal4: "6oz Bison + Quinoa + Kale",
// //             meal5: "Greek Yogurt with Granola and Honey",
// //             meal6: "Cottage Cheese + 1oz Almonds"
// //           },
// //           {
// //             meal1: "3 Egg Whites + Whole Grain Toast + Avocado",
// //             meal2: "6oz Turkey Breast + Sweet Potato + Green Beans",
// //             meal3: "Protein Shake + 1 Apple",
// //             meal4: "6oz Chicken Thighs + Couscous + Broccoli",
// //             meal5: "Greek Yogurt with Berries and Honey",
// //             meal6: "Cottage Cheese + 1oz Almonds"
// //           },
// //           {
// //             meal1: "Omelette with Spinach + 1 Slice Whole Grain Bread",
// //             meal2: "6oz Chicken Breast + Brown Rice + Vegetables",
// //             meal3: "Protein Bar + 1 Banana",
// //             meal4: "6oz Salmon + Quinoa + Asparagus",
// //             meal5: "Greek Yogurt with Granola and Honey",
// //             meal6: "Casein Shake + 1oz Almonds"
// //           }
// //         ],
// //         exercises: ["Moderate Weight Training", "Cardio", "Flexibility Exercises"]
// //       }
// //     }
// //   };

// //   // Handle form submission
// //   const generatePlan = () => {
// //     if (!selectedGoal || !activityLevel || !mealsPerDay || !gender) {
// //       alert("Please select all options!");
// //       return;
// //     }
// //     const selectedPlan = mealPlans[gender][selectedGoal];
// //     const adjustedMeals = selectedPlan.dailyMeals.map(dayMeals => {
// //       // Create an array of meals for the day based on mealsPerDay
// //       const meals = [];
// //       for (let i = 1; i <= mealsPerDay; i++) {
// //         meals.push(dayMeals[`meal${i}`]);
// //       }
// //       return meals;
// //     });
// //     setGeneratedPlan({
// //       goal: selectedGoal,
// //       description: selectedPlan.description,
// //       meals: adjustedMeals,
// //       exercises: selectedPlan.exercises,
// //       gender: gender
// //     });
// //   };

// //   return (
// //     <div className="diet-plans">
// //       <h1>Personalized Diet Plan</h1>
// //       <div className="selection">
// //         <label>Gender:</label>
// //         <select value={gender} onChange={(e) => setGender(e.target.value)}>
// //           <option value="">Select Gender</option>
// //           <option value="male">Male</option>
// //           <option value="female">Female</option>
// //         </select>
// //         <label>Goal:</label>
// //         <select value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)}>
// //           <option value="">Select Goal</option>
// //           <option value="Build Muscle">Build Muscle</option>
// //           <option value="Lose Weight">Lose Weight</option>
// //           <option value="Maintain Weight">Maintain Weight</option>
// //         </select>
// //         <label>Activity Level:</label>
// //         <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
// //           <option value="">Activity Level</option>
// //           <option value="Sedentary">Sedentary</option>
// //           <option value="Lightly Active">Lightly Active</option>
// //           <option value="Moderately Active">Moderately Active</option>
// //           <option value="Very Active">Very Active</option>
// //           <option value="Extra Active">Extra Active</option>
// //         </select>
// //         <label>Meals Per Day:</label>
// //         <select 
// //           value={mealsPerDay} 
// //           onChange={(e) => setMealsPerDay(Number(e.target.value))}
// //         >
// //           <option value="3">3 Meals per Day</option>
// //           <option value="4">4 Meals per Day</option>
// //           <option value="5">5 Meals per Day</option>
// //           <option value="6">6 Meals per Day</option>
// //         </select>
// //         <button onClick={generatePlan}>Generate Meal Plan</button>
// //       </div>
// //       {generatedPlan && (
// //         <div className="generated-plan-box">
// //           <h2>{generatedPlan.gender === 'male' ? 'Male' : 'Female'} {generatedPlan.goal} Plan</h2>
// //           <p>{generatedPlan.description}</p>
// //           <h3>Meals:</h3>
// //           {generatedPlan.meals.map((day, index) => (
// //             <div key={index} className="day-plan">
// //               <h4>Day {index + 1}</h4>
// //               <ul>
// //                 {day.map((meal, mealIndex) => (
// //                   <li key={mealIndex}>{meal}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //           <h3>Suggested Exercises:</h3>
// //           <ul>
// //             {generatedPlan.exercises.map((exercise, index) => (
// //               <li key={index}>{exercise}</li>
// //             ))}
// //           </ul>
// //           <button onClick={() => setGeneratedPlan(null)}>Reset</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default DietPlans;



// // Updated DietPlans.jsx
// import React, { useState, useEffect } from "react";
// import "./DietPlans.css";

// function DietPlans() {
//   const [selectedGoal, setSelectedGoal] = useState("");
//   const [activityLevel, setActivityLevel] = useState("");
//   const [mealsPerDay, setMealsPerDay] = useState(3);
//   const [gender, setGender] = useState("");
//   const [generatedPlan, setGeneratedPlan] = useState(null);
//   const [mealPlans, setMealPlans] = useState({});

//   useEffect(() => {
//     // Fetch meal plans from backend when component mounts
//     fetchMealPlans();
//   }, []);

//   const fetchMealPlans = async () => {
//     try {
//       const response = await fetch('/api/diet/plans');
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
//     } catch (error) {
//       console.error('Error fetching meal plans:', error);
//     }
//   };

//   const generatePlan = () => {
//     if (!selectedGoal || !activityLevel || !mealsPerDay || !gender) {
//       alert("Please select all options!");
//       return;
//     }

//     const selectedPlan = mealPlans[gender][selectedGoal];
//     const adjustedMeals = selectedPlan.dailyMeals.map(dayMeals => {
//       const meals = [];
//       for (let i = 1; i <= mealsPerDay; i++) {
//         meals.push(dayMeals[`meal${i}`]);
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

//   // Rest of your component remains the same...
//   return (
//         <div className="diet-plans">
//           <h1>Personalized Diet Plan</h1>
//           <div className="selection">
//             <label>Gender:</label>
//             <select value={gender} onChange={(e) => setGender(e.target.value)}>
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//             <label>Goal:</label>
//             <select value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)}>
//               <option value="">Select Goal</option>
//               <option value="Build Muscle">Build Muscle</option>
//               <option value="Lose Weight">Lose Weight</option>
//               <option value="Maintain Weight">Maintain Weight</option>
//             </select>
//             <label>Activity Level:</label>
//             <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
//               <option value="">Activity Level</option>
//               <option value="Sedentary">Sedentary</option>
//               <option value="Lightly Active">Lightly Active</option>
//               <option value="Moderately Active">Moderately Active</option>
//               <option value="Very Active">Very Active</option>
//               <option value="Extra Active">Extra Active</option>
//             </select>
//             <label>Meals Per Day:</label>
//             <select 
//               value={mealsPerDay} 
//               onChange={(e) => setMealsPerDay(Number(e.target.value))}
//             >
//               <option value="3">3 Meals per Day</option>
//               <option value="4">4 Meals per Day</option>
//               <option value="5">5 Meals per Day</option>
//               <option value="6">6 Meals per Day</option>
//             </select>
//             <button onClick={generatePlan}>Generate Meal Plan</button>
//           </div>
//           {generatedPlan && (
//             <div className="generated-plan-box">
//               <h2>{generatedPlan.gender === 'male' ? 'Male' : 'Female'} {generatedPlan.goal} Plan</h2>
//               <p>{generatedPlan.description}</p>
//               <h3>Meals:</h3>
//               {generatedPlan.meals.map((day, index) => (
//                 <div key={index} className="day-plan">
//                   <h4>Day {index + 1}</h4>
//                   <ul>
//                     {day.map((meal, mealIndex) => (
//                       <li key={mealIndex}>{meal}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//               <h3>Suggested Exercises:</h3>
//               <ul>
//                 {generatedPlan.exercises.map((exercise, index) => (
//                   <li key={index}>{exercise}</li>
//                 ))}
//               </ul>
//               <button onClick={() => setGeneratedPlan(null)}>Reset</button>
//             </div>
//           )}
//         </div>
//       );
// }

// export default DietPlans;



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