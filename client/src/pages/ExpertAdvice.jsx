import React, { useEffect } from 'react';
import gsap from 'gsap';
import './ExpertAdvice.css';

function ExpertAdvice() {
  useEffect(() => {
    // GSAP animations for elements when they load
    gsap.from('.headline', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5
    });

    gsap.from('.advice-card', {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      delay: 1
    });
  }, []);

  return (
    <div className="expert-advice">
      <div className="header">
        <h1 className="headline">Expert Advice</h1>
        <p>Get the best tips and strategies from top fitness experts to help you achieve your goals!</p>
      </div>

      <div className="advice-section">
        <div className="advice-card">
          <h3>Nutrition Tips</h3>
          <p>
            Proper nutrition is the foundation of a successful fitness journey. Fuel your body with the right
            foods to enhance your workouts and recovery. Here are some key tips:
          </p>
          <ul>
            <li><strong>Eat Balanced Meals:</strong> Include lean proteins, healthy fats, and complex carbs.</li>
            <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day to stay energized.</li>
            <li><strong>Post-Workout Nutrition:</strong> Refuel with protein and carbs within 30 minutes after a workout.</li>
            <li><strong>Avoid Processed Foods:</strong> Minimize your intake of sugary, processed snacks.</li>
          </ul>
          <p>For more personalized nutrition plans, speak with a certified nutritionist or dietitian.</p>
        </div>

        <div className="advice-card">
          <h3>Workout Strategies</h3>
          <p>
            Effective workouts can accelerate your fitness goals. Whether you're aiming to build strength, lose weight,
            or improve endurance, it's essential to use the right strategies. Consider the following:
          </p>
          <ul>
            <li><strong>Progressive Overload:</strong> Gradually increase the intensity of your exercises to build muscle.</li>
            <li><strong>Focus on Compound Movements:</strong> Exercises like squats, deadlifts, and bench presses target multiple muscles.</li>
            <li><strong>Mix Cardio with Strength Training:</strong> A combination of both is ideal for overall fitness.</li>
            <li><strong>Rest Between Sets:</strong> Allow adequate rest (60-90 seconds) to ensure maximum effort during each set.</li>
          </ul>
          <p>Consult with a personal trainer for a tailored workout routine that fits your goals.</p>
        </div>

        <div className="advice-card">
          <h3>Recovery & Rest</h3>
          <p>
            Recovery is just as important as the workouts themselves. Adequate rest helps your body repair and
            strengthens muscles. Follow these recovery strategies:
          </p>
          <ul>
            <li><strong>Sleep 7-9 Hours:</strong> Sleep is the body's natural way of repairing muscle tissue.</li>
            <li><strong>Stretch After Workouts:</strong> Stretching improves flexibility and reduces muscle soreness.</li>
            <li><strong>Take Active Rest Days:</strong> Engage in light activity like walking or yoga to promote circulation.</li>
            <li><strong>Stay Consistent:</strong> Consistent rest is crucial for avoiding burnout and injury.</li>
          </ul>
          <p>Consider booking a recovery session with a specialist (e.g., massage therapy or physiotherapy) to aid in muscle recovery.</p>
        </div>
      </div>

      <div className="expert-resources">
        <h3>Recommended Resources</h3>
        <ul>
          <li><a href="https://www.acefitness.org" target="_blank" rel="noopener noreferrer">American Council on Exercise (ACE)</a></li>
          <li><a href="https://www.myfitnesspal.com" target="_blank" rel="noopener noreferrer">MyFitnessPal - Nutrition Tracker</a></li>
          <li><a href="https://www.bodybuilding.com" target="_blank" rel="noopener noreferrer">Bodybuilding.com - Fitness Plans</a></li>
          <li><a href="https://www.t-nation.com" target="_blank" rel="noopener noreferrer">T-Nation - Strength Training Articles</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ExpertAdvice;