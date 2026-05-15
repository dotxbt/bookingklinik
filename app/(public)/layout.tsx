"use client";

import Link from "next/link";
import Image from "next/image";
import { LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
                <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white shadow-sm flex items-center justify-center p-1">
                  <Image src="/logo.png" alt="Medica Prima Logo" width={40} height={40} className="object-contain" />
                </div>
                <span className="font-bold text-xl text-primary-900 tracking-tight">Medica Prima</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className={`font-medium transition-colors ${pathname === '/' ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}>Home</Link>
              <Link href="/about" className={`font-medium transition-colors ${pathname === '/about' ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}>Tentang Kami</Link>
              <Link href="/booking" className={`font-medium transition-colors ${pathname === '/booking' ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}>Booking Jadwal</Link>
              <Link href="/contactus" className={`font-medium transition-colors ${pathname === '/contactus' ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}>Kontak</Link>
            </nav>

            <div className="hidden md:flex items-center">
              <Link 
                href="/login" 
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-all shadow-sm hover:shadow-md"
              >
                <LogIn size={18} />
                <span>Login</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-primary-600 focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 shadow-lg absolute w-full left-0 top-20">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link href="/" onClick={closeMenu} className={`block px-3 py-4 rounded-xl text-base font-medium ${pathname === '/' ? 'bg-primary-50 text-primary-600' : 'text-slate-700 hover:bg-slate-50 hover:text-primary-600'}`}>Home</Link>
              <Link href="/about" onClick={closeMenu} className={`block px-3 py-4 rounded-xl text-base font-medium ${pathname === '/about' ? 'bg-primary-50 text-primary-600' : 'text-slate-700 hover:bg-slate-50 hover:text-primary-600'}`}>Tentang Kami</Link>
              <Link href="/booking" onClick={closeMenu} className={`block px-3 py-4 rounded-xl text-base font-medium ${pathname === '/booking' ? 'bg-primary-50 text-primary-600' : 'text-slate-700 hover:bg-slate-50 hover:text-primary-600'}`}>Booking Jadwal</Link>
              <Link href="/contactus" onClick={closeMenu} className={`block px-3 py-4 rounded-xl text-base font-medium ${pathname === '/contactus' ? 'bg-primary-50 text-primary-600' : 'text-slate-700 hover:bg-slate-50 hover:text-primary-600'}`}>Kontak</Link>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link 
                  href="/login" 
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 bg-primary-600 text-white px-5 py-3.5 rounded-xl font-medium hover:bg-primary-700 transition-colors"
                >
                  <LogIn size={20} />
                  <span>Login ke Dashboard Admin</span>
                </Link>
              </div>
            </div>
          </div>
        )}
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
