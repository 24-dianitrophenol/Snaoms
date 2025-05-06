import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

// Sample news and events data
const newsEvents = [
  {
    id: 1,
    title: 'Annual Sports Day Competition',
    date: 'June 15, 2025',
    excerpt: 'Join us for our annual inter-house sports competition featuring track and field events, team sports, and more.',
    image: 'images/sliders/cc.jpg',
  },
  {
    id: 2,
    title: 'Science & Technology Fair',
    date: 'July 10, 2025',
    excerpt: 'Students will showcase innovative projects and experiments at our annual Science and Technology Exhibition.',
    image: 'images/sliders/1.jpg',
  },
  {
    id: 3,
    title: 'Cultural Day Celebration',
    date: 'August 5, 2025',
    excerpt: 'Experience diverse cultural performances, traditional food, and customs from around the world.',
    image: 'images/sliders/4.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
    },
  },
};

const NewsEvents: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-4">
            Latest News & Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings and upcoming events at St. Noa Mawagali S.S.S.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {newsEvents.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-accent-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Button to="/school-life/events" variant="outline" size="sm">
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Button to="/school-life/events" variant="primary">View All Events</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;