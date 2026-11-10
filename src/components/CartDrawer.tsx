import React, { useState } from 'react';
import { CartItem } from '../types/index.ts';
import {
  calculateOrderTotal,
  formatRupiah,
  generateWhatsAppOrderUrl,
} from '../utils/websiteEngine.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  brandName: string;
  whatsappNumber: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  brandName,
  whatsappNumber,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'DISKON10') {
      setDiscountPercent(10);
      setPromoMessage({ text: 'Kupon aktif: Diskon 10% berhasil dipasang!', isError: false });
    } else if (code === 'NUSANTARA20') {
      setDiscountPercent(20);
      setPromoMessage({ text: 'Kupon aktif: Diskon spesial 20%!', isError: false });
    } else {
      setDiscountPercent(0);
      setPromoMessage({ text: 'Kode kupon tidak valid. Coba: DISKON10', isError: true });
    }
  };

  const totals = calculateOrderTotal(items, 15000, discountPercent);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;
    const url = generateWhatsAppOrderUrl(
      whatsappNumber,
      brandName,
      items,
      { name: customerName, address, notes },
      totals
    );
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
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div>
              <h2 className="text-base font-bold text-slate-900">Keranjang Belanja</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {totals.totalItems} item dipilih · Pesan langsung ke WhatsApp
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition-colors"
              aria-label="Tutup Keranjang"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body items */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-slate-700">Keranjang masih kosong</p>
                <p className="text-xs text-slate-500 mt-1">Pilih produk kriya & kopi favorit Anda pada katalog.</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 rounded-xl border border-slate-200 bg-white shadow-xs"
                >
                  <div className="w-16 h-16 rounded-lg bg-slate-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-bold text-slate-600 px-1 text-center">
                      {item.product.category}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-slate-900 truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                      {formatRupiah(item.product.price)}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-slate-200 rounded-md">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="px-2 py-1 text-slate-600 hover:bg-slate-100 text-xs font-bold"
                          aria-label="Kurangi jumlah"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-medium text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="px-2 py-1 text-slate-600 hover:bg-slate-100 text-xs font-bold"
                          aria-label="Tambah jumlah"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-xs text-rose-600 hover:text-rose-800 font-medium"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {items.length > 0 && (
              <div className="mt-6 pt-4 border-t border-slate-200 space-y-4">
                {/* Promo Voucher */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Kode promo (coba: DISKON10)"
                    className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800 uppercase"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-semibold bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    Pasang
                  </button>
                </form>

                {promoMessage && (
                  <p
                    className={`text-xs ${
                      promoMessage.isError ? 'text-rose-600' : 'text-emerald-700'
                    }`}
                  >
                    {promoMessage.text}
                  </p>
                )}

                {/* Shipping & Delivery fields */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-medium text-slate-700">
                    Nama Pemesan
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Contoh: Rian Pratama"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
                  />

                  <label className="block text-xs font-medium text-slate-700 pt-1">
                    Alamat Pengiriman (Kecamatan & Kota)
                  </label>
                  <textarea
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Contoh: Jl. Diponegoro No. 12, Bandung Wetan"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer summary & CTA */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal Produk</span>
                  <span>{formatRupiah(totals.subtotal)}</span>
                </div>
                {totals.discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Diskon Promo ({discountPercent}%)</span>
                    <span>-{formatRupiah(totals.discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimasi Ongkir</span>
                  <span>{formatRupiah(totals.shipping)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Bayar</span>
                  <span>{formatRupiah(totals.grandTotal)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.983.54 1.839.814 2.8.814 3.18 0 5.768-2.588 5.768-5.768 0-3.18-2.587-5.768-5.772-5.768zm3.377 8.214c-.143.402-.828.769-1.157.817-.328.047-.733.064-2.148-.521-1.688-.7-2.775-2.428-2.86-2.541-.084-.113-.683-.909-.683-1.734 0-.825.433-1.232.588-1.399.155-.167.339-.209.453-.209.113 0 .226.002.325.006.104.004.244-.04.382.292.143.344.488 1.192.531 1.28.043.087.072.189.014.305-.058.117-.087.19-.173.29-.086.101-.182.226-.26.303-.087.087-.178.181-.077.355.101.173.45 0.742.966 1.202.665.592 1.226.776 1.399.863.173.087.274.072.375-.043.101-.116.433-.505.549-.679.116-.174.232-.145.39-.087.158.058 1.002.473 1.175.56.173.087.289.13.332.203.043.072.043.418-.1 0.82z" />
                </svg>
                Pesan Cepat via WhatsApp
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Pesan terformat otomatis dikirim ke penjual tanpa ribet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
