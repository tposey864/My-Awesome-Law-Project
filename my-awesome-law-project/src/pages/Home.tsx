import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import PracticeAreas from '../components/home/PracticeAreas';
import Testimonials from '../components/home/Testimonials';

const Home: React.FC = () => (
  <main>
    <HeroBanner title="Blob Law Firm" subtitle="Legal Experts" />
    <PracticeAreas />
    <Testimonials />
  </main>
);

export default Home;
