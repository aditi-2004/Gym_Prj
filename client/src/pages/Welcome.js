import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { gsap } from 'gsap';
import './Welcome.css';

const Welcome = () => {
  const history = useHistory();

  useEffect(() => {
    // GSAP Animation for welcome page
    gsap.from('.welcome-container', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });

    // Handle "Get Started" button click with animation
    const handleGetStarted = () => {
      gsap.to('.welcome-container', { opacity: 0, duration: 0.5, ease: 'power3.out', onComplete: () => {
        history.push('/home'); // Navigate to the root path (/) to load Home.js
      }});
    };

    document.getElementById('get-started').addEventListener('click', handleGetStarted);

    // Cleanup event listener
    return () => document.getElementById('get-started')?.removeEventListener('click', handleGetStarted);
  }, [history]);

  return (
    <div className="welcome-container">
      <h1>Elevate Your Fitness Journey</h1>
      <p>Embark on your fitness journey with expert guidance and state-of-the-art resources. Discover how personalized training plans can transform your health and enhance overall well-being.</p>
      <button id="get-started">Get Started</button>
    </div>
  );
};

export default Welcome;