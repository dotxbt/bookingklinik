"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function BookingTimelineDatePage() {
  const params = useParams();
  const dateParam = params.date as string;

  const timeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30"
  ];

  // Dummy data
  const schedules = {
    "09:30": { id: "BOK-001", patient: "Andi Wijaya", doctor: "dr. Budi Santoso, Sp.PD", status: "Confirmed" },
    "10:00": { id: "BOK-002", patient: "Siti Rahma", doctor: "dr. Siti Aminah, Sp.A", status: "Pending" },
    "11:30": { id: "BOK-003", patient: "Bambang Pamungkas", doctor: "dr. Andi Wijaya, Sp.M", status: "Cancelled" },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/bookings" className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Timeline Jadwal</h1>
          <p className="text-slate-500 flex items-center gap-2 mt-1">
            <Calendar size={16} /> Tanggal: {dateParam === 'today' ? 'Hari Ini (20 Mei 2024)' : dateParam}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
        <div className="relative border-l-2 border-slate-200 ml-4 lg:ml-8 space-y-8 py-4">
          {timeSlots.map((time) => {
            const booking = schedules[time as keyof typeof schedules];
            
            return (
              <div key={time} className="relative pl-8">
                <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-[3px] border-white flex items-center justify-center
                  ${booking ? 'bg-primary-500' : 'bg-slate-300'}`} 
                >
                </div>
                
                <div className="flex flex-col lg:flex-row gap-4 lg:items-start">
                  <div className="w-24 shrink-0 pt-0.5">
                    <span className={`font-bold text-lg ${booking ? 'text-primary-700' : 'text-slate-400'}`}>
                      {time}
                    </span>
                  </div>
                  
                  {booking ? (
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-primary-300 transition-colors group">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm border border-slate-100">
                            <User size={20} />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 text-lg">{booking.patient}</h3>
                            <p className="text-sm text-slate-500">{booking.doctor}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                          booking.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-slate-200 flex justify-end">
                        <Link 
                          href={`/admin/bookings/${dateParam}/${booking.id}`}
                          className="text-sm font-semibold text-primary-600 hover:text-primary-700 group-hover:underline"
                        >
                          Lihat Detail Booking &rarr;
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 border-2 border-dashed border-slate-200 rounded-2xl p-5 flex items-center justify-center text-slate-400">
                      Slot Waktu Kosong
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
