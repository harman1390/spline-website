import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [splineError, setSplineError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSplineError = () => {
    console.log('Spline scene failed to load, falling back to static hero');
    setSplineError(true);
  };

  return (
    <section className="relative h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Mobile Hero */}
      <div className="md:hidden h-full flex items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to CredTechno
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Innovative solutions for the digital age
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Desktop Hero with Spline */}
      <div className="hidden md:block">
        {splineError ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to CredTechno
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Innovative solutions for the digital age
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 w-full h-full scale-[1.2]">
            <Spline 
              scene="https://prod.spline.design/3m6QSIKofH-YjsHg/scene.splinecode"
              className="w-full h-full"
              onError={handleSplineError}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;