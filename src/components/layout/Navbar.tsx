import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp, GraduationCap as Graduation, Book, Users, Award, Calendar, Facebook, Youtube, Home, Search } from 'lucide-react';

// Define dropdown menu structure
const navItems = [
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
      {/* Top Bar */}
      <div className="w-full bg-[#181634] flex justify-between items-center px-8 py-2 text-white text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>info@stnoamawagali.ac.ug</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span>+256 123 456 789</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span>Mbiko, Uganda</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <a href="#" className="hover:text-green-300 transition-colors">
            <Facebook size={18} />
          </a>
          <a href="#" className="hover:text-red-400 transition-colors">
            <Youtube size={18} />
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-pink-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white px-8 py-6 flex flex-col md:flex-row items-center justify-between relative">
        {/* Logo and School Info */}
        <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-6">
          <img src="images/logo.png" alt="School Logo" className="w-40 h-40 object-contain mb-2 md:mb-0" />
          <div className="text-center md:text-left md:mt-8">
            <h1 className="text-3xl md:text-5xl font-bold text-black">ST. NOA MAWAGALI S.S.S</h1>
            <p className="text-lg text-black font-medium mt-2">Over 30 Years of Academic Excellence</p>
          </div>
        </div>
        {/* Slogan and Enroll Button */}
        <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
          <span className="text-2xl md:text-3xl font-bold text-black font-[cursive] mb-2">"Wisdom Comes from God"</span>
          <img src="images/enroll.png" alt="Enroll Now" className="w-48 h-24 object-contain" />
        </div>
      </div>

      {/* Tag Bar */}
      <div className="w-full flex flex-wrap items-center gap-2 px-8 py-2 bg-green-100">
        <span className="bg-green-600 text-white px-3 py-1 rounded font-bold"># Top Tags</span>
        <span className="bg-green-50 text-green-700 px-3 py-1 rounded">Games and Sports</span>
        <span className="bg-green-50 text-green-700 px-3 py-1 rounded">Admissions</span>
        <span className="bg-green-50 text-green-700 px-3 py-1 rounded">History</span>
        <span className="bg-green-50 text-green-700 px-3 py-1 rounded">Beliefs</span>
        <span className="bg-green-50 text-green-700 px-3 py-1 rounded">Brief of BSS</span>
        <span className="bg-green-50 text-green-700 px-3 py-1 rounded">Education Investment</span>
        <span className="bg-green-50 text-green-700 px-3 py-1 rounded">Education</span>
      </div>

      {/* Navigation Bar */}
      <motion.header
        className={`w-full bg-[#181634] z-50 transition-all duration-300 ${
          scrolled ? 'fixed top-0 left-0 right-0' : 'relative'
        }`}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <div className="container mx-auto px-8 py-0">
          <div className="flex justify-between items-center">
            {/* Logo for mobile */}
            <div className="lg:hidden flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary-600 text-white flex items-center justify-center rounded">
                  <Graduation />
                </div>
                <div className="font-display font-bold text-xl text-white">
                  St. Noa Mawagali
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <NavLink to="/" className={({ isActive }) => `flex items-center py-4 font-medium ${isActive ? 'text-accent-500' : 'text-white hover:text-accent-300'} transition-colors`}>
                <Home size={18} className="mr-1" />
                Home
              </NavLink>
              {navItems.filter(item => item.title !== 'Home').map((item, index) => (
                <div key={item.title} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className={`flex items-center space-x-1 py-4 font-medium text-white hover:text-accent-300 transition-colors`}
                        onClick={() => toggleDropdown(index)}
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <span>{item.title}</span>
                        <ChevronDown size={16} />
                      </button>
                      <AnimatePresence>
                        {(activeDropdown === index) && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-20"
                            onMouseEnter={() => setActiveDropdown(index)}
                            onMouseLeave={() => setActiveDropdown(null)}
                          >
                            {item.items?.map((subItem) => (
                              <NavLink
                                key={subItem.title}
                                to={subItem.path}
                                className={({ isActive }) =>
                                  `block px-4 py-2 text-sm ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'} transition-colors`
                                }
                              >
                                {subItem.title}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block py-4 font-medium ${isActive ? 'text-accent-500' : 'text-white hover:text-accent-300'} transition-colors`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Inline Search */}
              <div className="hidden lg:flex items-center">
                <form onSubmit={handleSearch} className="flex items-center">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-64 px-4 py-2 text-sm bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                    >
                      <Search size={18} />
                    </button>
                  </div>
                </form>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="text-white" />
                ) : (
                  <Menu className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="lg:hidden fixed top-16 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="py-6 px-4">
              {navItems.map((item, index) => (
                <div key={item.title} className="mb-4">
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-2 text-primary-600 font-medium"
                        onClick={() => toggleDropdown(index)}
                      >
                        <div className="flex items-center">
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          <span>{item.title}</span>
                        </div>
                        {activeDropdown === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            className="pl-6 mt-1"
                          >
                            {item.items?.map((subItem) => (
                              <NavLink
                                key={subItem.title}
                                to={subItem.path}
                                className={({ isActive }) =>
                                  `block py-2 pl-2 border-l-2 ${
                                    isActive
                                      ? 'border-primary-600 text-primary-600'
                                      : 'border-transparent text-gray-600 hover:text-primary-600 hover:border-primary-300'
                                  } transition-colors`
                                }
                              >
                                {subItem.title}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block py-2 font-medium ${
                          isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;