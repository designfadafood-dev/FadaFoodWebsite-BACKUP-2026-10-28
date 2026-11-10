import React from 'react';
import { FADA_COMPANY_PROFILE } from '../../data/fadaFoodData.ts';

export const FadaAboutSection: React.FC = () => {
  return (
    <section id="profil" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section 1: Profil Singkat & Kata Pengantar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold text-red-700 uppercase tracking-wider">
              Profil Singkat Perusahaan
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Mengenal CV. Fada Food: Menghadirkan Kelezatan Khas Arab & India
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed">
              {FADA_COMPANY_PROFILE.aboutBrief}
            </p>

            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs sm:text-sm text-amber-950 leading-relaxed italic">
              &ldquo;{FADA_COMPANY_PROFILE.foreword}&rdquo;
            </div>

            {/* Quiet metadata line without pills */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span>Didirikan Tahun {FADA_COMPANY_PROFILE.foundedYear}</span>
              <span aria-hidden="true">·</span>
              <span>Berpusat di {FADA_COMPANY_PROFILE.city}</span>
              <span aria-hidden="true">·</span>
              <span>Jangkauan Pasar Nasional</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl border border-slate-800">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Visi Perusahaan
              </div>
              <p className="text-sm text-stone-200 leading-relaxed">
                {FADA_COMPANY_PROFILE.vision}
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Produk Bersertifikasi Halal & Higienis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Beras Basmati Impor Pilihan Asli India</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Mitra Terpercaya Pengusaha Katering & Hotel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Nilai Nilai Perusahaan (F-A-D-A) */}
        <div id="nilai-fada" className="pt-4 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="text-xs font-bold text-red-700 uppercase tracking-wider">
              Landasan Filosofi Kami
            </div>
            <h3 className="text-2xl font-extrabold text-slate-950">
              Nilai Perusahaan F - A - D - A
            </h3>
            <p className="text-xs text-slate-600">
              Nilai perusahaan menjadi pedoman dalam menjalankan kegiatan produksi, pelayanan, distribusi, dan kerja sama bisnis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FADA_COMPANY_PROFILE.fadaValues.map((val, idx) => (
              <div
                key={`${val.letter}-${idx}`}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-600/40 transition-colors flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-700 text-white font-extrabold text-lg flex items-center justify-center mb-3 shadow-xs">
                    {val.letter}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{val.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: 3 Bidang Usaha Inti */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="text-xs font-bold text-red-700 uppercase tracking-wider">
              Aktivitas Bisnis
            </div>
            <h3 className="text-2xl font-extrabold text-slate-950">
              3 Sektor Utama CV. Fada Food
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FADA_COMPANY_PROFILE.sectors.map((sec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
              >
                <div className="text-xs font-mono font-bold text-slate-400">
                  0{idx + 1}. SEKTOR
                </div>
                <h4 className="text-base font-bold text-slate-900">{sec.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
