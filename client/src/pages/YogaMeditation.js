// // src/pages/YogaMeditation.js
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './YogaMeditation.css';

// const YogaMeditation = () => {
//   const [planData, setPlanData] = useState([]);
//   const [yogaType, setYogaType] = useState('all');
//   const [meditationGoal, setMeditationGoal] = useState('relaxation');
//   const [experienceLevel, setExperienceLevel] = useState('beginner');
//   const [loading, setLoading] = useState(true);
//   const [selectedExercise, setSelectedExercise] = useState(null); // State for modal

//   useEffect(() => {
//     fetchYogaMeditationPlan();
//   }, [yogaType, meditationGoal, experienceLevel]);

//   const fetchYogaMeditationPlan = async () => {
//     setLoading(true);
//     console.log('Fetching plan with:', { yogaType, meditationGoal, experienceLevel });
//     try {
//       const response = await fetch('/assets/yogaMeditationData.json');
//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//       const data = await response.json();
//       console.log('Fetched data:', data);

//       let filteredPlan = data[yogaType] ? data[yogaType].plan : data['all'].plan;

//       if (experienceLevel === 'beginner') {
//         filteredPlan = filteredPlan.map(day => ({
//           ...day,
//           exercises: day.exercises.map(ex => ({
//             ...ex,
//             duration: Math.max(5, ex.duration - 2),
//           })),
//           meditation: day.meditation ? { ...day.meditation, duration: Math.max(5, day.meditation.duration - 2) } : null,
//         }));
//       } else if (experienceLevel === 'advanced') {
//         filteredPlan = filteredPlan.map(day => ({
//           ...day,
//           exercises: day.exercises.map(ex => ({
//             ...ex,
//             duration: ex.duration + 2,
//           })),
//           meditation: day.meditation ? { ...day.meditation, duration: day.meditation.duration + 2 } : null,
//         }));
//       }

//       if (meditationGoal === 'focus') {
//         filteredPlan = filteredPlan.map(day => ({
//           ...day,
//           meditation: day.meditation ? { ...day.meditation, name: 'Focused Breathing' } : day.meditation,
//         }));
//       } else if (meditationGoal === 'stressRelief') {
//         filteredPlan = filteredPlan.map(day => ({
//           ...day,
//           meditation: day.meditation ? { ...day.meditation, name: 'Stress Relief Meditation' } : day.meditation,
//         }));
//       }

//       setPlanData(filteredPlan);
//     } catch (error) {
//       console.error('Error fetching yoga/meditation plan:', error);
//       setPlanData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const openModal = (exercise) => {
//     setSelectedExercise(exercise);
//   };

//   const closeModal = () => {
//     setSelectedExercise(null);
//   };

//   return (
//     <div className="yoga-meditation-container">
//       <motion.h1 
//         className="title"
//         initial={{ scale: 0, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         AI-Powered Yoga & Meditation Plans
//       </motion.h1>

//       <div className="filters">
//         <motion.select 
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           onChange={(e) => setYogaType(e.target.value)} 
//           value={yogaType}
//         >
//           <option value="all">All Types</option>
//           <option value="standing">Standing</option>
//           <option value="balancing">Balancing</option>
//           <option value="backbend">Backbend</option>
//           <option value="seated">Seated</option>
//           <option value="resting">Resting</option>
//         </motion.select>

//         <motion.select 
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           onChange={(e) => setMeditationGoal(e.target.value)} 
//           value={meditationGoal}
//         >
//           <option value="relaxation">Relaxation</option>
//           <option value="focus">Focus</option>
//           <option value="stressRelief">Stress Relief</option>
//         </motion.select>

//         <motion.select 
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           onChange={(e) => setExperienceLevel(e.target.value)} 
//           value={experienceLevel}
//         >
//           <option value="beginner">Beginner</option>
//           <option value="intermediate">Intermediate</option>
//           <option value="advanced">Advanced</option>
//         </motion.select>
//       </div>

//       <div className="plan-section">
//         {loading ? (
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="loading-text"
//           >
//             Loading plans...
//           </motion.p>
//         ) : planData.length > 0 ? (
//           planData.map((day, index) => (
//             <motion.div 
//               key={day.day}
//               className="plan-day"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <h4>{day.title}</h4>
//               <ul>
//                 {day.exercises.map((exercise, idx) => (
//                   <motion.li 
//                     key={idx}
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.5, delay: idx * 0.1 }}
//                     className="exercise-item"
//                   >
//                     <img 
//                       src={exercise.image} 
//                       alt={exercise.name} 
//                       onClick={() => openModal(exercise)}
//                       style={{ width: '100px', cursor: 'pointer', marginRight: '10px' }}
//                     />
//                     {exercise.name} - {exercise.duration} min ({exercise.pose})
//                   </motion.li>
//                 ))}
//                 {day.meditation && (
//                   <motion.li 
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.5, delay: day.exercises.length * 0.1 }}
//                     className="exercise-item"
//                   >
//                     <img 
//                       src={day.meditation.image} 
//                       alt={day.meditation.name} 
//                       onClick={() => openModal(day.meditation)}
//                       style={{ width: '100px', cursor: 'pointer', marginRight: '10px' }}
//                     />
//                     Meditation: {day.meditation.name} - {day.meditation.duration} min
//                   </motion.li>
//                 )}
//               </ul>
//             </motion.div>
//           ))
//         ) : (
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="error-text"
//           >
//             No yoga or meditation plan available. Check filters or data file.
//           </motion.p>
//         )}
//       </div>

//       {selectedExercise && (
//         <div className="modal" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>{selectedExercise.name} ({selectedExercise.pose})</h2>
//             <img src={selectedExercise.image} alt={selectedExercise.name} style={{ width: '300px' }} />
//             <p><strong>Duration:</strong> {selectedExercise.duration} min</p>
//             <p><strong>Tip:</strong> {selectedExercise.tip}</p>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default YogaMeditation;





// src/pages/YogaMeditation.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './YogaMeditation.css';

const YogaMeditation = () => {
  const [planData, setPlanData] = useState([]);
  const [yogaType, setYogaType] = useState('all');
  const [meditationGoal, setMeditationGoal] = useState('relaxation');
  const [experienceLevel, setExperienceLevel] = useState('beginner');
  const [loading, setLoading] = useState(true);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    fetchYogaMeditationPlan();
  }, [yogaType, meditationGoal, experienceLevel]);

  const fetchYogaMeditationPlan = async () => {
    setLoading(true);
    try {
      const response = await fetch('/assets/yogaMeditationData.json');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      let filteredPlan = data[yogaType] ? data[yogaType].plan : data['all'].plan;

      if (experienceLevel === 'beginner') {
        filteredPlan = filteredPlan.map(day => ({
          ...day,
          exercises: day.exercises.map(ex => ({
            ...ex,
            duration: Math.max(5, ex.duration - 2),
          })),
          meditation: day.meditation ? { ...day.meditation, duration: Math.max(5, day.meditation.duration - 2) } : null,
        }));
      } else if (experienceLevel === 'advanced') {
        filteredPlan = filteredPlan.map(day => ({
          ...day,
          exercises: day.exercises.map(ex => ({
            ...ex,
            duration: ex.duration + 2,
          })),
          meditation: day.meditation ? { ...day.meditation, duration: day.meditation.duration + 2 } : null,
        }));
      }

      if (meditationGoal === 'focus') {
        filteredPlan = filteredPlan.map(day => ({
          ...day,
          meditation: day.meditation ? { ...day.meditation, name: 'Focused Breathing' } : day.meditation,
        }));
      } else if (meditationGoal === 'stressRelief') {
        filteredPlan = filteredPlan.map(day => ({
          ...day,
          meditation: day.meditation ? { ...day.meditation, name: 'Stress Relief Meditation' } : day.meditation,
        }));
      }

      setPlanData(filteredPlan);
    } catch (error) {
      console.error('Error fetching yoga/meditation plan:', error);
      setPlanData([]);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (exercise) => setSelectedExercise(exercise);
  const closeModal = () => setSelectedExercise(null);

  return (
    <div className="yoga-meditation-container">
      <motion.h1
        className="title"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      >
       Yoga & Meditation Plans
      </motion.h1>

      <div className="filters">
        <motion.select
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onChange={(e) => setYogaType(e.target.value)}
          value={yogaType}
          className="filter-select"
        >
          <option value="all">All Types</option>
          <option value="standing">Standing</option>
          <option value="balancing">Balancing</option>
          <option value="backbend">Backbend</option>
          <option value="seated">Seated</option>
          <option value="resting">Resting</option>
          <option value="focus relief relaxation">Focus Relief Relaxation</option>
        </motion.select>

        <motion.select
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          onChange={(e) => setMeditationGoal(e.target.value)}
          value={meditationGoal}
          className="filter-select"
        >
          <option value="relaxation">Relaxation</option>
          <option value="focus">Focus</option>
          <option value="stressRelief">Stress Relief</option>
        </motion.select>

        <motion.select
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          onChange={(e) => setExperienceLevel(e.target.value)}
          value={experienceLevel}
          className="filter-select"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </motion.select>
      </div>

      <div className="plan-section">
        {loading ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="loading-text"
            exit={{ opacity: 0 }}
          >
            Loading plans...
          </motion.p>
        ) : planData.length > 0 ? (
          planData.map((day, index) => (
            <motion.div
              key={day.day}
              className="plan-day"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8, type: 'spring' }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(90, 141, 238, 0.5)' }}
            >
              <motion.h4
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {day.title}
              </motion.h4>
              <ul>
                {day.exercises.map((exercise, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="exercise-item"
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <motion.img
                      src={exercise.image || '/assets/placeholder.jpg'}
                      alt={exercise.name}
                      onClick={() => openModal(exercise)}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      style={{ width: '100px', cursor: 'pointer', marginRight: '15px', borderRadius: '10px' }}
                    />
                    <span onClick={() => openModal(exercise)} style={{ cursor: 'pointer' }}>
                      {exercise.name} - {exercise.duration} min ({exercise.pose})
                    </span>
                  </motion.li>
                ))}
                {day.meditation && (
                  <motion.li
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: day.exercises.length * 0.1, duration: 0.5 }}
                    className="exercise-item"
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <motion.img
                      src={day.meditation.image || '/assets/placeholder.jpg'}
                      alt={day.meditation.name}
                      onClick={() => openModal(day.meditation)}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      style={{ width: '100px', cursor: 'pointer', marginRight: '15px', borderRadius: '10px' }}
                    />
                    <span onClick={() => openModal(day.meditation)} style={{ cursor: 'pointer' }}>
                      Meditation: {day.meditation.name} - {day.meditation.duration} min
                    </span>
                  </motion.li>
                )}
              </ul>
            </motion.div>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="error-text"
          >
            No yoga or meditation plan available. Check filters or data file.
          </motion.p>
        )}
      </div>

      <AnimatePresence>
        {selectedExercise && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ y: -50, scale: 0.8 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {selectedExercise.name} ({selectedExercise.pose})
              </motion.h2>
              <motion.img
                src={selectedExercise.image || '/assets/placeholder.jpg'}
                alt={selectedExercise.name}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ width: '300px', marginBottom: '15px', borderRadius: '10px' }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <strong>Duration:</strong> {selectedExercise.duration} min
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <strong>Tip:</strong> {selectedExercise.tip}
              </motion.p>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={closeModal}
                whileHover={{ scale: 1.1, backgroundColor: '#72a7ff' }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default YogaMeditation;