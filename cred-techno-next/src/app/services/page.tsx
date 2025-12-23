'use client';

import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">Request Our Services</h1>
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 flex-1">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none text-gray-900"
                required
                defaultValue=""
              >
                <option value="" disabled>Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="consulting">IT Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Submit Request
            </button>
          </form>
          </div>

          <div className="flex-1 h-[400px] lg:h-[500px] rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 -right-16 -top-10 -bottom-20 overflow-hidden">
              <Suspense fallback={<div className="w-full h-full bg-gray-800/30 border border-gray-700 rounded-2xl flex items-center justify-center">
                <p className="text-gray-400">Loading 3D scene...</p>
              </div>}>
                <Spline 
                  scene="https://prod.spline.design/fSvKFDo22nFDk6yW/scene.splinecode"
                  className="w-[140%] h-[140%] transform -translate-x-16 translate-y-0 scale-125"
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
