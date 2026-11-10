import React, { useState } from 'react';
import { FADA_COMPANY_PROFILE } from '../../data/fadaFoodData.ts';

interface FadaNavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  searchTerm: string;
  onSearchChange: (query: string) => void;
  isCompact?: boolean;
}

export const FadaNavbar: React.FC<FadaNavbarProps> = ({
  cartCount,
  onOpenCart,
  searchTerm,
  onSearchChange,
  isCompact = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-xs">
      {/* Top Notification Strip */}
      <div className="bg-gradient-to-r from-red-700 via-amber-600 to-red-700 text-white text-[11px] font-medium py-1.5 px-4 text-center tracking-wide">
        <span className="opacity-95">
          ✨ Cita Rasa Autentik Masakan Arab & Beras Basmati · Pesan Cepat via WhatsApp:{' '}
          <a
            href={`https://wa.me/62${FADA_COMPANY_PROFILE.phone1.slice(1)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-amber-200"
          >
            {FADA_COMPANY_PROFILE.phone1}
          </a>
        </span>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo Lockup */}
        <a href="#" className="flex items-center gap-2 shrink-0 py-1 group">
          <img
            src={FADA_COMPANY_PROFILE.logoUrl}
            alt="Fadafood - Arabian Cuisine Specialist"
            className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Search Input inspired by Lemonilo */}
        {!isCompact && (
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Cari Nasi Kebuli, Bumbu Zaffrona, Beras Basmati..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 bg-slate-50 transition-all"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3 top-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchTerm && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}

        {/* Desktop Navigation Links */}
        {!isCompact && (
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-700">
            <a href="#katalog" className="hover:text-red-700 transition-colors">
              Katalog Produk
            </a>
            <a href="#profil" className="hover:text-red-700 transition-colors">
              Tentang Fada
            </a>
            <a href="#nilai-fada" className="hover:text-red-700 transition-colors">
              Nilai F-A-D-A
            </a>
            <a href="#cara-masak" className="hover:text-red-700 transition-colors">
              Cara Masak
            </a>
            <a href="#mitra" className="hover:text-red-700 transition-colors">
              Mitra Katering
            </a>
          </nav>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Shopee Direct Link */}
          {!isCompact && (
            <a
              href="https://shopee.co.id/FADAFOOD"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-lg border border-orange-200 transition-colors"
            >
              <span>Shopee</span>
            </a>
          )}

          {/* WhatsApp Direct Link */}
          {!isCompact && (
            <a
              href={`https://wa.me/62${FADA_COMPANY_PROFILE.phone1.slice(1)}?text=Halo%20Fada%20Food,%20saya%20ingin%20tanya%20produk%20masakan%20Arab%20dan%20beras%20basmati.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.983.54 1.839.814 2.8.814 3.18 0 5.768-2.588 5.768-5.768 0-3.18-2.587-5.768-5.772-5.768zm3.377 8.214c-.143.402-.828.769-1.157.817-.328.047-.733.064-2.148-.521-1.688-.7-2.775-2.428-2.86-2.541-.084-.113-.683-.909-.683-1.734 0-.825.433-1.232.588-1.399.155-.167.339-.209.453-.209.113 0 .226.002.325.006.104.004.244-.04.382.292.143.344.488 1.192.531 1.28.043.087.072.189.014.305-.058.117-.087.19-.173.29-.086.101-.182.226-.26.303-.087.087-.178.181-.077.355.101.173.45 0.742.966 1.202.665.592 1.226.776 1.399.863.173.087.274.072.375-.043.101-.116.433-.505.549-.679.116-.174.232-.145.39-.087.158.058 1.002.473 1.175.56.173.087.289.13.332.203.043.072.043.418-.1 0.82z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          )}

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="px-3.5 py-2 text-xs font-bold rounded-lg bg-red-700 hover:bg-red-800 text-white flex items-center gap-2 shadow-xs transition-colors"
            aria-label="Buka Keranjang Belanja"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className={isCompact ? 'hidden' : 'hidden sm:inline'}>Keranjang</span>
            {cartCount > 0 && (
              <span className="bg-amber-400 text-slate-950 px-1.5 py-0.2 rounded-full text-[11px] font-extrabold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${isCompact ? 'block' : 'lg:hidden'} p-2 text-slate-600 hover:text-slate-900`}
            aria-label="Buka Menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Search & Menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 px-4 py-3 bg-white space-y-3">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari produk Nasi Arab & Basmati..."
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-red-600"
          />
          <div className="flex flex-col gap-2 pt-2 text-xs font-semibold text-slate-700">
            <a
              href="#katalog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-700"
            >
              Katalog Produk Lengkap
            </a>
            <a
              href="#profil"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-700"
            >
              Profil Perusahaan
            </a>
            <a
              href="#nilai-fada"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-700"
            >
              Nilai Perusahaan F-A-D-A
            </a>
            <a
              href="#cara-masak"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-700"
            >
              Panduan Memasak Praktis
            </a>
            <a
              href="#mitra"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-700"
            >
              Kerjasama Katering & Grosir
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
