import React, { useState } from 'react';
import { CASE_STUDIES, COMPANY_SERVICES } from '../../data/mockData.ts';
import { LeadInquiry, WebsiteConfig } from '../../types/index.ts';
import { getThemeTokens, validateLeadForm } from '../../utils/websiteEngine.ts';

interface CompanyTemplateProps {
  config: WebsiteConfig;
}

export const CompanyTemplate: React.FC<CompanyTemplateProps> = ({ config }) => {
  const [formData, setFormData] = useState<Partial<LeadInquiry>>({
    name: '',
    company: '',
    email: '',
    phone: '',
    budgetRange: 'Rp 20 Juta - Rp 50 Juta',
    serviceType: 'Pengembangan Website Perusahaan',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const theme = getThemeTokens(config.palette);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateLeadForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
          <span className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap">
            {config.brandName}
          </span>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
            <a href="#layanan" className="hover:text-slate-900 transition-colors">Layanan & Solusi</a>
            <a href="#studi-kasus" className="hover:text-slate-900 transition-colors">Portofolio & Dampak</a>
            <a href="#konsultasi" className="hover:text-slate-900 transition-colors">Hubungi Kami</a>
          </nav>

          <a
            href="#konsultasi"
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${theme.primary}`}
          >
            Konsultasi Proyek
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {config.city} · Solusi Digital Terintegrasi
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
              {config.tagline}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              {config.description} Kami memadukan keahlian teknik berstandar industri dengan desain berorientasi hasil bisnis.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#konsultasi"
                className={`px-6 py-3 rounded-lg text-xs font-semibold shadow-xs transition-colors ${theme.primary}`}
              >
                Jadwalkan Sesi Konsultasi
              </a>
              <a
                href="#studi-kasus"
                className="px-6 py-3 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              >
                Lihat Studi Kasus Klien
              </a>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs text-slate-500">
              <span>Enterprise Ready</span>
              <span aria-hidden="true">·</span>
              <span>SLA Uptime 99.9%</span>
              <span aria-hidden="true">·</span>
              <span>Dukungan Tim Ahli Indonesia</span>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Metric Strip */}
        <div className="border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 tabular-nums">
                150+
              </div>
              <div className="text-xs text-slate-500">Sistem & Portal Web Berhasil Diluncurkan</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 tabular-nums">
                99.9%
              </div>
              <div className="text-xs text-slate-500">Tingkat Keandalan & Uptime Operasional</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 tabular-nums">
                12 Tahun
              </div>
              <div className="text-xs text-slate-500">Pengalaman Industri Rekayasa Perangkat Lunak</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 tabular-nums">
                40+
              </div>
              <div className="text-xs text-slate-500">Mitra Korporasi, Startup & BUMN</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Numbered Editorial Flow */}
      <section id="layanan" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
            Kapabilitas & Layanan Inti
          </h2>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            Pendekatan menyeluruh mulai dari arsitektur awal, pengembangan antarmuka, hingga pemeliharaan sistem jangka panjang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPANY_SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>0{idx + 1}. LAYANAN</span>
                  <span>{srv.timeline}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{srv.title}</h3>
                <p className="text-xs text-slate-500 font-medium">{srv.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Luaran (Deliverables):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                  {srv.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="text-emerald-600">✓</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies / Proof Section */}
      <section id="studi-kasus" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
              Studi Kasus & Hasil Terukur
            </h2>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Bukti nyata bagaimana solusi kami menggerakkan pertumbuhan bisnis dan efisiensi operasional klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="text-xs text-slate-500">
                    <span>{cs.client}</span> · <span>{cs.industry}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{cs.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{cs.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="text-2xl font-extrabold text-slate-950 tabular-nums">
                    {cs.impactMetric}
                  </div>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">
                    {cs.impactLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Consultation Form */}
      <section id="konsultasi" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-950">Mulai Konsultasi Kebutuhan Anda</h2>
            <p className="text-xs text-slate-500 mt-1">
              Diskusikan rencana transformasi digital perusahaan Anda bersama konsultan teknis kami.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <h3 className="text-base font-bold text-slate-900">Permintaan Konsultasi Diterima</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Terima kasih, <span className="font-semibold">{formData.name}</span>. Tim konsultan {config.brandName} akan menghubungi Anda via email ({formData.email}) atau WhatsApp dalam 1x24 jam kerja.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50"
              >
                Kirim Permintaan Baru
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Raden Wijaya"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
                  />
                  {formErrors.name && (
                    <p className="text-[11px] text-rose-600 mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Nama Perusahaan / Organisasi
                  </label>
                  <input
                    type="text"
                    value={formData.company || ''}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Contoh: PT Nusantara Maju Mandiri"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Alamat Email Kerja *
                  </label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.co.id"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-rose-600 mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Nomor WhatsApp / Telepon *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="081234567890"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
                  />
                  {formErrors.phone && (
                    <p className="text-[11px] text-rose-600 mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Kategori Layanan yang Dibutuhkan
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800 bg-white"
                  >
                    <option value="Pengembangan Website Perusahaan">Pengembangan Website Perusahaan</option>
                    <option value="Desain Antarmuka & UX">Desain Antarmuka & UX</option>
                    <option value="Automasi Sistem & Integrasi API">Automasi Sistem & Integrasi API</option>
                    <option value="Optimalisasi SEO & Inbound">Optimalisasi SEO & Inbound</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Estimasi Anggaran Proyek
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800 bg-white"
                  >
                    <option value="Rp 10 Juta - Rp 25 Juta">Rp 10 Juta - Rp 25 Juta</option>
                    <option value="Rp 25 Juta - Rp 50 Juta">Rp 25 Juta - Rp 50 Juta</option>
                    <option value="Rp 50 Juta - Rp 100 Juta">Rp 50 Juta - Rp 100 Juta</option>
                    <option value="Diatas Rp 100 Juta">Diatas Rp 100 Juta</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Deskripsi Singkat Rencana Proyek *
                </label>
                <textarea
                  rows={3}
                  value={formData.message || ''}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ceritakan gambaran website atau sistem yang ingin dibangun..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
                />
                {formErrors.message && (
                  <p className="text-[11px] text-rose-600 mt-1">{formErrors.message}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-3 px-6 text-xs font-semibold rounded-lg transition-colors ${theme.primary}`}
                >
                  Kirim Pengajuan Konsultasi
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-4 sm:px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 border-b border-slate-800 pb-8">
          <div className="space-y-2 max-w-sm">
            <div className="text-lg font-bold">{config.brandName}</div>
            <p className="text-xs text-slate-400 leading-relaxed">{config.description}</p>
            <p className="text-xs text-slate-400">
              Kantor Pusat: <span className="text-slate-200">{config.city}</span>
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Kontak Resmi
            </div>
            <p className="text-xs text-slate-400">
              WhatsApp Tim Solusi: <span className="text-white font-mono">{config.whatsappNumber}</span>
            </p>
            <p className="text-xs text-slate-400">
              Email Bisnis: <span className="text-white font-mono">{config.email}</span>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {config.brandName}. Semua Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#layanan" className="hover:text-slate-400">Layanan</a>
            <a href="#studi-kasus" className="hover:text-slate-400">Studi Kasus</a>
            <a href="#konsultasi" className="hover:text-slate-400">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
