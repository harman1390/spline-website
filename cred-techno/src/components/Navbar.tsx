import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} bg-transparent`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`flex items-center space-x-3 rounded-[30px] pl-6 pr-8 py-3 transition-all duration-300 ${scrolled ? 'bg-white/20 backdrop-blur-sm' : ''}`}>
          <img 
            src="/src/assets/CT-logo.png" 
            alt="Cred Techno" 
            className="h-10 w-auto opacity-100 hover:opacity-90 transition-opacity" 
          />
          <span className="text-xl font-bold text-gray-800">Cred Techno</span>
        </div>
        
        <div className="hidden md:flex items-center bg-white/20 backdrop-blur-sm rounded-[30px] pl-6 pr-2 py-1">
          <div className="flex items-center space-x-0">
            <a href="#home" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#work" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">Our Work</a>
            <a href="#reviews" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
          </div>
          <button className="ml-2 bg-blue-600/90 hover:bg-blue-700 text-white px-6 py-2 rounded-3xl transition-all h-10 my-1">
            Get in Touch
          </button>
        </div>
        
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
