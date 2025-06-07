import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const adverts = [
  { id: 1, title: 'New School Programs 2024', imageUrl: '/images/adverts/advert1.jpg' },
  { id: 2, title: 'Admission Advert', imageUrl: '/images/adverts/advert2.png' },
  { id: 3, title: 'Sports Day Event', imageUrl: '/images/adverts/advert3.jpg' },
  // Add more advert objects as needed
];

const AdvertsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Adverts - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Check out the latest adverts and flyers from St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader
        title="School Adverts"
        subtitle="Stay updated with our latest programs and events"
        backgroundImage="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Example background image
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Latest Flyers and Announcements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adverts.map((advert, index) => (
                <motion.div
                  key={advert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={advert.imageUrl}
                    alt={advert.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-primary-600">
                      {advert.title}
                    </h3>
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

export default AdvertsPage; 