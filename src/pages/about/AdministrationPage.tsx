import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { Mail, Phone } from 'lucide-react';

const AdministrationPage = () => {
  const administrators = [
    {
      name: 'Dr. John Mukasa',
      position: 'School Director',
      image: 'https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      email: 'director@stnoamawagali.edu',
      phone: '+256 123 456 789',
      bio: 'Dr. Mukasa brings over 20 years of experience in education leadership and has been instrumental in the school\'s growth since 2010.',
    },
    {
      name: 'Mrs. Sarah Namukasa',
      position: 'Head Teacher',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      email: 'headteacher@stnoamawagali.edu',
      phone: '+256 123 456 790',
      bio: 'With extensive experience in curriculum development and student affairs, Mrs. Namukasa ensures academic excellence across all programs.',
    },
    {
      name: 'Mr. David Okiror',
      position: 'Deputy Head Teacher (Academics)',
      image: 'https://images.pexels.com/photos/5905905/pexels-photo-5905905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      email: 'academics@stnoamawagali.edu',
      phone: '+256 123 456 791',
      bio: 'Mr. Okiror oversees all academic programs and works closely with department heads to maintain high educational standards.',
    },
    {
      name: 'Ms. Patricia Akello',
      position: 'Deputy Head Teacher (Administration)',
      image: 'https://images.pexels.com/photos/5212326/pexels-photo-5212326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      email: 'admin@stnoamawagali.edu',
      phone: '+256 123 456 792',
      bio: 'Ms. Akello manages school operations and ensures smooth running of all administrative functions.',
    },
  ];

  const departments = [
    {
      name: 'Sciences Department',
      head: 'Dr. Robert Kato',
      description: 'Oversees Biology, Chemistry, and Physics programs',
    },
    {
      name: 'Mathematics Department',
      head: 'Mr. Peter Wasswa',
      description: 'Coordinates all mathematics and statistics courses',
    },
    {
      name: 'Languages Department',
      head: 'Mrs. Grace Nabatanzi',
      description: 'Manages English, Literature, and Local Language programs',
    },
    {
      name: 'Humanities Department',
      head: 'Ms. Janet Namuli',
      description: 'Coordinates History, Geography, and Religious Studies',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Administration - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Meet our dedicated administrative team at St. Noa Mawagali S.S.S." />
      </Helmet>

      <PageHeader 
        title="School Administration" 
        subtitle="Meet our dedicated leadership team"
        backgroundImage="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Senior Administration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Senior Administration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {administrators.map((admin, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={admin.image}
                      alt={admin.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-1">
                      {admin.name}
                    </h3>
                    <p className="text-accent-600 font-medium mb-3">{admin.position}</p>
                    <p className="text-gray-600 mb-4 text-sm">{admin.bio}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Mail size={16} className="mr-2" />
                        <a href={`mailto:${admin.email}`} className="hover:text-primary-600">
                          {admin.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone size={16} className="mr-2" />
                        <a href={`tel:${admin.phone}`} className="hover:text-primary-600">
                          {admin.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Department Heads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-primary-600 mb-8 text-center">
              Department Heads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-accent-600 font-medium mb-2">{dept.head}</p>
                  <p className="text-gray-600">{dept.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AdministrationPage;