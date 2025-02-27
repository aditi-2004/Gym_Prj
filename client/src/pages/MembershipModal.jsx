// import React from 'react';
// import { motion } from 'framer-motion';

// const MembershipModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   const planVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { duration: 0.5 }
//     },
//     hover: { 
//       scale: 1.05,
//       transition: { duration: 0.3 }
//     }
//   };

//   const buttonVariants = {
//     hover: { 
//       scale: 1.05,
//       backgroundColor: "#2563eb",
//       transition: { duration: 0.2 }
//     },
//     tap: { scale: 0.95 }
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
//     >
//       <motion.div 
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         className="bg-white rounded-lg w-full max-w-4xl p-6 mx-4"
//       >
//         <motion.div 
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           className="flex justify-between items-center mb-6"
//         >
//           <motion.h2 
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-3xl font-bold text-gray-800"
//           >
//             Join BILVINE'S ENERGYM!
//           </motion.h2>
//           <motion.button 
//             whileHover={{ scale: 1.2, rotate: 90 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 text-2xl"
//           >
//             ×
//           </motion.button>
//         </motion.div>

//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid md:grid-cols-3 gap-6"
//         >
//           {/* Basic Plan */}
//           <motion.div 
//             variants={planVariants}
//             whileHover="hover"
//             className="border rounded-lg p-6 hover:shadow-xl transition-shadow"
//           >
//             <motion.h3 variants={itemVariants} className="text-xl font-bold mb-4">Basic Plan</motion.h3>
//             <motion.p variants={itemVariants} className="text-3xl font-bold mb-4">$29.99<span className="text-sm font-normal">/month</span></motion.p>
//             <motion.ul variants={containerVariants} className="space-y-2 mb-6">
//               {["Access to gym equipment", "Basic fitness assessment", "Locker room access", "Water fountain access"].map((item, index) => (
//                 <motion.li
//                   key={index}
//                   variants={itemVariants}
//                   className="flex items-center space-x-2"
//                 >
//                   <span className="text-green-500">✓</span>
//                   <span>{item}</span>
//                 </motion.li>
//               ))}
//             </motion.ul>
//             <motion.button 
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg"
//             >
//               Select Plan
//             </motion.button>
//           </motion.div>

//           {/* Premium Plan */}
//           <motion.div 
//             variants={planVariants}
//             whileHover="hover"
//             className="border rounded-lg p-6 hover:shadow-xl transition-shadow bg-blue-50 relative"
//           >
//             <motion.div
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               className="absolute -top-2 right-4 bg-blue-600 text-white px-3 py-1 text-sm rounded-full"
//             >
//               Popular
//             </motion.div>
//             {/* Premium plan content - similar structure to Basic plan */}
//           </motion.div>

//           {/* Elite Plan */}
//           <motion.div 
//             variants={planVariants}
//             whileHover="hover"
//             className="border rounded-lg p-6 hover:shadow-xl transition-shadow"
//           >
//             {/* Elite plan content - similar structure to Basic plan */}
//           </motion.div>
//         </motion.div>

//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="mt-8 bg-gray-50 p-6 rounded-lg"
//         >
//           <motion.h3 variants={itemVariants} className="text-xl font-bold mb-4">Additional Amenities</motion.h3>
//           <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-4">
//             {/* Amenities sections */}
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default MembershipModal;