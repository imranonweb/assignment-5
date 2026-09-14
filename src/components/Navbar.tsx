import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Technologies', href: '#technologies', active: false },
    { name: 'Projects', href: '#projects', active: false },
    { name: 'About', href: '#about', active: false },
    { name: 'Contact', href: '#contact', active: false },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center md:hidden">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-md bg-pink-600 flex items-center justify-center text-white text-xs font-black tracking-tight shadow-sm">
                DS
              </span>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev<span className="text-pink-600">Stack</span>
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.active
                    ? 'text-pink-600'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-sm font-medium text-slate-800 hover:text-slate-900 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                link.active
                  ? 'text-pink-600 bg-pink-50/60'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
