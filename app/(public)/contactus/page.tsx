import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Hubungi Kami | Medica Prima",
  description: "Informasi kontak dan lokasi Klinik Medica Prima.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Hubungi Kami</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Kami siap membantu menjawab pertanyaan Anda. Jangan ragu untuk menghubungi kami melalui saluran berikut.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h2>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Lokasi Klinik</h3>
              <p className="text-slate-600 leading-relaxed">
                Jl. Kesehatan No. 123, Kelapa Gading<br />
                Jakarta Utara, 14240<br />
                DKI Jakarta, Indonesia
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Telepon & WhatsApp</h3>
              <p className="text-slate-600">
                Darurat: (021) 555-1234<br />
                WhatsApp: +62 812-3456-7890
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
              <p className="text-slate-600">
                info@medicaprima.com<br />
                support@medicaprima.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Jam Operasional</h3>
              <p className="text-slate-600">
                Senin - Jumat: 08:00 - 20:00 WIB<br />
                Sabtu: 08:00 - 15:00 WIB<br />
                Minggu & Hari Libur: Tutup
              </p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-slate-100 rounded-[2rem] h-[400px] md:h-[600px] w-full flex items-center justify-center relative overflow-hidden border border-slate-200">
          <div className="absolute inset-0 bg-slate-200" />
          <div className="relative z-10 flex flex-col items-center text-slate-500">
            <MapPin size={48} className="mb-4" />
            <span className="font-medium text-lg">Integrasi Google Maps Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
