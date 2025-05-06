import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div 
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl overflow-hidden shadow-xl"
        >
          <div 
            className="relative flex flex-col md:flex-row items-center"
            style={{ 
              backgroundImage: `url('images/sliders/1.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary-600/90"></div>
            
            {/* Content */}
            <div className="md:w-1/2 px-8 py-12 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Join Our School Community
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  Take the first step towards a bright future. Apply for admission to St. Noa Mawagali S.S.S. and become part of our vibrant learning community.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button to="/admissions/how-to-apply" variant="accent" size="lg">
                    Apply Now
                  </Button>
                  <Button to="/contact" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Image section (shown above content on mobile, side by side on desktop) */}
            <div className="md:w-1/2 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;