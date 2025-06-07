import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { GraduationCap } from 'lucide-react'; // Keep or remove based on final design, removing for now as per request

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  // We'll use a simple timer for the splash duration instead of progress
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000); // Display for 5 seconds (increased by 2 seconds)

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
      >
        {/* School Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src="/images/logo.png"
            alt="St. Noa Mawagali S.S.S Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
          />
        </motion.div>

        {/* Welcome Text with Loading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20, backgroundPosition: '0% 50%' }} // Start gradient off-screen left
          animate={{
            opacity: 1, y: 0, backgroundPosition: '100% 50%' // Animate gradient to move right
          }}
          transition={{
            opacity: { delay: 0.5, duration: 0.8 },
            y: { delay: 0.5, duration: 0.8 },
            backgroundPosition: { delay: 1.3, duration: 1.5, ease: 'linear', repeat: Infinity } // Animate background position
          }}
          className="text-2xl md:text-3xl font-bold text-center"
          style={{
            background: 'linear-gradient(to right, #181634, #ffffff, #181634)', // Dark blue -> White -> Dark blue gradient
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 100%', // Make background wider for animation
          }}
        >
          Welcome to Snoams
        </motion.h1>

        {/* Removed: School Name, Motto, Loading Bar, Decorative Elements */}

      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen; 