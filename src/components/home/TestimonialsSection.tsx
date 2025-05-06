import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    content: "St. Noa Mawagali S.S.S. provided my child with an exceptional education that prepared them for university. The teachers are dedicated and the facilities are excellent.",
    author: "Sarah Namukasa",
    role: "Parent",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    content: "As an alumnus, I can confidently say that the values instilled in me during my time at St. Noa Mawagali have shaped my career and personal life positively.",
    author: "David Mukasa",
    role: "Alumnus, Class of 2015",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    content: "The balance between academics and co-curricular activities at this school is impressive. My daughter has grown in confidence through sports while maintaining excellent grades.",
    author: "Patricia Okiror",
    role: "Parent",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
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

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What People Say About Us
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Hear from our community of parents, students, and alumni about their experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 text-accent-400">
                <Quote size={32} />
              </div>
              <p className="mb-6 text-white/90 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;