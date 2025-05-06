import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';

const AboutPage: React.FC = () => {
  // About us sections to be displayed as cards
  const aboutSections = [
    {
      title: 'Our History',
      description: 'Learn about the founding and development of St. Noa Mawagali S.S.S. over the years.',
      link: '/about/history',
      icon: '📜',
    },
    {
      title: 'School Anthem',
      description: 'Our school anthem embodies our values and aspirations.',
      link: '/about/anthem',
      icon: '🎵',
    },
    {
      title: 'School Profile',
      description: 'Details about our facilities, achievements, and educational approach.',
      link: '/about/profile',
      icon: '📊',
    },
    {
      title: 'Administration',
      description: 'Meet our leadership team responsible for guiding the school.',
      link: '/about/administration',
      icon: '👥',
    },
    {
      title: 'Director\'s Message',
      description: 'A personal message from our school director.',
      link: '/about/directors-message',
      icon: '💬',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>About Us - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Learn about the history, values, and mission of St. Noa Mawagali S.S.S. Meet our administration and discover what makes our school special." />
      </Helmet>

      <PageHeader 
        title="About Us" 
        subtitle="Discover the story, mission, and vision behind St. Noa Mawagali S.S.S."
        backgroundImage="https://images.pexels.com0&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl font-display font-bold text-primary-600 mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our School Story
            </motion.h2>
            <motion.div 
              className="prose prose-lg mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-700 mb-4">
                St. Noa Mawagali S.S.S. was founded in 1985 with the vision of providing quality education to students in Uganda. What began as a small institution with just a handful of classrooms and students has grown into one of the most respected educational institutions in the region.
              </p>
              <p className="text-gray-700 mb-4">
                Our school is dedicated to nurturing not only academic excellence but also character development, leadership skills, and a deep sense of community responsibility. We believe in providing a holistic education that prepares students to face the challenges of the modern world with confidence and integrity.
              </p>
              <p className="text-gray-700">
                With state-of-the-art facilities, experienced faculty, and a curriculum that balances academics with co-curricular activities, we strive to create an environment where every student can discover and develop their unique potential.
              </p>
            </motion.div>
          </div>

          <div className="mb-16">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-600 mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  To provide a nurturing educational environment that fosters academic excellence, character development, and community engagement, preparing students to become responsible global citizens.
                </p>
                <h2 className="text-3xl font-display font-bold text-primary-600 mb-6 mt-8">Our Vision</h2>
                <p className="text-gray-700">
                  To be a premier educational institution known for producing well-rounded graduates who excel academically, demonstrate strong moral values, and contribute positively to society.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/8617636/pexels-photo-8617636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="School building" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.h2 
            className="text-3xl font-display font-bold text-primary-600 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore More About Us
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {aboutSections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <Button to={section.link} variant="outline" size="sm">Learn More</Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;