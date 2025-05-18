import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { Mail, Phone, Quote } from 'lucide-react';

const DirectorMessagePage = () => {
  return (
    <>
      <Helmet>
        <title>Director's Message - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="A welcome message from our school director at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="Director's Message" 
        subtitle="Welcome to St. Noa Mawagali S.S.S."
        backgroundImage="images/sliders/1.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden mb-12"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src="images/"
                    alt="School Head Teacher"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-semibold text-primary-600 mb-2">
                    Mr. Saali Leonard
                  </h2>
                  <p className="text-accent-600 font-medium mb-4">School Director</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Mail size={16} className="mr-2" />
                      <a href="mailto:director@stnoamawagali.edu" className="hover:text-primary-600">
                        saali@stnoamawagali.edu
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone size={16} className="mr-2" />
                      <a href="tel:+256123456789" className="hover:text-primary-600">
                        +256 123 456 789
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-accent-500 mb-6">
                <Quote size={48} />
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Dear Students, Parents, and Friends of St. Noa Mawagali S.S.S.,
                </p>
                <p className="text-gray-600 mb-6">
                  It is with great pleasure that I welcome you to St. Noa Mawagali S.S.S., 
                  an institution that has been at the forefront of educational excellence 
                  for over three decades. Our school's journey has been marked by continuous 
                  growth, innovation, and an unwavering commitment to nurturing young minds.
                </p>
                <p className="text-gray-600 mb-6">
                  At St. Noa Mawagali, we believe that education extends far beyond the 
                  classroom. Our holistic approach to education focuses on developing not 
                  just academic excellence, but also character, leadership skills, and a 
                  strong sense of social responsibility. We strive to create an environment 
                  where every student can discover their potential and develop the confidence 
                  to pursue their dreams.
                </p>
                <p className="text-gray-600 mb-6">
                  Our dedicated team of educators works tirelessly to provide a supportive 
                  and challenging learning environment that prepares students for success 
                  in an increasingly complex world. We emphasize critical thinking, creativity, 
                  and innovation while maintaining strong traditional values and discipline.
                </p>
                <p className="text-gray-600 mb-6">
                  As we look to the future, we remain committed to our mission of providing 
                  quality education that transforms lives and builds future leaders. I invite 
                  you to explore our website and learn more about what makes St. Noa Mawagali 
                  S.S.S. a special place for learning and growth.
                </p>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in our school. We look forward to partnering 
                  with you in your educational journey.
                </p>
                <p className="text-gray-600 font-semibold">
                  Warm regards,<br />
                  Mr. Saali Leonard<br />
                  School Head Teacher
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectorMessagePage;