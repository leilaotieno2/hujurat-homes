import React from 'react';
import { Award, ShieldCheck, Heart, LayoutGrid } from 'lucide-react';

const FeatureItem = ({ Icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300">
    <Icon size={24} className="text-green-600 flex-shrink-0 mt-1" />
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image and Quote */}
          <div className="relative">
            {/* Main Image */}
            <img 
              src="https://placehold.co/800x600/10b981/ffffff?text=Modern+Real+Estate+Office" 
              alt="Hujurat Homes Team Meeting"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
            {/* Optional Quote Block Overlay */}
            <div className="absolute -bottom-10 left-0 bg-white p-6 rounded-lg shadow-xl border-t-4 border-green-600 hidden md:block w-3/4">
                <p className="italic text-gray-700 font-medium">
                    "We don't just sell properties, we build legacies. Our dedication to ethical and exclusive real estate is unmatched."
                </p>
                <span className="mt-2 block text-right text-sm text-green-600">- CEO, Hujurat Homes</span>
            </div>
          </div>
          
          {/* Right Column: Text and Features */}
          <div className="lg:pl-8">
            <span className="text-sm font-semibold uppercase text-green-600 tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-2 mb-6 font-serif">
              The Premier <br className="hidden md:block"/> Luxury Real Estate Marketplace.
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              Since 2010, Hujurat Homes has specialized in curating and listing the world's most exclusive properties. We connect visionary buyers with homes that define luxury, supported by a network of over 3,900 agents globally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureItem 
                Icon={Award} 
                title="Elite Brokerage"
                description="Recognized globally for luxury sales and client satisfaction."
              />
              <FeatureItem 
                Icon={ShieldCheck} 
                title="Complete Security"
                description="Secure and confidential transactions 24/7."
              />
              <FeatureItem 
                Icon={Heart} 
                title="Exceptional Service"
                description="Personalized service for every client, from listing to closing."
              />
              <FeatureItem 
                Icon={LayoutGrid} 
                title="Global Listings"
                description="Access to exclusive properties in over 70 countries."
              />
            </div>
            
            <button className="mt-8 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition duration-150">
                Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
