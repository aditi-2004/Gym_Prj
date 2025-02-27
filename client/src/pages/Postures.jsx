// import React, { useEffect, useState, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import './Postures.css';

// // Lazy load images
// const LazyImage = ({ src, alt }) => {
//   return <img src={src} alt={alt} loading="lazy" className="posture-image" onError={(e) => (e.target.src = '/assets/fallback-image.jpg')} />;
// };

// const Postures = () => {
//   const [postures, setPostures] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('All');
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   useEffect(() => {
//     fetch('/assets/postures.json')
//       .then((response) => response.json())
//       .then((data) => setPostures(data))
//       .catch((error) => console.error('Error loading postures:', error));
//   }, []);

//   // Memoize filtered postures to prevent re-renders
//   const filteredPostures = useMemo(() => {
//     return postures.filter((posture) => {
//       const matchesSearch = posture.name.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesMuscleGroup = selectedMuscleGroup === 'All' || posture.muscleGroup === selectedMuscleGroup;
//       return matchesSearch && matchesMuscleGroup;
//     });
//   }, [postures, searchTerm, selectedMuscleGroup]);

//   // Unique muscle groups for dropdown
//   const muscleGroups = ['All', ...new Set(postures.map((p) => p.muscleGroup))];

//   return (
//     <div className="postures-page">
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="title-gradient"
//       >
//         Workout Postures
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="subtitle"
//       >
//         Master your form with these essential workout postures.
//       </motion.p>

//       {/* Search and Filter Container */}
//       <motion.div
//         className="search-container"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//       >
//         <div className="search-wrapper">
//           <div className="search-input-wrapper">
//             <input
//               type="text"
//               placeholder="Search postures (e.g., Bench Press)..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="search-bar"
//             />
//             <span className="search-icon">🔍</span> {/* Search icon */}
//           </div>
//           <button
//             className="filter-toggle-btn"
//             onClick={() => setIsFilterOpen(!isFilterOpen)}
//           >
//             {selectedMuscleGroup === 'All' ? 'Everything ▼' : `Filter: ${selectedMuscleGroup} ▼`}
//           </button>
//           {isFilterOpen && (
//             <div className="filter-dropdown">
//               {muscleGroups.map((group) => (
//                 <button
//                   key={group}
//                   className={`filter-option ${selectedMuscleGroup === group ? 'active' : ''}`}
//                   onClick={() => {
//                     setSelectedMuscleGroup(group);
//                     setIsFilterOpen(false);
//                   }}
//                 >
//                   {group === 'All' ? 'Everything' : group}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </motion.div>

//       {/* Postures Grid */}
//       <motion.div
//         className="postures-grid"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         {filteredPostures.length > 0 ? (
//           filteredPostures.map((posture, index) => (
//             <motion.div
//               key={index}
//               className="posture-card"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <LazyImage src={posture.path} alt={posture.name} />
//               <div className="posture-overlay">
//                 <h2>{posture.name}</h2>
//                 <p>{posture.muscleGroup}</p>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//           <p>No postures found matching your criteria.</p>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default Postures;



import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import './Postures.css';

// Lazy load images
const LazyImage = ({ src, alt, onClick }) => {
  return <img src={src} alt={alt} loading="lazy" className="posture-image" onClick={onClick} onError={(e) => (e.target.src = '/assets/fallback-image.jpg')} />;
};

const Postures = () => {
  const [postures, setPostures] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State for the zoomed image

  useEffect(() => {
    fetch('/assets/postures.json')
      .then((response) => response.json())
      .then((data) => setPostures(data))
      .catch((error) => console.error('Error loading postures:', error));
  }, []);

  // Memoize filtered postures to prevent re-renders
  const filteredPostures = useMemo(() => {
    return postures.filter((posture) => {
      const matchesSearch = posture.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMuscleGroup = selectedMuscleGroup === 'All' || posture.muscleGroup === selectedMuscleGroup;
      return matchesSearch && matchesMuscleGroup;
    });
  }, [postures, searchTerm, selectedMuscleGroup]);

  // Unique muscle groups for dropdown
  const muscleGroups = ['All', ...new Set(postures.map((p) => p.muscleGroup))];

  // Close modal when clicking outside
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="postures-page">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="title-gradient"
      >
        Workout Postures
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="subtitle"
      >
        Master your form with these essential workout postures.
      </motion.p>

      {/* Search and Filter Container */}
      <motion.div
        className="search-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="search-wrapper">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search postures (e.g., Bench Press)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
            <span className="search-icon">🔍</span>
          </div>
          <button
            className="filter-toggle-btn"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            {selectedMuscleGroup === 'All' ? 'Everything ▼' : `Filter: ${selectedMuscleGroup} `}
          </button>
          {isFilterOpen && (
            <div className="filter-dropdown">
              {muscleGroups.map((group) => (
                <button
                  key={group}
                  className={`filter-option ${selectedMuscleGroup === group ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedMuscleGroup(group);
                    setIsFilterOpen(false);
                  }}
                >
                  {group === 'All' ? 'Everything' : group}
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Postures Grid */}
      <motion.div
        className="postures-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {filteredPostures.length > 0 ? (
          filteredPostures.map((posture, index) => (
            <motion.div
              key={index}
              className="posture-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <LazyImage src={posture.path} alt={posture.name} onClick={() => setSelectedImage(posture.path)} />
              <div className="posture-overlay">
                <h2>{posture.name}</h2>
                <p>{posture.muscleGroup}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p>No postures found matching your criteria.</p>
        )}
      </motion.div>

      {/* Zoom Modal */}
      {selectedImage && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
        >
          <motion.img
            src={selectedImage}
            alt="Zoomed posture"
            className="modal-image"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Postures;