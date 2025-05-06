import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const AdmissionsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <PageHeader 
        title="Admissions" 
        description="Join our prestigious institution and embark on a journey of excellence"
      />
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Admission Process</h2>
          <p className="text-gray-600 mb-4">
            Our admission process is designed to identify students who will thrive in our 
            challenging and nurturing academic environment.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Submit application form</li>
            <li>Provide academic records</li>
            <li>Entrance examination</li>
            <li>Personal interview</li>
            <li>Final selection</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirements</h2>
          <p className="text-gray-600 mb-4">
            Please ensure you have the following documents ready before applying:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Birth certificate</li>
            <li>Previous school records</li>
            <li>Passport size photographs</li>
            <li>Transfer certificate (if applicable)</li>
            <li>Character certificate</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800">Application Opens</h3>
            <p className="text-gray-600">January 15, 2025</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-semibold text-gray-800">Entrance Exam</h3>
            <p className="text-gray-600">March 1, 2025</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800">Results Declaration</h3>
            <p className="text-gray-600">March 15, 2025</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdmissionsPage;