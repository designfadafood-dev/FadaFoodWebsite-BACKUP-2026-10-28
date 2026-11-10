/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FadaMainApp } from './components/fada/FadaMainApp.tsx';

export default function App() {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col antialiased">
      {/* Top Studio Control Bar for Device Testing & Reference */}
      <div className="bg-slate-900 text-slate-200 text-xs px-4 py-2 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          <span className="font-bold text-white tracking-wide">Fada Food Official</span>
          <span className="text-slate-400 hidden sm:inline">
            · Model Website Refrensi Lemonilo (Profil Singkat & Katalog Lengkap)
          </span>
        </div>

        {/* Viewport switchers */}
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setViewportMode('desktop')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors flex items-center gap-1 ${
              viewportMode === 'desktop'
                ? 'bg-red-700 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Tampilan Desktop (100%)"
          >
            <span>Desktop</span>
          </button>
          <button
            onClick={() => setViewportMode('tablet')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors flex items-center gap-1 ${
              viewportMode === 'tablet'
                ? 'bg-red-700 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Tampilan Tablet (768px)"
          >
            <span>Tablet</span>
          </button>
          <button
            onClick={() => setViewportMode('mobile')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors flex items-center gap-1 ${
              viewportMode === 'mobile'
                ? 'bg-red-700 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Tampilan Mobile (390px)"
          >
            <span>Ponsel</span>
          </button>
        </div>
      </div>

      {/* Main Viewport Container */}
      <main className="flex-1 flex flex-col items-center justify-start overflow-x-hidden">
        <div
          className={`w-full transition-all duration-300 ${
            viewportMode === 'desktop'
              ? 'max-w-full'
              : viewportMode === 'tablet'
              ? 'max-w-[768px] my-6 rounded-3xl shadow-2xl border-8 border-slate-800 bg-white overflow-hidden ring-1 ring-slate-900/10'
              : 'max-w-[390px] my-6 rounded-3xl shadow-2xl border-8 border-slate-900 bg-white overflow-hidden ring-1 ring-slate-900/10'
          }`}
        >
          <FadaMainApp isCompact={viewportMode === 'mobile'} />
        </div>
      </main>
    </div>
  );
}
