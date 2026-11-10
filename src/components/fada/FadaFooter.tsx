import React from 'react';
import { FADA_COMPANY_PROFILE } from '../../data/fadaFoodData.ts';

export const FadaFooter: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 px-3 py-1.5 rounded-xl shadow-xs inline-block">
                <img
                  src={FADA_COMPANY_PROFILE.logoUrl}
                  alt="Fadafood Arabian Cuisine Specialist"
                  className="h-11 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {FADA_COMPANY_PROFILE.aboutBrief}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>
                <strong className="text-slate-300">Alamat Perusahaan:</strong>
              </p>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                {FADA_COMPANY_PROFILE.fullAddress}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Kategori Produk
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#katalog" className="hover:text-white transition-colors">
                  Paket Nasi Merhan 500gr & 280gr
                </a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-white transition-colors">
                  Bumbu Instan Zaffrona 100gr
                </a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-white transition-colors">
                  Beras Basmati Impor India Asli
                </a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-white transition-colors">
                  Rempah Murni Pilihan Fada 50gr
                </a>
              </li>
              <li>
                <a href="#cara-masak" className="hover:text-white transition-colors">
                  Panduan Masak di Rice Cooker
                </a>
              </li>
            </ul>
          </div>

          {/* Official Social Media & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Kontak & Media Sosial Resmi
            </h4>

            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <span>📱 WhatsApp 1:</span>
                <a
                  href={`https://wa.me/62${FADA_COMPANY_PROFILE.phone1.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-400 hover:underline font-bold"
                >
                  {FADA_COMPANY_PROFILE.phone1}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📱 WhatsApp 2:</span>
                <a
                  href={`https://wa.me/62${FADA_COMPANY_PROFILE.phone2.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-400 hover:underline font-bold"
                >
                  {FADA_COMPANY_PROFILE.phone2}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📸 Instagram:</span>
                <span className="text-white font-medium">{FADA_COMPANY_PROFILE.instagram}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🎵 TikTok:</span>
                <span className="text-white font-medium">{FADA_COMPANY_PROFILE.tiktok}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🛍️ Shopee:</span>
                <span className="text-orange-400 font-bold">{FADA_COMPANY_PROFILE.shopee}</span>
              </p>
            </div>

            {/* Direct Package Download Area */}
            <div className="mt-4 p-3.5 bg-slate-900/90 border border-slate-700/80 rounded-xl space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Unduh Paket File Website</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Download seluruh source code proyek ini dalam format file ZIP siap pakai.
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <a
                  href="/download/fadafood-source-code.zip"
                  download="fadafood-source-code.zip"
                  className="inline-flex items-center justify-between px-3 py-1.5 text-[11px] font-semibold text-slate-200 bg-slate-800 hover:bg-emerald-700 hover:text-white rounded-lg transition-colors border border-slate-700"
                >
                  <span>📦 Source Code Proyek (.ZIP)</span>
                  <span className="text-[10px] text-slate-400">98 KB</span>
                </a>
                <a
                  href="/download/fadafood-production-build.zip"
                  download="fadafood-production-build.zip"
                  className="inline-flex items-center justify-between px-3 py-1.5 text-[11px] font-semibold text-slate-200 bg-slate-800 hover:bg-emerald-700 hover:text-white rounded-lg transition-colors border border-slate-700"
                >
                  <span>🌐 Siap Hosting / cPanel (.ZIP)</span>
                  <span className="text-[10px] text-slate-400">182 KB</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {FADA_COMPANY_PROFILE.name} ({FADA_COMPANY_PROFILE.brandName}). Semua Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Spesialis Masakan Arab & Beras Basmati</span>
            <span>·</span>
            <span>Halal & Higienis</span>
            <span>·</span>
            <span>Mojokerto, Jawa Timur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
