import React, { useState } from 'react';
import { RESTAURANT_MENU } from '../../data/mockData.ts';
import { WebsiteConfig } from '../../types/index.ts';
import { formatRupiah, getThemeTokens } from '../../utils/websiteEngine.ts';
import { CulinaryArtCard } from '../common/GraphicVisuals.tsx';

interface RestaurantTemplateProps {
  config: WebsiteConfig;
  onOpenReservation: () => void;
  isCompact?: boolean;
}

export const RestaurantTemplate: React.FC<RestaurantTemplateProps> = ({
  config,
  onOpenReservation,
  isCompact = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const theme = getThemeTokens(config.palette);

  const categories = [
    { id: 'all', label: 'Semua Menu' },
    { id: 'signature', label: 'Signature Chef' },
    { id: 'makanan', label: 'Hidangan Utama' },
    { id: 'minuman', label: 'Minuman Tradisional' },
    { id: 'dessert', label: 'Pencuci Mulut' },
  ];

  const filteredMenu =
    activeCategory === 'all'
      ? RESTAURANT_MENU
      : RESTAURANT_MENU.filter((m) => m.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
          <span className="text-lg font-bold tracking-tight text-stone-900 whitespace-nowrap">
            {config.brandName}
          </span>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-stone-600">
            <a href="#menu" className="hover:text-stone-900 transition-colors">Buku Menu</a>
            <a href="#filosofi" className="hover:text-stone-900 transition-colors">Kisah & Filosofi</a>
            <a href="#lokasi" className="hover:text-stone-900 transition-colors">Lokasi & Jam Buka</a>
          </nav>

          <button
            onClick={onOpenReservation}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors whitespace-nowrap shadow-xs"
          >
            Reservasi Meja
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-stone-900 text-stone-100 py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              {config.city} · Masakan Rempah Tradisional Nusantara
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-serif-display">
              {config.tagline}
            </h1>

            <p className="text-sm text-stone-300 max-w-xl leading-relaxed">
              {config.description} Dari racikan Rawon Wagyu Brisket berkuah kluwek hitam hingga seduhan kopi susu aren melati, setiap hidangan disiapkan dengan ketulusan cita rasa warisan tanah air.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white transition-colors shadow-xs"
              >
                Pesan Meja Anda Sekarang
              </button>
              <a
                href="#menu"
                className="px-6 py-3 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
              >
                Lihat Daftar Menu
              </a>
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs text-stone-400">
              <span>Bahan Baku Organik</span>
              <span aria-hidden="true">·</span>
              <span>100% Halal Certified</span>
              <span aria-hidden="true">·</span>
              <span>Area Parkir Luas & Mushola</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-4">
              <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                Jam Kunjungan Resto
              </div>
              <div className="space-y-2 text-xs text-stone-300">
                <div className="flex justify-between border-b border-stone-700/60 pb-2">
                  <span>Senin - Jumat</span>
                  <span className="font-semibold text-white font-mono">11.00 - 22.00 WIB</span>
                </div>
                <div className="flex justify-between border-b border-stone-700/60 pb-2">
                  <span>Sabtu - Minggu</span>
                  <span className="font-semibold text-white font-mono">10.00 - 23.00 WIB</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Kontak Reservasi</span>
                  <span className="font-semibold text-amber-300 font-mono">{config.whatsappNumber}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto w-full flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 font-serif-display">
              Buku Menu Unggulan
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Disajikan segar setiap hari menggunakan rempah alami nusantara
            </p>
          </div>

          {/* Category switcher */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((c) => {
              const isSelected = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <CulinaryArtCard category={item.category} name={item.name} />

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="uppercase tracking-wider text-[11px] font-medium text-amber-700">
                      {item.category}
                    </span>
                    <span className="tabular-nums">Waktu saji: {item.prepTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-stone-900">{item.name}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-stone-100">
                <span className="text-base font-bold text-stone-950">
                  {formatRupiah(item.price)}
                </span>
                <button
                  onClick={onOpenReservation}
                  className="px-3 py-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors"
                >
                  Pesan Meja
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy & Atmosphere */}
      <section id="filosofi" className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-stone-900">01. Bumbu Rempah Alami</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Kami tidak menggunakan pengawet maupun perasa sintetis buatan. Semua kelezatan berasal dari racikan rempah segar ulek tradisional.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-stone-900">02. Dapur Terbuka (Open Kitchen)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Anda dapat menyaksikan secara langsung proses memasak para koki kami dalam standar kebersihan dan sanitasi ketat.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-stone-900">03. Ramah Keluarga & Komunitas</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Menyediakan ruang VIP ber-AC untuk acara gathering serta gazebo taman outdoor yang sejuk untuk santai bersama keluarga.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="lokasi" className="bg-stone-950 text-stone-300 py-12 px-4 sm:px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 border-b border-stone-800 pb-8">
          <div className="space-y-2 max-w-sm">
            <div className="text-lg font-bold text-white font-serif-display">
              {config.brandName}
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">{config.description}</p>
            <p className="text-xs text-stone-400">
              Alamat: <span className="text-white">{config.city}</span>
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Reservasi & Kemitraan
            </div>
            <p className="text-xs text-stone-400">
              WhatsApp: <span className="text-white font-mono">{config.whatsappNumber}</span>
            </p>
            <p className="text-xs text-stone-400">
              Email: <span className="text-white font-mono">{config.email}</span>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} {config.brandName}. Warisan Kuliner Nusantara.</p>
          <div className="flex gap-6">
            <a href="#menu" className="hover:text-stone-400">Daftar Menu</a>
            <button onClick={onOpenReservation} className="hover:text-stone-400">Reservasi Meja</button>
          </div>
        </div>
      </footer>
    </div>
  );
};
