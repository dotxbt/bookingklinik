import { Users, Calendar as CalendarIcon, Clock, Activity, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Dashboard | Admin Medica Prima",
};

export default function AdminDashboard() {
  const stats = [
    { name: "Total Booking Hari Ini", value: "42", icon: CalendarIcon, color: "bg-blue-50 text-blue-600", trend: "+12%" },
    { name: "Pasien Menunggu", value: "8", icon: Clock, color: "bg-orange-50 text-orange-600", trend: "-2%" },
    { name: "Total Pasien", value: "1,204", icon: Users, color: "bg-green-50 text-green-600", trend: "+5%" },
    { name: "Dokter Aktif", value: "12", icon: Activity, color: "bg-purple-50 text-purple-600", trend: "0%" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-sm font-semibold flex items-center gap-1 ${stat.trend.startsWith('+') ? 'text-green-600' : stat.trend.startsWith('-') ? 'text-red-600' : 'text-slate-500'}`}>
                {stat.trend} <ArrowUpRight size={16} />
              </span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium">{stat.name}</h3>
            <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white rounded-[1.5rem] p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-900">Booking Terbaru</h2>
            <Link href="/admin/bookings" className="text-primary-600 font-medium text-sm hover:text-primary-700">
              Lihat Semua
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="pb-3 font-semibold text-slate-500 text-sm">Pasien</th>
                  <th className="pb-3 font-semibold text-slate-500 text-sm">Dokter</th>
                  <th className="pb-3 font-semibold text-slate-500 text-sm">Jadwal</th>
                  <th className="pb-3 font-semibold text-slate-500 text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="py-4">
                      <div className="font-medium text-slate-900">Pasien {item}</div>
                      <div className="text-xs text-slate-500">0812-XXXX-XXXX</div>
                    </td>
                    <td className="py-4 text-sm text-slate-700">dr. Budi Santoso, Sp.PD</td>
                    <td className="py-4">
                      <div className="text-sm text-slate-900">Hari ini</div>
                      <div className="text-xs text-slate-500">10:30 WIB</div>
                    </td>
                    <td className="py-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Confirmed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Timeline Preview */}
        <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-900">Timeline Hari Ini</h2>
            <Link href="/admin/bookings/today" className="text-primary-600 font-medium text-sm hover:text-primary-700">
              Detail
            </Link>
          </div>
          
          <div className="relative border-l-2 border-slate-100 ml-3 space-y-6">
            {[
              { time: "08:00", title: "Poli Umum Buka", type: "info" },
              { time: "09:30", title: "Booking: Andi W.", desc: "dr. Siti Aminah", type: "booking" },
              { time: "10:00", title: "Booking: Budi S.", desc: "dr. Rina S.", type: "booking" },
              { time: "12:00", title: "Istirahat Siang", type: "info" },
            ].map((event, idx) => (
              <div key={idx} className="relative pl-6">
                <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white ${event.type === 'info' ? 'bg-slate-400' : 'bg-primary-500'}`} />
                <div className="text-xs font-bold text-primary-600 mb-1">{event.time}</div>
                <div className="text-sm font-semibold text-slate-900">{event.title}</div>
                {event.desc && <div className="text-xs text-slate-500 mt-1">{event.desc}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
