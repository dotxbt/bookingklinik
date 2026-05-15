"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, MoreVertical, Eye, CheckCircle, XCircle } from "lucide-react";

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const bookings = [
    { id: "BOK-001", patient: "Andi Wijaya", phone: "081234567890", doctor: "dr. Budi Santoso, Sp.PD", date: "2024-05-20", time: "09:30", status: "Confirmed" },
    { id: "BOK-002", patient: "Siti Rahma", phone: "085678901234", doctor: "dr. Siti Aminah, Sp.A", date: "2024-05-20", time: "10:00", status: "Pending" },
    { id: "BOK-003", patient: "Bambang Pamungkas", phone: "08111222333", doctor: "dr. Andi Wijaya, Sp.M", date: "2024-05-20", time: "11:30", status: "Cancelled" },
    { id: "BOK-004", patient: "Rina Nose", phone: "087788990011", doctor: "dr. Rina Setiawati, Umum", date: "2024-05-21", time: "08:00", status: "Confirmed" },
    { id: "BOK-005", patient: "Dedi Corbuzier", phone: "081999888777", doctor: "dr. Budi Santoso, Sp.PD", date: "2024-05-21", time: "13:30", status: "Confirmed" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari ID, nama pasien..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none w-full sm:w-64 bg-white"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white rounded-xl text-slate-700 hover:bg-slate-50 font-medium transition-colors">
            <Filter size={18} />
            Filter
          </button>
        </div>
        
        <Link href="/admin/bookings/today" className="bg-primary-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-primary-700 transition-colors text-center shadow-sm">
          Lihat Timeline Hari Ini
        </Link>
      </div>

      <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">ID Booking</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Pasien & Kontak</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Dokter</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Jadwal</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary-600">
                    <Link href={`/admin/bookings/${booking.date}/${booking.id}`}>
                      {booking.id}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">{booking.patient}</div>
                    <div className="text-xs text-slate-500">{booking.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{booking.doctor}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-slate-900">{booking.date}</div>
                    <div className="text-xs text-slate-500">{booking.time} WIB</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                      booking.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 text-slate-400">
                      <Link href={`/admin/bookings/${booking.date}/${booking.id}`} className="p-1 hover:text-primary-600 transition-colors" title="Lihat Detail">
                        <Eye size={18} />
                      </Link>
                      {booking.status === 'Pending' && (
                        <>
                          <button className="p-1 hover:text-green-600 transition-colors" title="Konfirmasi">
                            <CheckCircle size={18} />
                          </button>
                          <button className="p-1 hover:text-red-600 transition-colors" title="Batalkan">
                            <XCircle size={18} />
                          </button>
                        </>
                      )}
                      <button className="p-1 hover:text-slate-900 transition-colors" title="Lainnya">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm text-slate-500">Menampilkan 1 hingga 5 dari 42 entri</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-sm text-slate-500 hover:bg-slate-50 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-primary-600 text-white rounded-lg text-sm font-medium">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-50">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-50">3</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-sm text-slate-500 hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
