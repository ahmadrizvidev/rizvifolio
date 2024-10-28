// components/InitialTransition.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const loaderVariants = {
  initial: { opacity: 1, y: 0 }, // Start fully visible
  animate: { opacity: 1, y: 0 }, // Remain in the same position
  exit: { opacity: 0, y: '100%' }, // Slide out to the bottom
};

const InitialTransition = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoadingComplete(); // Call this function when loading is complete
    }, 2000); // Duration of the loader

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 flex items-center justify-center"
      initial="initial"
      animate={loading ? 'animate' : 'exit'}
      variants={loaderVariants}
      transition={{ duration: 0.5 }}
      style={{ zIndex: 9999 }}
    >
      {loading && (
        <div className="flex items-center">
          <h2 className="relative text-3xl font-extrabold text-white after:content-[''] after:absolute after:bottom-[2px] after:right-[-17px] after:w-[10px] after:h-[10px] after:bg-[#0bfa9d] after:rounded-full">
            Ahmad
          </h2>
        {/* Added ml-1 for spacing */}
            
          
        </div>
      )}
    </motion.div>
  );
};

export default InitialTransition;
