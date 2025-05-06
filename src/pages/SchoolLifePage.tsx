import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';

const SchoolLifePage: React.FC = () => {
  const activities = [
    {
      title: 'Sports & Athletics',
      description: 'Comprehensive sports programs including football, basketball, athletics, and more.',
      image: 'https://images.com',
      link: '/school-life/facilities'
    },
    {
      title: 'Arts & Culture',
      description: 'Various cultural activities, music programs, drama club, and art exhibitions.',
      image: 'https://images.pexels.com/',
      link: '/school-life/clubs'
    },
    {
      title: 'Student Leadership',
      description: 'Opportunities for leadership through prefect body and student council.',
      image: 'https://images.pexels.com/',
      link: '/school-life/prefect-body'
    }
  ];

  return (
    <>
      <Helmet>
        <title>School Life - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Experience the vibrant school life at St. Noa Mawagali S.S.S. through our various activities, clubs, and events." />
      </Helmet>

      <PageHeader 
        title="School Life" 
        subtitle="Discover the vibrant community and activities that make our school special"
        backgroundImage="https://images.pexels.com/r=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-4">
              Life at St. Noa Mawagali
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our school offers a rich tapestry of experiences that contribute to the holistic development of our students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <Button to={activity.link} variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SchoolLifePage;