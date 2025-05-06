import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { Award, Users, BookOpen, Trophy } from 'lucide-react';

const ProfilePage = () => {
  const stats = [
    { icon: <Users />, label: 'Students', value: '1,200+' },
    { icon: <BookOpen />, label: 'Programs', value: '4' },
    { icon: <Trophy />, label: 'Awards', value: '50+' },
    { icon: <Award />, label: 'Years of Excellence', value: '38' },
  ];

  const facilities = [
    {
      title: 'Academic Facilities',
      items: [
        'Modern Classrooms with Smart Boards',
        'Well-equipped Science Laboratories',
        'Computer Labs with High-Speed Internet',
        'Extensive Library Collection',
      ],
    },
    {
      title: 'Sports Facilities',
      items: [
        'Olympic-sized Swimming Pool',
        'Multi-purpose Sports Complex',
        'Football and Athletics Field',
        'Indoor Games Arena',
      ],
    },
    {
      title: 'Additional Amenities',
      items: [
        'Modern Cafeteria',
        'Health Center',
        'Counseling Services',
        'Transport Services',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>School Profile - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Learn about our school's profile, facilities, and achievements at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="School Profile" 
        subtitle="Excellence in Education Since 1985"
        backgroundImage="https://images.pexels.com/photos/25640&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Key Statistics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-primary-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* School Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-6">
              School Overview
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-4">
                St. Noa Mawagali S.S.S. has been a beacon of academic excellence since its establishment in 1985. 
                Our school combines traditional values with modern educational approaches to provide a comprehensive 
                learning experience for our students.
              </p>
              <p className="text-gray-600 mb-4">
                We offer both O-level and A-level programs, following the Uganda National Curriculum while 
                incorporating international best practices in education. Our teaching methodology emphasizes 
                critical thinking, creativity, and practical application of knowledge.
              </p>
              <p className="text-gray-600">
                With a student population of over 1,200 and a team of highly qualified teachers, we maintain 
                an optimal student-teacher ratio that ensures personalized attention and effective learning.
              </p>
            </div>
          </motion.div>

          {/* Facilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-6">
              Our Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">
                    {facility.title}
                  </h3>
                  <ul className="space-y-2">
                    {facility.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;