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
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+256772658134" className="hover:text-green-300 transition-colors">
                  +256-772-658134
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:st.noamawaggaliss@gmail.com" className="hover:text-green-300 transition-colors">
                  st.noamawaggaliss@gmail.com
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-green-300 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-pink-300 transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
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