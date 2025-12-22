import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkSection from './components/WorkSection';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    try {
      // Initialize AOS (Animate On Scroll)
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
      });
    } catch (error) {
      console.error('Failed to initialize AOS:', error);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WorkSection />
        <Reviews />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
