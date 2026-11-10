import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatRupiah,
  calculateOrderTotal,
  sanitizeWhatsAppPhone,
  generateWhatsAppOrderUrl,
  filterProducts,
  validateLeadForm,
  validateReservationForm,
} from './websiteEngine.ts';
import { CartItem, Product } from '../types/index.ts';

test('formatRupiah formats IDR currency correctly', () => {
  const formatted = formatRupiah(150000);
  assert.ok(formatted.includes('150.000'), `Expected 150.000 in ${formatted}`);
  assert.ok(formatted.includes('Rp'), `Expected Rp symbol in ${formatted}`);
  assert.equal(formatRupiah(0).includes('0'), true);
});

test('calculateOrderTotal computes subtotal, discounts and grand total', () => {
  const dummyProduct: Product = {
    id: 'p1',
    name: 'Kopi Arabika Gayo',
    category: 'kopi',
    price: 85000,
    rating: 4.9,
    reviewsCount: 120,
    description: 'Specialty coffee',
    stock: 25,
    features: ['Grade 1', 'Single Origin'],
  };

  const items: CartItem[] = [
    { product: dummyProduct, quantity: 2 }, // 170,000
  ];

  // 10% discount on 170,000 = 17,000. Shipping = 15,000. Grand total = 170,000 - 17,000 + 15,000 = 168,000
  const totals = calculateOrderTotal(items, 15000, 10);
  assert.equal(totals.subtotal, 170000);
  assert.equal(totals.discountAmount, 17000);
  assert.equal(totals.shipping, 15000);
  assert.equal(totals.grandTotal, 168000);
  assert.equal(totals.totalItems, 2);
});

test('sanitizeWhatsAppPhone formats phone to standard 62 prefix', () => {
  assert.equal(sanitizeWhatsAppPhone('081234567890'), '6281234567890');
  assert.equal(sanitizeWhatsAppPhone('+62 812-3456-7890'), '6281234567890');
  assert.equal(sanitizeWhatsAppPhone('628571234567'), '628571234567');
});

test('generateWhatsAppOrderUrl outputs valid wa.me checkout link', () => {
  const dummyProduct: Product = {
    id: 'p2',
    name: 'Batik Tulis Solo',
    category: 'fashion',
    price: 350000,
    rating: 5.0,
    reviewsCount: 45,
    description: 'Kain batik katun primissima',
    stock: 10,
    features: ['Handmade', 'Pewarna Alami'],
  };

  const items: CartItem[] = [{ product: dummyProduct, quantity: 1 }];
  const url = generateWhatsAppOrderUrl(
    '081299988877',
    'Batik Nusantara',
    items,
    { name: 'Andi Saputra', address: 'Jl. Merdeka No. 10 Jakarta' },
    { grandTotal: 350000 }
  );

  assert.ok(url.startsWith('https://wa.me/6281299988877'));
  assert.ok(url.includes('Batik%20Nusantara'));
  assert.ok(url.includes('Andi%20Saputra'));
});

test('filterProducts handles category and search keyword matching', () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Kopi Gayo Wine',
      category: 'kopi',
      price: 95000,
      rating: 4.8,
      reviewsCount: 30,
      description: 'Proses fermentasi winey alami',
      stock: 15,
      features: ['Medium Roast'],
    },
    {
      id: '2',
      name: 'Tas Anyaman Rotan',
      category: 'kerajinan',
      price: 180000,
      rating: 4.9,
      reviewsCount: 88,
      description: 'Tas selempang anyaman tangan etnik',
      stock: 8,
      features: ['Ramah Lingkungan'],
    },
  ];

  const filteredCat = filterProducts(products, 'kopi', '');
  assert.equal(filteredCat.length, 1);
  assert.equal(filteredCat[0].id, '1');

  const filteredSearch = filterProducts(products, 'all', 'Rotan');
  assert.equal(filteredSearch.length, 1);
  assert.equal(filteredSearch[0].id, '2');

  const filteredNone = filterProducts(products, 'all', 'TidakAdaBarang');
  assert.equal(filteredNone.length, 0);
});

test('validateLeadForm verifies required fields correctly', () => {
  const invalid = validateLeadForm({
    name: '',
    email: 'not-an-email',
    phone: '123',
    message: '',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);

  const valid = validateLeadForm({
    name: 'Budi Santoso',
    email: 'budi@perusahaan.co.id',
    phone: '081234567890',
    message: 'Kami ingin membuat website company profile baru.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('validateReservationForm validates dining reservations', () => {
  const invalid = validateReservationForm({
    name: 'A',
    phone: '081',
    guests: 0,
  });
  assert.equal(invalid.isValid, false);

  const valid = validateReservationForm({
    name: 'Siti Rahma',
    phone: '081234567890',
    date: '2026-11-01',
    time: '19:00',
    guests: 4,
    seatingArea: 'indoor',
  });
  assert.equal(valid.isValid, true);
});
