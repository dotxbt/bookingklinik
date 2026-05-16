"use client";

import { useState } from "react";
import { Search, Plus, MoreVertical, Edit2, Trash2 } from "lucide-react";

export default function DoctorsPage() {
  const doctors = [
    { id: "DOC-001", name: "dr. Budi Santoso, Sp.PD", poli: "Poli Penyakit Dalam", phone: "081122334455", status: "Active" },
    { id: "DOC-002", name: "dr. Siti Aminah, Sp.A", poli: "Poli Anak", phone: "082233445566", status: "Active" },
    { id: "DOC-003", name: "dr. Andi Wijaya, Sp.M", poli: "Poli Mata", phone: "083344556677", status: "On Leave" },
    { id: "DOC-004", name: "dr. Rina Setiawati", poli: "Poli Umum", phone: "084455667788", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Cari dokter..."
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
          />
        </div>
        
        <button className="bg-primary-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 shadow-sm">
          <Plus size={20} /> Tambah Dokter
        </button>
      </div>

      <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Nama Dokter</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Poliklinik</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">No. Telepon</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm shrink-0">
                        {doctor.name.split(' ')[1]?.[0] || 'D'}
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900 block">{doctor.name}</span>
                        <span className="text-xs text-slate-500">{doctor.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium border border-slate-200">
                      {doctor.poli}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{doctor.phone}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${doctor.status === 'Active' ? 'bg-green-500' : 'bg-orange-500'}`} />
                      <span className="text-sm font-medium text-slate-700">{doctor.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 text-slate-400">
                      <button className="p-1 hover:text-primary-600 transition-colors" title="Edit">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-1 hover:text-red-600 transition-colors" title="Hapus">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
