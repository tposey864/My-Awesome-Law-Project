import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <nav className="bg-blue-800 text-white p-2 flex gap-4">
    <Link to="/" className="hover:underline">Home</Link>
    <Link to="/about" className="hover:underline">About</Link>
    <Link to="/services" className="hover:underline">Services</Link>
    <Link to="/contact" className="hover:underline">Contact</Link>
  </nav>
);

export default Navigation;
