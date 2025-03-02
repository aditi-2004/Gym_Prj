
// // src/pages/Home.js
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
//             <img src="/assets/images/home.png" alt="Gym" />
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
//             {/* <Link to="/fitness-planner" className="link"><span>FITNESS PLANNER</span></Link>  */}
//             <Link to="/postures" className="link"><span>POSTURES</span></Link>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// //images background
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import './Home.css';

// const Home = () => {
//   const [username, setUsername] = useState('');
//   const [backgroundIndex, setBackgroundIndex] = useState(0);
//   const backgroundImages = [
//     '/assets/images/bg1.png',
//     '/assets/images/bg2.png',
//     '/assets/images/bg3.png',
//     '/assets/images/home.png'
//   ];

//   useEffect(() => {
//     // Preload images
//     backgroundImages.forEach((image) => {
//       const img = new Image();
//       img.src = image;
//     });

//     console.log('useEffect running with backgroundIndex:', backgroundIndex); // Debug log
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }

//     const interval = setInterval(() => {
//       console.log('Interval running, current index:', backgroundIndex); // Debug log
//       setBackgroundIndex((prevIndex) => {
//         const newIndex = (prevIndex + 1) % backgroundImages.length;
//         console.log('New background index:', newIndex); // Debug log
//         return newIndex;
//       });
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [backgroundImages]);

//   const handleLogout = () => {
//     localStorage.removeItem('email');
//     localStorage.removeItem('password');
//     localStorage.removeItem('username');
//     setUsername('');
//   };

//   return (
//     <div className="main">
//       <div 
//         className="background-slideshow" 
//         style={{ 
//           backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
//           animation: 'fadeBackground 5s infinite'
//         }}
//       />
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
//             <img src="/assets/images/home.png" alt="Bilvine Fitness Empire Gym" />
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

//vedio background
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import './Home.css';

// const Home = () => {
//   const [username, setUsername] = useState('');
//   const [videoIndex, setVideoIndex] = useState(0); // Track which video to show
//   const backgroundVideos = [
//     '/assets/images/AdobeStock_306147114_Video_HD_Preview.mp4',
//     '/assets/images/AdobeStock_618060694_Video_HD_Preview.mp4'
//   ];

//   useEffect(() => {
//     // Preload videos
//     backgroundVideos.forEach((video) => {
//       const vid = document.createElement('video');
//       vid.src = video;
//       vid.load();
//     });

//     console.log('useEffect running with videoIndex:', videoIndex); // Debug log
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }

//     // Set up the video slideshow interval (e.g., change video every 5 seconds)
//     const interval = setInterval(() => {
//       console.log('Interval running, current index:', videoIndex); // Debug log
//       setVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
//     }, 5000); // Change video every 5 seconds

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, [backgroundVideos]);

//   const handleLogout = () => {
//     localStorage.removeItem('email');
//     localStorage.removeItem('password');
//     localStorage.removeItem('username');
//     setUsername('');
//   };

//   return (
//     <div className="main">
//       {/* Video background slideshow */}
//       <video 
//         className="background-video" 
//         autoPlay 
//         loop 
//         muted 
//         playsInline
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           zIndex: -1, /* Stays behind content but above the gradient */
//           opacity: 1,
//           transition: 'opacity 1.5s ease-in-out' /* Smooth transition between videos */
//         }}
//         onError={(e) => console.error('Video loading error:', e)} // Debug error handling
//       >
//         <source src={backgroundVideos[videoIndex]} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
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
//             <img src="/assets/images/home.png" alt="Bilvine Fitness Empire Gym" />
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


// //cart adding 
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import './Home.css';

// const Home = () => {
//   const [username, setUsername] = useState('');
//   const [videoIndex, setVideoIndex] = useState(0); // Track which video to show
//   const [cartCount, setCartCount] = useState(0); // Track number of items in cart
//   const backgroundVideos = [
//     '/assets/images/AdobeStock_306147114_Video_HD_Preview.mp4',
//     '/assets/images/AdobeStock_618060694_Video_HD_Preview.mp4'
//   ];

//   useEffect(() => {
//     // Preload videos
//     backgroundVideos.forEach((video) => {
//       const vid = document.createElement('video');
//       vid.src = video;
//       vid.load();
//     });

//     console.log('useEffect running with videoIndex:', videoIndex); // Debug log
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }

//     // Load cart count from localStorage
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartCount(storedCart.length);

//     // Set up the video slideshow interval (e.g., change video every 5 seconds)
//     const interval = setInterval(() => {
//       console.log('Interval running, current index:', videoIndex); // Debug log
//       setVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
//     }, 5000); // Change video every 5 seconds

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, [backgroundVideos]);

//   const handleLogout = () => {
//     localStorage.removeItem('email');
//     localStorage.removeItem('password');
//     localStorage.removeItem('username');
//     setUsername('');
//   };

//   return (
//     <div className="main">
//       {/* Video background slideshow */}
//       <video 
//         className="background-video" 
//         autoPlay 
//         loop 
//         muted 
//         playsInline
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           zIndex: -1, /* Stays behind content but above the gradient */
//           opacity: 1,
//           transition: 'opacity 1.5s ease-in-out' /* Smooth transition between videos */
//         }}
//         onError={(e) => console.error('Video loading error:', e)} // Debug error handling
//       >
//         <source src={backgroundVideos[videoIndex]} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
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
//                 <li>
//                   <Link to="/cart" className="link cart-link">
//                     Cart {cartCount > 0 && `(${cartCount})`}
//                   </Link>
//                 </li>
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
//             <img src="/assets/images/home.png" alt="Bilvine Fitness Empire Gym" />
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

//text increase

import React, { useState, useEffect, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const [videoIndex, setVideoIndex] = useState(0); // Track which video to show
  const [cartCount, setCartCount] = useState(0); // Track number of items in cart
  const history = useHistory(); // Use useHistory for react-router-dom v5
  const backgroundVideos = useMemo(() => [
    '/assets/images/AdobeStock_306147114_Video_HD_Preview.mp4',
    '/assets/images/AdobeStock_618060694_Video_HD_Preview.mp4'
  ], []); // Memoize backgroundVideos to prevent re-creation on every render

  useEffect(() => {
    // Preload videos
    backgroundVideos.forEach((video) => {
      const vid = document.createElement('video');
      vid.src = video;
      vid.load();
    });

    console.log('useEffect running with videoIndex:', videoIndex); // Debug log
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // Load cart count from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(storedCart.length);

    // Set up the video slideshow interval (e.g., change video every 5 seconds)
    const interval = setInterval(() => {
      console.log('Interval running, current index:', videoIndex); // Debug log
      setVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
    }, 5000); // Change video every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [backgroundVideos, videoIndex]); // Dependencies include memoized backgroundVideos and videoIndex

  const handleLogout = () => {
    // Clear all user-related data from localStorage (matching the older Home.js)
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('username');
    
    // Reset the username state
    setUsername('');
    
    // Redirect to the login page using useHistory
    history.push('/login');
  };

  return (
    <div className="main">
      {/* Video background slideshow */}
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1, /* Stays behind content but above the gradient */
          opacity: 1,
          transition: 'opacity 1.5s ease-in-out' /* Smooth transition between videos */
        }}
        onError={(e) => console.error('Video loading error:', e)} // Debug error handling
      >
        <source src={backgroundVideos[videoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="page1">
        <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>I CAN!</motion.h1>
        <div className="top">
          <div className="header container">
            <motion.div className="logo" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">BILVINE'S ENERGYM<span className="text-teal-500">!</span></h2>
            </motion.div>
            <div className="nav-link">
              <ul className="flex gap-6 lg:gap-8 items-center">
                <li><Link to="/" className="link text-lg lg:text-xl">HOME</Link></li>
                <li><Link to="/merchandise" className="link text-lg lg:text-xl">Merchandise</Link></li>
                <li><Link to="/shop" className="link text-lg lg:text-xl">Shop</Link></li>
                <li><Link to="/support" className="link text-lg lg:text-xl">Support</Link></li>
                <li>
                  <Link to="/cart" className="link cart-link text-lg lg:text-xl">
                    Cart {cartCount > 0 && `(${cartCount})`}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="back">
              {username ? (
                <div className="flex items-center gap-4">
                  <span className="text-lg lg:text-xl font-medium">Welcome, {username}</span>
                  <button className="btn text-base lg:text-lg px-6 py-3 rounded-full" onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <Link to="/login" className="btn text-base lg:text-lg px-6 py-3 rounded-full">Login</Link>
              )}
            </div>
          </div>
          <motion.div className="content" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2>"Look in the mirror. That's your competition"</h2>
            {/* <h3>ABHISHEK DHIMAN</h3> */}
          </motion.div>
        </div>
        <div className="footer-up">
          <motion.div className="image" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <img src="/assets/images/home.png" alt="Bilvine Fitness Empire Gym" />
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
            <Link to="/postures" className="link"><span>POSTURES</span></Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;