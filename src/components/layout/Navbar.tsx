import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp, GraduationCap as Graduation, Book, Users, Award, Calendar, Facebook, Youtube, Home, Search, Phone, Mail } from 'lucide-react';

interface NavItem {
  title: string;
  path: string;
  dropdown: boolean;
  icon?: React.ReactNode;
  items?: Array<{
    title: string;
    path: string;
  }>;
}

// Define dropdown menu structure
const navItems: NavItem[] = [
  {
    title: 'Home',
    path: '/',
    dropdown: false,
  },
  {
    title: 'About Us',
    path: '/about',
    dropdown: true,
    icon: <Users size={18} />,
    items: [
      { title: 'Our History', path: '/about/history' },
      { title: 'School Anthem', path: '/about/anthem' },
      { title: 'School Profile', path: '/about/profile' },
      { title: 'Administration', path: '/about/administration' },
      { title: 'Director\'s Message', path: '/about/directors-message' },
    ],
  },
  {
    title: 'Academics',
    path: '/academics',
    dropdown: true,
    icon: <Book size={18} />,
    items: [
      { title: 'Curriculum', path: '/academics/curriculum' },
      { title: 'Co-Curriculars', path: '/academics/co-curriculars' },
      { title: 'Departments', path: '/academics/departments' },
      { title: 'School Circular', path: '/academics/circular' },
      { title: 'School Performance', path: '/academics/school-performance' },
    ],
  },
  {
    title: 'Admissions',
    path: '/admissions',
    dropdown: true,
    icon: <Graduation size={18} />,
    items: [
      { title: 'Careers', path: '/admissions/careers' },
      { title: 'How to Apply', path: '/admissions/how-to-apply' },
    ],
  },
  {
    title: 'School Life',
    path: '/school-life',
    dropdown: true,
    icon: <Award size={18} />,
    items: [
      { title: 'Our Events', path: '/school-life/events' },
      { title: 'School Facilities', path: '/school-life/facilities' },
      { title: 'Prefect Body', path: '/school-life/prefect-body' },
      { title: 'School Clubs', path: '/school-life/clubs' },
      { title: 'School Gallery', path: '/school-life/gallery' },
    ],
  },
  {
    title: 'Alumni',
    path: '/alumni',
    dropdown: false,
  },
  {
    title: 'Contact Us',
    path: '/contact',
    dropdown: false,
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your search logic here
    console.log('Searching for:', searchQuery);
    // You can add navigation to search results page or handle search results here
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, overflow: 'hidden' },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <>
      {/* Top Bar - Now with better mobile responsiveness */}
      <div className="w-full bg-[#181634] text-white text-sm">
        <div className="container mx-auto px-4 py-2">
          {/* Use a flex container that stacks on mobile and is a row on desktop */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">

            {/* Left side on desktop, top line on mobile (Phone Numbers) */}
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+256772658134" className="hover:text-green-300 transition-colors whitespace-nowrap">
                  +256-772-658134
                </a>
                <span className="mx-2 text-white/60">|</span>
                <a href="tel:+256756800003" className="hover:text-green-300 transition-colors whitespace-nowrap">
                  +256-756-800003
                </a>
              </div>
            </div>

            {/* Right side on desktop, bottom line on mobile (Email and Adverts Button) */}
            {/* On mobile, this div will appear below the phone numbers div due to flex-col */}
            <div className="flex flex-row items-center justify-center md:justify-end space-x-4 md:space-x-6 mt-2 md:mt-0">
               {/* Email */}
               <div className="flex items-center">
                 <Mail size={16} className="mr-2" />
                 <a href="mailto:st.noamawaggaliss@gmail.com" className="hover:text-green-300 transition-colors whitespace-nowrap">
                   st.noamawaggaliss@gmail.com
                 </a>
               </div>
               
               {/* Adverts Button */}
               <Link to="/adverts">
                 <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded hover:bg-orange-600 transition-colors whitespace-nowrap">
                   Adverts from Snoams
                 </button>
               </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Main Header - Improved mobile layout */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo and School Info */}
            <div className="flex flex-col md:flex-row items-center md:space-x-6">
              <img src="/images/logo.png" alt="School Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain" />
              <div className="text-center md:text-left mt-4 md:mt-0">
                <h1 className="text-2xl md:text-4xl font-bold text-black">ST. NOA MAWAGALI S.S.S</h1>
                <p className="text-base md:text-lg text-black font-medium mt-1">Over 30 Years of Academic Excellence</p>
              </div>
            </div>
            
            {/* Slogan and Enroll Button */}
            <div className="flex flex-col items-center md:items-end">
              <span className="text-xl md:text-2xl font-bold text-black font-[cursive] mb-2">"Wisdom Comes from God"</span>
              <img src="/images/enroll.png" alt="Enroll Now" className="w-40 md:w-48 h-20 md:h-24 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Tag Bar - Improved mobile layout */}
      <div className="w-full bg-green-100 overflow-x-auto">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center space-x-2 min-w-max">
            <span className="bg-green-600 text-white px-3 py-1 rounded font-bold whitespace-nowrap"># Top Tags</span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded whitespace-nowrap">Games and Sports</span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded whitespace-nowrap">Admissions</span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded whitespace-nowrap">Academics</span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded whitespace-nowrap">History</span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded whitespace-nowrap">Beliefs</span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded whitespace-nowrap">Brief of Snoams</span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded whitespace-nowrap">Education Investment</span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded whitespace-nowrap">Education</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Modern mobile menu */}
      <motion.header
        className={`w-full bg-[#181634] z-50 transition-all duration-300 ${
          scrolled ? 'fixed top-0 left-0 right-0' : 'relative'
        }`}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <div className="container mx-auto px-0">
          <div className="flex justify-start items-center py-4 px-4">
            {/* Mobile Menu Button with Text */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <span className="lg:hidden text-white text-lg font-semibold">Snoams Menu</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-start space-x-6">
              {navItems.map((item, index) => (
                <div key={item.title} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className={`flex items-center space-x-1 py-4 font-medium text-white hover:text-accent-300 transition-colors`}
                        onClick={() => toggleDropdown(index)}
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.icon}
                        <span>{item.title}</span>
                        {activeDropdown === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      <AnimatePresence>
                        {activeDropdown === index && item.items && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                            onMouseEnter={() => setActiveDropdown(index)}
                            onMouseLeave={() => setActiveDropdown(null)}
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `flex items-center py-4 font-medium ${isActive ? 'text-accent-500' : 'text-white hover:text-accent-300'} transition-colors`}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Section */}
            <div className="flex items-center ml-auto">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <form onSubmit={handleSearch} className="flex items-center">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-48 px-3 py-1.5 bg-white/10 text-white placeholder-white/70 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-accent-500 text-sm"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-accent-500 text-white rounded-r-lg hover:bg-accent-600 transition-colors text-sm"
                      >
                        <Search size={16} />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors ml-2"
                aria-label="Toggle search"
              >
                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed inset-0 bg-[#181634] z-50 overflow-y-auto"
              >
                <div className="container mx-auto px-4 py-8">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center space-x-4">
                      <img src="/images/logo.png" alt="School Logo" className="w-16 h-16 object-contain" />
                      <h2 className="text-2xl font-bold text-white">Snoams Menu</h2>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="space-y-4">
                    {navItems.map((item, index) => (
                      <div key={item.title}>
                        {item.dropdown ? (
                          <div>
                            <button
                              onClick={() => toggleDropdown(index)}
                              className="flex items-center justify-between w-full py-3 text-white hover:text-accent-300 transition-colors"
                            >
                              <div className="flex items-center space-x-2">
                                {item.icon}
                                <span>{item.title}</span>
                              </div>
                              {activeDropdown === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                            <AnimatePresence>
                              {activeDropdown === index && item.items && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-8 space-y-2 mt-2 overflow-hidden"
                                >
                                  {item.items.map((subItem) => (
                                    <Link
                                      key={subItem.path}
                                      to={subItem.path}
                                      className="block py-2 text-gray-300 hover:text-accent-300 transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <NavLink
                            to={item.path}
                            className={({ isActive }) => `flex items-center space-x-2 py-3 ${isActive ? 'text-accent-500' : 'text-white hover:text-accent-300'} transition-colors`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.icon}
                            <span>{item.title}</span>
                          </NavLink>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Mobile Contact Info */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="space-y-4">
                      <a href="tel:+256772658134" className="flex items-center text-white hover:text-accent-300 transition-colors">
                        <Phone size={18} className="mr-2" />
                        +256-772-658134
                      </a>
                      <a href="mailto:st.noamawaggaliss@gmail.com" className="flex items-center text-white hover:text-accent-300 transition-colors">
                        <Mail size={18} className="mr-2" />
                        st.noamawaggaliss@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;