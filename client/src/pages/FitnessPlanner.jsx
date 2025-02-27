// // src/pages/FitnessPlanner.jsx
// import React, { useState, useEffect } from 'react'; // Added useEffect
// import FitnessQuestionnaire from './FitnessQuestionnaire';
// import { generatePersonalizedPlan } from '../services/fitnessService';
// import DietPlans from './DietPlans';
// import WorkoutPlans from './WorkoutPlans';

// function FitnessPlanner() {
//   const [userPlan, setUserPlan] = useState(null);
//   const [showQuestionnaire, setShowQuestionnaire] = useState(true);
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

//   const handleQuestionnaireSubmit = async (userData) => {
//     try {
//       const personalizedPlan = await generatePersonalizedPlan(userData);
//       setUserPlan(personalizedPlan);
//       setShowQuestionnaire(false);
//     } catch (error) {
//       console.error('Error generating plan:', error);
//       alert('Error generating your plan. Please try again.');
//     }
//   };

//   return (
//     <div className="fitness-planner">
//       {showQuestionnaire ? (
//         <FitnessQuestionnaire onSubmit={handleQuestionnaireSubmit} />
//       ) : (
//         <div className="personalized-plan">
//           <h1>Your Personalized Fitness Plan</h1>
          
//           <div className="plan-summary">
//             <h2>Daily Targets</h2>
//             <p>Calories: {userPlan.calories} kcal</p>
//             <p>Protein: {userPlan.macros.protein}g</p>
//             <p>Carbs: {userPlan.macros.carbs}g</p>
//             <p>Fats: {userPlan.macros.fats}g</p>
//           </div>

//           <DietPlans personalizedPlan={userPlan} />
//           <WorkoutPlans personalizedPlan={userPlan} />
          
//           <button 
//             onClick={() => setShowQuestionnaire(true)}
//             className="modify-plan-btn"
//           >
//             Modify Plan
//           </button>
//           <p className="chatbot-prompt">Have questions? Chat with our AI below!</p>
//           {chatbotResponse && <p className="chatbot-response">{chatbotResponse}</p>}
//         </div>
//       )}
//     </div>
//   );
// }

// export default FitnessPlanner;