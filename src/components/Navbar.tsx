import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          <div className="flex items-center md:hidden">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo & Name */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2.5">
              <img
                src="/logo-text.png"
                alt="Dev Stack"
                className="h-8 md:h-9 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to render
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 flex items-center">
                Dev<span className="text-brand-gradient ml-1">Stack</span>
              </span>
            </a>
          </div>

          {/* Desktop Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm lg:text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors px-2.5 py-1.5"
            >
              Sign In
            </button>
            <button
              type="button"
              className="brand-gradient text-white text-sm font-semibold px-4 sm:px-5 py-2 rounded-full shadow-sm hover:opacity-95 transition-all hover:shadow focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
