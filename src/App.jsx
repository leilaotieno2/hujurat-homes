import React, { useState } from 'react';
import { Home, Menu, Search, Users, DollarSign, BookOpen, Mail, ListPlus, LogIn, MapPin, LayoutGrid, DollarSign as PriceIcon, Sliders, X } from 'lucide-react';

// --- Data & Configuration ---
const NAV_LINKS = [
  { name: 'Home', icon: Home },
  { name: 'About', icon: Users },
  { name: 'Services', icon: ListPlus },
  { name: 'Blog', icon: BookOpen },
  { name: 'Pricing', icon: PriceIcon },
  { name: 'Contact', icon: Mail },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    // In a real app, this would trigger an API call
  };

  const Logo = ({ className = 'text-green-600' }) => (
    <div className="flex items-center space-x-1">
      <Home className={className} size={30} />
      <span className="font-serif text-2xl font-bold tracking-tight text-gray-800">
        Hujurat<span className="text-green-600">Homes</span>
      </span>
    </div>
  );

  // --- Components ---

  const Navbar = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-shadow duration-300">
      <div className="container mx-auto flex items-center justify-between p-4 max-w-7xl">
        {/* Logo */}
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

  const HeroSection = () => (
    <div className="relative pt-24 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image and Overlay to match the dark aesthetic */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://placehold.co/1920x1080/2f3640/ffffff?text=Luxury+Home+Interior')`,
          // Subtle dark overlay to make text pop
          filter: 'grayscale(70%) brightness(50%)', 
          transform: 'scale(1.05)' // slightly enlarged for smooth effect
        }}
      ></div>
      {/* Dark overlay with green tint */}
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center p-6 md:p-12">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight font-serif">
          Search Your Next <br /> Luxury Home
        </h1>
        <p className="text-xl text-gray-300 font-light mb-12 max-w-xl mx-auto">
          Find new & featured exclusive properties located in your prestigious city.
        </p>
      </div>

      {/* Search Bar - Positioned to look like it's floating */}
      <SearchBar />
    </div>
  );

  const SearchBar = () => (
    <form 
      onSubmit={handleSearchSubmit}
      className="relative z-20 w-full max-w-6xl -mt-20 md:-mt-16 p-4 md:p-6 bg-white rounded-xl shadow-2xl transition duration-500 hover:shadow-3xl mx-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        
        {/* Location */}
        <div className="col-span-1 md:col-span-1">
          <label className="text-xs font-semibold uppercase text-gray-500 flex items-center mb-1">
            <MapPin size={14} className="mr-1 text-green-600" />
            City/Street
          </label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={searchState.location}
            onChange={handleSearchChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 text-gray-700"
          />
        </div>

        {/* Property Type */}
        <div className="col-span-1 md:col-span-1">
          <label className="text-xs font-semibold uppercase text-gray-500 flex items-center mb-1">
            <LayoutGrid size={14} className="mr-1 text-green-600" />
            Property Type
          </label>
          <select
            name="propertyType"
            value={searchState.propertyType}
            onChange={handleSearchChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 text-gray-700"
          >
            <option value="">Property Type</option>
            <option value="villa">Luxury Villa</option>
            <option value="apartment">Penthouse Apartment</option>
            <option value="estate">Country Estate</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="col-span-1 md:col-span-1">
          <label className="text-xs font-semibold uppercase text-gray-500 flex items-center mb-1">
            <PriceIcon size={14} className="mr-1 text-green-600" />
            Price Range
          </label>
          <select
            name="priceRange"
            value={searchState.priceRange}
            onChange={handleSearchChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 text-gray-700"
          >
            <option value="">Price Range</option>
            <option value="5m_10m">$5M - $10M</option>
            <option value="10m_20m">$10M - $20M</option>
            <option value="20m+">$20M+</option>
          </select>
        </div>

        {/* Advanced Filter */}
        <div className="col-span-1 md:col-span-1 hidden md:block">
          <button
            type="button"
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-150 text-gray-600 font-medium flex items-center justify-center space-x-2"
          >
            <Sliders size={18} />
            <span>Advanced Filter</span>
          </button>
        </div>

        {/* Search Button */}
        <div className="col-span-1 md:col-span-1">
          <button
            type="submit"
            className="w-full flex items-center justify-center p-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-150 space-x-2"
          >
            <Search size={20} />
            <span className='hidden md:inline'>Search</span>
          </button>
        </div>
        
        {/* Mobile Advanced Filter Button (visible only on mobile) */}
        <div className="col-span-full md:hidden">
            <button
              type="button"
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-150 text-gray-600 font-medium flex items-center justify-center space-x-2"
            >
              <Sliders size={18} />
              <span>Advanced Filter</span>
            </button>
        </div>
      </div>
    </form>
  );

  // --- Main App Render ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Placeholder for other content sections */}
        <section className="container mx-auto max-w-7xl py-20 px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Featured Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dummy Property Cards */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <img src="https://placehold.co/600x400/38a169/ffffff?text=Exclusive+Villa" alt="Property" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">$12,500,000</h3>
                <p className="text-sm text-gray-600">The Monarch Estate, Beverly Hills</p>
                <button className="mt-4 text-green-600 text-sm font-semibold hover:underline">View Details</button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <img src="https://placehold.co/600x400/2b6cb0/ffffff?text=Modern+Penthouse" alt="Property" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">$6,800,000</h3>
                <p className="text-sm text-gray-600">Skyline Penthouse, New York City</p>
                <button className="mt-4 text-green-600 text-sm font-semibold hover:underline">View Details</button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <img src="https://placehold.co/600x400/805ad5/ffffff?text=Beachfront+Property" alt="Property" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">$18,000,000</h3>
                <p className="text-sm text-gray-600">Ocean View Estate, Malibu</p>
                <button className="mt-4 text-green-600 text-sm font-semibold hover:underline">View Details</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
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
    </div>
  );
};

export default App;
