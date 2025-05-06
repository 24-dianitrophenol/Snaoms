import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { BookOpen, Users, Trophy, Microscope, Computer, Music, Dumbbell, Home } from 'lucide-react';

const FacilitiesPage = () => {
  const facilities = [
    {
      category: 'Academic Facilities',
      icon: <BookOpen className="w-12 h-12" />,
      items: [
        {
          name: 'Modern Classrooms',
          description: 'Air-conditioned classrooms equipped with smart boards and multimedia facilities.',
          image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          name: 'Library',
          description: 'Extensive collection of books, digital resources, and study areas.',
          image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
      ],
    },
    {
      category: 'Science Facilities',
      icon: <Microscope className="w-12 h-12" />,
      items: [
        {
          name: 'Science Laboratories',
          description: 'Well-equipped physics, chemistry, and biology labs with modern equipment.',
          image: 'https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          name: 'Computer Labs',
          description: 'State-of-the-art computer labs with high-speed internet access.',
          image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
      ],
    },
    {
      category: 'Sports Facilities',
      icon: <Trophy className="w-12 h-12" />,
      items: [
        {
          name: 'Sports Complex',
          description: 'Multi-purpose sports complex for various indoor and outdoor activities.',
          image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          name: 'Swimming Pool',
          description: 'Olympic-sized swimming pool with trained instructors.',
          image: 'https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
      ],
    },
    {
      category: 'Arts & Culture',
      icon: <Music className="w-12 h-12" />,
      items: [
        {
          name: 'Auditorium',
          description: 'Modern auditorium for performances, events, and assemblies.',
          image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          name: 'Music Room',
          description: 'Dedicated space for music practice with instruments and equipment.',
          image: 'https://images.pexels.com/photos/7944154/pexels-photo-7944154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
      ],
    },
  ];

  const amenities = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Cafeteria',
      description: 'Modern dining facility serving nutritious meals',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Medical Center',
      description: '24/7 healthcare facility with qualified staff',
    },
    {
      icon: <Computer className="w-6 h-6" />,
      title: 'Wi-Fi Campus',
      description: 'High-speed internet access throughout',
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: 'Fitness Center',
      description: 'Well-equipped gym with trained instructors',
    },
  ];

  return (
    <>
      <Helmet>
        <title>School Facilities - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Explore our state-of-the-art facilities at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="Our Facilities" 
        subtitle="Modern Infrastructure for Quality Education"
        backgroundImage="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Amenities Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-primary-600 flex justify-center mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Main Facilities */}
          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-8">
                  <div className="text-primary-600 mr-4">
                    {facility.icon}
                  </div>
                  <h2 className="text-3xl font-display font-bold text-primary-600">
                    {facility.category}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {facility.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="h-64 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-primary-600 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FacilitiesPage;