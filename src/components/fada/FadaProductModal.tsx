import React, { useState } from 'react';
import { FADA_COMPANY_PROFILE, FadaProduct } from '../../data/fadaFoodData.ts';
import { formatRupiah } from '../../utils/websiteEngine.ts';

interface FadaProductModalProps {
  product: FadaProduct | null;
  onClose: () => void;
  onAddToCart: (product: FadaProduct, selectedWeight: string, unitPrice: number) => void;
}

export const FadaProductModal: React.FC<FadaProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);

  if (!product) return null;

  const currentVariant = product.variants[selectedVariantIdx] || product.variants[0];

  const handleOrderWhatsApp = () => {
    const text = `Halo Fada Food! Saya tertarik dengan produk *${product.name}* (Kemasan: ${currentVariant.weight}) seharga ${formatRupiah(currentVariant.price)}.\n\nApakah stok masih tersedia dan berapa ongkir ke kota saya? Terima kasih.`;
    const url = `https://wa.me/62${FADA_COMPANY_PROFILE.phone1.slice(1)}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddToCartAndClose = () => {
    onAddToCart(product, currentVariant.weight, currentVariant.price);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-2xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl transition-all space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
                  {product.brand} · {product.categoryLabel}
                </span>
                {product.badge && (
                  <span className="bg-red-50 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded border border-red-200">
                    {product.badge}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 mt-1">
                {product.name}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              aria-label="Tutup Detail"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Packaging Image Banner */}
          {product.image && (
            <div className="w-full h-56 sm:h-64 bg-gradient-to-b from-slate-50 via-white to-amber-50/20 rounded-xl p-3 flex items-center justify-center border border-slate-100 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-lg"
              />
            </div>
          )}

          {/* Description */}
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <label className="block text-xs font-bold text-slate-800">
                  Pilih Ukuran / Kemasan:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedVariantIdx(idx)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                        selectedVariantIdx === idx
                          ? 'border-red-600 bg-red-600 text-white shadow-xs'
                          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {v.weight} - {formatRupiah(v.price)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {product.highlights.map((h, i) => (
                <div key={i} className="p-2.5 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900 flex items-center gap-2">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span className="font-medium text-[11px]">{h}</span>
                </div>
              ))}
              {product.cookingTime && (
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 flex items-center gap-2">
                  <span>⏱️</span>
                  <span className="font-medium text-[11px]">Waktu: {product.cookingTime}</span>
                </div>
              )}
              {product.servingPortion && (
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 flex items-center gap-2">
                  <span>🍽️</span>
                  <span className="font-medium text-[11px]">{product.servingPortion}</span>
                </div>
              )}
            </div>

            {/* Cooking Instructions (if available) */}
            {product.cookingInstructions && product.cookingInstructions.length > 0 && (
              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <span>👨‍🍳</span>
                  <span>Petunjuk Memasak Mudah (Rice Cooker):</span>
                </h3>
                <ol className="space-y-1.5 text-xs text-slate-600 list-decimal pl-5">
                  {product.cookingInstructions.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Pricing & CTA */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">
                Harga Kemasan {currentVariant.weight}
              </span>
              <div className="text-2xl font-extrabold text-slate-950 tabular-nums">
                {formatRupiah(currentVariant.price)}
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleAddToCartAndClose}
                className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Tambah ke Keranjang</span>
              </button>

              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>Beli via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
