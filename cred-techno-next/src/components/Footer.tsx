'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Don't render footer on services page
  if (pathname?.startsWith('/services')) {
    return null;
  }
  
  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <Image 
                src="/CT-logo.png" 
                alt="Cred Techno" 
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3"
              />
              <span className="text-xl sm:text-2xl font-bold">Cred Techno</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Transforming ideas into digital reality through innovative technology solutions and exceptional software development services.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1 sm:py-0">Home</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1 sm:py-0">Services</Link></li>
              <li><Link href="#work" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1 sm:py-0">Our Work</Link></li>
              <li><Link href="#reviews" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1 sm:py-0">Testimonials</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="#android" className="text-gray-400 hover:text-white transition-colors">Android Development</Link></li>
              <li><Link href="#ios" className="text-gray-400 hover:text-white transition-colors">iOS Development</Link></li>
              <li><Link href="#windows" className="text-gray-400 hover:text-white transition-colors">Windows Applications</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cross-Platform Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Backend Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI & ML Integration</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-sm sm:text-base" />
                <span className="text-gray-400 text-sm sm:text-base">123 Tech Park, Silicon Valley, CA 94025, USA</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-3 text-sm sm:text-base" />
                <a href="mailto:info@credtechno.com" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">info@credtechno.com</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-500 mr-3 text-sm sm:text-base" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">+1 (123) 456-7890</a>
              </li>
            </ul>
            
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
          <p>© {currentYear} Cred Techno. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
