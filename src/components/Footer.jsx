import React from 'react';
import Logo from './Logo';

const Footer = () => (
  <footer className="bg-gray-900 text-white p-10 mt-12">
    <div className="container mx-auto max-w-7xl text-center">
      <Logo className="text-green-500" />
      <p className="text-gray-400 mt-4 text-sm">Hujurat Homes - Exclusive Luxury Real Estate Worldwide.</p>
      <div className="mt-6 flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-green-500">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-green-500">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;
