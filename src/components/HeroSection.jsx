import React from 'react';
import SearchBar from './SearchBar';
// NOTE: Referencing the video you uploaded (nairobi.mp4)
import luxuryVideo from '/home/leila/Documents/hujurat-homes/src/assets/Nairobi.mp4'; 

const HeroSection = ({ searchState, handleSearchChange, handleSearchSubmit }) => (
  <div className="relative pt-24 min-h-screen flex flex-col justify-center items-center overflow-hidden">
    
    {/* Video Background with ultra slow zoom */}
    {/* The 'animate-slow-zoom' class handles the slow, looping zoom effect. */}
    <video
      className="absolute inset-0 w-full h-full object-cover transform animate-slow-zoom"
      src={luxuryVideo} // Using the uploaded nairobi.mp4 video path
      autoPlay
      loop
      muted
      playsInline
      // Optional: If the video has internal panning, you might need to try keeping the video centered 
      // by slightly increasing the scale factor in the CSS keyframes.
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

    {/* Hero Content */}
    <div className="relative z-10 text-center p-6 md:p-12">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight font-serif">
        Search Your Next <br /> Luxury Home
      </h1>
      <p className="text-xl text-gray-300 font-light mb-12 max-w-xl mx-auto">
        Find new & featured exclusive properties located in your prestigious city.
      </p>
    </div>

    {/* Search Bar */}
    <SearchBar
      searchState={searchState}
      handleSearchChange={handleSearchChange}
      handleSearchSubmit={handleSearchSubmit}
    />
  </div>
);

export default HeroSection;
