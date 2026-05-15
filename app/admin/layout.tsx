"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { 
  LayoutDashboard, 
  CalendarDays, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Bookings", href: "/admin/bookings", icon: CalendarDays },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Sidebar content extracted for reuse
  const SidebarContent = () => (
    <>
      <div className="h-20 flex justify-between items-center px-6 border-b border-slate-100">
        <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="font-bold text-lg text-primary-900">Medica Admin</span>
        </Link>
        {/* Close button for mobile */}
        <button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg" onClick={closeMobileMenu}>
          <X size={24} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive 
                    ? "bg-primary-50 text-primary-700" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon size={20} className={isActive ? "text-primary-600" : "text-slate-400"} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-100">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-600 hover:bg-red-50 transition-all"
        >
          <LogOut size={20} />
          Logout
        </Link>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Desktop Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col fixed h-full z-10">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-40 md:hidden" onClick={closeMobileMenu}>
          <aside 
            className="w-64 bg-white border-r border-slate-200 flex flex-col h-full absolute left-0 top-0 shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent clicking inside from closing it
          >
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen relative">
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex items-center gap-4 md:hidden">
            <button 
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <span className="font-bold text-lg text-primary-900">Medica Admin</span>
          </div>
          
          <div className="hidden md:block">
            <h1 className="text-xl font-semibold text-slate-800 capitalize">
              {pathname.split("/").pop() || "Dashboard"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold border border-primary-200">
              AD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 sm:p-6 md:p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
