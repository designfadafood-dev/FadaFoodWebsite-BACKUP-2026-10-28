import React, { useState } from 'react';
import { FADA_PRODUCTS_CATALOG, FadaProduct } from '../../data/fadaFoodData.ts';
import { formatRupiah } from '../../utils/websiteEngine.ts';
import { FadaProductCardArt } from './FadaVisuals.tsx';

interface FadaCatalogProps {
  onAddToCart: (product: FadaProduct, selectedWeight: string, unitPrice: number) => void;
  onOpenDetailModal: (product: FadaProduct) => void;
  searchTerm: string;
  isCompact?: boolean;
}

export const FadaCatalog: React.FC<FadaCatalogProps> = ({
  onAddToCart,
  onOpenDetailModal,
  searchTerm,
  isCompact = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVariants, setSelectedVariants] = useState<Record<string, number>>({});
  const [flavorFilter, setFlavorFilter] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'paket-nasi', label: 'Paket Nasi Merhan' },
    { id: 'bumbu-instan', label: 'Bumbu Zaffrona' },
    { id: 'beras-basmati', label: 'Beras Basmati India' },
    { id: 'rempah-murni', label: 'Rempah Murni Fada' },
  ];

  const flavors = [
    { id: 'all', label: 'Semua Rasa' },
    { id: 'Kabuli', label: 'Kebuli' },
    { id: 'Kabsah', label: 'Kabsah' },
    { id: 'Mandi', label: 'Mandi' },
    { id: 'Biryani', label: 'Biryani' },
  ];

  // Filter products by category, search term, and flavor
  const filteredProducts = FADA_PRODUCTS_CATALOG.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;

    const matchesSearch =
      !searchTerm.trim() ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.flavor && item.flavor.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFlavor =
      flavorFilter === 'all' ||
      item.flavor === flavorFilter ||
      item.category === 'beras-basmati' ||
      item.category === 'rempah-murni';

    return matchesCategory && matchesSearch && matchesFlavor;
  });

  const getVariantIndex = (productId: string) => {
    return selectedVariants[productId] ?? 0;
  };

  const handleSelectVariant = (productId: string, variantIndex: number) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: variantIndex,
    }));
  };

  const handleAddProduct = (product: FadaProduct) => {
    const varIdx = getVariantIndex(product.id);
    const chosenVariant = product.variants[varIdx] || product.variants[0];
    onAddToCart(product, chosenVariant.weight, chosenVariant.price);

    setToastMessage(`"${product.name} (${chosenVariant.weight})" berhasil ditambahkan!`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <section id="katalog" className="py-12 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-slate-700 animate-bounce">
          <span className="text-emerald-400 font-bold">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
            Katalog Produk Resmi
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Pilihan Produk Unggulan Fada Food
          </h2>
          <p className="text-xs text-slate-600 mt-1 max-w-xl">
            Tersedia paket nasi Arab instan Merhan, bumbu racik Zaffrona, rempah murni Fada, dan pilihan beras basmati impor varietas terbaik India.
          </p>
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Menampilkan <span className="font-bold text-slate-900">{filteredProducts.length}</span> produk
        </div>
      </div>

      {/* Lemonilo-style Category Pill Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Sub-filter by Flavor (for Rice & Seasonings) */}
      {(activeCategory === 'all' || activeCategory === 'paket-nasi' || activeCategory === 'bumbu-instan') && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 no-scrollbar text-xs">
          <span className="text-slate-500 font-medium mr-1 text-[11px]">Pilihan Varian:</span>
          {flavors.map((flv) => {
            const isSelected = flavorFilter === flv.id;
            return (
              <button
                key={flv.id}
                onClick={() => setFlavorFilter(flv.id)}
                className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                  isSelected
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {flv.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Product Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 p-8 space-y-2">
          <p className="text-sm font-bold text-slate-800">Tidak ada produk yang cocok</p>
          <p className="text-xs text-slate-500">
            Coba ubah kata kunci pencarian atau pilih kategori Semua Produk.
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setFlavorFilter('all');
            }}
            className="mt-3 px-4 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded-lg"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className={isCompact ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'}>
          {filteredProducts.map((product) => {
            const currentVarIdx = getVariantIndex(product.id);
            const currentVariant = product.variants[currentVarIdx] || product.variants[0];

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Header */}
                  <div className="relative">
                    <FadaProductCardArt
                      category={product.category}
                      name={product.name}
                      flavor={product.flavor}
                      brand={product.brand}
                      weight={currentVariant.weight}
                      image={product.image}
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-2.5">
                    {/* Category, Brand & Rating */}
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-bold text-red-700 uppercase tracking-wider text-[10px]">
                        {product.brand} {product.badge && `· ${product.badge}`}
                      </span>
                      <span className="flex items-center gap-1 text-amber-600 font-bold">
                        ★ {product.rating} <span className="font-normal text-slate-400">({product.reviewsCount})</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onOpenDetailModal(product)}
                      className="text-sm font-bold text-slate-900 hover:text-red-700 cursor-pointer line-clamp-2 leading-snug"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Variant Weight Selector */}
                    {product.variants.length > 1 && (
                      <div className="pt-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          Pilih Kemasan:
                        </label>
                        <div className="flex flex-wrap gap-1">
                          {product.variants.map((v, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleSelectVariant(product.id, idx)}
                              className={`px-2 py-0.5 text-[11px] font-semibold rounded-md border transition-colors ${
                                currentVarIdx === idx
                                  ? 'border-red-600 bg-red-50 text-red-700 font-bold'
                                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              {v.weight}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Highlights */}
                    <div className="pt-1 flex flex-wrap gap-1 text-[10px]">
                      {product.highlights.slice(0, 2).map((h, i) => (
                        <span key={i} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price & Actions Footer */}
                <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-base font-extrabold text-slate-950 tabular-nums">
                      {formatRupiah(currentVariant.price)}
                    </div>
                    {currentVariant.originalPrice && (
                      <div className="text-[11px] text-slate-400 line-through tabular-nums">
                        {formatRupiah(currentVariant.originalPrice)}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onOpenDetailModal(product)}
                      className="px-2.5 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      title="Lihat Detail & Resep"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => handleAddProduct(product)}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-red-700 hover:bg-red-800 text-white transition-colors flex items-center gap-1 shadow-xs"
                      aria-label={`Tambah ${product.name} ke keranjang`}
                    >
                      <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M12 4v16m8-8H4" />
                      </svg>
                      <span>Pesan</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
