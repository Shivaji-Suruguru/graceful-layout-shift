
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="bg-emerald-600 text-white px-3 py-1 rounded text-sm font-bold">
              CFS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium">
              ABOUT US
            </a>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium">
              TYPES OF LOANS
            </a>
            <a href="#payments" className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium">
              MAKE A PAYMENT
            </a>
            <a href="#faqs" className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium">
              FAQS
            </a>
            <a href="#resources" className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium">
              RESOURCES
            </a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium">
              CONTACT
            </a>
          </nav>

          {/* Apply Now Button */}
          <div className="hidden md:block">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium">
              Apply Now!
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium">
                ABOUT US
              </a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium">
                TYPES OF LOANS
              </a>
              <a href="#payments" className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium">
                MAKE A PAYMENT
              </a>
              <a href="#faqs" className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium">
                FAQS
              </a>
              <a href="#resources" className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium">
                RESOURCES
              </a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium">
                CONTACT
              </a>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium w-full">
                Apply Now!
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
