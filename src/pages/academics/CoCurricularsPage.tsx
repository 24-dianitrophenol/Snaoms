import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { Music, Trophy, Heart, Book } from 'lucide-react';

const CoCurricularsPage = () => {
  const activities = [
    {
      category: 'Sports',
      image: 'https://images.pexels.com/photos/',
      items: [
        'Football',
        'Basketball',
        'Volleyball',
        'Athletics',
        'Swimming',
        'Table Tennis',
      ],
    },
    {
      category: 'Arts & Culture',
      image: 'https://images.pexels.com',
      items: [
        'Music Club',
        'Drama Club',
        'Dance Troupe',
        'Art Club',
        'Cultural Group',
        'Creative Writing',
      ],
    },
    {
      category: 'Academic Clubs',
      image: 'https://images.pexels.com/photos/8926548/',
      items: [
        'Science Club',
        'Debate Club',
        'Mathematics Club',
        'Literature Club',
        'Computer Club',
        'Environmental Club',
      ],
    },
    {
      category: 'Leadership & Service',
      image: 'https://images.pexels.com/photos/85352',
      items: [
        'Student Council',
        'Prefect Body',
        'Community Service Club',
        'Scouts & Guides',
        'Red Cross Society',
        'Environmental Club',
      ],
    },
  ];

  const benefits = [
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Skill Development',
      description: 'Build practical and leadership skills through hands-on activities',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Personal Growth',
      description: 'Develop confidence, teamwork, and social skills',
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: 'Talent Nurturing',
      description: 'Discover and develop individual talents and interests',
    },
    {
      icon: <Book className="w-12 h-12" />,
      title: 'Holistic Education',
      description: 'Balance academic learning with practical experiences',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Co-Curricular Activities - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Explore our diverse range of co-curricular activities at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="Co-Curricular Activities" 
        subtitle="Developing Well-Rounded Individuals Through Extra-Curricular Excellence"
        backgroundImage="https://images.pexels.dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
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
          </motion.div>

          {/* Activities */}
          <div className="space-y-16">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-display font-bold text-primary-600 mb-8">
                  {activity.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="grid grid-cols-2 gap-4">
                      {activity.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center text-gray-600"
                        >
                          <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoCurricularsPage;