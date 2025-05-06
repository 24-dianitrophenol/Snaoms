import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Mail } from 'lucide-react';

const features = [
  {
    icon: <BookOpen size={32} />,
    title: 'Academic Excellence',
    description: 'Comprehensive curriculum tailored to develop critical thinking and problem-solving skills for future success.',
    backContent: 'Our students consistently achieve outstanding results in national examinations, with many advancing to prestigious universities worldwide.'
  },
  {
    icon: <Award size={32} />,
    title: 'Co-Curricular Activities',
    description: 'Wide range of sports, arts, and clubs to nurture talents and develop well-rounded students.',
    backContent: 'From debate clubs to sports teams, music ensembles to science olympiads, we offer over 20 different activities for student engagement.'
  },
  {
    icon: <Users size={32} />,
    title: 'Dedicated Staff',
    description: 'Experienced teachers committed to providing personalized attention and fostering academic growth.',
    backContent: 'Our teachers average 15+ years of experience and regularly participate in professional development to stay current with educational trends.'
  },
  {
    icon: <Mail size={32} />,
    title: 'Modern Facilities',
    description: 'State-of-the-art learning environments including science labs, computer labs, and library resources.',
    backContent: 'Recently upgraded facilities include smart classrooms, a digital library, advanced science labs, and a modern sports complex.'
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
  hidden: { y: 20, opacity: 0 },
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

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-4">
            Why Choose St. Noa Mawagali?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a holistic educational experience that prepares students for life beyond high school.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative h-[300px] perspective-1000"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-full h-full"
                initial={false}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center backface-hidden">
                  <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute w-full h-full bg-primary-600 text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center backface-hidden"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <p className="text-lg">{feature.backContent}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;