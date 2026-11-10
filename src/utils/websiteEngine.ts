import { CartItem, LeadInquiry, Product, ReservationData, ThemePalette } from '../types/index.ts';

/**
 * Format standard Indonesian Rupiah (IDR) currency
 */
export function formatRupiah(amount: number): string {
  if (isNaN(amount) || amount === null || amount === undefined) {
    return 'Rp 0';
  }
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Calculate totals for shopping cart
 */
export function calculateOrderTotal(
  items: CartItem[],
  shippingRate: number = 0,
  discountPercentage: number = 0
): {
  subtotal: number;
  discountAmount: number;
  shipping: number;
  grandTotal: number;
  totalItems: number;
} {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercentage) / 100);
  const afterDiscount = Math.max(0, subtotal - discountAmount);
  const shipping = items.length > 0 ? shippingRate : 0;
  const grandTotal = afterDiscount + shipping;

  return {
    subtotal,
    discountAmount,
    shipping,
    grandTotal,
    totalItems,
  };
}

/**
 * Sanitize Indonesian telephone number to international format (62...)
 */
export function sanitizeWhatsAppPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('0')) {
    return '62' + digits.slice(1);
  }
  if (digits.startsWith('62')) {
    return digits;
  }
  return digits.length > 0 ? digits : '6281234567890';
}

/**
 * Generate formatted WhatsApp order checkout URL
 */
export function generateWhatsAppOrderUrl(
  phone: string,
  businessName: string,
  items: CartItem[],
  customer: { name: string; address: string; notes?: string },
  totals: { grandTotal: number; discountAmount?: number }
): string {
  const cleanPhone = sanitizeWhatsAppPhone(phone);
  const itemsList = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product.name}* (x${item.quantity}) - ${formatRupiah(item.product.price * item.quantity)}`
    )
    .join('\n');

  const text = `Halo *${businessName}*! Saya ingin melakukan pemesanan via website:\n\n` +
    `📋 *RINCIAN PESANAN:*\n${itemsList}\n\n` +
    `💰 *Total Pembayaran:* ${formatRupiah(totals.grandTotal)}\n\n` +
    `👤 *Nama Pembeli:* ${customer.name || '-'}\n` +
    `📍 *Alamat Pengiriman:* ${customer.address || '-'}\n` +
    (customer.notes ? `📝 *Catatan Khusus:* ${customer.notes}\n\n` : '\n') +
    `Mohon konfirmasi ketersediaan stok & nomor rekening pembayaran. Terima kasih! 🙏`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Generate formatted WhatsApp table reservation URL
 */
export function generateWhatsAppBookingUrl(
  phone: string,
  restaurantName: string,
  reservation: ReservationData
): string {
  const cleanPhone = sanitizeWhatsAppPhone(phone);
  const text = `Halo *${restaurantName}*! Saya ingin melakukan reservasi meja via website:\n\n` +
    `👤 *Nama Pemesan:* ${reservation.name}\n` +
    `📞 *Nomor WhatsApp:* ${reservation.phone}\n` +
    `📅 *Tanggal:* ${reservation.date}\n` +
    `⏰ *Jam Kunjungan:* ${reservation.time}\n` +
    `👥 *Jumlah Tamu:* ${reservation.guests} Orang\n` +
    `🪑 *Area Duduk:* ${reservation.seatingArea.toUpperCase()}\n` +
    (reservation.notes ? `📝 *Catatan / Request:* ${reservation.notes}\n\n` : '\n') +
    `Mohon konfirmasi ketersediaan meja kami. Terima kasih!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Filter products by category and search term
 */
export function filterProducts(
  products: Product[],
  activeCategory: string,
  searchTerm: string
): Product[] {
  return products.filter((prod) => {
    const matchesCategory =
      activeCategory === 'all' ||
      prod.category.toLowerCase() === activeCategory.toLowerCase();

    const matchesSearch =
      !searchTerm.trim() ||
      prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
}

/**
 * Validate customer lead inquiry form
 */
export function validateLeadForm(data: Partial<LeadInquiry>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Nama lengkap wajib diisi minimal 2 karakter';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Format alamat email tidak valid';
  }

  const cleanPhone = (data.phone || '').replace(/\D/g, '');
  if (!data.phone || cleanPhone.length < 9) {
    errors.phone = 'Nomor telepon/WhatsApp wajib diisi minimal 9 angka';
  }

  if (!data.message || data.message.trim().length < 5) {
    errors.message = 'Deskripsi kebutuhan wajib diisi minimal 5 karakter';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validate table reservation form
 */
export function validateReservationForm(data: Partial<ReservationData>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Nama pemesan wajib diisi';
  }

  const cleanPhone = (data.phone || '').replace(/\D/g, '');
  if (!data.phone || cleanPhone.length < 9) {
    errors.phone = 'Nomor WhatsApp tidak valid (min. 9 angka)';
  }

  if (!data.date) {
    errors.date = 'Tanggal reservasi harus dipilih';
  }

  if (!data.time) {
    errors.time = 'Jam reservasi harus dipilih';
  }

  if (!data.guests || data.guests < 1 || data.guests > 50) {
    errors.guests = 'Jumlah tamu harus antara 1 sampai 50 orang';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Visual color tokens corresponding to each theme
 */
export function getThemeTokens(palette: ThemePalette) {
  switch (palette) {
    case 'emerald':
      return {
        primary: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        primaryText: 'text-emerald-700',
        primaryBorder: 'border-emerald-600',
        primaryRing: 'focus:ring-emerald-500',
        accentBg: 'bg-emerald-50',
        badgeBg: 'bg-emerald-100 text-emerald-800',
        heroGradient: 'from-emerald-950 via-slate-900 to-emerald-900',
      };
    case 'navy':
      return {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        primaryText: 'text-blue-700',
        primaryBorder: 'border-blue-600',
        primaryRing: 'focus:ring-blue-500',
        accentBg: 'bg-blue-50',
        badgeBg: 'bg-blue-100 text-blue-800',
        heroGradient: 'from-slate-950 via-slate-900 to-blue-950',
      };
    case 'coral':
      return {
        primary: 'bg-amber-600 hover:bg-amber-700 text-white',
        primaryText: 'text-amber-700',
        primaryBorder: 'border-amber-600',
        primaryRing: 'focus:ring-amber-500',
        accentBg: 'bg-amber-50',
        badgeBg: 'bg-amber-100 text-amber-800',
        heroGradient: 'from-neutral-950 via-slate-900 to-amber-950',
      };
    case 'indigo':
      return {
        primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
        primaryText: 'text-indigo-700',
        primaryBorder: 'border-indigo-600',
        primaryRing: 'focus:ring-indigo-500',
        accentBg: 'bg-indigo-50',
        badgeBg: 'bg-indigo-100 text-indigo-800',
        heroGradient: 'from-slate-950 via-indigo-950 to-slate-900',
      };
    case 'charcoal':
    default:
      return {
        primary: 'bg-slate-900 hover:bg-slate-800 text-white',
        primaryText: 'text-slate-900',
        primaryBorder: 'border-slate-900',
        primaryRing: 'focus:ring-slate-500',
        accentBg: 'bg-slate-100',
        badgeBg: 'bg-slate-200 text-slate-800',
        heroGradient: 'from-slate-950 via-neutral-900 to-slate-900',
      };
  }
}
