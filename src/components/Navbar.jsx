import React, { useState } from 'react';
import { Home, Menu, ListPlus, LogIn, X, Users, BookOpen, Mail, DollarSign as PriceIcon } from 'lucide-react';
import { NAV_LINKS } from '../utils/constants';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-shadow duration-300">
      <div className="container mx-auto flex items-center justify-between p-4 max-w-7xl">
        <Logo className="text-green-600" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={`#${link.name.toLowerCase()}`}
              className="text-gray-600 hover:text-green-600 transition duration-150 font-medium text-sm px-2 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-6">
            <button className="flex items-center space-x-1 text-gray-800 font-semibold border border-green-600 rounded-full py-2 px-4 transition duration-150 hover:bg-green-50">
              <ListPlus size={18} className="text-green-600" />
              <span>My List</span>
            </button>
            <button className="flex items-center space-x-2 bg-green-600 text-white font-semibold rounded-full py-2 px-6 shadow-lg hover:bg-green-700 transition duration-150">
              <LogIn size={18} />
              <span>Sign In</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute w-full bg-white shadow-xl border-t border-gray-100">
          <nav className="flex flex-col p-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-green-50 rounded-md transition duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                <link.icon size={18} className="text-green-600" />
                <span>{link.name}</span>
              </a>
            ))}
            <div className="pt-4 border-t mt-4 space-y-2">
              <button className="w-full flex items-center justify-center space-x-1 text-gray-800 font-semibold border border-green-600 rounded-full py-2 px-4 transition duration-150 hover:bg-green-50">
                <ListPlus size={18} className="text-green-600" />
                <span>My List</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white font-semibold rounded-full py-2 px-6 shadow-lg hover:bg-green-700 transition duration-150">
                <LogIn size={18} />
                <span>Sign In</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
