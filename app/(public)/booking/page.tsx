"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, Clock, User, Phone, CheckCircle2 } from "lucide-react";

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30"
];

const doctors = [
  { id: "d1", name: "dr. Budi Santoso, Sp.PD", poli: "Poli Penyakit Dalam" },
  { id: "d2", name: "dr. Siti Aminah, Sp.A", poli: "Poli Anak" },
  { id: "d3", name: "dr. Andi Wijaya, Sp.M", poli: "Poli Mata" },
  { id: "d4", name: "dr. Rina Setiawati, Umum", poli: "Poli Umum" },
];

export default function BookingPage() {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="bg-white rounded-[2rem] p-12 shadow-xl border border-slate-100 max-w-lg w-full text-center">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Booking Berhasil!</h2>
          <p className="text-slate-600 mb-8">
            Terima kasih, jadwal Anda telah tercatat. Staf kami akan segera menghubungi Anda untuk konfirmasi lebih lanjut.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors w-full"
          >
            Booking Jadwal Lain
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Booking Jadwal Pasien</h1>
        <p className="text-lg text-slate-600">Pilih dokter, tanggal, dan waktu yang sesuai dengan jadwal Anda.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form Section */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Data Pasien</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User size={18} className="text-slate-400" />
                  </div>
                  <input 
                    type="text" 
                    required
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nomor Telepon (WhatsApp)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone size={18} className="text-slate-400" />
                  </div>
                  <input 
                    type="tel" 
                    required
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                    placeholder="Contoh: 081234567890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Pilih Dokter</label>
                <select 
                  required
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none appearance-none"
                >
                  <option value="" disabled>-- Pilih Dokter Spesialis --</option>
                  {doctors.map(d => (
                    <option key={d.id} value={d.id}>{d.name} ({d.poli})</option>
                  ))}
                </select>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={!selectedDate || !selectedTime || !selectedDoctor}
                  className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Konfirmasi Booking
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 h-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Pilih Jadwal</h2>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-4 flex items-center gap-2">
                <CalendarIcon size={18} className="text-primary-600" /> Tanggal Kunjungan
              </label>
              <input 
                type="date" 
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full md:w-auto px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
              />
            </div>

            <div className={`${!selectedDate ? 'opacity-50 pointer-events-none' : ''}`}>
              <label className="block text-sm font-medium text-slate-700 mb-4 flex items-center gap-2">
                <Clock size={18} className="text-primary-600" /> Waktu Kunjungan (Interval 30 Menit)
              </label>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {timeSlots.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-xl font-medium text-sm transition-all border ${
                        isSelected 
                          ? "bg-primary-600 text-white border-primary-600 shadow-md" 
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-primary-400 hover:bg-primary-50"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            {(!selectedDate || !selectedTime) && (
              <div className="mt-8 p-4 bg-orange-50 border border-orange-100 rounded-xl text-orange-700 text-sm flex items-center gap-2">
                Silakan pilih tanggal dan waktu kunjungan terlebih dahulu.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
