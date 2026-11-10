import React, { useState } from 'react';
import { FADA_COMPANY_PROFILE, FadaCartItem } from '../../data/fadaFoodData.ts';
import { formatRupiah } from '../../utils/websiteEngine.ts';

interface FadaCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: FadaCartItem[];
  onUpdateQuantity: (productId: string, weight: string, delta: number) => void;
  onRemoveItem: (productId: string, weight: string) => void;
  onClearCart: () => void;
}

export const FadaCartDrawer: React.FC<FadaCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponFeedback, setCouponFeedback] = useState<{ msg: string; isError: boolean } | null>(null);

  if (!isOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'FADAHEMAT' || code === 'MERHAN10') {
      setDiscountPercent(10);
      setCouponFeedback({ msg: 'Kupon aktif: Diskon 10% berhasil dipotong!', isError: false });
    } else {
      setDiscountPercent(0);
      setCouponFeedback({ msg: 'Kode kupon tidak valid. Gunakan: FADAHEMAT', isError: true });
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shippingEstimate = items.length > 0 ? 15000 : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount) + shippingEstimate;

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    const itemsSummary = items
      .map(
        (it, idx) =>
          `${idx + 1}. *${it.product.name}* [${it.selectedWeight}] (x${it.quantity}) = ${formatRupiah(
            it.unitPrice * it.quantity
          )}`
      )
      .join('\n');

    const message =
      `Halo *CV. Fada Food*! Saya ingin memesan produk masakan Arab & Basmati via website resmi:\n\n` +
      `📋 *DAFTAR PESANAN:*\n${itemsSummary}\n\n` +
      `Subtotal: ${formatRupiah(subtotal)}\n` +
      (discountAmount > 0 ? `Diskon Kupon (${discountPercent}%): -${formatRupiah(discountAmount)}\n` : '') +
      `Estimasi Ongkir: ${formatRupiah(shippingEstimate)}\n` +
      `💰 *Total Pembayaran:* ${formatRupiah(grandTotal)}\n\n` +
      `👤 *Nama Pemesan:* ${customerName || '-'}\n` +
      `📞 *No. WhatsApp:* ${customerPhone || '-'}\n` +
      `📍 *Alamat Pengiriman:* ${deliveryAddress || '-'}\n` +
      (notes ? `📝 *Catatan:* ${notes}\n\n` : '\n') +
      `Mohon informasikan ongkos kirim pastinya & nomor rekening pembayaran Fada Food. Terima kasih! 🙏`;

    const cleanPhone = `62${FADA_COMPANY_PROFILE.phone1.slice(1)}`;
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/60 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div>
              <h2 className="text-base font-extrabold text-slate-900">Keranjang Belanja</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {totalItemCount} item · Pesan langsung ke Admin Fada Food
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50"
              aria-label="Tutup Keranjang"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Body Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 text-amber-700 flex items-center justify-center text-2xl">
                  🛒
                </div>
                <h3 className="text-sm font-bold text-slate-800">Keranjang masih kosong</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Silakan pilih paket nasi Arab Merhan, bumbu Zaffrona, atau beras basmati favorit Anda di katalog.
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-red-700 text-white hover:bg-red-800 mt-2"
                >
                  Lihat Katalog Produk
                </button>
              </div>
            ) : (
              items.map((it) => (
                <div
                  key={`${it.product.id}-${it.selectedWeight}`}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                      {it.product.image && (
                        <div className="w-12 h-12 bg-slate-50 rounded-lg p-1 border border-slate-100 shrink-0 flex items-center justify-center">
                          <img
                            src={it.product.image}
                            alt={it.product.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase text-red-700 tracking-wider">
                          {it.product.brand}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 leading-snug truncate">
                          {it.product.name}
                        </h4>
                        <span className="text-[11px] text-slate-500 font-medium">
                          Ukuran: <strong className="text-slate-700">{it.selectedWeight}</strong>
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(it.product.id, it.selectedWeight)}
                      className="text-xs text-slate-400 hover:text-red-600 p-1"
                      title="Hapus"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                    <span className="text-xs font-extrabold text-slate-950 tabular-nums">
                      {formatRupiah(it.unitPrice * it.quantity)}
                    </span>

                    <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden">
                      <button
                        onClick={() => onUpdateQuantity(it.product.id, it.selectedWeight, -1)}
                        className="px-2.5 py-0.5 text-xs font-bold text-slate-700 hover:bg-slate-100"
                        aria-label="Kurang satu"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-semibold text-slate-900 tabular-nums">
                        {it.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(it.product.id, it.selectedWeight, 1)}
                        className="px-2.5 py-0.5 text-xs font-bold text-slate-700 hover:bg-slate-100"
                        aria-label="Tambah satu"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {items.length > 0 && (
              <div className="mt-6 pt-4 border-t border-slate-200 space-y-4">
                {/* Coupon input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Kode promo (coba: FADAHEMAT)"
                    className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600 uppercase"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Gunakan
                  </button>
                </form>

                {couponFeedback && (
                  <p
                    className={`text-xs ${
                      couponFeedback.isError ? 'text-red-600' : 'text-emerald-700'
                    }`}
                  >
                    {couponFeedback.msg}
                  </p>
                )}

                {/* Customer fields */}
                <div className="space-y-2 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama Pembeli
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Contoh: Ibu Fatimah"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nomor WhatsApp Anda
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="081234567890"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Alamat Pengiriman Lengkap (Kecamatan & Kota)
                    </label>
                    <textarea
                      rows={2}
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="Contoh: Jl. Pahlawan No. 45, Mojosari, Mojokerto"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="space-y-1 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItemCount} barang)</span>
                  <span className="tabular-nums">{formatRupiah(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Diskon Kupon ({discountPercent}%)</span>
                    <span className="tabular-nums">-{formatRupiah(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimasi Ongkos Kirim</span>
                  <span className="tabular-nums">{formatRupiah(shippingEstimate)}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-slate-950 pt-2 border-t border-slate-200">
                  <span>Total Bayar</span>
                  <span className="tabular-nums text-red-700">{formatRupiah(grandTotal)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.983.54 1.839.814 2.8.814 3.18 0 5.768-2.588 5.768-5.768 0-3.18-2.587-5.768-5.772-5.768zm3.377 8.214c-.143.402-.828.769-1.157.817-.328.047-.733.064-2.148-.521-1.688-.7-2.775-2.428-2.86-2.541-.084-.113-.683-.909-.683-1.734 0-.825.433-1.232.588-1.399.155-.167.339-.209.453-.209.113 0 .226.002.325.006.104.004.244-.04.382.292.143.344.488 1.192.531 1.28.043.087.072.189.014.305-.058.117-.087.19-.173.29-.086.101-.182.226-.26.303-.087.087-.178.181-.077.355.101.173.45 0.742.966 1.202.665.592 1.226.776 1.399.863.173.087.274.072.375-.043.101-.116.433-.505.549-.679.116-.174.232-.145.39-.087.158.058 1.002.473 1.175.56.173.087.289.13.332.203.043.072.043.418-.1 0.82z" />
                </svg>
                Pesan Cepat via WhatsApp
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <button
                  onClick={onClearCart}
                  className="hover:text-red-600 transition-colors"
                >
                  Kosongkan Keranjang
                </button>
                <span>Pesan terkirim ke {FADA_COMPANY_PROFILE.phone1}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
