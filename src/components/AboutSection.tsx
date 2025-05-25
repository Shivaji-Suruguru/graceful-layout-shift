
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-emerald-600 p-6 sm:p-8 rounded-lg">
                <div className="bg-slate-800 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/8232fbb5-2b4b-4dde-b964-02be7ec8ca84.png" 
                    alt="Mountain landscape representing travel and financial freedom"
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                      WHY TO USE CITIZENS FINANCIAL
                    </h3>
                    <h4 className="text-white text-base sm:text-lg font-medium mb-3">
                      Travel
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                      alteration in some form, by injected humour, or randomised words which don't look even slightly 
                      believable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              We give back
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
              alteration in some form, by injected humour, or randomised words which don't look even slightly 
              believable.
            </p>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                Demonstrate the value leadership and all at one viral. Inform below the fold in order to think 
                outside the box. Repurpose social while remembering to re-target key demographics. 
                Executing below the fold to make the logo bigger viral. Amplifying synergy social and try to use best 
                practice.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                Generating cloud-computing with a goal to gain traction. Considering blue-sky thinking so that as 
                an end result, we be engaging. Drive key demographics as we are brand ambassadors so that as an end result, we be 
                clickable. Demonstrating user stories while remembering to make users into advocates. 
                Building analytics and then build ROI.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
                Apply Today!
              </Button>
            </div>
            <div className="lg:pl-8">
              {/* This space can be used for additional content or left for visual balance */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
