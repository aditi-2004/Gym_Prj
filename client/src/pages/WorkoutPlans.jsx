// import React, { useState, useEffect } from 'react';
// import './WorkoutPlans.css'; // import the CSS for styling

// const WorkoutPlans = () => {
//   const [customPlan, setCustomPlan] = useState(null);
//   const [bodyType, setBodyType] = useState('male'); // Default body type is male
//   const [fitnessGoal, setFitnessGoal] = useState('general'); // Default goal is general fitness
//   const [activityLevel, setActivityLevel] = useState('beginner'); // Default activity level is beginner

//   useEffect(() => {
//     generateWorkoutPlan();
//   }, [bodyType, fitnessGoal, activityLevel]);

//   const generateWorkoutPlan = () => {
//     let plan = '';

//     // Plan for Male Body Type
//     if (bodyType === 'male') {
//       plan = `
//         <h3>7-Day Workout Plan for Males (Goal: ${fitnessGoal})</h3>
//         <div class="plan-day">
//           <h4>Day 1: Full Body Workout</h4>
//           <ul>
//             <li>Squats - 4 sets x 12 reps</li>
//             <li>Push-ups - 4 sets x 15 reps</li>
//             <li>Deadlifts - 4 sets x 10 reps</li>
//             <li>Planks - 4 x 30 seconds</li>
//           </ul>
//         </div>
//         <div class="plan-day">
//           <h4>Day 2: Cardio</h4>
//           <ul>
//             <li>Running - 30 minutes</li>
//             <li>Jumping Jacks - 4 sets x 50 reps</li>
//           </ul>
//         </div>
//         <div class="plan-day">
//           <h4>Day 3: Upper Body</h4>
//           <ul>
//             <li>Pull-ups - 4 sets x 10 reps</li>
//             <li>Overhead Shoulder Press - 4 sets x 12 reps</li>
//             <li>Dips - 4 sets x 12 reps</li>
//           </ul>
//         </div>
//         <div class="plan-day">
//           <h4>Day 4: Active Recovery</h4>
//           <ul>
//             <li>Stretching - 20 minutes</li>
//             <li>Yoga - 20 minutes</li>
//           </ul>
//         </div>
//         <div class="plan-day">
//           <h4>Day 5: Lower Body</h4>
//           <ul>
//             <li>Lunges - 4 sets x 12 reps each leg</li>
//             <li>Leg Press - 4 sets x 12 reps</li>
//             <li>Hamstring Curls - 4 sets x 15 reps</li>
//           </ul>
//         </div>
//         <div class="plan-day">
//           <h4>Day 6: Core Focus</h4>
//           <ul>
//             <li>Russian Twists - 4 sets x 30 reps</li>
//             <li>Leg Raises - 4 sets x 20 reps</li>
//             <li>Mountain Climbers - 4 sets x 40 reps</li>
//           </ul>
//         </div>
//         <div class="plan-day">
//           <h4>Day 7: Rest Day</h4>
//           <ul>
//             <li>Light walking</li>
//             <li>Stretching and Relaxation</li>
//           </ul>
//         </div>
//       `;
//     } 
    
//     // Plan for Female Body Type
//     else if (bodyType === 'female') {
//       plan = `
//         <h3>7-Day Workout Plan for Females (Goal: ${fitnessGoal})</h3>
//         <div class="plan-day">
//           <h4>Day 1: Full Body Workout</h4>
//           <ul>
//             <li>Squats - 3 sets x 12 reps</li>
//             <li>Push-ups - 3 sets x 12 reps</li>
//             <li>Glute Bridges - 3 sets x 15 reps</li>
//             <li>Planks - 3 x 30 seconds</li>
//           </ul>
//         </div>
//         <div class="plan-day">
//           <h4>Day 2: Cardio</h4>
//           <ul>
//             <li>Running - 30 minutes</li>
//             <li>Jumping Jacks - 3 sets x 50 reps</li>
//           </ul>
//         </div>
//         <div class="plan-day">
//           <h4>Day 3: Upper Body</h4>
//           <ul>
//             <li>Incline Dumbbell Press - 3 sets x 12 reps</li>
//             <li>Shoulder Raises - 3 sets x 12 reps</li>
//             <li>Tricep Dips - 3 sets x 12 reps</li>
//           </ul>
//         </div>
//         <div class="plan-day">
//           <h4>Day 4: Active Recovery</h4>
//           <ul>
//             <li>Stretching - 15 minutes</li>
//             <li>Yoga - 20 minutes</li>
//           </ul>
//         </div>
//         <div class="plan-day">
//           <h4>Day 5: Lower Body</h4>
//           <ul>
//             <li>Step-ups - 3 sets x 15 reps each leg</li>
//             <li>Glute Kickbacks - 3 sets x 15 reps</li>
//             <li>Leg Extensions - 3 sets x 12 reps</li>
//           </ul>
//         </div>
//         <div class="plan-day">
//           <h4>Day 6: Core Focus</h4>
//           <ul>
//             <li>Bicycle Crunches - 3 sets x 20 reps</li>
//             <li>Side Planks - 3 x 30 seconds each side</li>
//             <li>Russian Twists - 3 sets x 25 reps</li>
//           </ul>
//         </div>
//         <div class="plan-day">
//           <h4>Day 7: Rest Day</h4>
//           <ul>
//             <li>Light walking</li>
//             <li>Stretching and Relaxation</li>
//           </ul>
//         </div>
//       `;
//     }

//     // For fitness goals like Muscle Gain or Weight Loss, adjust intensity and sets accordingly
//     if (fitnessGoal === 'muscle_gain') {
//       plan = plan.replace(/3 sets/g, "4 sets").replace(/12 reps/g, "15 reps");
//     } else if (fitnessGoal === 'weight_loss') {
//       plan = plan.replace(/3 sets/g, "3 sets").replace(/12 reps/g, "20 reps");
//     }

//     setCustomPlan(plan);
//   };

//   return (
//     <div className="workout-plans-container">
//       <h1 className="title">AI-Powered Workout Plan</h1>

//       <div className="filters">
//         <select onChange={(e) => setBodyType(e.target.value)} value={bodyType}>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>

//         <select onChange={(e) => setFitnessGoal(e.target.value)} value={fitnessGoal}>
//           <option value="general">General Fitness</option>
//           <option value="muscle_gain">Muscle Gain</option>
//           <option value="weight_loss">Weight Loss</option>
//         </select>

//         <select onChange={(e) => setActivityLevel(e.target.value)} value={activityLevel}>
//           <option value="beginner">Beginner</option>
//           <option value="intermediate">Intermediate</option>
//           <option value="advanced">Advanced</option>
//         </select>
//       </div>

//       <div
//         className="workout-plan"
//         dangerouslySetInnerHTML={{ __html: customPlan }}
//       />
//     </div>
//   );
// };

// export default WorkoutPlans;



import React, { useState, useEffect } from 'react';
import './WorkoutPlans.css'; // Import the CSS for styling

const WorkoutPlans = () => {
  const [planData, setPlanData] = useState([]);
  const [bodyType, setBodyType] = useState('male');
  const [fitnessGoal, setFitnessGoal] = useState('general');
  const [activityLevel, setActivityLevel] = useState('beginner');

  useEffect(() => {
    fetchWorkoutPlan();
  }, [bodyType, fitnessGoal, activityLevel]); // Include activityLevel in dependencies

  const fetchWorkoutPlan = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/workoutPlans?bodyType=${bodyType}&fitnessGoal=${fitnessGoal}&activityLevel=${activityLevel}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPlanData(data.plan || []);
    } catch (error) {
      console.error('Error fetching workout plan:', error);
      setPlanData([]);
    }
  };

  return (
    <div className="workout-plans-container">
      <h1 className="title">AI-Powered Workout Plan</h1>

      <div className="filters">
        <select onChange={(e) => setBodyType(e.target.value)} value={bodyType}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select onChange={(e) => setFitnessGoal(e.target.value)} value={fitnessGoal}>
          <option value="general">General Fitness</option>
          <option value="muscle_gain">Muscle Gain</option>
          <option value="weight_loss">Weight Loss</option>
        </select>

        <select onChange={(e) => setActivityLevel(e.target.value)} value={activityLevel}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="workout-plan">
        <h3>
          7-Day Workout Plan for {bodyType === 'male' ? 'Males' : 'Females'} (Goal: {fitnessGoal}, Level: {activityLevel})
        </h3>
        {planData.length > 0 ? (
          planData.map(day => (
            <div className="plan-day" key={day.day}>
              <h4>{day.title}</h4>
              <ul>
                {day.exercises.map((exercise, index) => (
                  <li key={index}>
                    {exercise.name} - {exercise.sets} {exercise.sets > 1 ? 'sets' : 'set'} x{' '}
                    {exercise.reps ? `${exercise.reps} reps` : exercise.time || 'N/A'}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No workout plan available.</p>
        )}
        
      </div>
    </div>
  );
};

export default WorkoutPlans;