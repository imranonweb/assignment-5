import React from 'react';
import { FiArrowRight, FiBookOpen } from 'react-icons/fi';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 lg:py-24">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-orange-200/40 via-pink-200/30 to-violet-200/40 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-xs font-semibold text-orange-600">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Next-Gen Stack Builder
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build Your Ideal{' '}
              <span className="text-brand-gradient block sm:inline">
                Development Stack
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover, curate, and assemble the ultimate software engineering toolkit for your next project. Tailor modern frontend libraries, backend runtimes, databases, and DevOps tools engineered for high productivity.
            </p>

            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#technologies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold brand-gradient brand-gradient-hover shadow-md shadow-pink-500/10 hover:shadow-lg hover:shadow-pink-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Explore Technologies
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-slate-700 font-semibold bg-white border border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <FiBookOpen className="w-4 h-4 text-slate-500" />
                Learn More
              </a>
            </div>

          
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold">✓</span> Curated Ecosystem
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold">✓</span> Real-Time Stack Summary
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold">✓</span> Single-Click Selection
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-100 to-white p-2 shadow-2xl shadow-slate-200/80 border border-slate-200/70">
                <img
                  src="/banner-stack.png"
                  alt="Development Stack Showcase"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
