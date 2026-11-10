import React, { useState } from 'react';
import { ThemePalette, WebsiteConfig, WebsiteTemplateType } from '../types/index.ts';

interface BriefBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyConfig: (config: WebsiteConfig) => void;
}

export const BriefBuilderModal: React.FC<BriefBuilderModalProps> = ({
  isOpen,
  onClose,
  onApplyConfig,
}) => {
  const [templateType, setTemplateType] = useState<WebsiteTemplateType>('ecommerce');
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [city, setCity] = useState('Jakarta, Indonesia');
  const [phone, setPhone] = useState('081234567890');
  const [tagline, setTagline] = useState('');
  const [palette, setPalette] = useState<ThemePalette>('emerald');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'WhatsApp Checkout',
    'Mobile Responsive',
    'Katalog Visual',
  ]);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const featuresList = [
    'WhatsApp Checkout / Pemesanan',
    'Mobile Responsive & Ringan',
    'Katalog Visual Produk / Menu',
    'Formulir Kontak & Lead Capture',
    'Integrasi Peta Lokasi Google Maps',
    'Testimoni & Bukti Sosial Pelanggan',
    'Paket Harga & Perbandingan Fitur',
    'Sistem Reservasi / Booking Meja',
  ];

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = businessName.trim() || 'Usaha Baru Nusantara';
    const finalTagline = tagline.trim() || 'Solusi Kualitas Terbaik untuk Pelanggan Indonesia';

    onApplyConfig({
      template: templateType,
      brandName: finalName,
      tagline: finalTagline,
      description: `Website resmi ${finalName} di bidang ${industry || 'layanan profesional'}. Menghadirkan pelayanan prima di ${city}.`,
      whatsappNumber: phone || '081234567890',
      city: city || 'Indonesia',
      email: `kontak@${finalName.toLowerCase().replace(/[^a-z0-9]/g, '')}.id`,
      palette,
    });
    onClose();
  };

  const getBriefSummaryText = () => {
    return `Brief Pembuatan Website Baru:
- Nama Usaha: ${businessName || '[Nama Usaha]'}
- Kategori / Industri: ${industry || '[Industri]'}
- Model Template: ${templateType.toUpperCase()}
- Kota / Lokasi: ${city}
- No. WhatsApp Admin: ${phone}
- Fitur Kebutuhan: ${selectedFeatures.join(', ')}
- Slogan / Tagline: ${tagline || '-'}`;
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(getBriefSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl transition-all">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Konsultasi & Kustomisasi Kebutuhan Website
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Pilih jenis website dan sesuaikan langsung dengan bisnis Anda
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              aria-label="Tutup form"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleApply} className="mt-4 space-y-4">
            {/* Template Selector */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                1. Pilih Tipe Website yang Diinginkan
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'ecommerce', label: 'Toko Online', icon: '🛒' },
                  { id: 'company', label: 'Company Profile', icon: '🏢' },
                  { id: 'restaurant', label: 'Resto & Cafe', icon: '☕' },
                  { id: 'landing', label: 'Landing Page', icon: '🚀' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTemplateType(item.id as WebsiteTemplateType)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      templateType === item.id
                        ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-base block mb-0.5">{item.icon}</span>
                    <span className="text-xs font-semibold block">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Business info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  2. Nama Usaha / Brand
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Contoh: Barista Artisan, Batik Cantik"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Industri / Bidang Usaha
                </label>
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="Contoh: Kuliner, Fashion, Agensi, Jasa"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Nomor WhatsApp Penjualan/Admin
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Contoh: 081234567890"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Kota / Domisili
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Contoh: Bandung, Surabaya, Medan"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Slogan / Tagline Bisnis (Opsional)
              </label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="Contoh: Cita Rasa Autentik Nusantara Langsung ke Pintu Rumah Anda"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
              />
            </div>

            {/* Theme palette */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                3. Pilihan Aksen Warna Tema
              </label>
              <div className="flex gap-2">
                {[
                  { id: 'emerald', label: 'Emerald', bg: 'bg-emerald-600' },
                  { id: 'navy', label: 'Navy', bg: 'bg-blue-600' },
                  { id: 'coral', label: 'Amber', bg: 'bg-amber-600' },
                  { id: 'indigo', label: 'Indigo', bg: 'bg-indigo-600' },
                  { id: 'charcoal', label: 'Charcoal', bg: 'bg-slate-900' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPalette(item.id as ThemePalette)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                      palette === item.id
                        ? 'border-slate-800 bg-slate-100 ring-1 ring-slate-800'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full ${item.bg}`} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Features check */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                4. Fitur-Fitur Kunci yang Anda Butuhkan
              </label>
              <div className="grid grid-cols-2 gap-2">
                {featuresList.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`text-left p-2 rounded-lg border text-xs flex items-center justify-between transition-colors ${
                        isChecked
                          ? 'border-emerald-600 bg-emerald-50/50 text-emerald-950 font-medium'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate pr-1">{feat}</span>
                      <span
                        className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                          isChecked ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                        }`}
                      >
                        {isChecked ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors"
              >
                Terapkan ke Website Sekarang
              </button>
              <button
                type="button"
                onClick={handleCopyBrief}
                className="py-2.5 px-3 text-xs font-medium rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors"
              >
                {copied ? 'Tersalin!' : 'Salin Brief'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
