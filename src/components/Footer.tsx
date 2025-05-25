
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="bg-emerald-600 text-white px-3 py-1 rounded text-sm font-bold inline-block mb-4">
              CFS
            </div>
            <p className="text-sm text-gray-300 mb-4">FDIC: XXXXX</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              1900 Foray Avenue<br />
              Monroe, LA 71201
            </p>
          </div>

          {/* About CFS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">ABOUT CFS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Take the Tour</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">News & Updates</a></li>
            </ul>
          </div>

          {/* Types of Loans */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">TYPES OF LOANS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Personal Loans</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Home Loans</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Pay Check Advance</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Home Mortgages</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Commercial Properties</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Seasonal Expansion</a></li>
            </ul>
          </div>

          {/* General */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">GENERAL</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Make a Payment</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Apply Now</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            Copyright 2018. Citizens Financial Services. All rights reserved. <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">design by</span>
            <span className="text-sm font-semibold text-white">tip</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
