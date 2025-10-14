import React, { useState, useEffect } from 'react';
import { User, Tag, CalendarDays, ArrowRight } from 'lucide-react';

// --- Placeholder/Mock Data ---
// In a real application, this data would come from a backend API call.
const MOCK_BLOG_POSTS = [
  {
    id: 1,
    image: "https://placehold.co/600x400/10b981/ffffff?text=Interior+Design",
    author: "Admin",
    category: "Interior",
    title: "The Most Inspiring Interior Design Of 2024",
    date: new Date(Date.now() - 86400000 * 2), // 2 days ago
    link: "#",
  },
  {
    id: 2,
    image: "https://placehold.co/600x400/2b6cb0/ffffff?text=Commercial+Real+Estate",
    author: "Jane Doe",
    category: "Estate",
    title: "Recent Commercial Real Estate Transactions",
    date: new Date(Date.now() - 86400000 * 5), // 5 days ago
    link: "#",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400/805ad5/ffffff?text=Renovation+Tips",
    author: "Expert",
    category: "Room",
    title: "Renovating a Living Room? Experts Share Their Secrets",
    date: new Date(Date.now() - 86400000 * 1), // 1 day ago
    link: "#",
  },
];

// Helper function to format the date
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

// --- Blog Card Component ---
const BlogCard = ({ post }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
    {/* Image */}
    <img src={post.image} alt={post.title} className="w-full h-56 object-cover"/>
    
    <div className="p-6">
      {/* Meta Info */}
      <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
        <span className="flex items-center">
          <User size={14} className="mr-1 text-red-500" />
          By: {post.author}
        </span>
        <span className="flex items-center">
          <Tag size={14} className="mr-1 text-red-500" />
          {post.category}
        </span>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors cursor-pointer">
        {post.title}
      </h3>
      
      {/* Footer Meta and Link */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <span className="flex items-center text-sm text-gray-500">
          <CalendarDays size={14} className="mr-1 text-red-500" />
          {formatDate(post.date)}
        </span>
        <a 
          href={post.link}
          className="flex items-center text-red-500 font-semibold text-sm hover:text-green-600 transition duration-150"
        >
          READ MORE
          <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  </div>
);

// --- Main Blog Section Component ---
const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // MOCK SYSTEM: Function to simulate fetching daily, up-to-date news
  const fetchDailyRealEstateNews = () => {
    setLoading(true);
    // Simulate API call delay
    return new Promise(resolve => {
      setTimeout(() => {
        // In a real app, you'd use fetch() here to call your backend
        // that handles news aggregation (your "AI/System").
        console.log("MOCK: Fetching today's real estate news...");
        
        // Simulating that the data is sorted by date on the backend
        const sortedPosts = MOCK_BLOG_POSTS.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        resolve(sortedPosts);
      }, 1000); // 1 second delay
    });
  };

  useEffect(() => {
    fetchDailyRealEstateNews()
      .then(data => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch blog posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        {/* Header */}
        <span className="text-sm font-semibold uppercase text-red-500 tracking-wider bg-red-50 rounded-full py-1 px-3 inline-block mb-3">
            Latest News
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-12 font-serif">
          Latest News Feeds
        </h2>

        {loading ? (
          <p className="text-lg text-gray-600">Loading daily real estate updates...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
        
        <button className="mt-12 px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-150">
            View All Articles
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
