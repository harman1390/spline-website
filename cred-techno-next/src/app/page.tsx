'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WorkSection from '@/components/WorkSection';
import Reviews from '@/components/Reviews';

export default function Home() {
  // Smooth scroll for anchor links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');
        
        if (link && link.getAttribute('href')?.startsWith('#')) {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetElement = document.querySelector(targetId as string);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      document.addEventListener('click', handleAnchorClick);
      return () => document.removeEventListener('click', handleAnchorClick);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Spline */}
      <Hero />

      {/* Services Section with Spline */}
      <Services />

      {/* Work Section */}
      <WorkSection />

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <Reviews />
        </div>
      </section>

    </div>
  );
}
