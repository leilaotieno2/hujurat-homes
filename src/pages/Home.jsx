import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BlogSection from '../components/BlogSection'; // <-- Import BlogSection

const Home = () => {
  const [searchState, setSearchState] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
  });

  const handleSearchChange = (e) => {
    setSearchState({
      ...searchState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching with:', searchState);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <HeroSection
          searchState={searchState}
          handleSearchChange={handleSearchChange}
          handleSearchSubmit={handleSearchSubmit}
        />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Blog Section */}
        <BlogSection /> {/* <-- Added BlogSection */}

        {/* Featured Listings */}
        <section className="container mx-auto max-w-7xl py-20 px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
            Featured Listings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PropertyCard 
              image="https://placehold.co/600x400/38a169/ffffff?text=Exclusive+Villa" 
              price="$12,500,000" 
              location="The Monarch Estate, Beverly Hills" 
            />
            <PropertyCard 
              image="https://placehold.co/600x400/2b6cb0/ffffff?text=Modern+Penthouse" 
              price="$6,800,000" 
              location="Skyline Penthouse, New York City" 
            />
            <PropertyCard 
              image="https://placehold.co/600x400/805ad5/ffffff?text=Beachfront+Property" 
              price="$18,000,000" 
              location="Ocean View Estate, Malibu" 
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
