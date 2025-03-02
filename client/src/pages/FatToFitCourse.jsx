
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