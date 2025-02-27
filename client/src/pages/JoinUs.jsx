// import React from "react";
// import { motion } from "framer-motion";
// import "./JoinUs.css";

// const JoinUs = () => {
//   return (
//     <div className="join-us-container">
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="membership-wrapper"
//       >
//         <h1 className="title">Join <span className="highlight">BILVINE'S ENERGYM!</span></h1>
        
//         <div className="membership-plans">
//           {/* Basic Plan */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             className="plan-card"
//           >
//             <h3>Basic Plan</h3>
//             <p className="price">$29.99<span>/month</span></p>
//             <ul>
//               <li>✓ Access to gym equipment</li>
//               <li>✓ Basic fitness assessment</li>
//               <li>✓ Locker room access</li>
//               <li>✓ Water fountain access</li>
//             </ul>
//             <button className="join-button">Select Plan</button>
//           </motion.div>

//           {/* Premium Plan */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             className="plan-card popular"
//           >
//             <h3>Premium Plan</h3>
//             <p className="price">$49.99<span>/month</span></p>
//             <ul>
//               <li>✓ All Basic Plan features</li>
//               <li>✓ Personal trainer (2x/month)</li>
//               <li>✓ Group fitness classes</li>
//               <li>✓ Nutrition consultation</li>
//               <li>✓ Towel service</li>
//             </ul>
//             <button className="join-button">Select Plan</button>
//           </motion.div>

//           {/* Elite Plan */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             className="plan-card"
//           >
//             <h3>Elite Plan</h3>
//             <p className="price">$79.99<span>/month</span></p>
//             <ul>
//               <li>✓ All Premium Plan features</li>
//               <li>✓ Unlimited personal training</li>
//               <li>✓ Private locker</li>
//               <li>✓ Spa access</li>
//               <li>✓ Recovery zone access</li>
//               <li>✓ Priority class booking</li>
//             </ul>
//             <button className="join-button">Select Plan</button>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Why Choose Us Section */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="why-choose-section"
//       >
//         <div className="section-header">
//           <motion.div 
//             className="sub-title"
//             initial={{ x: -20 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Why choose us
//           </motion.div>
//           <motion.h2 
//             className="main-title"
//             initial={{ x: 20 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Let's Know Why?
//           </motion.h2>
//         </div>
        
//         <div className="benefits-grid">
//           <motion.div 
//             className="benefit-item"
//             whileHover={{ scale: 1.03 }}
//           >
//             <h3>Expert Trainers</h3>
//             <p>Certified professionals to guide you at every step</p>
//           </motion.div>
          
//           <motion.div 
//             className="benefit-item"
//             whileHover={{ scale: 1.03 }}
//           >
//             <h3>Customized Plans</h3>
//             <p>Personalized workout plans tailored to your needs and goals</p>
//           </motion.div>
          
//           <motion.div 
//             className="benefit-item"
//             whileHover={{ scale: 1.03 }}
//           >
//             <h3>Diverse Classes</h3>
//             <p>Yoga, HIIT, strength training, Zumba, and more!</p>
//           </motion.div>
          
//           <motion.div 
//             className="benefit-item"
//             whileHover={{ scale: 1.03 }}
//           >
//             <h3>State-of-the-Art Equipment</h3>
//             <p>Modern machines and facilities for an optimal workout experience</p>
//           </motion.div>
          
//           <motion.div 
//             className="benefit-item"
//             whileHover={{ scale: 1.03 }}
//           >
//             <h3>Nutrition & Wellness</h3>
//             <p>Diet plans and tips to complement your fitness journey</p>
//           </motion.div>
          
//           <motion.div 
//             className="benefit-item"
//             whileHover={{ scale: 1.03 }}
//           >
//             <h3>Supportive Community</h3>
//             <p>Connect, motivate, and grow with like-minded fitness enthusiasts</p>
//           </motion.div>
//         </div>

//         <motion.div 
//           className="cta-wrapper"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           <div className="cta-content">
//             <p className="cta-text">Join us today and take the first step towards a healthier, stronger, and happier you! 💪🔥</p>
//             <button className="cta-button">Get Started Now</button>
//           </div>

//           <div className="feature-boxes">
//             <motion.div 
//               className="feature-box"
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="feature-icon">👥</div>
//               <h3>Dedicated Team</h3>
//             </motion.div>

//             <motion.div 
//               className="feature-box"
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="feature-icon">⚙️</div>
//               <h3>Clean Setup</h3>
//             </motion.div>

//             <motion.div 
//               className="feature-box"
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="feature-icon">🔄</div>
//               <h3>24/7 Support</h3>
//             </motion.div>

//             <motion.div 
//               className="feature-box"
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="feature-icon">🏆</div>
//               <h3>Winning Award</h3>
//             </motion.div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };
// export default JoinUs;


import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import "./JoinUs.css";

const JoinUs = () => {
  const history = useHistory();

  const plans = {
    basic: {
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Basic fitness assessment",
        "Locker room access",
        "Water fountain access"
      ]
    },
    premium: {
      name: "Premium Plan",
      price: 49.99,
      features: [
        "All Basic Plan features",
        "Personal trainer (2x/month)",
        "Group fitness classes",
        "Nutrition consultation",
        "Towel service"
      ]
    },
    elite: {
      name: "Elite Plan",
      price: 79.99,
      features: [
        "All Premium Plan features",
        "Unlimited personal training",
        "Private locker",
        "Spa access",
        "Recovery zone access",
        "Priority class booking"
      ]
    }
  };

  const handlePlanSelection = (planType) => {
    const selectedPlan = plans[planType];
    history.push('/payment', {
      cartItems: [{
        name: selectedPlan.name,
        price: `$${selectedPlan.price}`,
        quantity: 1,
        size: "N/A",
        color: "N/A"
      }],
      total: selectedPlan.price,
      discount: 0
    });
  };

  return (
    <div className="join-us-container">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="membership-wrapper"
      >
        <h1 className="title">Join <span className="highlight">BILVINE'S ENERGYM!</span></h1>
        
        <div className="membership-plans">
          {/* Basic Plan */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="plan-card"
          >
            <h3>Basic Plan</h3>
            <p className="price">$29.99<span>/month</span></p>
            <ul>
              {plans.basic.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
            <button 
              className="join-button"
              onClick={() => handlePlanSelection('basic')}
            >
              Select Plan
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="plan-card popular"
          >
            <h3>Premium Plan</h3>
            <p className="price">$49.99<span>/month</span></p>
            <ul>
              {plans.premium.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
            <button 
              className="join-button"
              onClick={() => handlePlanSelection('premium')}
            >
              Select Plan
            </button>
          </motion.div>

          {/* Elite Plan */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="plan-card"
          >
            <h3>Elite Plan</h3>
            <p className="price">$79.99<span>/month</span></p>
            <ul>
              {plans.elite.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
            <button 
              className="join-button"
              onClick={() => handlePlanSelection('elite')}
            >
              Select Plan
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="why-choose-section"
      >
        <div className="section-header">
          <motion.div 
            className="sub-title"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why choose us
          </motion.div>
          <motion.h2 
            className="main-title"
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's Know Why?
          </motion.h2>
        </div>
        
        <div className="benefits-grid">
          <motion.div 
            className="benefit-item"
            whileHover={{ scale: 1.03 }}
          >
            <h3>Expert Trainers</h3>
            <p>Certified professionals to guide you at every step</p>
          </motion.div>
          
          <motion.div 
            className="benefit-item"
            whileHover={{ scale: 1.03 }}
          >
            <h3>Customized Plans</h3>
            <p>Personalized workout plans tailored to your needs and goals</p>
          </motion.div>
          
          <motion.div 
            className="benefit-item"
            whileHover={{ scale: 1.03 }}
          >
            <h3>Diverse Classes</h3>
            <p>Yoga, HIIT, strength training, Zumba, and more!</p>
          </motion.div>
          
          <motion.div 
            className="benefit-item"
            whileHover={{ scale: 1.03 }}
          >
            <h3>State-of-the-Art Equipment</h3>
            <p>Modern machines and facilities for an optimal workout experience</p>
          </motion.div>
          
          <motion.div 
            className="benefit-item"
            whileHover={{ scale: 1.03 }}
          >
            <h3>Nutrition & Wellness</h3>
            <p>Diet plans and tips to complement your fitness journey</p>
          </motion.div>
          
          <motion.div 
            className="benefit-item"
            whileHover={{ scale: 1.03 }}
          >
            <h3>Supportive Community</h3>
            <p>Connect, motivate, and grow with like-minded fitness enthusiasts</p>
          </motion.div>
        </div>

        <motion.div 
          className="cta-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="cta-content">
            <p className="cta-text">Join us today and take the first step towards a healthier, stronger, and happier you! 💪🔥</p>
            <button className="cta-button">Get Started Now</button>
          </div>

          <div className="feature-boxes">
            <motion.div 
              className="feature-box"
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon">👥</div>
              <h3>Dedicated Team</h3>
            </motion.div>

            <motion.div 
              className="feature-box"
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon">⚙️</div>
              <h3>Clean Setup</h3>
            </motion.div>

            <motion.div 
              className="feature-box"
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon">🔄</div>
              <h3>24/7 Support</h3>
            </motion.div>

            <motion.div 
              className="feature-box"
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon">🏆</div>
              <h3>Winning Award</h3>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JoinUs;