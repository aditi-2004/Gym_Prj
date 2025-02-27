// import React, { useState, useEffect } from 'react';
// import './FitnessQuestionnaire.css';

// const FitnessQuestionnaire = ({ onComplete }) => {
//   const [step, setStep] = useState(1);
//   const [userProfile, setUserProfile] = useState({
//     age: '',
//     gender: '',
//     weight: '',
//     height: '',
//     goal: '',
//     activityLevel: '',
//     healthIssues: '',
//   });
//   const [showRecommendation, setShowRecommendation] = useState(false);
//   const [chatbotResponse, setChatbotResponse] = useState(''); // State for chatbot responses

//   useEffect(() => {
//     // Initialize ChatBotKit widget if needed (optional, as it’s already in index.html)
//     const script = document.createElement('script');
//     script.src = 'https://static.chatbotkit.com/integrations/widget/v2.js';
//     script.id = 'chatbotkit-widget';
//     script.setAttribute('data-widget', 'cm6p4fla20wiqbdvajp1anxub');
//     document.body.appendChild(script);

//     // Optional: Add event listener for chatbot responses (if ChatBotKit supports it)
//     window.ChatBotKitWidget?.on('message', (message) => {
//       setChatbotResponse(message.text || 'Chatbot response received.');
//     });

//     return () => {
//       document.body.removeChild(script); // Cleanup on unmount
//     };
//   }, []);

//   const handleInputChange = (e) => {
//     setUserProfile({
//       ...userProfile,
//       [e.target.name]: e.target.value
//     });
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

//   const generateRecommendations = () => {
//     const bmr = calculateBMR();
//     const workoutPlan = userProfile.goal === 'muscle' ? 'muscleGain' :
//                        userProfile.goal === 'weight-loss' ? 'fatLoss' : 'strengthTraining';
    
//     return {
//       dailyCalories: Math.round(bmr * getActivityMultiplier()),
//       recommendedWorkout: workoutPlan,
//       userProfile: userProfile
//     };
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
//                 className="input-field"
//               />
//               <select
//                 name="gender"
//                 value={userProfile.gender}
//                 onChange={handleInputChange}
//                 className="input-field"
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
//             <p className="chatbot-prompt">Need help? Ask our AI Chatbot below!</p>
//             {chatbotResponse && <p className="chatbot-response">{chatbotResponse}</p>}
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
//                 className="input-field"
//               />
//               <input
//                 type="number"
//                 name="height"
//                 placeholder="Height (cm)"
//                 value={userProfile.height}
//                 onChange={handleInputChange}
//                 className="input-field"
//               />
//             </div>
//             <button 
//               className="next-btn"
//               onClick={() => setStep(3)}
//             >
//               Next
//             </button>
//             <p className="chatbot-prompt">Need help? Ask our AI Chatbot below!</p>
//             {chatbotResponse && <p className="chatbot-response">{chatbotResponse}</p>}
//           </div>
//         );
      
//       case 3:
//         return (
//           <div className="questionnaire-step">
//             <h2 className="step-title">Fitness Goals</h2>
//             <div className="input-group">
//               <select
//                 name="goal"
//                 value={userProfile.goal}
//                 onChange={handleInputChange}
//                 className="input-field"
//               >
//                 <option value="">Select Goal</option>
//                 <option value="muscle">Build Muscle</option>
//                 <option value="weight-loss">Lose Weight</option>
//                 <option value="strength">Build Strength</option>
//               </select>
//               <select
//                 name="activityLevel"
//                 value={userProfile.activityLevel}
//                 onChange={handleInputChange}
//                 className="input-field"
//               >
//                 <option value="">Activity Level</option>
//                 <option value="sedentary">Sedentary</option>
//                 <option value="light">Lightly Active</option>
//                 <option value="moderate">Moderately Active</option>
//                 <option value="active">Very Active</option>
//                 <option value="very-active">Extra Active</option>
//               </select>
//               <textarea
//                 name="healthIssues"
//                 placeholder="Any health issues or limitations?"
//                 value={userProfile.healthIssues}
//                 onChange={handleInputChange}
//                 className="input-field"
//               />
//             </div>
//             <button 
//               className="generate-btn"
//               onClick={() => {
//                 const recommendations = generateRecommendations();
//                 onComplete(recommendations);
//                 setShowRecommendation(true);
//               }}
//             >
//               Get Recommendations
//             </button>
//             <p className="chatbot-prompt">Need help? Ask our AI Chatbot below!</p>
//             {chatbotResponse && <p className="chatbot-response">{chatbotResponse}</p>}
//           </div>
//         );
      
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="questionnaire-container">
//       <div className="questionnaire-card">
//         <h1 className="questionnaire-title">Personalized Fitness Plan</h1>
//         <div className="questionnaire-content">
//           {!showRecommendation ? (
//             renderStep()
//           ) : (
//             <div className="recommendation">
//               <h2 className="recommendation-title">Your Plan is Ready!</h2>
//               <p>Your personalized fitness plan has been generated based on your profile.</p>
//               <button 
//                 className="restart-btn"
//                 onClick={() => {
//                   setStep(1);
//                   setShowRecommendation(false);
//                 }}
//               >
//                 Start Over
//               </button>
//               <p className="chatbot-prompt">Have questions? Chat with our AI below!</p>
//               {chatbotResponse && <p className="chatbot-response">{chatbotResponse}</p>}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FitnessQuestionnaire;