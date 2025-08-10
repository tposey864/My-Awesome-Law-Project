import React from 'react';

interface HeroBannerProps {
  title: string;
  subtitle: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle }) => (
  <section className="bg-blue-700 text-white py-16 text-center">
    <h2 className="text-4xl font-bold mb-2">{title}</h2>
    <p className="text-xl">{subtitle}</p>
  </section>
);

export default HeroBanner;
