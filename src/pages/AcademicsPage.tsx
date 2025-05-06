import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const AcademicsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <PageHeader 
        title="Academics" 
        subtitle="Excellence in Education"
        backgroundImage="https://isrgb&w=1260&h=750&dpr=2"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academic Programs */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Academic Programs</h3>
            <p className="text-gray-600">
              Our comprehensive curriculum is designed to nurture intellectual curiosity and academic excellence.
            </p>
          </div>

          {/* Teaching Methodology */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Teaching Methodology</h3>
            <p className="text-gray-600">
              We employ innovative teaching methods that encourage critical thinking and creative problem-solving.
            </p>
          </div>

          {/* Assessment System */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Assessment System</h3>
            <p className="text-gray-600">
              Our assessment approach focuses on continuous evaluation and holistic development.
            </p>
          </div>

          {/* Academic Support */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Academic Support</h3>
            <p className="text-gray-600">
              We provide comprehensive support services to ensure every student reaches their full potential.
            </p>
          </div>
        </div>

        {/* Additional Academic Information */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Academic Excellence</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Our academic program is built on the foundation of excellence, innovation, and personalized learning. 
              We strive to create an environment where students can explore their interests, develop their skills, 
              and prepare for future success.
            </p>
            <p className="text-gray-600">
              Through a combination of rigorous academic standards, experienced faculty, and modern educational 
              resources, we ensure that our students receive a world-class education that prepares them for the 
              challenges of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AcademicsPage;