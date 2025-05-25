
import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-4">
            SEE WHAT OUR CUSTOMERS ARE SAYING...
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-700 italic leading-relaxed mb-8">
            "The secret of life is honesty and fair dealing. If you can fake that, you've got it made."
          </blockquote>
          
          <div className="text-sm sm:text-base text-gray-500">
            <p className="font-medium">ARISTOTLE WELLS - CUSTOMER</p>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-emerald-600 transition-colors"></button>
            <button className="w-2 h-2 rounded-full bg-emerald-600"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-emerald-600 transition-colors"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
