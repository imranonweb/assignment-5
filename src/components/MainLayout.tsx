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
    <section id="technologies" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore the <span className="text-pink-600">Technologies</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Pick one technology per category to build your ideal stack.
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
            <div className="w-full lg:w-72 xl:w-80 shrink-0 lg:sticky lg:top-24">
              {sidebar}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
