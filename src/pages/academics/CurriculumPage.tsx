import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { BookOpen, Award, Clock, Users } from 'lucide-react';

const CurriculumPage = () => {
  const programs = [
    {
      level: 'O-Level (S1-S4)',
      subjects: [
        'English Language',
        'Mathematics',
        'Biology',
        'Chemistry',
        'Physics',
        'History',
        'Geography',
        'Religious Education',
        'Computer Studies',
        'Agriculture',
      ],
      description: 'Our O-Level program follows the Uganda National Curriculum and prepares students for their UCE examinations.',
    },
    {
      level: 'A-Level (S5-S6)',
      subjects: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Biology',
        'Economics',
        'Literature in English',
        'History',
        'Geography',
        'Computer Science',
        'General Paper',
      ],
      description: 'The A-Level program offers specialized subject combinations preparing students for university education.',
    },
  ];

  const features = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Comprehensive Curriculum',
      description: 'Balanced academic program covering all major subjects',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Quality Education',
      description: 'High standards of teaching and learning',
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Structured Learning',
      description: 'Well-planned daily schedule for optimal learning',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Small Class Sizes',
      description: 'Personalized attention for each student',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Curriculum - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Explore our comprehensive academic curriculum at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="Our Curriculum" 
        subtitle="Comprehensive Education for Academic Excellence"
        backgroundImage="https://images.pexels.com/photos/5905442/pexels-photo-5905442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Curriculum Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-primary-600 flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Academic Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Academic Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8"
                >
                  <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                    {program.level}
                  </h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <h4 className="text-lg font-semibold text-accent-600 mb-4">
                    Core Subjects
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {program.subjects.map((subject, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Teaching Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Teaching Methodology
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">
                    Our Approach
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 mt-2"></span>
                      <p className="text-gray-600">Interactive and engaging classroom sessions</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 mt-2"></span>
                      <p className="text-gray-600">Practical and laboratory work for science subjects</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 mt-2"></span>
                      <p className="text-gray-600">Regular assessments and feedback</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 mt-2"></span>
                      <p className="text-gray-600">Individual attention and support</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">
                    Assessment
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 mt-2"></span>
                      <p className="text-gray-600">Continuous assessment through tests and assignments</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 mt-2"></span>
                      <p className="text-gray-600">Mid-term and end-of-term examinations</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 mt-2"></span>
                      <p className="text-gray-600">Project-based assessments</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 mt-2"></span>
                      <p className="text-gray-600">National examination preparation</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CurriculumPage;