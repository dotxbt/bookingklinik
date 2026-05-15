import Link from "next/link";
import Image from "next/image";
import { LogIn } from "lucide-react";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white shadow-sm flex items-center justify-center p-1">
                  <Image src="/logo.png" alt="Medica Prima Logo" width={40} height={40} className="object-contain" />
                </div>
                <span className="font-bold text-xl text-primary-900 tracking-tight">Medica Prima</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Home</Link>
              <Link href="/about" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Tentang Kami</Link>
              <Link href="/booking" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Booking Jadwal</Link>
              <Link href="/contactus" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Kontak</Link>
            </nav>

            <div className="flex items-center">
              <Link 
                href="/login" 
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-all shadow-sm hover:shadow-md"
              >
                <LogIn size={18} />
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center">
                   <Image src="/logo.png" alt="Logo" width={32} height={32} />
                </div>
                <span className="text-xl font-bold text-white">Medica Prima</span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm">
                Melayani dengan sepenuh hati. Klinik Medica Prima menyediakan layanan kesehatan profesional dengan dokter spesialis berpengalaman.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-primary-400 transition-colors">Tentang Kami</Link></li>
                <li><Link href="/booking" className="hover:text-primary-400 transition-colors">Jadwal Dokter</Link></li>
                <li><Link href="/contactus" className="hover:text-primary-400 transition-colors">Hubungi Kami</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Kontak Info</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Jl. Kesehatan No. 123, Jakarta</li>
                <li>Telepon: (021) 555-1234</li>
                <li>Email: info@medicaprima.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500">
            &copy; {new Date().getFullYear()} Klinik Medica Prima. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
