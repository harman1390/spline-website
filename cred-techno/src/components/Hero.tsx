import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className={`absolute inset-0 w-full h-full ${isMobile ? 'scale-[2]' : 'scale-[1.2]'}`}>
        <Spline 
          scene="https://prod.spline.design/3m6QSIKofH-YjsHg/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;