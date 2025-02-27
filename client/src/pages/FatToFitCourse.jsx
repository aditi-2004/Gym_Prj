// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import './FatToFitCourse.css'; 
// import ScrollToPlugin from 'gsap/ScrollToPlugin';
// import coursePng from './course.png';
// import ninePng from './nine.png';
// import nutripng from './nutri.png';

// gsap.registerPlugin(ScrollToPlugin);

// const FatToFitCourse = () => {
//   const courseRef = useRef(null);

//   useEffect(() => {
//     // GSAP Animations for the page
//     gsap.from('.intro-header', {
//       opacity: 0,
//       y: -100,
//       duration: 1.5,
//       delay: 0.5,
//       ease: 'power3.out',
//     });

//     gsap.from('.step', {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       stagger: 0.3,
//       ease: 'power3.out',
//     });

//     gsap.from('.motivation-section', {
//       opacity: 0,
//       y: 100,
//       duration: 1.5,
//       delay: 1.5,
//       ease: 'power3.out',
//     });
//   }, []);

//   const handleStartCourse = () => {
//     gsap.to(window, {
//       scrollTo: courseRef.current,
//       duration: 2,
//       ease: 'power3.inOut',
//     });
//   };

//   return (
//     <div className="fat-to-fit-container">
//       {/* Introduction Section */}
//       <section className="intro-section">
//         <h1 className="intro-header">Fat to Fit Course</h1>
//         <p className="intro-text">
//           Welcome to the Fat to Fit Course! Start your fitness journey today and transform your life step by step.
//         </p>
//         <button className="cta-button" onClick={handleStartCourse}>
//           Start Now
//         </button>
//       </section>

//       {/* Detailed Course Sections */}
//       <section ref={courseRef} className="course-details">
//         <div className="course-section">
//           <h2>Step 1: Understand Your Body</h2>
//           <div className="course-content">
//             <img
//               src={coursePng}
//               alt="Body Understanding"
//               className="course-image"
//             />
//             <p>
//               Understanding your body type and metabolism is key to customizing your fitness journey. In this
//               section, we'll guide you through understanding how different body types respond to different types
//               of exercise and nutrition.
//             </p>
//           </div>
//         </div>

//         <div className="course-section">
//           <h2>Step 2: Nutrition Planning</h2>
//           <div className="course-content">
//             <img
//               src={nutripng}
//               alt="Nutrition Planning"
//               className="course-image"
//             />
//             <p>
//               Nutrition is the backbone of any successful fitness plan. Here, we teach you how to plan your meals
//               based on your fitness goals. Learn how to choose the right foods for weight loss, muscle gain, or
//               overall fitness.
//             </p>
//           </div>
//         </div>

//         <div className="course-section">
//           <h2>Step 3: Workout Routines</h2>
//           <div className="course-content">
//             <img
//               src={coursePng}
//               alt="Workout Routine"
//               className="course-image"
//             />
//             <p>
//               Discover personalized workout routines for every fitness level. Whether you're a beginner or an
//               advanced athlete, these routines will help you achieve your fitness goals. Learn proper form, reps,
//               and sets for optimal results.
//             </p>
//           </div>
//         </div>

//         <div className="course-section">
//           <h2>Step 4: Rest and Recovery</h2>
//           <div className="course-content">
//             <img
//               src={ninePng}
//               alt="Rest and Recovery"
//               className="course-image"
//             />
//             <p>
//               Recovery is just as important as training. Here, we explain how to optimize your recovery time and
//               techniques to help your muscles grow and prevent injury. Learn the importance of sleep, stretching,
//               and active recovery.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Motivation Section */}
//       <section className="motivation-section">
//         <h2>Your Fitness Journey</h2>
//         <p>
//           This course will take you from fat to fit, one step at a time. Stay consistent and motivated!
//         </p>
//         <ul>
//           <li>Stay hydrated throughout the day.</li>
//           <li>Get enough sleep for optimal recovery.</li>
//           <li>Consistency is key! Stick to your routine.</li>
//         </ul>
//       </section>

//       {/* Final Call-to-Action */}
//       <section className="cta-section">
//         <h2>Ready to Start Your Journey?</h2>
//         <p>Join us now and take the first step towards a healthier you!</p>
//         <button className="cta-button">Start Now</button>
//       </section>
//     </div>
//   );
// };

// export default FatToFitCourse;



import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './FatToFitCourse.css';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import coursePng from './course.png';
import ninePng from './nine.png';
import nutripng from './nutri.png';
import { Link } from 'react-router-dom'; // For redirecting to Join Us page

gsap.registerPlugin(ScrollToPlugin);

const FatToFitCourse = () => {
  const courseRef = useRef(null);

  useEffect(() => {
    // GSAP Animations for the page
    gsap.from('.intro-header', {
      opacity: 0,
      y: -100,
      duration: 1.5,
      delay: 0.5,
      ease: 'power3.out',
    });

    gsap.from('.course-module', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
    });

    gsap.from('.motivation-section', {
      opacity: 0,
      y: 100,
      duration: 1.5,
      delay: 1.5,
      ease: 'power3.out',
    });

    gsap.from('.cta-section', {
      opacity: 0,
      y: 100,
      duration: 1.5,
      delay: 2,
      ease: 'power3.out',
    });
  }, []);

  const handleStartCourse = () => {
    // Redirect to Join Us page instead of scrolling
    window.location.href = '/join-us'; // Redirect to the Join Us page for payment
  };

  return (
    <div className="fat-to-fit-container">
      {/* Introduction Section */}
      <section className="intro-section">
        <h1 className="intro-header">Fat to Fit Transformation</h1>
        <p className="intro-text">
          Embark on your transformative journey from fat to fit with our comprehensive course. Start today and reshape your life!
        </p>
        {/* <button className="cta-button" onClick={handleStartCourse}>
          Start Now
        </button> */}
      </section>

      {/* Course Modules Section */}
      <section className="course-modules">
        <h2 className="course-title">What’s Inside the Course</h2>
        <div className="modules-grid">
          <div className="course-module">
            <h3>Module 1: Introduction</h3>
            <p>Basic rules and essentials you need before kickstarting your bulking journey.</p>
            <img src={coursePng} alt="Introduction" className="module-image" />
          </div>
          <div className="course-module">
            <h3>Module 2: Goal Setting</h3>
            <p>Weekly weight target setup to reach your bulking goals in the 16 weeks.</p>
            <img src={ninePng} alt="Goal Setting" className="module-image" />
          </div>
          <div className="course-module">
            <h3>Module 3: Science of Calories</h3>
            <p>Understand how your body reacts to fat loss and the science behind calories.</p>
            <img src={nutripng} alt="Science of Calories" className="module-image" />
          </div>
          <div className="course-module">
            <h3>Module 4: Macros</h3>
            <p>Understand the macros (protein, carbs & fats) and learn how to track macros.</p>
            <img src={coursePng} alt="Macros" className="module-image" />
          </div>
          <div className="course-module">
            <h3>Module 5: Track Calories</h3>
            <p>Understand the calorie intake required by your body and how to track calories as per your bulking goals.</p>
            <img src={ninePng} alt="Track Calories" className="module-image" />
          </div>
          <div className="course-module">
            <h3>Module 6: Diet Plan</h3>
            <p>Set up a diet plan as per your goal and your body type.</p>
            <img src={nutripng} alt="Diet Plan" className="module-image" />
          </div>
          <div className="course-module">
            <h3>Module 7: Cardio Programs</h3>
            <p>Beginner to intense level cardio tutorials. Practice the six levels step by step: Light, Pro, Max, Xtreme, Advance, Perma & Ultra. Check your progress every week and make alterations.</p>
            <img src={coursePng} alt="Cardio Programs" className="module-image" />
          </div>
          <div className="course-module">
            <h3>Module 8: Diet Levels</h3>
            <p>Beginner to intense level diet plans. Eat as per your level: Light, Pro, Max, Xtreme, Advance, Perma & Ultra. Check your progress every week and make alterations.</p>
            <img src={ninePng} alt="Diet Levels" className="module-image" />
          </div>
          <div className="course-module">
            <h3>Module 9: Workout Programs</h3>
            <p>Personalized workout programs tailored to your fitness level and goals.</p>
            <img src={nutripng} alt="Workout Programs" className="module-image" />
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="motivation-section">
        <h2>Your Fitness Journey</h2>
        <p>
          Transform from fat to fit, one step at a time. Stay committed and watch your progress soar!
        </p>
        <ul>
          <li>Stay hydrated and fuel your body with nutrients.</li>
          <li>Prioritize sleep for recovery and energy.</li>
          <li>Consistency is your superpower—stick to your plan!</li>
        </ul>
      </section>

      {/* Final Call-to-Action */}
      <section className="cta-section">
        <h2>Ready to Transform Your Life?</h2>
        <p>Join us now and begin your journey to a fitter, healthier you!</p>
        <button className="cta-button" onClick={handleStartCourse}>
          Start Now
        </button>
      </section>
    </div>
  );
};

export default FatToFitCourse;