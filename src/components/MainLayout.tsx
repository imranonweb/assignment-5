import React from 'react';
import type { Technology } from '../types';
import { TechList } from './TechList';

export interface MainLayoutProps {
  technologies: Technology[];
  loading: boolean;
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
  sidebar?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  technologies,
  loading,
  stack,
  handleAddToStack,
  sidebar,
}) => {
  return (
    <section id="technologies" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/60 text-xs font-semibold text-pink-600 mb-3">
            Developer Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Technologies
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-2xl">
            Browse through industry-proven frameworks, databases, runtimes, and developer tooling. Add technologies directly to your custom stack.
          </p>
        </div>

        
        <div className="flex flex-col lg:flex-row items-start gap-8">
          
          <div className="w-full lg:flex-1">
            <TechList
              technologies={technologies}
              loading={loading}
              stack={stack}
              handleAddToStack={handleAddToStack}
            />
          </div>

          
          {sidebar && (
            <div className="w-full lg:w-80 xl:w-96 shrink-0 lg:sticky lg:top-24">
              {sidebar}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
