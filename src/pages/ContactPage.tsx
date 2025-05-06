import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

const officeHours = [
  { day: 'Sunday', hours: 'Closed' },
  { day: 'Monday', hours: '9:00am – 5:30pm' },
  { day: 'Tuesday', hours: '9:00am – 5:30pm' },
  { day: 'Wednesday', hours: '9:00am – 5:30pm' },
  { day: 'Thursday', hours: '9:00am – 5:30pm' },
  { day: 'Friday', hours: '9:00am – 5:30pm' },
  { day: 'Saturday', hours: 'Closed' },
];

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Get in touch with St. Noa Mawagali S.S.S. We're here to answer your questions and provide information about our school." />
      </Helmet>

      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to help and answer any questions you might have"
        backgroundImage="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-4 md:p-6"
            >
              <h2 className="text-2xl font-display font-bold text-primary-600 mb-4">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-display font-bold text-primary-600 mb-4">Contact Information</h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-primary-600 w-5 h-5" />
                    <span>P.O Box 1922, Jinja, Uganda</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary-600 w-5 h-5" />
                    <span>+256-772-658134</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary-600 w-5 h-5" />
                    <span>+256-756-800003</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary-600 w-5 h-5" />
                    <span>st.noamawaggaliss@gmail.com</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-primary-600 mb-2 flex items-center"><Clock className="w-5 h-5 mr-2 text-primary-600" />Office Hours</h3>
                  <table className="w-full text-left text-gray-700">
                    <tbody>
                      {officeHours.map((row) => (
                        <tr key={row.day}>
                          <td className="py-1 pr-4 font-semibold">{row.day}</td>
                          <td className="py-1">{row.hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-3">
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7979.404779479319!2d33.17650589041452!3d0.43677841710176607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177e7b6add18c5c3%3A0x2347e05485dadb58!2sSt.%20Noa%20Mawagali%20S.S.S%20Mbiko!5e0!3m2!1sen!2sug!4v1746500164192!5m2!1sen!2sug"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="St. Noa Mawagali S.S.S. Mbiko Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;