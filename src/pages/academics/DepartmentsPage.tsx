import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { BookOpen, Users, Award, Clock } from 'lucide-react';
import { useDepartments } from '../../hooks/useDatabase';

const DepartmentsPage = () => {
  const { departments, loading } = useDepartments();

  const departments = [
    {
      name: 'Sciences Department',
      head: 'Mr. Nakaswa Milton',
      subjects: ['Biology', 'Chemistry', 'Physics'],
      description: 'Our Science Department is equipped with modern laboratories and experienced teachers who make learning practical and engaging.',
      image: 'https://images.pexels.com/photos/892750&dpr=2',
    },
    {
      name: 'Mathematics Department',
      head: 'Mr. Kakaire Musa',
      subjects: ['Mathematics', 'Additional Mathematics', 'Statistics'],
      description: 'The Mathematics Department focuses on developing strong analytical and problem-solving skills in students.',
      image: 'https://images.pexels.com/photos/5905442/pexels-photo-dpr=2',
    },
    {
      name: 'Languages Department',
      head: 'Ms. Joan',
      subjects: ['English Language', 'Literature in English', 'Local Languages'],
      description: 'Our Language Department nurtures effective communication skills and appreciation for literature.',
      image: 'https://images.pexels.com/photos/5212345/pex1260&h=750&dpr=2',
    },
    {
      name: 'Humanities Department',
      head: 'Mr. Tandru Pasi',
      subjects: ['History', 'Geography', 'Religious Education'],
      description: 'The Humanities Department helps students understand society, culture, and human development.',
      image: 'https://images.p?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const features = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Small Class Sizes',
      description: 'Personalized attention for each student',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Modern Facilities',
      description: 'Well-equipped laboratories and resources',
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Regular Assessment',
      description: 'Continuous evaluation and feedback',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Academic Departments - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Explore our specialized academic departments at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="Academic Departments" 
        subtitle="Excellence Through Specialized Learning"
        backgroundImage="https://images.pexels.com/photosress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Department Features */}
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

          {/* Departments */}
          <div className="space-y-16">
            {/* Dynamic Departments from Database */}
            {!loading && departments.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-display font-bold text-primary-600 mb-8">
                  Our Departments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {departments.map((department) => (
                    <div key={department.id} className="bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-2xl font-semibold text-primary-600 mb-2">
                        {department.name}
                      </h3>
                      <p className="text-accent-600 font-medium mb-4">
                        Head of Department: {department.head}
                      </p>
                      <p className="text-gray-600 mb-4">{department.description}</p>
                      <h4 className="text-lg font-semibold text-primary-600 mb-2">
                        Subjects Offered:
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {department.subjects.map((subject, subIndex) => (
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
            )}

            {departments.map((department, index) => (
              <motion.div
                key={department.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={department.image}
                      alt={department.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-semibold text-primary-600 mb-2">
                      {department.name}
                    </h2>
                    <p className="text-accent-600 font-medium mb-4">
                      Head of Department: {department.head}
                    </p>
                    <p className="text-gray-600 mb-4">{department.description}</p>
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">
                      Subjects Offered:
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {department.subjects.map((subject, subIndex) => (
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DepartmentsPage;