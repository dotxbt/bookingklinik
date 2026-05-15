"use client";

import { Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
          Pengaturan Informasi Klinik
        </h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Nama Klinik</label>
              <input 
                type="text" 
                defaultValue="Medica Prima"
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Nomor Telepon Utama</label>
              <input 
                type="text" 
                defaultValue="(021) 555-1234"
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Alamat Lengkap</label>
              <textarea 
                rows={3}
                defaultValue="Jl. Kesehatan No. 123, Kelapa Gading, Jakarta Utara, 14240, DKI Jakarta, Indonesia"
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
              ></textarea>
            </div>
          </div>
          
          <div className="flex justify-end pt-4">
            <button type="button" className="bg-primary-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-primary-700 transition-colors flex items-center gap-2 shadow-sm">
              <Save size={18} /> Simpan Perubahan
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
          Pengaturan Sistem Booking
        </h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Interval Waktu Booking (Menit)</label>
              <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
                <option value="15">15 Menit</option>
                <option value="30" selected>30 Menit</option>
                <option value="60">60 Menit</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Maksimal Hari Kedepan Booking</label>
              <input 
                type="number" 
                defaultValue="14"
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>
          </div>
          
          <div className="flex justify-end pt-4">
            <button type="button" className="bg-primary-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-primary-700 transition-colors flex items-center gap-2 shadow-sm">
              <Save size={18} /> Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
