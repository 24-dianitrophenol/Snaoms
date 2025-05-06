import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';

const AlumniPage: React.FC = () => {
  const alumni = [
    {
      name: 'Dr. Sarah Namukasa',
      graduation: '2005',
      profession: 'Medical Doctor',
      image: 'https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'The foundation I received at St. Noa Mawagali shaped my medical career.'
    },
    {
      name: 'Eng. David Mukasa',
      graduation: '2008',
      profession: 'Civil Engineer',
      image: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'The strong mathematics program helped me excel in engineering.'
    },
    {
      name: 'Hon. Patricia Okiror',
      graduation: '2000',
      profession: 'Member of Parliament',
      image: 'https://images.pexels.com/photos/5989068/pexels-photo-5989068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'Leadership skills I gained here continue to serve me in public service.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Alumni - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Connect with the alumni network of St. Noa Mawagali S.S.S. and discover the success stories of our graduates." />
      </Helmet>

      <PageHeader 
        title="Alumni Network" 
        subtitle="Celebrating the success stories of our graduates"
        backgroundImage="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              Notable Alumni
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our alumni continue to make significant contributions in various fields across the globe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {alumni.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-1">{person.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">Class of {person.graduation}</p>
                  <p className="text-accent-600 font-medium mb-3">{person.profession}</p>
                  <p className="text-gray-600 italic">"{person.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg" href="mailto:alumni@stnoamawagali.edu">
              Join Alumni Network
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlumniPage;