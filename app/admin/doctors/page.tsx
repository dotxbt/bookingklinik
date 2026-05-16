"use client";

import { useState, useMemo } from "react";
import { Search, Plus, MoreVertical, Edit2, Trash2, Filter } from "lucide-react";

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPoli, setFilterPoli] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const doctorsData = [
    { id: "DOC-001", name: "dr. Budi Santoso, Sp.PD", poli: "Poli Penyakit Dalam", phone: "081122334455", status: "Active" },
    { id: "DOC-002", name: "dr. Siti Aminah, Sp.A", poli: "Poli Anak", phone: "082233445566", status: "Active" },
    { id: "DOC-003", name: "dr. Andi Wijaya, Sp.M", poli: "Poli Mata", phone: "083344556677", status: "On Leave" },
    { id: "DOC-004", name: "dr. Rina Setiawati", poli: "Poli Umum", phone: "084455667788", status: "Active" },
    { id: "DOC-005", name: "dr. Eko Prasetyo, Sp.B", poli: "Poli Bedah", phone: "085566778899", status: "Active" },
    { id: "DOC-006", name: "dr. Fani Yuliana, Sp.OG", poli: "Poli Kandungan", phone: "086677889900", status: "Active" },
    { id: "DOC-007", name: "dr. Gilang Ramadhan", poli: "Poli Umum", phone: "087788990011", status: "On Leave" },
    { id: "DOC-008", name: "dr. Hana Pertiwi, Sp.KK", poli: "Poli Kulit", phone: "088899001122", status: "Active" },
  ];

  const uniquePolis = ["Semua", ...Array.from(new Set(doctorsData.map(d => d.poli)))];

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            doctor.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterPoli === "Semua" || doctor.poli === filterPoli;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterPoli]);

  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);
  const paginatedDoctors = filteredDoctors.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  // Reset to page 1 when search or filter changes
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, filterPoli]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari dokter (Nama / ID)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
            />
          </div>
          
          <div className="relative w-full sm:w-48">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <select
              value={filterPoli}
              onChange={(e) => setFilterPoli(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white appearance-none text-slate-700"
            >
              {uniquePolis.map(poli => (
                <option key={poli} value={poli}>{poli}</option>
              ))}
            </select>
          </div>
        </div>
        
        <button className="bg-primary-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0">
          <Plus size={20} /> Tambah Dokter
        </button>
      </div>

      <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
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
              {paginatedDoctors.length > 0 ? (
                paginatedDoctors.map((doctor) => (
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
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    Tidak ada data dokter yang ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-slate-500">
              Menampilkan {((currentPage - 1) * itemsPerPage) + 1} hingga {Math.min(currentPage * itemsPerPage, filteredDoctors.length)} dari {filteredDoctors.length} entri
            </span>
            <div className="flex gap-1">
              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-slate-200 rounded-lg text-sm text-slate-500 hover:bg-slate-50 disabled:opacity-50"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    currentPage === i + 1 
                      ? 'bg-primary-600 text-white border-transparent' 
                      : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-slate-200 rounded-lg text-sm text-slate-500 hover:bg-slate-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
