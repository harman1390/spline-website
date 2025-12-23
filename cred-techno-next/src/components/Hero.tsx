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
    <section className="relative h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Hero */}
      <div className="md:hidden h-full flex items-center justify-center px-6 text-center">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 [text-shadow: 0 1px 3px rgba(0,0,0,0.1)]">
            Welcome to CredTechno
          </h1>
          <p className="text-xl text-gray-600 [text-shadow: 0 1px 2px rgba(0,0,0,0.1)]">
            Innovative solutions for the digital age
          </p>
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
              <p className="text-xl text-gray-600">
                Innovative solutions for the digital age
              </p>
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