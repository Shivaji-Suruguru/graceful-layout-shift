
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              About Us
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in 
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are 
              going to use passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in 
              the middle of text.
            </p>
          </div>

          {/* Trust Statement Card */}
          <div className="order-1 lg:order-2">
            <div className="bg-emerald-600 text-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
                Our customers have trusted in Citizens Financial for over thirty years.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
