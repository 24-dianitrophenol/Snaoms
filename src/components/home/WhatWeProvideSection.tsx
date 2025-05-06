import React from 'react';

const services = [
  {
    title: 'Food',
    image: 'images/food.jpg',
    description: 'We provide a balanced diet to all our students!',
    color: 'bg-primary-600',
  },
  {
    title: 'Sports',
    image: 'images/sports.jpg',
    description: "We develop students' talents through games and sports. Our students participate in both national and international games and sports competitions.",
    color: 'bg-primary-600',
  },
  {
    title: 'Transport',
    image: 'images/transport.jpg',
    description: 'The school has four buses that transport our students whenever they have to go out for study trips.',
    color: 'bg-primary-600',
  },
  {
    title: 'Internet',
    image: 'images/internet.jpg',
    description: 'The Computer Laboratory is spacious and well stocked with over 100 fully functional computers that are connected to the internet to enhance research.',
    color: 'bg-primary-600',
  },
  {
    title: 'Entertainment',
    image: 'images/entertainment.jpg',
    description: 'Edutainment (Education through entertainment) is another way we teach our students. We provide various forms of entertainment to our students. E.g Movie nights, Music Dance and Drama, etc.',
    color: 'bg-primary-600',
  },
  {
    title: 'Facilities',
    image: 'images/facilities.jpg',
    description: 'We have all the facilities that students need to excel in their studies. Our facilities are some of the best in this country.',
    color: 'bg-primary-600',
  },
];

const WhatWeProvideSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-primary-600">What We Provide</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer a rigorous academic programme and a wide range of extra-curricular activities too enable students discover their talents!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-lg overflow-hidden flex flex-col h-full bg-white"
              style={{ minHeight: 400 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className={`flex-1 p-6 ${service.color} text-white flex flex-col justify-center items-center`}> 
                <h3 className="text-2xl font-bold mb-2 text-center">{service.title}</h3>
                <p className="text-base text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvideSection; 