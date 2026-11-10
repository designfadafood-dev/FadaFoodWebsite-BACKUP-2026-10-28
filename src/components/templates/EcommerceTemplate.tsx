import React, { useState } from 'react';
import { ECOMMERCE_PRODUCTS } from '../../data/mockData.ts';
import { CartItem, Product, WebsiteConfig } from '../../types/index.ts';
import { filterProducts, formatRupiah, getThemeTokens } from '../../utils/websiteEngine.ts';
import { ProductArtCard } from '../common/GraphicVisuals.tsx';

interface EcommerceTemplateProps {
  config: WebsiteConfig;
  cartItems: CartItem[];
  onAddToCart: (product: Product) => void;
  onOpenCart: () => void;
}

export const EcommerceTemplate: React.FC<EcommerceTemplateProps> = ({
  config,
  cartItems,
  onAddToCart,
  onOpenCart,
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const theme = getThemeTokens(config.palette);
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const categories = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'kopi', label: 'Kopi Nusantara' },
    { id: 'kain & tekstil', label: 'Kain & Tenun' },
    { id: 'aksesoris kulit', label: 'Kulit Asli' },
    { id: 'home & living', label: 'Home & Living' },
  ];

  const filteredProducts = filterProducts(ECOMMERCE_PRODUCTS, activeCategory, searchTerm);

  const handleAddWithFeedback = (product: Product) => {
    onAddToCart(product);
    setNotification(`"${product.name}" ditambahkan ke keranjang`);
    setTimeout(() => setNotification(null), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Template Header / Navbar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight text-slate-900">
              {config.brandName}
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-600">
            <a href="#katalog" className="hover:text-slate-900 transition-colors">Katalog Produk</a>
            <a href="#keunggulan" className="hover:text-slate-900 transition-colors">Keunggulan</a>
            <a href="#testimoni" className="hover:text-slate-900 transition-colors">Ulasan Pembeli</a>
            <a href="#kontak" className="hover:text-slate-900 transition-colors">Bantuan & FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className={`relative px-3.5 py-2 rounded-lg font-medium text-xs flex items-center gap-2 transition-colors ${theme.primary}`}
              aria-label="Buka Keranjang Belanja"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Keranjang</span>
              {totalCartCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-white text-slate-900 rounded-full text-[10px] font-bold">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Floating feedback toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2 animate-fade-in">
          <span className="text-emerald-400">✓</span>
          <span>{notification}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {config.city} · Kurasi Karya Asli Pengrajin Lokal
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
              {config.tagline}
            </h1>

            <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
              {config.description} Pesan secara langsung melalui WhatsApp dengan konfirmasi cepat dan jaminan barang asli sampai ke alamat Anda.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#katalog"
                className={`px-5 py-2.5 rounded-lg font-medium text-xs transition-colors shadow-xs ${theme.primary}`}
              >
                Jelajahi Katalog Lengkap
              </a>
              <button
                onClick={onOpenCart}
                className="px-5 py-2.5 rounded-lg font-medium text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              >
                Lihat Keranjang Belanja ({totalCartCount})
              </button>
            </div>

            {/* Quiet metadata line without pills */}
            <div className="pt-4 flex items-center gap-3 text-xs text-slate-500">
              <span>Pengiriman Seluruh Indonesia</span>
              <span aria-hidden="true">·</span>
              <span>Garansi Keaslian 100%</span>
              <span aria-hidden="true">·</span>
              <span>Checkout WhatsApp Instan</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 text-white p-6 relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Koleksi Utama Hari Ini</span>
                  <span className="text-emerald-400 font-medium">Stok Tersedia</span>
                </div>
                <h3 className="text-xl font-bold">Kopi Arabika Gayo & Tenun Ikat Pilihan</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Setiap pesanan dikemas secara rapi dengan standard proteksi tinggi dan bubble wrap ramah lingkungan.
                </p>
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="block text-slate-400">Pusat Distribusi</span>
                    <span className="font-semibold text-white">{config.city}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400">WhatsApp CS</span>
                    <span className="font-semibold text-white font-mono">{config.whatsappNumber}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section id="katalog" className="py-12 px-4 sm:px-6 max-w-7xl mx-auto flex-1 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl font-bold text-slate-950">Katalog Produk Unggulan</h2>
            <p className="text-xs text-slate-500 mt-1">
              Menampilkan {filteredProducts.length} produk siap kirim ke seluruh kota
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari kopi, kain, kulit..."
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800 bg-white"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3 top-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory.toLowerCase() === cat.id.toLowerCase();
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm font-semibold text-slate-700">Tidak ada produk yang cocok</p>
            <p className="text-xs text-slate-500 mt-1">
              Coba gunakan kata kunci pencarian lain atau pilih kategori Semua Produk.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Visual Art Header */}
                <div className="relative">
                  <ProductArtCard category={product.category} title={product.name} />
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{product.category}</span>
                      <span className="flex items-center gap-1 text-amber-600 font-medium">
                        ★ {product.rating} ({product.reviewsCount})
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-500">
                      {product.features.map((feat, idx) => (
                        <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-base font-bold text-slate-950">
                        {formatRupiah(product.price)}
                      </div>
                      {product.originalPrice && (
                        <div className="text-xs text-slate-400 line-through">
                          {formatRupiah(product.originalPrice)}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => handleAddWithFeedback(product)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${theme.primary}`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      <span>Beli</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Trust & Guarantee Section */}
      <section id="keunggulan" className="bg-white border-y border-slate-200 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-sm font-bold text-slate-900">Kurasi Pengrajin Asli</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Produk didapatkan langsung dari komunitas pengrajin dan petani lokal dengan harga yang adil dan transparan.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-sm font-bold text-slate-900">Checkout WhatsApp Praktis</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tanpa perlu registrasi akun rumit. Cukup pilih produk dan konfirmasi pesanan langsung dengan admin toko kami.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-sm font-bold text-slate-900">Garansi Pengiriman Aman</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Barang rusak selama ekspedisi kami ganti baru tanpa biaya tambahan. Dukungan kurir reguler & instan.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-slate-950 text-white py-12 px-4 sm:px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 border-b border-slate-800 pb-8">
          <div className="space-y-2 max-w-sm">
            <div className="text-lg font-bold">{config.brandName}</div>
            <p className="text-xs text-slate-400 leading-relaxed">{config.description}</p>
            <p className="text-xs text-slate-400">
              Lokasi: <span className="text-slate-200">{config.city}</span>
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Layanan Pelanggan
            </div>
            <p className="text-xs text-slate-400">
              WhatsApp: <span className="text-white font-mono">{config.whatsappNumber}</span>
            </p>
            <p className="text-xs text-slate-400">
              Email: <span className="text-white font-mono">{config.email}</span>
            </p>
            <p className="text-xs text-slate-400">Jam Operasional: Senin - Sabtu (08.00 - 20.00 WIB)</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {config.brandName}. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#katalog" className="hover:text-slate-400">Katalog</a>
            <a href="#keunggulan" className="hover:text-slate-400">Tentang Kami</a>
            <button onClick={onOpenCart} className="hover:text-slate-400">Keranjang Belanja</button>
          </div>
        </div>
      </footer>
    </div>
  );
};
