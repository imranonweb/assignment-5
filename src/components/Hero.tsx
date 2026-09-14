import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Build Your Ideal <br />
              <span className="text-brand-gradient">Development Stack</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#technologies"
                className="brand-gradient hover:opacity-95 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition-all focus:outline-none"
              >
                Explore Technologies
              </a>
              <a
                href="#technologies"
                className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium px-6 py-3 rounded-lg transition-colors focus:outline-none"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-none">
              <img
                src="/banner-stack.png"
                alt="Development Stack Illustration"
                className="w-full h-auto object-contain select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
