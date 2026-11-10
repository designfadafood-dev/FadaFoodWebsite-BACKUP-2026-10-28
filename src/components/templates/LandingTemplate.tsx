import React, { useState } from 'react';
import { FAQ_LIST, PRICING_PLANS } from '../../data/mockData.ts';
import { WebsiteConfig } from '../../types/index.ts';
import { formatRupiah, getThemeTokens } from '../../utils/websiteEngine.ts';

interface LandingTemplateProps {
  config: WebsiteConfig;
  onOpenBriefModal: () => void;
}

export const LandingTemplate: React.FC<LandingTemplateProps> = ({
  config,
  onOpenBriefModal,
}) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_LIST[0]?.id || null);
  const [trialEmail, setTrialEmail] = useState('');
  const [trialSuccess, setTrialSuccess] = useState(false);

  const theme = getThemeTokens(config.palette);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleStartTrial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialEmail || !trialEmail.includes('@')) return;
    setTrialSuccess(true);
    setTimeout(() => {
      setTrialSuccess(false);
      setTrialEmail('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
          <span className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap">
            {config.brandName}
          </span>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
            <a href="#fitur" className="hover:text-slate-900 transition-colors">Fitur Unggulan</a>
            <a href="#harga" className="hover:text-slate-900 transition-colors">Paket Langganan</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">Tanya Jawab</a>
          </nav>

          <a
            href="#harga"
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shadow-xs ${theme.primary}`}
          >
            Coba Gratis 14 Hari
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {config.city} · Solusi Pembukuan & Kasir Digital Modern
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
            {config.tagline}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {config.description} Otomatisasi transaksi, manajemen inventori tanpa pusing, dan terima pembayaran non-tunai QRIS seketika.
          </p>

          {/* Quick Lead Capture Form */}
          <div className="pt-2 max-w-md mx-auto">
            {trialSuccess ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium rounded-xl flex items-center justify-center gap-2">
                <span>✓</span>
                <span>Tautan uji coba 14 hari telah dikirimkan ke email Anda!</span>
              </div>
            ) : (
              <form onSubmit={handleStartTrial} className="flex gap-2">
                <input
                  type="email"
                  value={trialEmail}
                  onChange={(e) => setTrialEmail(e.target.value)}
                  placeholder="Masukkan email bisnis Anda"
                  required
                  className="flex-1 px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800 bg-white"
                />
                <button
                  type="submit"
                  className={`px-4 py-2.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${theme.primary}`}
                >
                  Mulai Sekarang
                </button>
              </form>
            )}
            <p className="text-[11px] text-slate-400 mt-2">
              Tanpa kartu kredit. Setup mandiri selesai dalam 2 menit.
            </p>
          </div>

          {/* Quiet Metadata Proof */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <span>Digunakan 12.000+ Gerai UMKM</span>
            <span aria-hidden="true">·</span>
            <span>Integrasi Resmi QRIS & Bank</span>
            <span aria-hidden="true">·</span>
            <span>Offline-First (Tetap Jalan Tanpa Internet)</span>
          </div>
        </div>
      </section>

      {/* Feature Bento Section */}
      <section id="fitur" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="mb-12 text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-950">Segala Kebutuhan Toko dalam Satu Aplikasi</h2>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            Dirancang khusus untuk ritel, coffee shop, restoran, salon, hingga apotek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">Kasir Kilat & Struk WhatsApp</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Scan barcode cepat, cetak struk via bluetooth thermal printer, atau kirim langsung salinan nota ke WhatsApp pelanggan hemat kertas.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">Manajemen Stok & Peringatan Habis</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pengingat otomatis ketika persediaan barang hampir habis. Pantau mutasi stok multi-gudang secara akurat dari mana saja.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">Laporan Laba Rugi Otomatis</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Laporan ringkasan penjualan, harga pokok penjualan (HPP), dan laba bersih dihitung secara otomatis tanpa perlu spreadsheet manual.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <h2 className="text-2xl font-bold text-slate-950">Pilihan Paket Langganan Terjangkau</h2>
            <p className="text-xs text-slate-500">
              Pilih paket yang sesuai dengan skala bisnis Anda. Tingkatkan atau batalkan kapan saja.
            </p>

            {/* Monthly / Annual toggle */}
            <div className="pt-2 inline-flex items-center gap-2 p-1 bg-slate-100 rounded-lg border border-slate-200">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  !isAnnual ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Bulanan
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                  isAnnual ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Tahunan</span>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.2 rounded">
                  Hemat 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => {
              const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
              return (
                <div
                  key={plan.id}
                  className={`p-6 rounded-2xl border flex flex-col justify-between space-y-6 ${
                    plan.isPopular
                      ? 'border-slate-900 ring-2 ring-slate-900 bg-slate-900 text-white shadow-lg'
                      : 'border-slate-200 bg-slate-50 text-slate-900'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold">{plan.name}</h3>
                      {plan.isPopular && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded text-white">
                          Paling Dipilih
                        </span>
                      )}
                    </div>

                    <p className={`text-xs ${plan.isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {plan.description}
                    </p>

                    <div className="pt-2">
                      <div className="text-3xl font-extrabold tabular-nums">
                        {formatRupiah(price)}
                      </div>
                      <span className={`text-[11px] ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        per outlet / bulan (ditagih {isAnnual ? 'tahunan' : 'bulanan'})
                      </span>
                    </div>

                    <div className="pt-4 border-t border-slate-200/40 space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider block opacity-75">
                        Fitur Termasuk:
                      </span>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs">
                          <span className={plan.isPopular ? 'text-emerald-400' : 'text-emerald-600'}>
                            ✓
                          </span>
                          <span className={plan.isPopular ? 'text-slate-200' : 'text-slate-700'}>
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenBriefModal}
                    className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold transition-colors ${
                      plan.isPopular
                        ? 'bg-white text-slate-900 hover:bg-slate-100'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto w-full flex-1">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-950">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-xs text-slate-500 mt-1">
            Jawaban lengkap seputar fitur, pembayaran, dan bantuan teknis
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 text-xs font-semibold text-slate-900 hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="text-slate-400 font-mono text-base">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-4 sm:px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 border-b border-slate-800 pb-8">
          <div className="space-y-2 max-w-sm">
            <div className="text-lg font-bold">{config.brandName}</div>
            <p className="text-xs text-slate-400 leading-relaxed">{config.description}</p>
            <p className="text-xs text-slate-400">
              Pusat Dukungan: <span className="text-slate-200">{config.city}</span>
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Bantuan Langsung
            </div>
            <p className="text-xs text-slate-400">
              WhatsApp Support: <span className="text-white font-mono">{config.whatsappNumber}</span>
            </p>
            <p className="text-xs text-slate-400">
              Email: <span className="text-white font-mono">{config.email}</span>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {config.brandName}. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#fitur" className="hover:text-slate-400">Fitur</a>
            <a href="#harga" className="hover:text-slate-400">Harga</a>
            <a href="#faq" className="hover:text-slate-400">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
