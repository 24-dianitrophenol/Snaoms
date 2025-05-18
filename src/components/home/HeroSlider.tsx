import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';

// Hero slide data
const slides = [
  {
    id: 1,
    image: 'images/photos/IMG1.JPG',
    title: 'Welcome to St. Noa Mawagali S.S.S',
    subtitle: 'Nurturing Excellence, Building Character, Shaping the Future',
    ctaText: 'Explore Our School',
    ctaLink: '/about',
  },
  {
    id: 2,
    image: 'images/photos/IMG2.JPG',
    title: 'Academic Excellence',
    subtitle: 'Providing quality education with modern teaching methods and facilities',
    ctaText: 'Our Academics',
    ctaLink: '/academics',
  },
  {
    id: 3,
    image: 'images/photos/IMG5.JPG',
    title: 'Join Our Community',
    subtitle: 'Discover the admission process and become part of our vibrant school family',
    ctaText: 'Apply Now',
    ctaLink: '/admissions/how-to-apply',
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 } 
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.8 } 
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { 
        type: 'spring',
        damping: 20,
        stiffness: 100,
        delay: custom * 0.2,
        duration: 0.8,
      },
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 to-primary-900/30"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center z-10">
            <div className="container mx-auto px-8">
              <div className="max-w-2xl">
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4"
                  custom={0}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p 
                  className="text-xl text-white/90 mb-8"
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Button to={slides[currentSlide].ctaLink} variant="accent" size="lg">
                    {slides[currentSlide].ctaText}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? 'bg-accent-500 w-6' : 'bg-white/50'
              } transition-all duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;