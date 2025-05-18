import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';

const AnthemPage = () => {
  const anthemSections = [
    {
      title: 'CHORUS',
      lines: [
        'St. Noa St. Noa in God we trust for the future',
        'as we strive to achieve the victory… x2',
      ],
    },
    {
      title: 'Verse 1',
      lines: [
        'The journey to success is our target, through discipline hard working with',
        'blessings of our teachers who constantly guide us with persistent love.',
      ],
    },
    {
      title: 'CHORUS',
      lines: [
        'St. Noa St. Noa in God we trust for the future',
        'as we strive to achieve the victory... x2',
      ],
    },
    {
      title: 'Verse 2',
      lines: [
        'Love, kindness and unity, the order of practice everywhere, respecting our',
        'parents together with patron, St. Noa Mawaggali.',
      ],
    },
    {
      title: 'CHORUS',
      lines: [
        'St. Noa St. Noa in God we trust for the future',
        'as we strive to achieve the victory… x2',
      ],
    },
    {
      title: 'Verse 3',
      lines: [
        'God our father of creation, we hang our future unto thee in moral cultivation,',
        'wisdom really comes from God.',
      ],
    },
    {
      title: 'CHORUS',
      lines: [
        'St. Noa St. Noa in God we trust for the future',
        'as we strive to achieve the victory… x2',
      ],
    },
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
        backgroundImage="images/sliders/1.jpg"
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
              {anthemSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-md p-8"
                >
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">{section.title}</h3>
                  <div className="space-y-2">
                    {section.lines.map((line, lineIndex) => (
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
                Our school anthem inspires us to strive for victory, unity, discipline, and faith in God, reflecting the values and spirit of St. Noa Mawagali S.S.S.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AnthemPage;