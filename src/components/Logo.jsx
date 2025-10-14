import React from 'react';
import { Home } from 'lucide-react';

const Logo = ({ className = 'text-green-600' }) => (
  <div className="flex items-center space-x-1">
    <Home className={className} size={30} />
    <span className="font-serif text-2xl font-bold tracking-tight text-gray-800">
      Hujurat<span className="text-green-600">Homes</span>
    </span>
  </div>
);

export default Logo;
