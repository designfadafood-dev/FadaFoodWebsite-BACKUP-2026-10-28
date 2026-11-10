import React from 'react';

export const FadaCookingGuide: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Cuci & Tiriskan Beras Basmati',
      desc: 'Bilas beras basmati Merhan secara lembut 1-2 kali dengan air bersih, lalu tiriskan agar bulir panjangnya tetap terjaga sempurna.',
      icon: '🌾',
    },
    {
      step: '02',
      title: 'Tumis Bumbu Rempah Instan',
      desc: 'Panaskan 2 sendok makan minyak samin atau margarin. Tumis bumbu Merhan/Zaffrona selama 1 menit hingga aroma wangi rempah semerbak.',
      icon: '🍳',
    },
    {
      step: '03',
      title: 'Masak di Rice Cooker & Tambah Lauk',
      desc: 'Masukkan beras, bumbu tumis, dan air sesuai takaran ke rice cooker. Tambahkan ayam atau kambing bila diinginkan. Tekan tombol cook dan sajikan hangat!',
      icon: '🍲',
    },
  ];

  return (
    <section id="cara-masak" className="py-16 bg-amber-50/50 border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <div className="text-xs font-bold text-red-700 uppercase tracking-wider">
            Panduan Dapur Praktis
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
            Cara Mudah Masak Nasi Arab dengan Rice Cooker
          </h2>
          <p className="text-xs text-slate-600">
            Tidak perlu keahlian memasak rumit. Siapapun kini bisa menyajikan Nasi Kebuli & Mandi restoran bintang 5 di rumah dalam 25 menit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((st) => (
            <div
              key={st.step}
              className="bg-white p-6 rounded-2xl border border-amber-200/60 shadow-xs relative space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{st.icon}</span>
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-lg">
                  Langkah {st.step}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{st.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Tip Box */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-amber-300/70 text-xs text-amber-900 flex items-center justify-between gap-4 flex-col sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-base">💡</span>
            <span className="font-medium">
              <strong className="font-bold">Tips Chef Fada:</strong> Untuk aroma yang lebih mewah, taburkan kismis arab dan irisan bawang merah goreng sesaat sebelum dihidangkan.
            </span>
          </div>
          <a
            href="#katalog"
            className="px-4 py-2 text-xs font-bold bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors whitespace-nowrap shrink-0"
          >
            Pesan Paket Nasi Merhan
          </a>
        </div>
      </div>
    </section>
  );
};
