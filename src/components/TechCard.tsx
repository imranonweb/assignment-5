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

  const getBadgeStyle = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'popular':
      case 'top sql':
      case 'essential':
      case 'robust':
      case 'containers':
        return 'bg-sky-50 text-sky-600 border-sky-100';
      case 'versatile':
      case 'standard':
        return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'fast':
        return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'cache':
        return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'ubiquitous':
        return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'modern':
        return 'bg-teal-50 text-teal-600 border-teal-100';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow transition-all duration-200">
      <div>
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 flex items-center justify-center shrink-0">
            <img
              src={tech.icon}
              alt={`${tech.name} icon`}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>

          <span
            className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${getBadgeStyle(
              tech.badge
            )}`}
          >
            {tech.badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mt-4">
          {tech.name}
        </h3>

        <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-[48px] line-clamp-3">
          {tech.description}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="bg-slate-50 text-slate-500 text-[11px] font-medium px-2 py-0.5 rounded">
              {tech.category}
            </span>
            <span className="bg-slate-50 text-slate-500 text-[11px] font-medium px-2 py-0.5 rounded">
              {tech.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
            <FaStar className="w-3.5 h-3.5 text-amber-400" />
            <span>{tech.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <button
          type="button"
          onClick={() => handleAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold transition-colors duration-150 flex items-center justify-center gap-1.5 ${
            isAdded
              ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
              : 'bg-[#090D16] text-white hover:bg-slate-800'
          }`}
        >
          {isAdded ? (
            <>
              <span className="text-emerald-500 font-bold">✓</span> Added to Stack
            </>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
};
