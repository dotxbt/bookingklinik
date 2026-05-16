"use client";

import { useState, useMemo } from "react";
import { Search, Plus, MoreVertical, Edit2, Trash2, Filter, X } from "lucide-react";

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const itemsPerPage = 5;

  const patientsData = [
    { id: "RM-0001", name: "Andi Wijaya", dob: "15-08-1990", gender: "Laki-laki", phone: "081234567890", lastVisit: "2024-05-20" },
    { id: "RM-0002", name: "Siti Rahma", dob: "22-11-1985", gender: "Perempuan", phone: "085678901234", lastVisit: "2024-05-18" },
    { id: "RM-0003", name: "Bambang Pamungkas", dob: "10-06-1980", gender: "Laki-laki", phone: "08111222333", lastVisit: "2024-04-12" },
    { id: "RM-0004", name: "Rina Nose", dob: "05-01-1995", gender: "Perempuan", phone: "087788990011", lastVisit: "2024-05-21" },
    { id: "RM-0005", name: "Dedi Corbuzier", dob: "30-12-1976", gender: "Laki-laki", phone: "081999888777", lastVisit: "2024-05-10" },
    { id: "RM-0006", name: "Luna Maya", dob: "26-08-1983", gender: "Perempuan", phone: "082233445566", lastVisit: "2024-03-15" },
    { id: "RM-0007", name: "Ariel Noah", dob: "16-09-1981", gender: "Laki-laki", phone: "083344556677", lastVisit: "2024-05-22" },
    { id: "RM-0008", name: "Ayu Ting Ting", dob: "20-06-1992", gender: "Perempuan", phone: "084455667788", lastVisit: "2024-05-05" },
  ];

  const filteredPatients = useMemo(() => {
    return patientsData.filter(patient => {
      const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            patient.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterGender === "Semua" || patient.gender === filterGender;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterGender]);

  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);
  const paginatedPatients = filteredPatients.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  // Reset to page 1 when search or filter changes
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, filterGender]);

  return (
    <div className="space-y-6 relative">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari pasien (Nama / RM)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
            />
          </div>
          
          <div className="relative w-full sm:w-48">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <select
              value={filterGender}
              onChange={(e) => setFilterGender(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white appearance-none text-slate-700"
            >
              <option value="Semua">Semua Gender</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
        </div>
        
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0"
        >
          <Plus size={20} /> Registrasi Pasien
        </button>
      </div>

      <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
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
              {paginatedPatients.length > 0 ? (
                paginatedPatients.map((patient) => (
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
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    Tidak ada data pasien yang ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-slate-500">
              Menampilkan {((currentPage - 1) * itemsPerPage) + 1} hingga {Math.min(currentPage * itemsPerPage, filteredPatients.length)} dari {filteredPatients.length} entri
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

      {/* Add Patient Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-[1.5rem] shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <h2 className="text-lg font-bold text-slate-800">Registrasi Pasien Baru</h2>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap Pasien</label>
                  <input type="text" placeholder="Contoh: Budi Gunawan" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nomor Induk Kependudukan (NIK)</label>
                  <input type="text" placeholder="Masukkan 16 digit NIK" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Tanggal Lahir</label>
                    <input type="date" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-slate-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Jenis Kelamin</label>
                    <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none appearance-none bg-white text-slate-700">
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nomor Telepon / WhatsApp</label>
                  <input type="tel" placeholder="Contoh: 08123456789" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Alamat Domisili</label>
                  <textarea rows={3} placeholder="Masukkan alamat lengkap..." className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"></textarea>
                </div>
              </form>
            </div>
            
            <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-3 sticky bottom-0 bg-white">
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="px-5 py-2.5 text-slate-600 font-medium hover:bg-slate-50 rounded-xl transition-colors"
              >
                Batal
              </button>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="px-5 py-2.5 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors shadow-sm"
              >
                Simpan Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
