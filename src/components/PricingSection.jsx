import React from 'react';
import { CheckCircle, XCircle, Gem, Briefcase, DollarSign } from 'lucide-react';

// --- Data & Configuration for Pricing ---
const PRICING_PLANS = [
  {
    name: "Starter Listing",
    icon: DollarSign,
    price: "$499",
    duration: "/ one-time",
    description: "Ideal for basic property exposure and self-managed sales.",
    features: [
      { text: "Standard property listing (3 months)", included: true },
      { text: "5 High-resolution photos", included: true },
      { text: "Client inquiry forwarding", included: true },
      { text: "Market analysis report", included: false },
      { text: "Dedicated agent support", included: false },
    ],
    highlight: false,
    buttonClass: "bg-green-600 text-white hover:bg-green-700", 
  },
  {
    name: "Premium Package",
    icon: Briefcase,
    price: "$1,999",
    duration: "/ month",
    description: "Comprehensive services for faster, managed property transactions.",
    features: [
      { text: "Premium property listing (Unlimited)", included: true },
      { text: "Professional photography & video tour", included: true },
      { text: "Client inquiry forwarding & screening", included: true },
      { text: "Monthly market analysis report", included: true },
      { text: "Dedicated agent support (24/7)", included: true },
    ],
    highlight: true,
    buttonClass: "bg-red-500 text-white hover:bg-red-600 shadow-xl shadow-red-200", 
  },
  {
    name: "Executive Investor",
    icon: Gem,
    price: "Custom",
    duration: "/ annual",
    description: "Tailored solutions for high-net-worth individuals and portfolio management.",
    features: [
      { text: "All Premium features included", included: true },
      { text: "Exclusive off-market access", included: true },
      { text: "Legal and financial consulting", included: true },
      { text: "International investor matching", included: true },
      { text: "Portfolio strategy sessions", included: true },
    ],
    highlight: false,
    buttonClass: "bg-green-600 text-white hover:bg-green-700", 
  },
];

// Component for a single pricing card
const PricingCard = ({ plan }) => (
  <div className={`
    flex flex-col p-8 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.03] 
    ${plan.highlight ? 'bg-white border-4 border-red-500 shadow-2xl' : 'bg-white border-2 border-gray-100'}
  `}>
    <div className="text-center mb-8">
      <div className={`inline-flex items-center justify-center p-3 rounded-full ${plan.highlight ? 'bg-red-500 text-white' : 'bg-green-50 text-green-600'} mb-4`}>
        {/* Render the icon component provided in the plan data */}
        <plan.icon size={28} /> 
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
      <p className="text-gray-500 text-sm">{plan.description}</p>
    </div>

    <div className="flex justify-center items-end mb-8">
      <span className="text-4xl font-extrabold text-gray-900">
        {plan.price}
      </span>
      <span className="text-xl text-gray-500 ml-2">{plan.duration}</span>
    </div>

    <ul className="space-y-4 flex-grow mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          {feature.included ? (
            <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1 mr-3" />
          ) : (
            <XCircle size={20} className="text-gray-400 flex-shrink-0 mt-1 mr-3" />
          )}
          <span className={`${feature.included ? 'text-gray-700' : 'text-gray-400 italic'}`}>
            {feature.text}
          </span>
        </li>
      ))}
    </ul>

    <a
      href="#"
      className={`
        mt-auto text-center px-6 py-3 font-bold rounded-full 
        ${plan.buttonClass} transition duration-200 transform hover:shadow-lg
      `}
    >
      {plan.highlight ? 'Get Started' : 'Select Plan'}
    </a>
  </div>
);

// Main Pricing Section component
const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50"> 
      <div className="container mx-auto max-w-7xl px-4 text-center">
        {/* Header */}
        <span className="text-sm font-semibold uppercase text-red-500 tracking-wider bg-red-50 rounded-full py-1 px-3 inline-block mb-3">
            Pricing Plans
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-16 font-serif">
          Find The Right Package For You
        </h2>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
