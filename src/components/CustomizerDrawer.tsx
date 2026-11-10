import React from 'react';
import { ThemePalette, WebsiteConfig } from '../types/index.ts';

interface CustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: WebsiteConfig;
  onChangeConfig: (newConfig: WebsiteConfig) => void;
  onResetDefault: () => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onChangeConfig,
  onResetDefault,
}) => {
  if (!isOpen) return null;

  const palettes: { id: ThemePalette; name: string; bg: string }[] = [
    { id: 'emerald', name: 'Emerald Botanical', bg: 'bg-emerald-600' },
    { id: 'navy', name: 'Royal Navy', bg: 'bg-blue-600' },
    { id: 'coral', name: 'Amber Sunset', bg: 'bg-amber-600' },
    { id: 'indigo', name: 'Modern Indigo', bg: 'bg-indigo-600' },
    { id: 'charcoal', name: 'Minimal Charcoal', bg: 'bg-slate-900' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-sm bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Kustomisasi Cepat</h2>
              <p className="text-xs text-slate-500 mt-0.5">Ubah identitas website secara instan</p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50"
              aria-label="Tutup kustomisasi"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form items */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Bisnis / Brand
              </label>
              <input
                type="text"
                value={config.brandName}
                onChange={(e) => onChangeConfig({ ...config, brandName: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Slogan / Tagline
              </label>
              <input
                type="text"
                value={config.tagline}
                onChange={(e) => onChangeConfig({ ...config, tagline: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nomor WhatsApp Admin (Checkout / Booking)
              </label>
              <input
                type="tel"
                value={config.whatsappNumber}
                onChange={(e) => onChangeConfig({ ...config, whatsappNumber: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800 font-mono"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Format: 081234567890 (terhubung otomatis ke WhatsApp)
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Kota / Lokasi Bisnis
              </label>
              <input
                type="text"
                value={config.city}
                onChange={(e) => onChangeConfig({ ...config, city: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Alamat Email Kontak
              </label>
              <input
                type="email"
                value={config.email}
                onChange={(e) => onChangeConfig({ ...config, email: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Palet Warna Tema
              </label>
              <div className="space-y-1.5">
                {palettes.map((p) => {
                  const isSelected = config.palette === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => onChangeConfig({ ...config, palette: p.id })}
                      className={`w-full flex items-center justify-between p-2 rounded-lg border text-xs transition-colors ${
                        isSelected
                          ? 'border-slate-800 bg-slate-100 font-semibold text-slate-900'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-3.5 h-3.5 rounded-full ${p.bg}`} />
                        <span>{p.name}</span>
                      </div>
                      {isSelected && <span className="text-slate-900 font-bold">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center gap-2">
            <button
              onClick={onResetDefault}
              className="flex-1 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Reset ke Standar
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-2 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
