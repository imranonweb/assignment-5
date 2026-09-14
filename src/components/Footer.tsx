import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-md bg-pink-600 flex items-center justify-center text-white text-xs font-black tracking-tight">
                DS
              </span>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev<span className="text-pink-600">Stack</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 pt-1 text-sm text-slate-700 font-medium">
              <a
                href="https://github.com/imranonweb"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-slate-900 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
