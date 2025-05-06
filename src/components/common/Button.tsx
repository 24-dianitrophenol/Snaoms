import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick 
}) => {
  // Define base styles based on variant and size
  const baseStyles = `inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 ${className}`;
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-sm',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white shadow-sm',
    accent: 'bg-accent-500 hover:bg-accent-600 text-primary-900 shadow-sm',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  // Combined styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;
  
  // Button variants based on link type
  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to={to} className={combinedStyles}>
          {children}
        </Link>
      </motion.div>
    );
  } else if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>
          {children}
        </a>
      </motion.div>
    );
  } else {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={combinedStyles}
        onClick={onClick}
      >
        {children}
      </motion.button>
    );
  }
};

export default Button;