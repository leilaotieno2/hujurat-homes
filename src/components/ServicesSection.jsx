import React from 'react';
import { Home, Key, Handshake } from 'lucide-react';

// Data structure for services
const SERVICES = [
  {
    icon: Home,
    title: "Buy a home",
    description: "Access over 1 million exclusive homes for sale on the website. We match you with a house you will want to call home.",
    link: "#",
    image: "https://placehold.co/150x150/ff7e7e/ffffff?text=BUY", // Placeholder for icon sketch
    color: "text-red-500",
  },
  {
    icon: Key,
    title: "Rent a home",
    description: "Browse 1 million+ high-end rental properties available across our global network. Find your perfect temporary luxury residence.",
    link: "#",
    image: "https://placehold.co/150x150/ffc107/ffffff?text=RENT", // Placeholder for icon sketch
    color: "text-yellow-500",
  },
  {
    icon: Handshake,
    title: "Sell a home",
    description: "List your exclusive property and connect with motivated high-net-worth buyers globally. We ensure a swift and confidential sale.",
    link: "#",
    image: "https://placehold.co/150x150/5bc0de/ffffff?text=SELL", // Placeholder for icon sketch
    color: "text-blue-500",
  },
];

const ServiceCard = ({ service }) => {
  // Using lucide icons for a cleaner look, matching the existing project style
  const IconComponent = service.icon; 

  return (
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg border-t-4 border-transparent hover:border-green-600 transition-all duration-300 transform hover:-translate-y-1">
      {/* Icon Area */}
      <div className={`p-4 rounded-full bg-green-50 ${service.color} mb-6`}>
        <IconComponent size={36} className="text-green-600" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 text-base">{service.description}</p>
      
      <a 
        href={service.link}
        className="flex items-center space-x-2 text-green-600 font-semibold hover:underline transition duration-150"
      >
        <span>Find A Home</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
    </div>
  );
};


const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        {/* Header */}
        <span className="text-sm font-semibold uppercase text-red-500 tracking-wider bg-red-50 rounded-full py-1 px-3 inline-block mb-3">
            Our Services
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-12 font-serif">
          Our Main Focus
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
