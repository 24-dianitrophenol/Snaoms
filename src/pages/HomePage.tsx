import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/home/HeroSlider';
import FeaturesSection from '../components/home/FeaturesSection';
import NewsEvents from '../components/home/NewsEvents';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import WhatWeProvideSection from '../components/home/WhatWeProvideSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>St. Noa Mawagali S.S.S</title>
        <meta name="description" content="St. Noa Mawagali S.S.S. - A premier high school dedicated to academic excellence, character development, and holistic education." />
      </Helmet>
      
      <HeroSlider />
      <FeaturesSection />
      <WhatWeProvideSection />
      <NewsEvents />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;