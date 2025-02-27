// import React, { useState } from 'react';
// import './EnhancedDietQuestionnaire.css';

// const EnhancedDietQuestionnaire = ({ onSelectPlan, dietPlans }) => {
//   const [step, setStep] = useState(1);
//   const [userProfile, setUserProfile] = useState({
//     age: '',
//     gender: '',
//     weight: '',
//     height: '',
//     goal: '',
//     activityLevel: '',
//     healthIssues: '',
//     dietaryRestrictions: '',
//     mealsPerDay: '3',
//   });
//   const [showRecommendation, setShowRecommendation] = useState(false);

//   const handleInputChange = (e) => {
//     setUserProfile({
//       ...userProfile,
//       [e.target.name]: e.target.value
//     });
//   };

//   const generateCustomizedMealPlan = () => {
//     const bmr = calculateBMR();
//     const dailyCalories = Math.round(bmr * getActivityMultiplier());
    
//     let dietType = 'balanced';
//     if (userProfile.goal === 'muscle') {
//       dietType = 'muscleGain';
//     } else if (userProfile.goal === 'weight-loss') {
//       dietType = 'fatLoss';
//     }

//     const basePlan = dietPlans[dietType];
    
//     return {
//       ...basePlan,
//       dailyCalories,
//       weeklyPlan: generateWeeklyPlan(basePlan.meals, dailyCalories),
//     };
//   };

//   const generateWeeklyPlan = (baseMeals, dailyCalories) => {
//     const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
//     return daysOfWeek.map(day => ({
//       day,
//       meals: [...baseMeals],
//       totalCalories: dailyCalories
//     }));
//   };

//   const calculateBMR = () => {
//     const weight = parseFloat(userProfile.weight);
//     const height = parseFloat(userProfile.height);
//     const age = parseFloat(userProfile.age);
    
//     if (userProfile.gender === 'male') {
//       return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
//     } else {
//       return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
//     }
//   };

//   const getActivityMultiplier = () => {
//     const multipliers = {
//       sedentary: 1.2,
//       light: 1.375,
//       moderate: 1.55,
//       active: 1.725,
//       'very-active': 1.9
//     };
//     return multipliers[userProfile.activityLevel] || 1.2;
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <div className="questionnaire-step">
//             <h2 className="step-title">Basic Information</h2>
//             <div className="input-group">
//               <input
//                 type="number"
//                 name="age"
//                 placeholder="Age"
//                 value={userProfile.age}
//                 onChange={handleInputChange}
//               />
//               <select
//                 name="gender"
//                 value={userProfile.gender}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//             <button 
//               className="next-btn"
//               onClick={() => setStep(2)}
//             >
//               Next
//             </button>
//           </div>
//         );
      
//       case 2:
//         return (
//           <div className="questionnaire-step">
//             <h2 className="step-title">Body Measurements</h2>
//             <div className="input-group">
//               <input
//                 type="number"
//                 name="weight"
//                 placeholder="Weight (kg)"
//                 value={userProfile.weight}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="number"
//                 name="height"
//                 placeholder="Height (cm)"
//                 value={userProfile.height}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <button 
//               className="next-btn"
//               onClick={() => setStep(3)}
//             >
//               Next
//             </button>
//           </div>
//         );
      
//       case 3:
//         return (
//           <div className="questionnaire-step">
//             <h2 className="step-title">Diet Preferences</h2>
//             <div className="input-group">
//               <select
//                 name="goal"
//                 value={userProfile.goal}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select Goal</option>
//                 <option value="muscle">Build Muscle</option>
//                 <option value="weight-loss">Lose Weight</option>
//                 <option value="maintain">Maintain Weight</option>
//               </select>
//               <select
//                 name="activityLevel"
//                 value={userProfile.activityLevel}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Activity Level</option>
//                 <option value="sedentary">Sedentary</option>
//                 <option value="light">Lightly Active</option>
//                 <option value="moderate">Moderately Active</option>
//                 <option value="active">Very Active</option>
//                 <option value="very-active">Extra Active</option>
//               </select>
//               <select
//                 name="mealsPerDay"
//                 value={userProfile.mealsPerDay}
//                 onChange={handleInputChange}
//               >
//                 <option value="3">3 Meals per Day</option>
//                 <option value="4">4 Meals per Day</option>
//                 <option value="5">5 Meals per Day</option>
//                 <option value="6">6 Meals per Day</option>
//               </select>
//               <textarea
//                 name="dietaryRestrictions"
//                 placeholder="Any dietary restrictions? (vegetarian, vegan, allergies, etc.)"
//                 value={userProfile.dietaryRestrictions}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <button 
//               className="generate-btn"
//               onClick={() => {
//                 const plan = generateCustomizedMealPlan();
//                 onSelectPlan(plan);
//                 setShowRecommendation(true);
//               }}
//             >
//               Generate Meal Plan
//             </button>
//           </div>
//         );
      
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="questionnaire-container">
//       <div className="questionnaire-card">
//         <h1 className="questionnaire-title">Personalized Diet Plan</h1>
//         <div className="questionnaire-content">
//           {!showRecommendation ? (
//             renderStep()
//           ) : (
//             <div className="recommendation">
//               <h2 className="recommendation-title">Your Plan is Ready!</h2>
//               <p>Your personalized meal plan has been generated based on your profile.</p>
//               <button 
//                 className="restart-btn"
//                 onClick={() => {
//                   setStep(1);
//                   setShowRecommendation(false);
//                 }}
//               >
//                 Start Over
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnhancedDietQuestionnaire;