import React from 'react';

interface GraphicProps {
  className?: string;
  category?: string;
}

export const ProductArtCard: React.FC<{ category: string; title: string }> = ({ category, title }) => {
  // Return distinct thematic gradient and stylized SVG for each category
  if (category.toLowerCase().includes('kopi')) {
    return (
      <div className="w-full h-full min-h-[190px] bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 flex flex-col items-center justify-center p-6 text-amber-100 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-300 via-transparent to-transparent"></div>
        <svg className="w-16 h-16 text-amber-300/80 mb-3 drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
        <span className="text-xs uppercase tracking-widest text-amber-300/70 font-semibold mb-1">Arabika Nusantara</span>
        <span className="text-sm font-medium text-center text-amber-50 line-clamp-1">{title}</span>
      </div>
    );
  }

  if (category.toLowerCase().includes('kain') || category.toLowerCase().includes('tekstil')) {
    return (
      <div className="w-full h-full min-h-[190px] bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 flex flex-col items-center justify-center p-6 text-sky-100 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <svg className="w-16 h-16 text-sky-300/80 mb-3 drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="m8 6 4 4-4 4" />
          <path d="m14 10 2 2-2 2" />
        </svg>
        <span className="text-xs uppercase tracking-widest text-sky-300/70 font-semibold mb-1">Tenun & Batik Tulis</span>
        <span className="text-sm font-medium text-center text-sky-50 line-clamp-1">{title}</span>
      </div>
    );
  }

  if (category.toLowerCase().includes('kulit')) {
    return (
      <div className="w-full h-full min-h-[190px] bg-gradient-to-br from-orange-950 via-stone-900 to-amber-950 flex flex-col items-center justify-center p-6 text-amber-100 relative overflow-hidden select-none">
        <svg className="w-16 h-16 text-amber-400/80 mb-3 drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <span className="text-xs uppercase tracking-widest text-amber-400/70 font-semibold mb-1">Kulit Sapi Asli</span>
        <span className="text-sm font-medium text-center text-amber-50 line-clamp-1">{title}</span>
      </div>
    );
  }

  // Home & living / Keramik / Default
  return (
    <div className="w-full h-full min-h-[190px] bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 flex flex-col items-center justify-center p-6 text-stone-100 relative overflow-hidden select-none">
      <svg className="w-16 h-16 text-emerald-400/80 mb-3 drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
      <span className="text-xs uppercase tracking-widest text-emerald-400/70 font-semibold mb-1">Kriya Nusantara</span>
      <span className="text-sm font-medium text-center text-stone-50 line-clamp-1">{title}</span>
    </div>
  );
};

export const CulinaryArtCard: React.FC<{ category: string; name: string }> = ({ category, name }) => {
  return (
    <div className="w-full h-44 rounded-xl bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 flex flex-col items-center justify-center p-6 text-stone-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
      <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
        <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
        </svg>
      </div>
      <span className="text-xs text-amber-400/80 font-medium uppercase tracking-wider mb-1">
        {category === 'signature' ? 'Menu Signature Chef' : category.toUpperCase()}
      </span>
      <span className="text-sm font-semibold text-center text-white line-clamp-1">{name}</span>
    </div>
  );
};
