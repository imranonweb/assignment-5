import React from 'react';
import type { Technology } from '../types';
import { TechCard } from './TechCard';

export interface TechListProps {
  technologies: Technology[];
  loading: boolean;
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
}

export const TechList: React.FC<TechListProps> = ({
  technologies,
  loading,
  stack,
  handleAddToStack,
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="bg-white rounded-2xl border border-slate-200/80 p-6 animate-pulse space-y-4 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-200 rounded-xl" />
                <div className="space-y-2">
                  <div className="w-24 h-4 bg-slate-200 rounded" />
                  <div className="w-16 h-3 bg-slate-100 rounded" />
                </div>
              </div>
              <div className="w-14 h-5 bg-slate-100 rounded-full" />
            </div>
            <div className="space-y-2 pt-2">
              <div className="w-full h-3 bg-slate-100 rounded" />
              <div className="w-5/6 h-3 bg-slate-100 rounded" />
              <div className="w-2/3 h-3 bg-slate-100 rounded" />
            </div>
            <div className="pt-4 border-t border-slate-100 flex justify-between">
              <div className="w-20 h-4 bg-slate-100 rounded" />
              <div className="w-12 h-4 bg-slate-200 rounded" />
            </div>
            <div className="w-full h-10 bg-slate-200 rounded-xl mt-4" />
          </div>
        ))}
      </div>
    );
  }

  if (technologies.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
        <p className="text-slate-500 font-medium">No technologies found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          stack={stack}
          handleAddToStack={handleAddToStack}
        />
      ))}
    </div>
  );
};
