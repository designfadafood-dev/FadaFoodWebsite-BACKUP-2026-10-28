import React from 'react';
import { FADA_COMPANY_PROFILE } from '../../data/fadaFoodData.ts';

export const FadaB2BSection: React.FC = () => {
  return (
    <section id="mitra" className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Layanan Kerjasama Bisnis
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Suplai Beras Basmati & Bumbu untuk Katering, Restoran, dan Hotel
            </h2>

            <p className="text-sm text-stone-300 leading-relaxed max-w-xl">
              CV. Fada Food siap menjadi pemasok bahan baku pangan utama bisnis kuliner Anda. Tersedia kemasan karung 5 KG hingga 25 KG (Noor-E-Punjab, Queen of Punjab, Doonmalai, Alishaan) dan paket bumbu instan kapasitas besar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-200">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Harga Grosir Khusus Pelaku Usaha</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Suplai Rutin & Stok Kontinu</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Kualitas Beras Basmati Terjamin</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Pengiriman Cepat Seluruh Indonesia</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-3xl space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-white">Hubungi Tim Pemasaran Kami</h3>
              <p className="text-xs text-stone-300">
                Konsultasikan kebutuhan pasokan beras basmati dan bumbu instan untuk usaha Anda:
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/62${FADA_COMPANY_PROFILE.phone1.slice(1)}?text=Halo%20Fada%20Food,%20saya%20ingin%20tanya%20harga%20grosir%20beras%20basmati%20dan%20bumbu%20untuk%20katering/usaha.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-between transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>Contact Person 1 (Admin Pemasaran)</span>
                  </div>
                  <span className="font-mono">{FADA_COMPANY_PROFILE.phone1}</span>
                </a>

                <a
                  href={`https://wa.me/62${FADA_COMPANY_PROFILE.phone2.slice(1)}?text=Halo%20Fada%20Food,%20saya%20ingin%20tanya%20kerjasama%20distribusi%20dan%20reseller.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs flex items-center justify-between transition-colors border border-slate-600"
                >
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>Contact Person 2 (Kerjasama Agen)</span>
                  </div>
                  <span className="font-mono">{FADA_COMPANY_PROFILE.phone2}</span>
                </a>
              </div>

              <div className="pt-2 text-[11px] text-stone-400 text-center">
                Alamat Gudang: {FADA_COMPANY_PROFILE.city}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
