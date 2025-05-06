import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { Mail, Phone } from 'lucide-react';

const PrefectBodyPage = () => {
  const prefects = [
    {
      position: 'Head Boy',
      name: 'David Mukasa',
      class: 'S.6 Arts',
      image: 'https://images.1260&h=750&dpr=2',
      email: 'headboy@stnoamawagali.edu',
      phone: '+256 700 123 456',
      responsibilities: [
        'Lead the student body',
        'Represent students in school meetings',
        'Coordinate with administration',
        'Maintain discipline',
      ],
    },
    {
      position: 'Head Girl',
      name: 'Sarah Namukasa',
      class: 'S.6 Sciences',
      image: 'https://images.pexels.1260&h=750&dpr=2',
      email: 'headgirl@stnoamawagali.edu',
      phone: '+256 700 123 457',
      responsibilities: [
        'Lead the student body',
        'Organize student activities',
        'Mentor junior students',
        'Promote school values',
      ],
    },
    {
      position: 'Academic Prefect',
      name: 'Peter Okiror',
      class: 'S.6 Sciences',
      image: 'https://images.pexels.com',
      email: 'academics@stnoamawagali.edu',
      phone: '+256 700 123 458',
      responsibilities: [
        'Monitor academic activities',
        'Organize study groups',
        'Coordinate with teachers',
        'Support struggling students',
      ],
    },
    {
      position: 'Sports Prefect',
      name: 'Patricia Akello',
      class: 'S.5 Arts',
      image: 'https://images.pexels.com',
      email: 'sports@stnoamawagali.edu',
      phone: '+256 700 123 459',
      responsibilities: [
        'Organize sports events',
        'Maintain sports equipment',
        'Lead sports teams',
        'Promote physical fitness',
      ],
    },
  ];

  const committees = [
    {
      name: 'Disciplinary Committee',
      members: [
        'Head Prefect',
        'Deputy Head Prefect',
        'Dormitory Prefects',
        'Class Prefects',
      ],
      duties: [
        'Maintain school discipline',
        'Handle minor disciplinary cases',
        'Report major violations',
        'Promote good behavior',
      ],
    },
    {
      name: 'Academic Committee',
      members: [
        'Academic Prefect',
        'Library Prefect',
        'Class Monitors',
        'Subject Representatives',
      ],
      duties: [
        'Monitor academic progress',
        'Organize study groups',
        'Maintain library order',
        'Support weak students',
      ],
    },
    {
      name: 'Entertainment Committee',
      members: [
        'Entertainment Prefect',
        'Music Prefect',
        'Drama Prefect',
        'Cultural Leaders',
      ],
      duties: [
        'Plan school events',
        'Organize competitions',
        'Coordinate performances',
        'Manage equipment',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Prefect Body - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Meet our student leaders and prefect body at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="Prefect Body" 
        subtitle="Our Student Leadership Team"
        backgroundImage="https://images.pexels.com750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Senior Prefects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Senior Prefects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {prefects.map((prefect, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={prefect.image}
                      alt={prefect.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-1">
                      {prefect.name}
                    </h3>
                    <p className="text-accent-600 font-medium mb-2">{prefect.position}</p>
                    <p className="text-gray-600 mb-4">{prefect.class}</p>
                    <h4 className="font-semibold text-gray-700 mb-2">Responsibilities:</h4>
                    <ul className="space-y-1">
                      {prefect.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-center text-gray-600"
                        >
                          <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Committees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Prefectorial Committees
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {committees.map((committee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">
                    {committee.name}
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Members:</h4>
                    <ul className="space-y-1">
                      {committee.members.map((member, memberIndex) => (
                        <li
                          key={memberIndex}
                          className="flex items-center text-gray-600"
                        >
                          <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Duties:</h4>
                    <ul className="space-y-1">
                      {committee.duties.map((duty, dutyIndex) => (
                        <li
                          key={dutyIndex}
                          className="flex items-center text-gray-600"
                        >
                          <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                          {duty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrefectBodyPage;