import React from 'react';
import { Search, MapPin, LayoutGrid, DollarSign as PriceIcon, Sliders } from 'lucide-react';

const SearchBar = ({ searchState, handleSearchChange, handleSearchSubmit }) => (
  <form 
    onSubmit={handleSearchSubmit}
    className="relative z-20 w-full max-w-6xl -mt-20 md:-mt-16 p-4 md:p-6 bg-white rounded-xl shadow-2xl transition duration-500 hover:shadow-3xl mx-4"
  >
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
      {/* Location */}
      <div className="col-span-1">
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
      <div className="col-span-1">
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
      <div className="col-span-1">
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
      <div className="col-span-1 hidden md:block">
        <button type="button" className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-150 text-gray-600 font-medium flex items-center justify-center space-x-2">
          <Sliders size={18} />
          <span>Advanced Filter</span>
        </button>
      </div>

      {/* Search Button */}
      <div className="col-span-1">
        <button type="submit" className="w-full flex items-center justify-center p-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-150 space-x-2">
          <Search size={20} />
          <span className='hidden md:inline'>Search</span>
        </button>
      </div>
    </div>
  </form>
);

export default SearchBar;
