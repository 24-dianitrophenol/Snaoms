import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';

const AnthemPage = () => {
  const verses = [
    {
      title: 'Verse 1',
      lines: [
        'St. Noa Mawagali, our beacon bright',
        'Leading us forward through day and night',
        'With knowledge and wisdom, we shall grow',
        'In unity and strength, our spirits flow'
      ]
    },
    {
      title: 'Chorus',
      lines: [
        'St. Noa Mawagali, proud and true',
        'Our hearts and minds forever with you',
        'Excellence and honor guide our way',
        'As we learn and grow day by day'
      ]
    },
    {
      title: 'Verse 2',
      lines: [
        'In faith and courage, we stand as one',
        'Our journey of learning has just begun',
        'With dedication, we\'ll reach our goals',
        'Building futures, nurturing souls'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>School Anthem - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="The official anthem of St. Noa Mawagali S.S.S., embodying our values and aspirations." />
      </Helmet>

      <PageHeader 
        title="School Anthem" 
        subtitle="Our Song of Pride and Unity"
        backgroundImage="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8">Our School Anthem</h2>
            
            <div className="space-y-12">
              {verses.map((verse, index) => (
                <motion.div
                  key={verse.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-md p-8"
                >
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">{verse.title}</h3>
                  <div className="space-y-2">
                    {verse.lines.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-700 italic">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 p-6 bg-primary-50 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary-600 mb-4">About Our Anthem</h3>
              <p className="text-gray-700">
                Our school anthem was composed in 1985 and has been inspiring generations of students ever since. 
                It embodies our core values of excellence, unity, and dedication to learning. The anthem is sung 
                during all major school events and serves as a reminder of our shared mission and vision.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AnthemPage;