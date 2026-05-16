"use client";

import { useState } from "react";
import { Search, Plus, MoreVertical, Edit2, Trash2 } from "lucide-react";

export default function PatientsPage() {
  const patients = [
    { id: "RM-0001", name: "Andi Wijaya", dob: "15-08-1990", gender: "Laki-laki", phone: "081234567890", lastVisit: "2024-05-20" },
    { id: "RM-0002", name: "Siti Rahma", dob: "22-11-1985", gender: "Perempuan", phone: "085678901234", lastVisit: "2024-05-18" },
    { id: "RM-0003", name: "Bambang Pamungkas", dob: "10-06-1980", gender: "Laki-laki", phone: "08111222333", lastVisit: "2024-04-12" },
    { id: "RM-0004", name: "Rina Nose", dob: "05-01-1995", gender: "Perempuan", phone: "087788990011", lastVisit: "2024-05-21" },
    { id: "RM-0005", name: "Dedi Corbuzier", dob: "30-12-1976", gender: "Laki-laki", phone: "081999888777", lastVisit: "2024-05-10" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Cari pasien (Nama / RM)..."
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
          />
        </div>
        
        <button className="bg-primary-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 shadow-sm">
          <Plus size={20} /> Registrasi Pasien
        </button>
      </div>

      <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">No. RM</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Nama Pasien</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Tgl Lahir & JK</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">No. Telepon</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm">Kunjungan Terakhir</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-sm text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary-600">
                    {patient.id}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-slate-900">{patient.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-900">{patient.dob}</div>
                    <div className="text-xs text-slate-500">{patient.gender}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{patient.phone}</td>
                  <td className="px-6 py-4 text-slate-600">
                    {patient.lastVisit}
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
