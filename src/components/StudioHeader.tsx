import React from 'react';
import { WebsiteTemplateType } from '../types/index.ts';

interface StudioHeaderProps {
  currentTemplate: WebsiteTemplateType;
  onSelectTemplate: (template: WebsiteTemplateType) => void;
  viewport: 'desktop' | 'tablet' | 'mobile';
  onSelectViewport: (viewport: 'desktop' | 'tablet' | 'mobile') => void;
  onOpenCustomizer: () => void;
  onOpenBriefModal: () => void;
}

export const StudioHeader: React.FC<StudioHeaderProps> = ({
  currentTemplate,
  onSelectTemplate,
  viewport,
  onSelectViewport,
  onOpenCustomizer,
  onOpenBriefModal,
}) => {
  const templates: { id: WebsiteTemplateType; label: string }[] = [
    { id: 'ecommerce', label: 'Toko Online UMKM' },
    { id: 'company', label: 'Company Profile' },
    { id: 'restaurant', label: 'Restoran & Cafe' },
    { id: 'landing', label: 'Landing Page' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/"
            className="text-lg font-bold tracking-tight text-slate-950 whitespace-nowrap"
          >
            Nusantara Studio
          </a>
          <span className="hidden lg:inline text-xs text-slate-400 font-normal">
            Website Builder & Showcase
          </span>
        </div>

        {/* Zone 2: Navigation Links for Templates */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
          {templates.map((tpl) => {
            const isActive = currentTemplate === tpl.id;
            return (
              <button
                key={tpl.id}
                onClick={() => onSelectTemplate(tpl.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tpl.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Viewport selector & primary actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Responsive viewport switchers */}
          <div className="hidden sm:flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200/60">
            <button
              onClick={() => onSelectViewport('desktop')}
              className={`p-1.5 rounded-md text-xs transition-colors ${
                viewport === 'desktop'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Tampilan Desktop (100%)"
              aria-label="Tampilan Desktop"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
                <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" />
                <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" />
              </svg>
            </button>
            <button
              onClick={() => onSelectViewport('tablet')}
              className={`p-1.5 rounded-md text-xs transition-colors ${
                viewport === 'tablet'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Tampilan Tablet (768px)"
              aria-label="Tampilan Tablet"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
              </svg>
            </button>
            <button
              onClick={() => onSelectViewport('mobile')}
              className={`p-1.5 rounded-md text-xs transition-colors ${
                viewport === 'mobile'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Tampilan Ponsel Mobile (390px)"
              aria-label="Tampilan Ponsel"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="6" y="2" width="12" height="20" rx="2" strokeWidth="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
              </svg>
            </button>
          </div>

          <button
            onClick={onOpenCustomizer}
            className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span>Kustomisasi</span>
          </button>

          <button
            onClick={onOpenBriefModal}
            className="px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
          >
            Konsultasi Website
          </button>
        </div>
      </div>

      {/* Mobile template tabs */}
      <div className="md:hidden border-t border-slate-200/80 px-4 py-2 flex items-center gap-1 overflow-x-auto no-scrollbar bg-slate-50">
        {templates.map((tpl) => {
          const isActive = currentTemplate === tpl.id;
          return (
            <button
              key={tpl.id}
              onClick={() => onSelectTemplate(tpl.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
              }`}
            >
              {tpl.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
