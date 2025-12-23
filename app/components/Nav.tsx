'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className={`transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Vishal C B
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                scrolled
                  ? 'text-gray-600 hover:text-gray-900'
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`font-medium transition-colors ${
                scrolled
                  ? 'text-gray-600 hover:text-gray-900'
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                scrolled
                  ? 'text-gray-600 hover:text-gray-900'
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className={`font-medium ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className={`font-medium ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`font-medium ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
