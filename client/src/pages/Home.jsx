// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import './Home.css';

// const Home = () => {
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('email');
//     localStorage.removeItem('password');
//     localStorage.removeItem('username');
//     setUsername('');
//   };

//   return (
//     <div className="main">
//       <div className="page1">
//         <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>I CAN!</motion.h1>
//         <div className="top">
//           <div className="header container">
//             <motion.div className="logo" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
//               <h2>BILVINE'S ENERGYM<span>!</span></h2>
//             </motion.div>
//             <div className="nav-link">
//               <ul>
//                 <li><Link to="/" className="link">HOME</Link></li>
//                 <li><Link to="/merchandise" className="link">Merchandise</Link></li>
//                 <li><Link to="/shop" className="link">Shop</Link></li>
//                 <li><Link to="/support" className="link">Support</Link></li>
//               </ul>
//             </div>
//             <div className="back">
//               {username ? (
//                 <div>
//                   <span>Welcome, {username}</span>
//                   <button className="btn" onClick={handleLogout}>Logout</button>
//                 </div>
//               ) : (
//                 <Link to="/login" className="btn">Login</Link>
//               )}
//             </div>
//           </div>
//           <motion.div className="content" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
//             <h2>"Look in the mirror. That's your competition"</h2>
//             <h3>ABHISHEK DHIMAN</h3>
//           </motion.div>
//         </div>
//         <div className="footer-up">
//           <motion.div className="image" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
//             <img src="/assets/images/gym3.png" alt="Gym" />
//           </motion.div>
//           <motion.div className="footer-content" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
//             <p>"Embark on a transformative fitness journey with our state-of-the-art gym, where passion meets purpose, and every workout is a step towards a healthier, stronger you."</p>
//             <Link to="/join-us">
//               <motion.button className="btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>JOIN US!</motion.button>
//             </Link>
//           </motion.div>
//           <motion.div className="About" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
//             <Link to="/diet"><span>DIET PLANS</span></Link>
//             <Link to="/workout"><span>WORKOUT PLAN</span></Link>
//             <Link to="/expert-advice"><span>EXPERT ADVICE</span></Link>
//             <Link to="/FatToFitCourse"><span>Fat to Fit Course</span></Link>
//             <Link to="/postures" className="link"><span>POSTURES</span></Link>

//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('username');
    setUsername('');
  };

  return (
    <div className="main">
      <div className="page1">
        <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>I CAN!</motion.h1>
        <div className="top">
          <div className="header container">
            <motion.div className="logo" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2>BILVINE'S ENERGYM<span>!</span></h2>
            </motion.div>
            <div className="nav-link">
              <ul>
                <li><Link to="/" className="link">HOME</Link></li>
                <li><Link to="/merchandise" className="link">Merchandise</Link></li>
                <li><Link to="/shop" className="link">Shop</Link></li>
                <li><Link to="/support" className="link">Support</Link></li>
              </ul>
            </div>
            <div className="back">
              {username ? (
                <div>
                  <span>Welcome, {username}</span>
                  <button className="btn" onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <Link to="/login" className="btn">Login</Link>
              )}
            </div>
          </div>
          <motion.div className="content" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2>"Look in the mirror. That's your competition"</h2>
            <h3>ABHISHEK DHIMAN</h3>
          </motion.div>
        </div>
        <div className="footer-up">
          <motion.div className="image" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <img src="/assets/images/gym3.png" alt="Gym" />
          </motion.div>
          <motion.div className="footer-content" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <p>"Embark on a transformative fitness journey with our state-of-the-art gym, where passion meets purpose, and every workout is a step towards a healthier, stronger you."</p>
            <Link to="/join-us">
              <motion.button className="btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>JOIN US!</motion.button>
            </Link>
          </motion.div>
          <motion.div className="About" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <Link to="/diet"><span>DIET PLANS</span></Link>
            <Link to="/workout"><span>WORKOUT PLAN</span></Link>
            <Link to="/expert-advice"><span>EXPERT ADVICE</span></Link>
            <Link to="/FatToFitCourse"><span>Fat to Fit Course</span></Link>
            {/* <Link to="/fitness-planner" className="link"><span>FITNESS PLANNER</span></Link>  */}
            <Link to="/postures" className="link"><span>POSTURES</span></Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;