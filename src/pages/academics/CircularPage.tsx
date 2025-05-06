import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { Calendar, FileText, Download } from 'lucide-react';
import Button from '../../components/common/Button';

const CircularPage = () => {
  const circulars = [
    {
      title: 'Term 1 Academic Calendar 2025',
      date: 'January 15, 2025',
      category: 'Academic Calendar',
      description: 'Detailed schedule of academic activities for Term 1, 2025',
    },
    {
      title: 'Mid-Term Examination Guidelines',
      date: 'February 1, 2025',
      category: 'Examinations',
      description: 'Important information regarding upcoming mid-term examinations',
    },
    {
      title: 'Parents Day Announcement',
      date: 'February 15, 2025',
      category: 'Events',
      description: 'Schedule and arrangements for the upcoming Parents Day',
    },
    {
      title: 'Sports Day Schedule',
      date: 'March 1, 2025',
      category: 'Sports',
      description: 'Detailed program for the annual Sports Day event',
    },
  ];

  const categories = [
    'All Circulars',
    'Academic Calendar',
    'Examinations',
    'Events',
    'Sports',
    'Administrative',
  ];

  return (
    <>
      <Helmet>
        <title>School Circulars - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Access important school circulars and announcements from St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="School Circulars" 
        subtitle="Stay Updated with Important School Announcements"
        backgroundImage="https://images.pexels.com/photos/5905442/pexels-photo-5905442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-primary-600 mb-4">
                  Categories
                </h2>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left py-2 px-4 rounded hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-colors">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="space-y-6">
                {circulars.map((circular, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-accent-600 font-medium">
                        {circular.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {circular.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">
                      {circular.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{circular.description}</p>
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                      >
                        <FileText size={16} className="mr-2" />
                        View Details
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        className="flex items-center"
                      >
                        <Download size={16} className="mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CircularPage;