'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [scrolled]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  
  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      // Start the close animation
      setIsAnimatingOut(true);
      // Wait for the animation to complete before closing
      setTimeout(() => {
        setMobileMenuOpen(false);
        setIsAnimatingOut(false);
      }, 300); // Match this duration with the exit animation duration
    } else {
      setMobileMenuOpen(true);
    }
  };
  
  const closeMobileMenu = () => {
    if (!mobileMenuOpen) return;
    // Start the close animation
    setIsAnimatingOut(true);
    // Wait for the animation to complete before closing
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsAnimatingOut(false);
    }, 300); // Match this duration with the exit animation duration
  };

  return (
    <motion.nav 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} ${mobileMenuOpen ? 'bg-white' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className={`flex items-center space-x-3 rounded-[30px] pl-4 sm:pl-6 pr-6 sm:pr-8 py-2 sm:py-3 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white/20 backdrop-blur-sm' : ''}`}>
          <Link href="#home" onClick={closeMobileMenu} className="flex items-center space-x-3">
            <Image 
              src="/CT-logo.png" 
              alt="Cred Techno" 
              width={40}
              height={40}
              className="h-8 w-8 sm:h-10 sm:w-10 opacity-100 hover:opacity-90 transition-opacity" 
              priority
            />
            <span className="text-lg sm:text-xl font-bold text-gray-800">Cred Techno</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center bg-white/20 backdrop-blur-sm rounded-[30px] pl-6 pr-2 py-1">
          <div className="flex items-center space-x-0">
            <Link href="#home" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="#services" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="#work" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">Our Work</Link>
            <Link href="#reviews" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">Reviews</Link>
          </div>
          <Link 
            href="/contact" 
            className="ml-2 bg-blue-600/90 hover:bg-blue-700 text-white px-6 py-2 rounded-3xl transition-all h-10 my-1 inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in Touch
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {(mobileMenuOpen || isAnimatingOut) && (
        <motion.div 
          className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 pb-6 overflow-y-auto"
          initial={{ opacity: 0, y: '-100%' }}
          animate={{
            opacity: isAnimatingOut ? 0 : 1,
            y: isAnimatingOut ? '-100%' : '0%',
          }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 200,
            duration: 0.3,
          }}
        >
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={closeMobileMenu}
          aria-label="Close menu"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col space-y-4 mt-8">
          <Link 
            href="#home" 
            className="text-2xl font-medium text-gray-800 hover:text-blue-600 py-3 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            href="#services" 
            className="text-2xl font-medium text-gray-800 hover:text-blue-600 py-3 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link 
            href="#work" 
            className="text-2xl font-medium text-gray-800 hover:text-blue-600 py-3 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            Our Work
          </Link>
          <Link 
            href="#reviews" 
            className="text-2xl font-medium text-gray-800 hover:text-blue-600 py-3 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            Reviews
          </Link>
          <Link 
            href="/contact" 
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center text-lg font-medium py-3 px-6 rounded-full transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
