import { motion } from 'framer-motion';
import { FaMobileAlt, FaServer, FaGlobe } from 'react-icons/fa';
import { useState, Suspense, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

// Hide Spline logo
const hideSplineLogo = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    .spline-watermark {
      display: none !important;
    }
    canvas {
      outline: none;
    }
  `;
  document.head.appendChild(style);
};

const services = [
  {
    id: 'mobile',
    icon: <FaMobileAlt className="w-8 h-8 text-blue-600" />,
    title: "Android and iOS Application Development",
    description: "Custom mobile applications built with modern technologies for both Android and iOS platforms.",
    features: ["Cross-platform solutions", "Native performance", "App Store & Play Store deployment", "UI/UX focused"]
  },
  {
    id: 'website',
    icon: <FaGlobe className="w-8 h-8 text-blue-600" />,
    title: "Website Development",
    description: "Modern, responsive, and high-performance websites built with the latest web technologies.",
    features: ["Responsive design", "SEO optimization", "Fast loading times", "Modern UI/UX"]
  },
  {
    id: 'backend',
    icon: <FaServer className="w-8 h-8 text-blue-600" />,
    title: "Backend Development",
    description: "Robust and scalable backend services to power your applications.",
    features: ["REST/GraphQL APIs", "Database design", "Cloud integration", "Microservices architecture"]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>('mobile');
  const [isLoading, setIsLoading] = useState(true);
  const splineLoaded = useRef(false);

  useEffect(() => {
    if (!splineLoaded.current) {
      hideSplineLogo();
      splineLoaded.current = true;
    }
  }, []);

  const handleServiceClick = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-600 font-semibold text-sm md:text-base">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3 md:mb-4">What We Offer</h2>
          <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={`desktop-${service.id}`}
                  className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${
                    activeService === service.id ? 'ring-2 ring-blue-500' : 'hover:shadow-xl'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Service Visualizations - Hidden on mobile, shown on md and up */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 rounded-xl p-3 sm:p-4 min-h-[400px] sm:min-h-[500px] mt-6 lg:mt-0">
              {activeService === 'mobile' ? (
                <div className="w-full h-full">
                  <Suspense fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                  }>
                    <div className="relative w-full h-full min-h-[450px]">
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        </div>
                      )}
                      <div className="relative w-full h-full overflow-hidden">
                        <div 
                          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 scale-100 sm:scale-125 md:scale-150`}
                        >
                          <Spline 
                            scene="https://prod.spline.design/30IwTzUuyW0tOn5y/scene.splinecode"
                            onLoad={() => {
                              setIsLoading(false);
                              hideSplineLogo();
                            }}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </Suspense>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        
        {/* Mobile View */}
        <div className="md:hidden space-y-6 mt-6">
          {services.map((service) => (
            <div 
              key={`mobile-${service.id}`}
              className={`bg-white p-4 rounded-xl shadow-md transition-all duration-200 ${
                activeService === service.id ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'
              }`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {service.description}
                  </p>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.2 }}
                      className="mt-2"
                    >
                      <ul className="space-y-1.5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-xs text-gray-600">
                            <svg className="w-3.5 h-3.5 text-green-500 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
