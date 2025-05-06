import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';

const GalleryPage = () => {
  const categories = [
    'All',
    'Academic',
    'Sports',
    'Cultural',
    'Events',
    'Campus Life',
  ];

  const gallery = [
    {
      category: 'Academic',
      images: [
        {
          url: 'https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Science Laboratory Session',
        },
        {
          url: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Classroom Discussion',
        },
      ],
    },
    {
      category: 'Sports',
      images: [
        {
          url: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Annual Sports Day',
        },
        {
          url: 'https://images.pexels.com/photos/8535207/pexels-photo-8535207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Football Tournament',
        },
      ],
    },
    {
      category: 'Cultural',
      images: [
        {
          url: 'https://images.pexels.com/photos/7944154/pexels-photo-7944154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Cultural Performance',
        },
        {
          url: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Traditional Dance Show',
        },
      ],
    },
    {
      category: 'Events',
      images: [
        {
          url: 'https://images.pexels.com/photos/8617636/pexels-photo-8617636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Graduation Ceremony',
        },
        {
          url: 'https://images.pexels.com/photos/5905905/pexels-photo-5905905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Parents Day',
        },
      ],
    },
    {
      category: 'Campus Life',
      images: [
        {
          url: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'School Building',
        },
        {
          url: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Library',
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Photo Gallery - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Browse through our collection of photos showcasing life at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="Photo Gallery" 
        subtitle="Capturing Moments and Memories at St. Noa Mawagali"
        backgroundImage="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full ${
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                } transition-colors duration-300`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          {gallery.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-display font-bold text-primary-600 mb-6">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    className="group relative overflow-hidden rounded-lg shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-medium">{image.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GalleryPage;