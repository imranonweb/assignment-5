import React from 'react';
import { FiX } from 'react-icons/fi';
import type { Technology } from '../types';

export interface SidebarProps {
  stack: Technology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  stack,
  handleRemoveFromStack,
  handleRemoveAll,
}) => {
  return (
    <aside className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 leading-tight">
          Your Stack
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          {stack.length === 0
            ? 'No technologies selected yet.'
            : `${stack.length} Technology Selected`}
        </p>
      </div>

      <div className="mt-5">
        {stack.length === 0 ? (
          <div className="py-8 px-4 text-center rounded-xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-400">Your stack is empty.</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[520px] overflow-y-auto pr-0.5">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate leading-tight">
                      {tech.name}
                    </p>
                    <span className="text-[11px] text-slate-400 block truncate mt-0.5">
                      {tech.category}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveFromStack(tech.id)}
                  className="text-slate-400 hover:text-slate-700 p-1 rounded transition-colors focus:outline-none"
                  aria-label={`Remove ${tech.name} from stack`}
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {stack.length > 0 && (
        <div className="mt-4">
          <button
            type="button"
            onClick={handleRemoveAll}
            className="w-full py-2.5 px-4 rounded-xl text-sm font-medium text-[#E03A3A] border border-rose-200 hover:bg-rose-50 hover:border-rose-300 transition-colors focus:outline-none"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};
