export interface FadaProductVariant {
  weight: string;
  price: number;
  originalPrice?: number;
}

export interface FadaProduct {
  id: string;
  brand: 'Merhan' | 'Zaffrona' | 'Fada' | 'Basmati';
  name: string;
  category: 'paket-nasi' | 'bumbu-instan' | 'rempah-murni' | 'beras-basmati';
  categoryLabel: string;
  subCategory?: string;
  flavor?: 'Kabsah' | 'Kabuli' | 'Mandi' | 'Biryani' | 'Rempah' | 'Beras';
  tagline: string;
  description: string;
  variants: FadaProductVariant[];
  selectedVariantIndex: number;
  badge?: string;
  rating: number;
  reviewsCount: number;
  cookingTime?: string;
  servingPortion?: string;
  highlights: string[];
  cookingInstructions?: string[];
  imageUrlCategory: string;
  image?: string;
}

export interface FadaCartItem {
  product: FadaProduct;
  selectedWeight: string;
  unitPrice: number;
  quantity: number;
}

export const FADA_COMPANY_PROFILE = {
  name: 'CV. Fada Food',
  brandName: 'Fadafood',
  logoUrl: '/images/logo/LogoFadafood.png',
  tagline: 'Spesialis Masakan Arab dan Beras Basmati',
  slogan: 'Cita Rasa Autentik dalam Sajian yang Lebih Praktis',
  foundedYear: '2020',
  city: 'Mojokerto, Jawa Timur',
  fullAddress: 'Balong Waru, RT. 03 / RW. 01, Balong Mojo, Puri, Sumolawang, Kec. Puri, Kabupaten Mojokerto, Jawa Timur - 61363',
  phone1: '082143354443',
  phone2: '081212905992',
  instagram: '@cvfadafoodofficial',
  tiktok: '@fadafoodofficial',
  facebook: 'Fadafood',
  shopee: 'FADAFOOD',
  aboutBrief: 'CV. Fada Food adalah produsen dan distributor pangan yang berfokus pada hidangan khas Arab dan India. Kami menghadirkan paket nasi Arab instan, bumbu rempah pilihan, dan beras basmati berkualitas tinggi untuk kebutuhan keluarga, katering, restoran, hingga perhotelan.',
  foreword: 'Kami percaya bahwa cita rasa autentik tidak harus selalu melalui proses yang rumit. Dengan bahan yang berkualitas, komposisi yang tepat dan pengolahan yang terkontrol, siapapun dapat menyajikan makanan istimewa khas Timur Tengah dengan mudah dan konsisten.',
  vision: 'Menjadi perusahaan pangan terpercaya dan berdaya saing dalam menghadirkan produk masakan khas Arab dan India yang berkualitas, autentik, praktis, halal, serta mampu menjangkau pasar nasional dan internasional.',
  fadaValues: [
    {
      letter: 'F',
      title: 'Food Quality (Kualitas Produk)',
      desc: 'Mengutamakan kualitas dalam setiap tahapan, mulai dari pemilihan bahan baku rempah dan beras hingga produk diterima oleh konsumen.',
    },
    {
      letter: 'A',
      title: 'Authentic Taste (Rasa yang Asli)',
      desc: 'Menjaga karakter rasa dan aroma khas masakan Arab dan India melalui penggunaan komposisi racikan rempah murni yang tepat.',
    },
    {
      letter: 'D',
      title: 'Dependable Service (Pelayanan Diandalkan)',
      desc: 'Memberikan pelayanan yang dapat dipercaya, responsif, jujur, dan bertanggung jawab kepada seluruh konsumen serta mitra katering.',
    },
    {
      letter: 'A',
      title: 'Adaptive Innovation (Inovasi & Adaptif)',
      desc: 'Terus menyesuaikan produk, kemasan instan praktis, dan kanal distribusi dengan tren gaya hidup modern tanpa mengurangi keaslian resep.',
    },
  ],
  sectors: [
    {
      title: 'Import Beras Basmati Pilihan',
      desc: 'Pengadaan langsung beras basmati varietas unggul 1121 & 1509 dari sentra penghasil terbaik di India dengan butir ekstra panjang dan kemurnian 95%.',
    },
    {
      title: 'Produksi Paket Nasi Arab & Bumbu Instan',
      desc: 'Memproduksi paket beras basmati lengkap dengan bumbu rempah siap olah (Merhan & Zaffrona) yang higienis, halal, dan mudah dimasak di rice cooker rumah.',
    },
    {
      title: 'Distribusi Rumah Tangga & Katering',
      desc: 'Menyediakan pasokan kemasan retail untuk rumah tangga serta kemasan ekonomis curah (5kg - 25kg) untuk hotel, restoran, katering aqiqah, dan reseller.',
    },
  ],
};

export const FADA_PRODUCTS_CATALOG: FadaProduct[] = [
  // --- 1. MERHAN 500gr ---
  {
    id: 'merhan-kabsah-500',
    brand: 'Merhan',
    name: 'Merhan Nasi Kabsah Lengkap 500gr',
    category: 'paket-nasi',
    categoryLabel: 'Paket Nasi Arab Instan',
    flavor: 'Kabsah',
    tagline: 'Beras Basmati + Bumbu Kabsah Khas Saudi Arab',
    description: 'Paket praktis berisi beras basmati premium dan bumbu rempah Kabsah dengan dominasi aroma tomat, kayu manis, kismis, dan rempah harum. Porsi pas untuk 5-6 orang.',
    variants: [
      { weight: '500gr (5-6 Porsi)', price: 42000, originalPrice: 48000 },
      { weight: '280gr Hemat (4 Porsi)', price: 25000, originalPrice: 28000 },
    ],
    selectedVariantIndex: 0,
    badge: 'Favorit Keluarga',
    rating: 4.9,
    reviewsCount: 384,
    cookingTime: '25 Menit',
    servingPortion: '5-6 Porsi',
    highlights: ['Sudah Lengkap Beras Basmati & Bumbu', 'Cukup Pakai Rice Cooker', '100% Rempah Asli'],
    cookingInstructions: [
      'Cuci beras basmati yang ada dalam paket, lalu tiriskan.',
      'Tumis bumbu Merhan Kabsah dengan sedikit minyak atau margarin hingga harum.',
      'Masukkan beras basmati ke rice cooker, tambahkan air sesuai takaran dan bumbu tumis.',
      'Bisa ditambahkan potongan ayam atau daging kambing sesuai selera.',
      'Tekan tombol cook pada rice cooker dan tunggu hingga matang sempurna.',
    ],
    imageUrlCategory: 'kabsah',
    image: '/images/products/merhan-kabsah-500.webp',
  },
  {
    id: 'merhan-kabuli-500',
    brand: 'Merhan',
    name: 'Merhan Nasi Kabuli Lengkap 500gr',
    category: 'paket-nasi',
    categoryLabel: 'Paket Nasi Arab Instan',
    flavor: 'Kabuli',
    tagline: 'Gurih Manis Berpadu Aroma Kapulaga & Cengkeh',
    description: 'Paket beras basmati lengkap dengan bumbu nasi Kebuli otentik. Memberikan aroma khas Timur Tengah yang kuat dengan sensasi rasa gurih yang lezat.',
    variants: [
      { weight: '500gr (5-6 Porsi)', price: 42000, originalPrice: 48000 },
      { weight: '280gr Hemat (4 Porsi)', price: 25000, originalPrice: 28000 },
    ],
    selectedVariantIndex: 0,
    badge: 'Terlaris',
    rating: 5.0,
    reviewsCount: 512,
    cookingTime: '25 Menit',
    servingPortion: '5-6 Porsi',
    highlights: ['Aroma Rempah Mewah', 'Mudah & Tanpa Ribet', 'Nasi Lembut Tidak Menggumpal'],
    cookingInstructions: [
      'Cuci beras basmati, tiriskan.',
      'Tumis bumbu Merhan Kabuli dengan 2 sdm minyak samin atau mentega.',
      'Masukkan ke dalam wadah rice cooker bersama air 700-750 ml.',
      'Masak hingga matang dan taburi bawang goreng serta kismis.',
    ],
    imageUrlCategory: 'kabuli',
    image: '/images/products/merhan-kabuli-500.webp',
  },
  {
    id: 'merhan-mandi-500',
    brand: 'Merhan',
    name: 'Merhan Nasi Mandi Lengkap 500gr',
    category: 'paket-nasi',
    categoryLabel: 'Paket Nasi Arab Instan',
    flavor: 'Mandi',
    tagline: 'Khas Yaman dengan Sentuhan Saffron & Asap Lembut',
    description: 'Nasi Mandi khas Yaman yang terkenal dengan warna beras dwi-warna kuning dan putih serta aroma rempah yang lembut dan elegan.',
    variants: [
      { weight: '500gr (5-6 Porsi)', price: 42000, originalPrice: 48000 },
      { weight: '280gr Hemat (4 Porsi)', price: 25000, originalPrice: 28000 },
    ],
    selectedVariantIndex: 0,
    badge: 'Pilihan Spesial',
    rating: 4.9,
    reviewsCount: 290,
    cookingTime: '25 Menit',
    servingPortion: '5-6 Porsi',
    highlights: ['Rasa Lembut Kaya Rempah', 'Warna Cantik Menggugah Selera', 'Cocok dengan Daging Kambing'],
    imageUrlCategory: 'mandi',
    image: '/images/products/merhan-mandi-500.webp',
  },
  {
    id: 'merhan-biryani-500',
    brand: 'Merhan',
    name: 'Merhan Nasi Biryani Lengkap 500gr',
    category: 'paket-nasi',
    categoryLabel: 'Paket Nasi Arab Instan',
    flavor: 'Biryani',
    tagline: 'Rasa Rempah Kaya & Gurih Khas Tradisi Mughal India',
    description: 'Paket nasi Biryani dengan racikan rempah hangat khas India. Butiran beras basmati panjang menyerap kelezatan bumbu biryani secara merata.',
    variants: [
      { weight: '500gr (5-6 Porsi)', price: 42000, originalPrice: 48000 },
      { weight: '280gr Hemat (4 Porsi)', price: 25000, originalPrice: 28000 },
    ],
    selectedVariantIndex: 0,
    rating: 4.8, 
    reviewsCount: 310,
    cookingTime: '25 Menit',
    servingPortion: '5-6 Porsi',
    highlights: ['Komposisi Rempah Lengkap', 'Aroma Eksotis Autentik', 'Tanpa Bahan Pengawet'],
    imageUrlCategory: 'biryani',
    image: '/images/products/merhan-biryani-500.webp',
  },

  // --- 2. MERHAN HEMAT BEREMPAT 280gr ---
  {
    id: 'merhan-hemat-kabuli-280',
    brand: 'Merhan',
    name: 'Merhan Hemat Berempat Nasi Kebuli 280gr',
    category: 'paket-nasi',
    categoryLabel: 'Paket Nasi Arab Instan',
    flavor: 'Kabuli',
    tagline: 'Kemasan Ekonomis untuk Porsi 3-4 Orang',
    description: 'Solusi makan malam praktis keluarga kecil. Beras basmati import berkualitas dipadukan dengan bumbu racikan siap pakai.',
    variants: [
      { weight: '280gr (4 Porsi)', price: 25000, originalPrice: 28000 },
      { weight: '500gr (6 Porsi)', price: 42000, originalPrice: 48000 },
    ],
    selectedVariantIndex: 0,
    badge: 'Kemasan Hemat',
    rating: 4.9,
    reviewsCount: 245,
    cookingTime: '20 Menit',
    servingPortion: '3-4 Porsi',
    highlights: ['Harga Terjangkau', 'Porsi Pas Sekeluarga', 'Resep Anti Gagal'],
    imageUrlCategory: 'kabuli',
    image: '/images/products/merhan-kabuli-500.webp',
  },

  // --- 3. ZAFFRONA BUMBU INSTAN 100gr ---
  {
    id: 'zaffrona-kebuli-100',
    brand: 'Zaffrona',
    name: 'Zaffrona Bumbu Nasi Kebuli 100gr',
    category: 'bumbu-instan',
    categoryLabel: 'Bumbu Masak Instan',
    flavor: 'Kabuli',
    tagline: 'Bumbu Halus Konsentrat untuk 1kg Beras',
    description: 'Bumbu instan siap pakai yang diracik khusus untuk menghadirkan aroma dan rasa gurih nasi kebuli asli. Praktis untuk usaha katering maupun sajian rumahan.',
    variants: [
      { weight: '100gr (Untuk 1kg Beras)', price: 20000, originalPrice: 24000 },
      { weight: 'Paket 3 Pcs (Hemat)', price: 55000, originalPrice: 65000 },
    ],
    selectedVariantIndex: 0,
    badge: 'Andalan Katering',
    rating: 4.9,
    reviewsCount: 420,
    cookingTime: '15 Menit',
    servingPortion: '1 kg Beras (10 Porsi)',
    highlights: ['Konsentrat Rempah Alami', 'Cukup untuk 10 Porsi', 'Tahan Simpan Higienis'],
    imageUrlCategory: 'zaffrona',
    image: '/images/products/zaffrona-kabuli.webp',
  },
  {
    id: 'zaffrona-kabsah-100',
    brand: 'Zaffrona',
    name: 'Zaffrona Bumbu Nasi Kabsah 100gr',
    category: 'bumbu-instan',
    categoryLabel: 'Bumbu Masak Instan',
    flavor: 'Kabsah',
    tagline: 'Rasa Pedas Manis Rempah Khas Saudi Arabia',
    description: 'Racikan bumbu Kabsah berkualitas dengan bahan alami segar. Sangat cocok dimasak bersama potongan ayam panggang atau daging sapi.',
    variants: [
      { weight: '100gr (Untuk 1kg Beras)', price: 20000, originalPrice: 24000 },
    ],
    selectedVariantIndex: 0,
    rating: 4.8,
    reviewsCount: 198,
    servingPortion: '1 kg Beras (10 Porsi)',
    highlights: ['Warna Merah Alami Tomat & Paprika', 'Rasa Segar Hangat', 'Mudah Dilarutkan'],
    imageUrlCategory: 'zaffrona',
    image: '/images/products/zaffrona-kabsah.webp',
  },
  {
    id: 'zaffrona-biryani-100',
    brand: 'Zaffrona',
    name: 'Zaffrona Bumbu Nasi Biryani 100gr',
    category: 'bumbu-instan',
    categoryLabel: 'Bumbu Masak Instan',
    flavor: 'Biryani',
    tagline: 'Aroma Kapulaga, Kayu Manis & Jinten India',
    description: 'Bumbu konsentrat Biryani dengan kekayaan bumbu khas Asia Selatan yang pekat. Nasi menjadi harum semerbak.',
    variants: [
      { weight: '100gr (Untuk 1kg Beras)', price: 20000, originalPrice: 24000 },
    ],
    selectedVariantIndex: 0,
    rating: 4.9,
    reviewsCount: 260,
    servingPortion: '1 kg Beras (10 Porsi)',
    highlights: ['Aroma Sangat Kuat', 'Pilihan Restoran & Warung Arab', 'Standar Mutu Terjamin'],
    imageUrlCategory: 'zaffrona',
    image: '/images/products/zaffrona-biryani.webp',
  },
  {
    id: 'zaffrona-mandi-100',
    brand: 'Zaffrona',
    name: 'Zaffrona Bumbu Nasi Mandi 100gr',
    category: 'bumbu-instan',
    categoryLabel: 'Bumbu Masak Instan',
    flavor: 'Mandi',
    tagline: 'Perpaduan Bumbu Halus Khas Yaman',
    description: 'Racikan bumbu halus Nasi Mandi yang memberikan cita rasa gurih lembut tanpa membuat enek.',
    variants: [
      { weight: '100gr (Untuk 1kg Beras)', price: 20000, originalPrice: 24000 },
    ],
    selectedVariantIndex: 0,
    rating: 4.8,
    reviewsCount: 175,
    servingPortion: '1 kg Beras (10 Porsi)',
    highlights: ['Cita Rasa Autentik Yaman', 'Mudah Dicampur', '100% Halal'],
    imageUrlCategory: 'zaffrona',
    image: '/images/products/zaffrona-mandi.webp',
  },

  // --- 4. FADA REMPAH MURNI (50gr) ---
  {
    id: 'fada-cengkeh-50',
    brand: 'Fada',
    name: 'Fada Cengkeh Utuh Pilihan 50gr',
    category: 'rempah-murni',
    categoryLabel: 'Rempah Murni Pilihan',
    flavor: 'Rempah',
    tagline: 'Cengkeh Kualitas Ekspor Kering Sempurna',
    description: 'Cengkeh utuh berkualitas dengan kepala utuh, aroma menyengat segar, dan warna cokelat mengilap. Dikemas higienis dalam toples praktis.',
    variants: [{ weight: '50gr Kemasan Toples', price: 18000 }],
    selectedVariantIndex: 0,
    rating: 4.9,
    reviewsCount: 140,
    highlights: ['Cengkeh Pilihan Utuh', 'Aroma Tajam Alami', 'Kemasan Rapat Anti Lembab'],
    imageUrlCategory: 'rempah',
    image: '/images/products/kapulaga-produk.webp',
  },
  {
    id: 'fada-kayu-manis-50',
    brand: 'Fada',
    name: 'Fada Kayu Manis Batang / Bubuk 50gr',
    category: 'rempah-murni',
    categoryLabel: 'Rempah Murni Pilihan',
    flavor: 'Rempah',
    tagline: 'Aroma Manis Hangat Khas Minang & Arab',
    description: 'Kayu manis pilihan dengan kadar minyak atsiri tinggi yang memberikan wangi manis semerbak pada masakan daging maupun minuman hangat.',
    variants: [{ weight: '50gr Kemasan Toples', price: 16000 }],
    selectedVariantIndex: 0,
    rating: 4.9,
    reviewsCount: 165,
    highlights: ['Serat Kayu Tebal', 'Wangi Manis Alami', 'Kualitas Grade A'],
    imageUrlCategory: 'rempah',
    image: '/images/products/rempah-kapulaga.svg',
  },
  {
    id: 'fada-jinten-50',
    brand: 'Fada',
    name: 'Fada Jinten Bubuk Murni 50gr',
    category: 'rempah-murni',
    categoryLabel: 'Rempah Murni Pilihan',
    flavor: 'Rempah',
    tagline: 'Kunci Keharuman Masakan Kari, Kebuli & Gulai',
    description: 'Jinten murni disangrai dan digiling halus tanpa campuran pengawet atau pewarna. Menghadirkan rasa khas yang hangat.',
    variants: [{ weight: '50gr Kemasan Toples', price: 15000 }],
    selectedVariantIndex: 0,
    rating: 4.8,
    reviewsCount: 110,
    highlights: ['100% Jinten Asli', 'Gilingan Halus Merata', 'Aroma Kuat'],
    imageUrlCategory: 'rempah',
    image: '/images/products/rempah-kapulaga.svg',
  },
  {
    id: 'fada-lada-putih-50',
    brand: 'Fada',
    name: 'Fada Lada Putih Bubuk Murni 50gr',
    category: 'rempah-murni',
    categoryLabel: 'Rempah Murni Pilihan',
    flavor: 'Rempah',
    tagline: 'Kepedasan Alami & Keharuman Lada Bangka',
    description: 'Lada putih super dengan tingkat kepedasan bersih yang menyegarkan setiap kuah dan tumisan masakan Anda.',
    variants: [{ weight: '50gr Kemasan Toples', price: 15000 }],
    selectedVariantIndex: 0,
    rating: 4.9,
    reviewsCount: 190,
    highlights: ['Pedas Murni Alami', 'Tanpa Pemutih Kimia', 'Kemasan Botol Praktis'],
    imageUrlCategory: 'rempah',
    image: '/images/products/rempah-kapulaga.svg',
  },

  // --- 5. BERAS BASMATI PREMIUM ---
  {
    id: 'basmati-noor-e-punjab',
    brand: 'Basmati',
    name: 'Beras Basmati Noor-E-Punjab Premium',
    category: 'beras-basmati',
    categoryLabel: 'Beras Basmati Premium Impor',
    flavor: 'Beras',
    tagline: 'Varietas 1509 & 1121 Ekstra Panjang Kemurnian 95%',
    description: 'Beras basmati premium berasal dari kawasan penghasil basmati terbaik di India. Memiliki butir ekstra panjang, kadar air maksimal 12%, serta butir pecah maksimal 2%. Sangat mekar dan pulen.',
    variants: [
      { weight: '1 KG', price: 45000, originalPrice: 50000 },
      { weight: '5 KG (Karung Eksklusif)', price: 215000, originalPrice: 240000 },
      { weight: '25 KG (Kemasan Katering)', price: 990000, originalPrice: 1100000 },
    ],
    selectedVariantIndex: 0,
    badge: 'Kualitas Bintang 5',
    rating: 5.0,
    reviewsCount: 630,
    highlights: ['Kemurnian Hingga 95%', 'Butir Ekstra Panjang Saat Matang', 'Aroma Alami Wangi Basmati'],
    imageUrlCategory: 'basmati',
    image: '/images/products/beras-noor-all.webp',
  },
  {
    id: 'basmati-queen-of-punjab',
    brand: 'Basmati',
    name: 'Beras Basmati Queen of Punjab',
    category: 'beras-basmati',
    categoryLabel: 'Beras Basmati Premium Impor',
    flavor: 'Beras',
    tagline: 'Varietas 1121 Creamy Sella Bulir Terpisah Sempurna',
    description: 'Beras basmati premium asal India dengan butir panjang dan tekstur pulen. Dikenal memiliki aroma khas lezat dan butiran yang tidak mudah patah dan tetap terpisah setelah matang.',
    variants: [
      { weight: '1 KG', price: 48000, originalPrice: 52000 },
      { weight: '5 KG (Karung Eksklusif)', price: 225000, originalPrice: 250000 },
      { weight: '25 KG (Kemasan Katering)', price: 1050000, originalPrice: 1150000 },
    ],
    selectedVariantIndex: 0,
    badge: 'Paling Populer',
    rating: 5.0,
    reviewsCount: 780,
    highlights: ['Varietas 1121 Creamy Sella', 'Bulir Nasi Cantik Memanjang', 'Pilihan Utama Chef Hotel'],
    imageUrlCategory: 'basmati',
    image: '/images/products/beras-queen-all.webp',
  },
  {
    id: 'basmati-alishaan',
    brand: 'Basmati',
    name: 'Beras Basmati Alishaan XL-Sella',
    category: 'beras-basmati',
    categoryLabel: 'Beras Basmati Premium Impor',
    flavor: 'Beras',
    tagline: 'Bulir XL-Sella Mewah Tidak Mudah Menggumpal',
    description: 'Beras basmati premium impor India dengan butiran super panjang. Menghasilkan nasi yang tidak mudah menggumpal, ideal untuk sajian pesta biryani, mandi, dan kabsah.',
    variants: [
      { weight: '1 KG', price: 46000, originalPrice: 50000 },
      { weight: '5 KG', price: 220000, originalPrice: 245000 },
    ],
    selectedVariantIndex: 0,
    rating: 4.9,
    reviewsCount: 340,
    highlights: ['Beras Basmati XL-Sella Asli India', 'Butiran Mengembang 2x Lipat', 'Rendah Gula Alami'],
    imageUrlCategory: 'basmati',
    image: '/images/products/beras-alishaan-1kg.webp',
  },
  {
    id: 'basmati-doonmalai',
    brand: 'Basmati',
    name: 'Beras Basmati Doonmalai Sella',
    category: 'beras-basmati',
    categoryLabel: 'Beras Basmati Premium Impor',
    flavor: 'Beras',
    tagline: 'Beras Basmati Pilihan Restoran & Rumah Tangga',
    description: 'Beras basmati berkualitas tinggi dengan butir panjang dan tekstur pulen. Setelah dimasak butirannya terpisah rapi dengan aroma khas gurih.',
    variants: [
      { weight: '1 KG', price: 44000, originalPrice: 48000 },
      { weight: '5 KG', price: 210000, originalPrice: 235000 },
      { weight: '25 KG', price: 975000, originalPrice: 1050000 },
    ],
    selectedVariantIndex: 0,
    rating: 4.8,
    reviewsCount: 290,
    highlights: ['Tekstur Pulen Nyaman', 'Hemat & Butir Panjang', 'Mudah Dimasak di Rice Cooker'],
    imageUrlCategory: 'basmati',
    image: '/images/products/beras-doonmalai-5kg.webp',
  },
];


const merhanHematBaru = [
  {
    sumber: 'merhan-mandi-500',
    id: 'merhan-mandi-hemat-280',
    name: 'Merhan Nasi Mandi Hemat 280gr',
    image: '/images/products/merhan-mandi-hemat-280.webp',
    tagline: 'Cita Rasa Mandi dalam Kemasan Ekonomis',
    description:
      'Paket beras basmati dan bumbu instan untuk menyajikan nasi Mandi khas Arab dengan aroma rempah lembut dan rasa gurih yang seimbang.',
    highlights: [
      'Aroma Rempah Lembut',
      'Paket Beras dan Bumbu',
      'Kemasan Ekonomis'
    ]
  },
  {
    sumber: 'merhan-biryani-500',
    id: 'merhan-biryani-hemat-280',
    name: 'Merhan Nasi Biryani Hemat 280gr',
    image: '/images/products/merhan-biryani-hemat-280.webp',
    tagline: 'Nikmati Cita Rasa Biryani dengan Praktis',
    description:
      'Paket beras basmati dan bumbu instan untuk menghadirkan nasi Biryani dengan perpaduan aroma rempah khas dan karakter rasa yang kaya.',
    highlights: [
      'Perpaduan Rempah Aromatik',
      'Penyajian Praktis',
      'Kemasan Ekonomis'
    ]
  },
  {
    sumber: 'merhan-kabsah-500',
    id: 'merhan-kabsah-hemat-280',
    name: 'Merhan Nasi Kabsah Hemat 280gr',
    image: '/images/products/merhan-kabsah-hemat-280.webp',
    tagline: 'Kelezatan Nasi Kabsah Khas Arab',
    description:
      'Paket praktis berisi beras basmati dan bumbu instan untuk membuat nasi Kabsah dengan perpaduan rempah khas Arab dan rasa gurih.',
    highlights: [
      'Cita Rasa Khas Arab',
      'Beras Basmati dan Bumbu Instan',
      'Kemasan Ekonomis'
    ]
  },
  {
    sumber: 'merhan-kabuli-500',
    id: 'merhan-kabuli-hemat-280',
    name: 'Merhan Nasi Kabuli Hemat 280gr',
    image: '/images/products/merhan-kabuli-hemat-280.webp',
    tagline: 'Aroma Rempah Kabuli dalam Sajian Praktis',
    description:
      'Paket beras basmati dan bumbu instan untuk menyajikan nasi Kabuli dengan aroma rempah khas dan cita rasa hangat.',
    highlights: [
      'Aroma Rempah Khas',
      'Mudah Disajikan',
      'Kemasan Ekonomis'
    ]
  }
];

for (const item of merhanHematBaru) {
  const produk500 = FADA_PRODUCTS_CATALOG.find(
    (produk) => produk.id === item.sumber
  );

  if (!produk500) {
    console.warn('Produk sumber tidak ditemukan:', item.sumber);
    continue;
  }

  const kemasan280 = produk500.variants.find(
    (variant) => variant.weight.includes('280gr')
  );

  if (!kemasan280) {
    console.warn('Varian 280gr tidak ditemukan:', item.sumber);
    continue;
  }

  FADA_PRODUCTS_CATALOG.push({
    ...produk500,
    id: item.id,
    name: item.name,
    tagline: item.tagline,
    description: item.description,
    image: item.image,
    variants: [{ ...kemasan280 }],
    selectedVariantIndex: 0,
    badge: 'Hemat Berempat',
    servingPortion: '4 Porsi',
    highlights: [...item.highlights],
    cookingTime: 'Lihat petunjuk kemasan',
    cookingInstructions: [
      'Ikuti petunjuk memasak dan takaran air pada kemasan produk Merhan Hemat 280gr.'
    ],
    rating: 0,
    reviewsCount: 0
  });
}
