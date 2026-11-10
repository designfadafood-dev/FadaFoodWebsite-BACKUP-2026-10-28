import React from 'react';

export const FadaOfficialLogo: React.FC<{ className?: string; height?: number; altText?: string }> = ({
  className = 'h-12 w-auto',
  height,
  altText = 'Fadafood - Arabian Cuisine Specialist',
}) => {
  return (
    <img
      src="/images/logo/fadafood-logo.svg"
      alt={altText}
      className={`${className} object-contain select-none`}
      style={height ? { height: `${height}px` } : undefined}
    />
  );
};

interface FadaVisualProps {
  category: string;
  name: string;
  flavor?: string;
  brand: string;
  weight: string;
  image?: string;
}

export const FadaProductCardArt: React.FC<FadaVisualProps> = ({
  category,
  name,
  flavor,
  brand,
  weight,
  image,
}) => {
  // If product packaging image is provided, display photorealistic package card
  if (image) {
    return (
      <div className="w-full h-52 bg-gradient-to-b from-slate-50 via-white to-amber-50/30 p-2.5 flex items-center justify-center relative overflow-hidden border-b border-slate-100 group-hover:bg-amber-50/40 transition-colors select-none">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
          <span className="bg-red-700 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-2xs tracking-wider">
            {brand}
          </span>
          {flavor && (
            <span className="bg-amber-100 text-amber-900 border border-amber-300/80 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-2xs">
              {flavor}
            </span>
          )}
        </div>

        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="text-[10px] font-bold text-slate-700 bg-white/95 border border-slate-200/90 px-2 py-0.5 rounded shadow-2xs">
            {weight}
          </span>
        </div>

        {/* Packaging Image with smooth hover float effect */}
        <div className="w-full h-full flex items-center justify-center p-1 relative z-5">
          <img
            src={image}
            alt={name}
            className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300 ease-out"
            loading="lazy"
          />
        </div>

        {/* Bottom certification badge strip */}
        <div className="absolute bottom-1.5 right-2 z-10 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.2 rounded">
            ✓ HALAL
          </span>
        </div>
      </div>
    );
  }

  // 1. Merhan Paket Nasi Arab Fallback
  if (category === 'paket-nasi') {
    const isHemat = name.toLowerCase().includes('hemat') || weight.includes('280');
    let gradient = 'from-amber-950 via-amber-900 to-yellow-950';
    let accentColor = 'text-amber-300';
    let borderColor = 'border-amber-600/30';

    if (flavor === 'Kabsah') {
      gradient = 'from-red-950 via-amber-950 to-orange-950';
      accentColor = 'text-red-300';
    } else if (flavor === 'Mandi') {
      gradient = 'from-yellow-950 via-amber-900 to-stone-900';
      accentColor = 'text-yellow-300';
    } else if (flavor === 'Biryani') {
      gradient = 'from-emerald-950 via-amber-950 to-yellow-950';
      accentColor = 'text-emerald-300';
    }

    return (
      <div className={`w-full h-52 bg-gradient-to-br ${gradient} p-4 flex flex-col justify-between text-white relative overflow-hidden select-none border-b ${borderColor}`}>
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Top badge */}
        <div className="flex items-center justify-between z-10">
          <div className="bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
            MERHAN
          </div>
          <span className="text-[11px] font-semibold tracking-wider text-amber-200 bg-black/40 px-2 py-0.5 rounded">
            {isHemat ? 'HEMAT 280g' : 'KEMASAN 500g'}
          </span>
        </div>

        {/* Center illustration */}
        <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
          <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-1.5 shadow-inner">
            <svg className={`w-8 h-8 ${accentColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M12 2a5 5 0 0 0-5 5v3h10V7a5 5 0 0 0-5-5z" />
              <path d="M3 13a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-3H3v3z" />
              <path d="M7 21h10" />
            </svg>
          </div>
          <span className="text-xs uppercase tracking-widest font-bold text-amber-200">
            Nasi {flavor || 'Arab'}
          </span>
          <span className="text-[11px] text-amber-100/80">Beras Basmati + Bumbu Lengkap</span>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between text-[10px] text-amber-200/90 border-t border-white/10 pt-1.5 z-10">
          <span>Siap Masak Rice Cooker</span>
          <span>100% Rempah Murni</span>
        </div>
      </div>
    );
  }

  // 2. Zaffrona Bumbu Instan 100gr Fallback
  if (category === 'bumbu-instan') {
    return (
      <div className="w-full h-52 bg-gradient-to-br from-amber-900 via-stone-900 to-amber-950 p-4 flex flex-col justify-between text-white relative overflow-hidden select-none border-b border-amber-500/20">
        <div className="flex items-center justify-between z-10">
          <div className="bg-amber-500 text-stone-950 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs">
            ZAFFRONA
          </div>
          <span className="text-[11px] font-semibold text-amber-200 bg-black/40 px-2 py-0.5 rounded">
            100 GR
          </span>
        </div>

        <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
          <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-1.5">
            <svg className="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M6 3h12l-2 15a4 4 0 0 1-4 3 4 4 0 0 1-4-3L6 3Z" />
              <path d="M9 8h6" />
              <path d="M10 12h4" />
            </svg>
          </div>
          <span className="text-xs uppercase tracking-widest font-bold text-amber-300">
            Bumbu {flavor || 'Arab'}
          </span>
          <span className="text-[11px] text-stone-300">Untuk 1kg Beras (10 Porsi)</span>
        </div>

        <div className="flex items-center justify-between text-[10px] text-amber-200/80 border-t border-white/10 pt-1.5 z-10">
          <span>Konsentrat Rempah Halus</span>
          <span>Praktis & Higienis</span>
        </div>
      </div>
    );
  }

  // 3. Beras Basmati Premium Impor Fallback
  if (category === 'beras-basmati') {
    return (
      <div className="w-full h-52 bg-gradient-to-br from-yellow-950 via-stone-900 to-amber-950 p-4 flex flex-col justify-between text-white relative overflow-hidden select-none border-b border-yellow-500/20">
        <div className="flex items-center justify-between z-10">
          <div className="bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
            ORIGINAL INDIA
          </div>
          <span className="text-[11px] font-semibold text-yellow-200 bg-black/40 px-2 py-0.5 rounded">
            BASMATI 1121
          </span>
        </div>

        <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
          <div className="w-14 h-14 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-1.5">
            <svg className="w-8 h-8 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <span className="text-xs uppercase tracking-widest font-bold text-yellow-200">
            {name.replace('Beras Basmati ', '')}
          </span>
          <span className="text-[11px] text-stone-300">Butir Ekstra Panjang & Pulen</span>
        </div>

        <div className="flex items-center justify-between text-[10px] text-yellow-200/80 border-t border-white/10 pt-1.5 z-10">
          <span>Kemurnian 95%</span>
          <span>Bulir Terpisah Tidak Menggumpal</span>
        </div>
      </div>
    );
  }

  // 4. Rempah Murni Fada Fallback
  return (
    <div className="w-full h-52 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 p-4 flex flex-col justify-between text-white relative overflow-hidden select-none border-b border-stone-700">
      <div className="flex items-center justify-between z-10">
        <div className="bg-red-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
          FADA SPICE
        </div>
        <span className="text-[11px] font-semibold text-stone-300 bg-black/40 px-2 py-0.5 rounded">
          50 GR
        </span>
      </div>

      <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
        <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-1.5">
          <svg className="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M12 3v18" />
            <path d="M6 8h12" />
            <path d="M8 16h8" />
          </svg>
        </div>
        <span className="text-xs uppercase tracking-widest font-bold text-amber-300">
          {name.replace('Fada ', '').replace(' 50gr', '')}
        </span>
        <span className="text-[11px] text-stone-300">100% Rempah Asli Tanpa Campuran</span>
      </div>

      <div className="flex items-center justify-between text-[10px] text-stone-400 border-t border-white/10 pt-1.5 z-10">
        <span>Kemasan Toples Rapat</span>
        <span>Aroma Alami Kuat</span>
      </div>
    </div>
  );
};
