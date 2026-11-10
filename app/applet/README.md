# Website Resmi CV. Fada Food (Mojokerto)
**Arabian Cuisine Specialist**

Website Company Profile & Katalog Produk Modern bergaya Lemonilo untuk **CV. Fada Food**, produsen Beras Biryani/Mandhi/Kabsah/Kabuli Merhan, Bumbu Rempah Instan Zaffrona, dan Beras Basmati Premium.

---

## 🚀 Cara Menjalankan di Komputer / Laptop Lokal

### 1. Prasyarat
- Pastikan sudah menginstal **Node.js** (versi 18 ke atas) dari [nodejs.org](https://nodejs.org).

### 2. Langkah Instalasi & Menjalankan
Buka terminal / Command Prompt pada folder proyek ini, lalu jalankan:

```bash
# 1. Install dependencies
npm install

# 2. Jalankan server lokal untuk preview
npm run dev
```

Buka browser dan akses alamat yang tertera (biasanya `http://localhost:3000` atau `http://localhost:5173`).

### 3. Build untuk Hosting / Production
Jika ingin mengunggah ke hosting (cPanel, Vercel, Netlify, Cloudflare Pages):

```bash
npm run build
```

Folder `dist` yang dihasilkan berisi file statis (`index.html`, `assets/`, `images/`) yang siap diunggah ke `public_html` hosting Anda.

---

## 📁 Struktur File & Tempat Mengganti Konten

| Bagian | Lokasi File | Keterangan |
| :--- | :--- | :--- |
| **Logo Perusahaan** | `public/images/logo/fadafood-logo.svg` | Ganti file ini atau sesuaikan path di `src/data/fadaFoodData.ts` (`FADA_COMPANY_PROFILE.logoUrl`) |
| **Gambar Produk** | `public/images/products/*.svg` (atau `.png` / `.webp`) | Simpan file foto produk di sini dan tautkan di `src/data/fadaFoodData.ts` |
| **Data Produk & Harga** | `src/data/fadaFoodData.ts` | Ubah nama produk, harga, deskripsi, isi kemasan, dan kategori |
| **Profil Perusahaan** | `src/data/fadaFoodData.ts` | Kontak WhatsApp, alamat Mojokerto, email, dan nilai F-A-D-A |
| **Desain & Tampilan** | `src/components/fada/` | Komponen visual: Hero, Navbar, Katalog, Modal Detail, Keranjang WhatsApp, dan Footer |

---

## 📞 Kontak & Dukungan
- **Produsen**: CV. Fada Food
- **Alamat**: Desa Canggu RT 01 / RW 01, Kec. Jetis, Kab. Mojokerto, Jawa Timur 61352
- **WhatsApp**: +62 822-4467-3166
