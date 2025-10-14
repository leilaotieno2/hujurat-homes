import React from 'react';

const PropertyCard = ({ image, price, location, title }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
    <img src={image} alt={title} className="w-full h-48 object-cover"/>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">{price}</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <button className="mt-4 text-green-600 text-sm font-semibold hover:underline">View Details</button>
    </div>
  </div>
);

export default PropertyCard;
