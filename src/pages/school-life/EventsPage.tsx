import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import Button from '../../components/common/Button';
import { useSchoolEvents } from '../../hooks/useDatabase';

const EventsPage = () => {
  const { schoolEvents, loading } = useSchoolEvents();

  const upcomingEvents = [
    {
      title: 'Annual Sports Day',
      date: 'March 15, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'School Sports Complex',
      image: 'https://images.pexels.com/photos/60&h=750&dpr=2',
      description: 'Join us for a day of athletic competition and school spirit.',
      activities: [
        'Track and Field Events',
        'Team Sports Finals',
        'Awards Ceremony',
        'Cultural Performances',
      ],
    },
    {
      title: 'Science & Technology Fair',
      date: 'April 5, 2025',
      time: '10:00 AM - 3:00 PM',
      location: 'School Auditorium',
      image: 'https://images.pexels.com&h=750&dpr=2',
      description: 'Showcase of student projects and innovations in science and technology.',
      activities: [
        'Project Exhibitions',
        'Guest Speakers',
        'Interactive Workshops',
        'Awards Presentation',
      ],
    },
    {
      title: 'Cultural Day Celebration',
      date: 'May 20, 2025',
      time: '11:00 AM - 5:00 PM',
      location: 'School Grounds',
      image: 'https://images.pexels.=750&dpr=2',
      description: 'Celebrate the diverse cultural heritage of our school community.',
      activities: [
        'Traditional Performances',
        'Food Festival',
        'Cultural Exhibition',
        'Fashion Show',
      ],
    },
  ];

  const pastEvents = [
    {
      title: 'Career Guidance Day',
      date: 'February 10, 2025',
      image: 'https://images.pexels.c=750&dpr=2',
      highlights: 'Professional speakers from various industries shared insights with students.',
    },
    {
      title: 'Literary Week',
      date: 'January 25, 2025',
      image: 'https://imag60&h=750&dpr=2',
      highlights: 'Week-long celebration of literature featuring debates, poetry, and drama.',
    },
    {
      title: 'Parents\' Day',
      date: 'January 15, 2025',
      image: 'https://images.h=750&dpr=2',
      highlights: 'Annual meeting with parents to discuss student progress and school development.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>School Events - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Stay updated with upcoming events and activities at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="School Events" 
        subtitle="Join Us in Celebrating Learning and Achievement"
        backgroundImage="https://iinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Upcoming Events
            </h2>
            
            {/* Dynamic Events from Database */}
            {!loading && schoolEvents.length > 0 && (
              <div className="space-y-8 mb-12">
                <h3 className="text-2xl font-semibold text-primary-600 mb-6">School Events</h3>
                {schoolEvents
                  .filter(event => event.status === 'upcoming')
                  .map((event) => (
                    <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="p-6">
                        <h4 className="text-2xl font-semibold text-primary-600 mb-2">
                          {event.title}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center text-gray-600">
                            <Calendar size={16} className="mr-2" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock size={16} className="mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin size={16} className="mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users size={16} className="mr-2" />
                            <span>{event.targetAudience}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          event.category === 'academic' ? 'bg-blue-100 text-blue-800' :
                          event.category === 'sports' ? 'bg-green-100 text-green-800' :
                          event.category === 'cultural' ? 'bg-purple-100 text-purple-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {event.category}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-semibold text-primary-600 mb-2">
                        {event.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar size={16} className="mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock size={16} className="mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users size={16} className="mr-2" />
                          <span>All Students & Parents</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Activities:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {event.activities.map((activity, actIndex) => (
                            <li
                              key={actIndex}
                              className="flex items-center text-gray-600"
                            >
                              <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="primary" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Past Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
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
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <p className="text-gray-600">{event.highlights}</p>
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

export default EventsPage;