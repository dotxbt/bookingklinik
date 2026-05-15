import Image from "next/image";
import { CheckCircle2, Shield, HeartPulse, Stethoscope } from "lucide-react";

export const metadata = {
  title: "Tentang Kami | Medica Prima",
  description: "Pelajari lebih lanjut tentang visi, misi, dan layanan Klinik Medica Prima.",
};

export default function AboutPage() {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-primary-900 text-white py-20 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Medica Prima</h1>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Berdedikasi untuk memberikan layanan kesehatan terdepan, terpercaya, dan berpusat pada kenyamanan pasien.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visi Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Shield className="text-primary-600" size={32} /> Visi Kami
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Menjadi klinik pilihan utama masyarakat yang menyediakan layanan kesehatan holistik dan modern dengan standar kualitas internasional.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <HeartPulse className="text-primary-600" size={32} /> Misi Kami
              </h2>
              <ul className="space-y-3">
                {[
                  "Memberikan pelayanan medis yang profesional dan empati.",
                  "Menyediakan fasilitas kesehatan modern yang nyaman.",
                  "Meningkatkan kualitas hidup pasien melalui edukasi preventif.",
                  "Membangun tim medis yang berdedikasi tinggi dan inovatif."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="text-primary-500 shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="h-64 bg-slate-200 rounded-3xl"></div>
             <div className="h-64 bg-primary-100 rounded-3xl mt-12"></div>
          </div>
        </div>

        {/* Nilai-nilai Inti */}
        <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-12 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nilai-Nilai Inti Kami</h2>
            <p className="text-slate-600">Prinsip yang membimbing kami dalam memberikan layanan setiap harinya.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Profesionalisme", desc: "Berkomitmen pada standar medis tertinggi dalam setiap tindakan.", icon: Stethoscope },
              { title: "Integritas", desc: "Transparan, jujur, dan berpegang teguh pada etika kedokteran.", icon: Shield },
              { title: "Kepedulian", desc: "Melayani dengan hati dan memprioritaskan kenyamanan pasien.", icon: HeartPulse }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
