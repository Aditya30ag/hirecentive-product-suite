'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home Page', href: '#home' },
    { name: 'T&C', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Blogs', href: '#blogs' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/90 backdrop-blur-md shadow-2xl border-b border-gray-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg p-2">
              <img 
                src="/logo.png" 
                alt="Hirecentive Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-white">HIREÇENTIVE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-purple-300 transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-purple-300 transition-colors duration-200 font-medium text-sm uppercase tracking-wide rounded-lg hover:bg-purple-800/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-semibold shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
