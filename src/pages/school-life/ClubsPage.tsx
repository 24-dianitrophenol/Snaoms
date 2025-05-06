import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { Users, Calendar, MapPin, Clock } from 'lucide-react';
import Button from '../../components/common/Button';

const ClubsPage = () => {
  const clubs = [
    {
      name: 'Science Club',
      description: 'Explore scientific concepts through experiments and projects.',
      image: 'https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      meetingTime: 'Tuesdays, 4:00 PM',
      location: 'Science Laboratory',
      leader: 'Mr. Robert Kato',
      activities: [
        'Science experiments',
        'Research projects',
        'Science competitions',
        'Field trips',
      ],
    },
    {
      name: 'Debate Club',
      description: 'Develop public speaking and critical thinking skills.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      meetingTime: 'Wednesdays, 3:30 PM',
      location: 'Main Hall',
      leader: 'Mrs. Grace Nabatanzi',
      activities: [
        'Weekly debates',
        'Public speaking workshops',
        'Inter-school competitions',
        'Leadership training',
      ],
    },
    {
      name: 'Sports Club',
      description: 'Participate in various sports and athletic activities.',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      meetingTime: 'Daily, 4:00 PM',
      location: 'Sports Complex',
      leader: 'Mr. David Okiror',
      activities: [
        'Team sports',
        'Athletics training',
        'Sports competitions',
        'Fitness programs',
      ],
    },
    {
      name: 'Music & Drama Club',
      description: 'Express creativity through music and theatrical performances.',
      image: 'https://images.pexels.com/photos/7944154/pexels-photo-7944154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      meetingTime: 'Thursdays, 3:30 PM',
      location: 'Auditorium',
      leader: 'Ms. Patricia Akello',
      activities: [
        'Music practice',
        'Drama rehearsals',
        'School productions',
        'Cultural performances',
      ],
    },
    {
      name: 'Environmental Club',
      description: 'Promote environmental awareness and conservation.',
      image: 'https://images.pexels.com/photos/8535207/pexels-photo-8535207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      meetingTime: 'Fridays, 3:30 PM',
      location: 'School Garden',
      leader: 'Mr. Peter Wasswa',
      activities: [
        'Tree planting',
        'Recycling programs',
        'Environmental campaigns',
        'Community outreach',
      ],
    },
    {
      name: 'Art Club',
      description: 'Explore various forms of visual arts and creativity.',
      image: 'https://images.pexels.com/photos/8617636/pexels-photo-8617636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      meetingTime: 'Mondays, 4:00 PM',
      location: 'Art Studio',
      leader: 'Ms. Janet Namuli',
      activities: [
        'Drawing classes',
        'Painting workshops',
        'Art exhibitions',
        'Creative projects',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>School Clubs - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Explore our diverse range of student clubs and activities at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="School Clubs" 
        subtitle="Discover Your Passion Through Extra-Curricular Activities"
        backgroundImage="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-4">
              Our Clubs & Societies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our vibrant community of clubs and societies where you can develop new skills,
              pursue your interests, and make lasting friendships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">
                    {club.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{club.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2" />
                      <span>{club.meetingTime}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      <span>{club.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users size={16} className="mr-2" />
                      <span>{club.leader}</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-700 mb-2">Activities:</h4>
                  <ul className="space-y-1 mb-4">
                    {club.activities.map((activity, actIndex) => (
                      <li
                        key={actIndex}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>

                  <Button variant="primary" size="sm">
                    Join Club
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClubsPage;