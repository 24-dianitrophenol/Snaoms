import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { Briefcase, Clock, MapPin, GraduationCap } from 'lucide-react';
import Button from '../../components/common/Button';
import { useCareers } from '../../hooks/useDatabase';

const CareersPage = () => {
  const { careers, loading } = useCareers();

  const currentOpenings = [
    {
      position: 'Mathematics Teacher',
      department: 'Mathematics Department',
      type: 'Full-time',
      experience: '3+ years',
      location: 'Main Campus',
      requirements: [
        'Bachelor\'s degree in Mathematics or related field',
        'Teaching license',
        'Experience with O-level and A-level curriculum',
        'Strong communication skills',
      ],
    },
    {
      position: 'Physics Laboratory Technician',
      department: 'Science Department',
      type: 'Full-time',
      experience: '2+ years',
      location: 'Main Campus',
      requirements: [
        'Diploma in Laboratory Technology',
        'Experience with physics lab equipment',
        'Knowledge of safety protocols',
        'Organizational skills',
      ],
    },
    {
      position: 'School Counselor',
      department: 'Student Affairs',
      type: 'Full-time',
      experience: '5+ years',
      location: 'Main Campus',
      requirements: [
        'Master\'s degree in Counseling or Psychology',
        'Experience in educational counseling',
        'Strong interpersonal skills',
        'Crisis management experience',
      ],
    },
  ];

  const benefits = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Professional Development',
      description: 'Regular training and development opportunities',
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Work-Life Balance',
      description: 'Flexible scheduling and paid time off',
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Competitive Package',
      description: 'Attractive salary and benefits',
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: 'Location',
      description: 'Modern facilities in a prime location',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Careers - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Join our team of dedicated educators and staff at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="Career Opportunities" 
        subtitle="Join Our Team of Dedicated Educators"
        backgroundImage="https://images.cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Why Work With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                >
                  <div className="text-primary-600 flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Current Openings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Current Openings
            </h2>
            
            {/* Dynamic Careers from Database */}
            {!loading && careers.length > 0 && (
              <div className="space-y-8 mb-12">
                <h3 className="text-2xl font-semibold text-primary-600 mb-6">Available Positions</h3>
                {careers
                  .filter(career => career.status === 'open')
                  .map((job) => (
                    <div key={job.id} className="bg-white rounded-lg shadow-lg p-6">
                      <div className="md:flex justify-between items-start mb-6">
                        <div>
                          <h4 className="text-xl font-semibold text-primary-600 mb-2">
                            {job.position}
                          </h4>
                          <p className="text-accent-600">{job.department}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <Button variant="primary" size="sm">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Briefcase size={16} className="mr-2" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock size={16} className="mr-2" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-2" />
                          <span>Main Campus</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <h5 className="font-semibold text-gray-700 mb-2">Requirements:</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li
                            key={reqIndex}
                            className="flex items-center text-gray-600"
                          >
                            <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 text-sm text-gray-500">
                        Deadline: {new Date(job.deadline).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
              </div>
            )}

            <div className="space-y-8">
              {currentOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="md:flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-600 mb-2">
                        {job.position}
                      </h3>
                      <p className="text-accent-600">{job.department}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button variant="primary" size="sm">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Briefcase size={16} className="mr-2" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {job.requirements.map((req, reqIndex) => (
                      <li
                        key={reqIndex}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Application Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-600 mb-6">
                How to Apply
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  To apply for any of the positions above, please send your CV and cover letter to:
                  <a href="mailto:careers@stnoamawagali.edu" className="text-primary-600 ml-2">
                    careers@stnoamawagali.edu
                  </a>
                </p>
                <p className="mb-4">
                  Please include the position you are applying for in the subject line of your email.
                </p>
                <p>
                  Only shortlisted candidates will be contacted for interviews. We thank all applicants for their interest in joining our team.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;