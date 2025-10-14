import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = ({ searchState, handleSearchChange, handleSearchSubmit }) => (
  <div className="relative pt-24 min-h-screen flex flex-col justify-center items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://placehold.co/1920x1080/2f3640/ffffff?text=Luxury+Home+Interior')`,
        filter: 'grayscale(70%) brightness(50%)',
        transform: 'scale(1.05)',
      }}
    ></div>
    <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
    <div className="relative z-10 text-center p-6 md:p-12">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight font-serif">
        Search Your Next <br /> Luxury Home
      </h1>
      <p className="text-xl text-gray-300 font-light mb-12 max-w-xl mx-auto">
        Find new & featured exclusive properties located in your prestigious city.
      </p>
    </div>
    <SearchBar
      searchState={searchState}
      handleSearchChange={handleSearchChange}
      handleSearchSubmit={handleSearchSubmit}
    />
  </div>
);

export default HeroSection;
