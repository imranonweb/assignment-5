import React from 'react';
import { FaStar } from 'react-icons/fa';
import type { Technology } from '../types';

export interface TechCardProps {
  tech: Technology;
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
}

export const TechCard: React.FC<TechCardProps> = ({
  tech,
  stack,
  handleAddToStack,
}) => {
  const isAdded = stack.some((item) => item.id === tech.id);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner-friendly':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'intermediate':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'advanced':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 shrink-0">
              <img
                src={tech.icon}
                alt={`${tech.name} icon`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                {tech.name}
              </h3>
              <span className="inline-block text-xs font-medium text-slate-500 mt-0.5">
                {tech.category}
              </span>
            </div>
          </div>

          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 shrink-0">
            {tech.badge}
          </span>
        </div>

      
        <p className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-3">
          {tech.description}
        </p>

        
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          
          <span
            className={`px-2.5 py-0.5 text-xs font-medium rounded-md border ${getDifficultyColor(
              tech.difficulty
            )}`}
          >
            {tech.difficulty}
          </span>

          
          <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-800">
            <FaStar className="w-4 h-4 text-amber-400" />
            <span>{tech.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      
      <div className="mt-5">
        <button
          type="button"
          onClick={() => handleAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            isAdded
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
              : 'brand-gradient text-white shadow-sm hover:opacity-95 hover:shadow focus:outline-none focus:ring-2 focus:ring-pink-400'
          }`}
        >
          {isAdded ? (
            <>
              <span className="text-emerald-500 font-bold">✓</span> Added to Stack
            </>
          ) : (
            '+ Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
};
