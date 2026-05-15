"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, MapPin, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-primary-50 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-100 rounded-bl-[100px] -z-10 opacity-50 hidden md:block" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6 border border-primary-200">
              Pelayanan Kesehatan Terbaik
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Kesehatan Anda Adalah <span className="text-primary-600">Prioritas Kami</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dapatkan pelayanan medis berkualitas dengan dokter spesialis berpengalaman. Booking jadwal Anda sekarang tanpa antre lama.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/booking"
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/30 flex items-center gap-2"
              >
                Booking Jadwal <ArrowRight size={20} />
              </Link>
              <Link 
                href="/about"
                className="bg-white text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all shadow-sm border border-slate-200 flex items-center gap-2"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
            {/* Placeholder for Hero Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-primary-600 flex items-center justify-center">
               <span className="text-white/50 font-medium text-lg">Hero Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tentang Medica Prima</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Medica Prima didirikan dengan visi untuk memberikan layanan kesehatan komprehensif, terjangkau, dan berkualitas. Kami dilengkapi dengan fasilitas modern dan tenaga medis profesional yang siap melayani Anda.
            </p>
            <ul className="space-y-3 mb-8">
              {['Fasilitas Modern & Bersih', 'Dokter Spesialis Tersertifikasi', 'Pelayanan Ramah & Cepat', 'Lokasi Strategis'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2">
              Baca Selengkapnya <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="h-48 bg-slate-100 rounded-2xl"></div>
             <div className="h-48 bg-slate-200 rounded-2xl mt-8"></div>
          </div>
        </div>
      </section>

      {/* Booking Hari Ini */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Jadwal Tersedia Hari Ini</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Beberapa slot waktu masih tersedia untuk hari ini. Segera amankan jadwal Anda.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary-50 text-primary-700 p-3 rounded-xl">
                  <Clock size={24} />
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Tersedia</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">10:30 - 11:00 WIB</h3>
              <p className="text-slate-500 mb-6">Poli Umum - dr. Budi Santoso</p>
              <Link href="/booking" className="block w-full py-3 px-4 bg-slate-50 text-slate-700 text-center font-semibold rounded-xl hover:bg-primary-600 hover:text-white transition-colors">
                Booking Slot Ini
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Jajaran Dokter */}
      <section className="bg-slate-900 py-24 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Jajaran Dokter Spesialis</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Tim medis kami terdiri dari profesional berpengalaman di bidangnya.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-4 bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                  {/* Image placeholder */}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">dr. Nama Dokter, Sp.A</h3>
                <p className="text-primary-400">Spesialis Anak</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-primary-600 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-primary-600/20 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Butuh Bantuan Darurat?</h2>
            <p className="text-primary-100 text-lg">
              Klinik kami siap melayani Anda. Hubungi kami untuk informasi lebih lanjut atau bantuan segera.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a href="tel:+62215551234" className="bg-white text-primary-700 px-6 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-primary-50 transition-colors">
              <Phone size={24} /> (021) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
