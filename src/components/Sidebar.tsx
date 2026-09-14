import React from 'react';
import { FiLayers, FiTrash2, FiX } from 'react-icons/fi';
import type { Technology } from '../types';

export interface SidebarProps {
  stack: Technology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  stack,
  handleRemoveFromStack,
  handleRemoveAll,
}) => {
  return (
    <aside className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 overflow-hidden">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600">
            <FiLayers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 leading-none">
              Your Stack
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1">
              {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>
          </div>
        </div>

        {stack.length > 0 && handleRemoveAll && (
          <button
            type="button"
            onClick={handleRemoveAll}
            className="text-xs font-semibold text-rose-500 hover:text-rose-700 hover:bg-rose-50 px-2.5 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1 focus:outline-none"
            title="Remove all technologies"
          >
            <FiTrash2 className="w-3.5 h-3.5" />
            Clear All
          </button>
        )}
      </div>

      
      <div className="mt-5">
        {stack.length === 0 ? (
          <div className="py-10 px-4 text-center rounded-xl bg-slate-50/70 border border-dashed border-slate-200 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
              <FiLayers className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-semibold text-slate-700">
              Your stack is empty
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-[200px] leading-relaxed">
              Explore technologies and click "Add to Stack" to curate your stack.
            </p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 p-1.5 flex items-center justify-center shrink-0">
                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">
                      {tech.name}
                    </p>
                    <span className="text-xs text-slate-500 block truncate">
                      {tech.category}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveFromStack(tech.id)}
                  className="w-7 h-7 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 flex items-center justify-center transition-colors shrink-0 ml-2 focus:outline-none"
                  aria-label={`Remove ${tech.name} from stack`}
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      
      {stack.length > 0 && (
        <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
          <span>Active build configuration</span>
          <span className="font-semibold text-slate-700">Ready</span>
        </div>
      )}
    </aside>
  );
};
