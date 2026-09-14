import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo-text.png"
                alt="Dev Stack"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev<span className="text-brand-gradient ml-1">Stack</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Dev Stack empowers software engineers and engineering teams to discover, plan, and assemble modern tech stacks built for production velocity and scale.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/imranonweb"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:text-sky-500 hover:bg-sky-50 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#technologies" className="hover:text-pink-600 transition-colors">
                  Explore Tech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  Stack Generator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  Comparison Matrix
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  Architecture Templates
                </a>
              </li>
            </ul>
          </div>

          
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  Engineering Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-800 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors">
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
