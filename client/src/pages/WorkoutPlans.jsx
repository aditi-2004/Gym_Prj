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