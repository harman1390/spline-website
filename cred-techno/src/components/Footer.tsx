import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src="src/assets/CT-logo.jpg" alt="Cred Techno" className="h-10 w-auto mr-3" />
              <span className="text-2xl font-bold">Cred Techno</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming ideas into digital reality through innovative technology solutions and exceptional software development services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Android Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iOS Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Windows Applications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cross-Platform Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Backend Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI & ML Integration</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Tech Park, Silicon Valley, CA 94025, USA</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-3" />
                <a href="mailto:info@credtechno.com" className="text-gray-400 hover:text-white transition-colors">info@credtechno.com</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-500 mr-3" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors">+1 (123) 456-7890</a>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-medium mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Cred Techno. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
