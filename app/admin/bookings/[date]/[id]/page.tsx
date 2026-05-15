"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, User, Phone, Calendar, Clock, Stethoscope, Printer, FileEdit } from "lucide-react";

export default function BookingDetailPage() {
  const params = useParams();
  const idParam = params.id as string;
  const dateParam = params.date as string;

  // Dummy booking detail
  const booking = {
    id: idParam,
    patient: "Andi Wijaya",
    phone: "081234567890",
    dob: "15 Agustus 1990",
    gender: "Laki-laki",
    doctor: "dr. Budi Santoso, Sp.PD",
    poli: "Poli Penyakit Dalam",
    date: dateParam === 'today' ? '2024-05-20' : dateParam,
    time: "09:30 WIB",
    status: "Confirmed",
    notes: "Pasien mengeluh sakit perut bagian bawah sejak 2 hari yang lalu.",
    created_at: "2024-05-18 14:20:00"
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href={`/admin/bookings/${dateParam}`} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Detail Booking</h1>
            <p className="text-slate-500 text-sm mt-1">ID: {booking.id}</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors shadow-sm">
            <Printer size={18} /> Cetak
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors shadow-sm">
            <FileEdit size={18} /> Edit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Info */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 lg:col-span-1">
          <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <User className="text-primary-600" /> Informasi Pasien
          </h2>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xl font-bold">
              AW
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">{booking.patient}</h3>
              <p className="text-slate-500">{booking.phone}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500 mb-1">Tanggal Lahir</p>
              <p className="font-medium text-slate-900">{booking.dob}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Jenis Kelamin</p>
              <p className="font-medium text-slate-900">{booking.gender}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Didaftarkan Pada</p>
              <p className="font-medium text-slate-900">{booking.created_at}</p>
            </div>
          </div>
        </div>

        {/* Booking Info */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="text-primary-600" /> Informasi Jadwal
            </h2>
            <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${
              booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
              booking.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
              'bg-red-100 text-red-700'
            }`}>
              Status: {booking.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-2 text-primary-600">
                <Stethoscope size={20} />
                <span className="font-semibold text-sm uppercase tracking-wider">Dokter Tujuan</span>
              </div>
              <p className="text-xl font-bold text-slate-900">{booking.doctor}</p>
              <p className="text-slate-500 mt-1">{booking.poli}</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-2 text-primary-600">
                <Clock size={20} />
                <span className="font-semibold text-sm uppercase tracking-wider">Waktu Kunjungan</span>
              </div>
              <p className="text-xl font-bold text-slate-900">{booking.date}</p>
              <p className="text-slate-500 mt-1">Pukul {booking.time}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Keluhan / Catatan Tambahan:</h3>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-700 leading-relaxed min-h-[100px]">
              {booking.notes}
            </div>
          </div>

          <div className="mt-8 flex gap-4 pt-8 border-t border-slate-100">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
              Tandai Selesai Diperiksa
            </button>
            <button className="px-6 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-semibold rounded-xl transition-colors">
              Batalkan Jadwal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
