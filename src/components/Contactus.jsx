
import React, { useState } from 'react';
import { Mail, Phone, Send, PlusCircle } from 'lucide-react';
import contactBackground from '/home/leila/Documents/hujurat-homes/src/assets/Images/contactus.jpg'; // Relative path


const HUJURAT_INFO = {
  address: "Suite 3, Couper Court, Opposite Citi Bank, Upper Hill P.O. Box 17501 – 00100, Nairobi",
  phone: "+254-725987627",
  email: "hujurathomes@gmail.com",
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    console.log('Thank you for your inquiry!');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 font-sans"
    >
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBackground})` }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-2xl px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-red-500 focus:border-red-500 transition duration-150 text-sm"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-red-500 focus:border-red-500 transition duration-150 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-red-500 focus:border-red-500 transition duration-150 text-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-red-500 focus:border-red-500 transition duration-150 text-sm"
              />
            </div>

            {/* Textarea */}
            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-red-500 focus:border-red-500 transition duration-150 resize-none text-sm"
            ></textarea>

            <p className="text-xs text-gray-500 pt-1">
              By submitting this form you agree to our <a href="#" className="text-blue-400 hover:underline">terms and conditions</a> and our <a href="#" className="text-blue-400 hover:underline">privacy policy</a>.
            </p>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition duration-150 flex justify-center items-center text-sm"
            >
              <Send size={18} className="mr-2" />
              Send message
            </button>
          </form>
        </div>

        {/* Footer Info */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center p-3 rounded-lg">
            <Mail size={28} className="text-blue-400 mb-2" />
            <h4 className="text-base font-semibold text-white mb-1">Email us:</h4>
            <p className="text-gray-400 text-xs">General queries, marketing, partnerships.</p>
            <a href={`mailto:${HUJURAT_INFO.email}`} className="text-blue-400 font-medium hover:underline mt-1 text-sm">{HUJURAT_INFO.email}</a>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg">
            <Phone size={28} className="text-blue-400 mb-2" />
            <h4 className="text-base font-semibold text-white mb-1">Call us:</h4>
            <p className="text-gray-400 text-xs">Speak to a member of our team.</p>
            <a href={`tel:${HUJURAT_INFO.phone}`} className="text-blue-400 font-medium hover:underline mt-1 text-sm">{HUJURAT_INFO.phone}</a>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg">
            <PlusCircle size={28} className="text-blue-400 mb-2" />
            <h4 className="text-base font-semibold text-white mb-1">Support</h4>
            <p className="text-gray-400 text-xs">For general queries and support.</p>
            <button className="text-blue-400 border border-blue-400 px-3 py-1 text-xs rounded-lg hover:bg-blue-900 transition mt-1">
              Support center
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;
