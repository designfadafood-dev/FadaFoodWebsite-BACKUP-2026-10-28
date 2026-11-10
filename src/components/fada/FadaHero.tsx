import React from 'react';
import { FADA_COMPANY_PROFILE } from '../../data/fadaFoodData.ts';

interface FadaHeroProps {
  isCompact?: boolean;
}

export const FadaHero: React.FC<FadaHeroProps> = ({ isCompact = false }) => {
  return (
  <section className="fada-hero-bg border-b border-slate-200">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 ${isCompact ? 'flex flex-col gap-8' : 'grid grid-cols-1 lg:grid-cols-12 gap-8'} items-center`}>
        {/* Left Column: Headlines & Call to Actions */}
        <div className={`${isCompact ? 'w-full' : 'lg:col-span-7'} space-y-4`}>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-red-700 bg-red-50 border border-red-200/60 px-3 py-1 rounded-full">
            <span>✨</span>
            <span className="text-[11px]">Spesialis Masakan Arab & Beras Basmati Asli India</span>
          </div>

          <h1 className={`${isCompact ? 'text-2xl font-extrabold' : 'text-3xl sm:text-4xl lg:text-5xl font-extrabold'} tracking-tight text-slate-950 leading-tight`}>
            Cita Rasa Autentik Masakan Arab yang{' '}
            <span className="text-red-700">Lebih Praktis</span> untuk Keluarga
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
            {FADA_COMPANY_PROFILE.foreword}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#katalog"
              className="px-6 py-3 text-xs font-bold rounded-xl bg-red-700 hover:bg-red-800 text-white transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Belanja Katalog Produk</span>
            </a>

            <a
              href="#cara-masak"
              className="px-5 py-3 text-xs font-bold rounded-xl bg-amber-100/70 hover:bg-amber-200/80 text-amber-900 border border-amber-300/60 transition-colors"
            >
              Cara Masak Rice Cooker (25 Menit)
            </a>
          </div>

          {/* Lemonilo-style Key Features List */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-700">
            <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200/70 shadow-2xs">
              <span className="text-emerald-600 font-bold">✓</span>
              <span className="font-medium text-[11px]">100% Rempah Alami</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200/70 shadow-2xs">
              <span className="text-emerald-600 font-bold">✓</span>
              <span className="font-medium text-[11px]">Beras Basmati 1121</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200/70 shadow-2xs">
              <span className="text-emerald-600 font-bold">✓</span>
              <span className="font-medium text-[11px]">Resep Anti Gagal</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200/70 shadow-2xs">
              <span className="text-emerald-600 font-bold">✓</span>
              <span className="font-medium text-[11px]">Halal & Higienis</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Culinary Display */}
        <div className={isCompact ? 'w-full' : 'lg:col-span-5'}>
          <div className="bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 rounded-3xl p-6 text-white shadow-xl border border-amber-700/30 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-amber-500/10 blur-2xl"></div>

            {/* Inner Feature Box */}
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
                <div className="bg-white/95 px-2.5 py-1 rounded-lg shadow-xs">
                  <img
                    src={FADA_COMPANY_PROFILE.logoUrl}
                    alt="Fadafood"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  BEST SELLER
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-amber-100">
                  Paket Nasi Arab & Beras Basmati Super
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Semua sudah lengkap dalam satu kemasan praktis: beras basmati premium India, racikan bumbu khas Arab, kismis, dan minyak samin.
                </p>
              </div>

              {/* 4 Flavors Packaging Grid */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-amber-300 block mb-2">
                  Tersedia 4 Varian Autentik:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="#katalog"
                    className="bg-white/10 hover:bg-white/20 border border-white/15 p-2 rounded-xl flex items-center gap-2 transition-colors group"
                  >
                    <img
                      src="/images/products/merhan-kabuli-500.webp"
                      alt="Nasi Kabuli"
                      className="w-10 h-10 object-contain shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <div className="font-bold text-amber-200 text-[11px]">Nasi Kabuli</div>
                      <div className="text-[10px] text-stone-300">Kemasan 500g</div>
                    </div>
                  </a>
                  <a
                    href="#katalog"
                    className="bg-white/10 hover:bg-white/20 border border-white/15 p-2 rounded-xl flex items-center gap-2 transition-colors group"
                  >
                    <img
                      src="/images/products/merhan-kabsah-500.webp"
                      alt="Nasi Kabsah"
                      className="w-10 h-10 object-contain shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <div className="font-bold text-sky-200 text-[11px]">Nasi Kabsah</div>
                      <div className="text-[10px] text-stone-300">Kemasan 500g</div>
                    </div>
                  </a>
                  <a
                    href="#katalog"
                    className="bg-white/10 hover:bg-white/20 border border-white/15 p-2 rounded-xl flex items-center gap-2 transition-colors group"
                  >
                    <img
                      src="/images/products/merhan-mandi-500.webp"
                      alt="Nasi Mandi"
                      className="w-10 h-10 object-contain shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <div className="font-bold text-yellow-200 text-[11px]">Nasi Mandi</div>
                      <div className="text-[10px] text-stone-300">Kemasan 500g</div>
                    </div>
                  </a>
                  <a
                    href="#katalog"
                    className="bg-white/10 hover:bg-white/20 border border-white/15 p-2 rounded-xl flex items-center gap-2 transition-colors group"
                  >
                    <img
                      src="/images/products/merhan-biryani-500.webp"
                      alt="Nasi Biryani"
                      className="w-10 h-10 object-contain shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <div className="font-bold text-rose-200 text-[11px]">Nasi Biryani</div>
                      <div className="text-[10px] text-stone-300">Kemasan 500g</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Bottom Quick Info */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-300">
                <span>📍 Mojokerto, Jawa Timur</span>
                <span className="text-amber-300 font-semibold">Siap Kirim ke Seluruh Kota</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
