import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { FileText, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../../components/common/Button';

const HowToApplyPage = () => {
  const applicationSteps = [
    {
      title: 'Submit Application',
      description: 'Complete the online application form with all required information.',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: 'Entrance Examination',
      description: 'Take the entrance examination on the scheduled date.',
      icon: <Calendar className="w-8 h-8" />,
    },
    {
      title: 'Interview',
      description: 'Attend an interview with school administrators.',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: 'Final Decision',
      description: 'Receive admission decision within two weeks.',
      icon: <AlertCircle className="w-8 h-8" />,
    },
  ];

  const requirements = [
    {
      category: 'Required Documents',
      items: [
        'Completed application form',
        'Birth certificate',
        'Previous school reports (last 2 years)',
        'Passport-size photographs (2)',
        'Letter of recommendation',
        'Transfer certificate (if applicable)',
      ],
    },
    {
      category: 'Academic Requirements',
      items: [
        'Minimum grade average of B',
        'Good conduct record',
        'Satisfactory entrance exam score',
        'English language proficiency',
        'Mathematics competency',
        'Basic computer literacy',
      ],
    },
    {
      category: 'Financial Requirements',
      items: [
        'Application fee payment',
        'Registration fee',
        'First term tuition deposit',
        'Development fund contribution',
        'Caution money deposit',
        'Insurance coverage',
      ],
    },
  ];

  const importantDates = [
    {
      term: 'Term One 2025',
      dates: [
        { event: 'Application Opens', date: 'October 1, 2024' },
        { event: 'Application Deadline', date: 'December 15, 2024' },
        { event: 'Entrance Exam', date: 'January 10, 2025' },
        { event: 'Admission Results', date: 'January 25, 2025' },
      ],
    },
    {
      term: 'Term Two 2025',
      dates: [
        { event: 'Application Opens', date: 'March 1, 2025' },
        { event: 'Application Deadline', date: 'May 15, 2025' },
        { event: 'Entrance Exam', date: 'May 30, 2025' },
        { event: 'Admission Results', date: 'June 15, 2025' },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>How to Apply - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Learn about our admission process and requirements at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="How to Apply" 
        subtitle="Your Journey to Joining Our School Community"
        backgroundImage="https://images.pexergb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Application Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Application Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applicationSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                >
                  <div className="text-primary-600 flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Admission Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {requirements.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
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

          {/* Important Dates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Important Dates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {importantDates.map((term, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">
                    {term.term}
                  </h3>
                  <div className="space-y-4">
                    {term.dates.map((date, dateIndex) => (
                      <div
                        key={dateIndex}
                        className="flex justify-between items-center text-gray-600"
                      >
                        <span>{date.event}</span>
                        <span className="font-semibold">{date.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-primary-600 rounded-lg shadow-xl p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Ready to Apply?</h2>
              <p className="mb-6">
                Start your application process today and take the first step towards joining our school community.
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="accent"
                  size="lg"
                  href="#application-form"
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  to="/contact"
                  className="text-white border-white hover:bg-white/10"
                >
                  Contact Admissions
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HowToApplyPage;