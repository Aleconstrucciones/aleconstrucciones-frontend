"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "INICIO", href: "/" },
  { name: "SERVICIOS", href: "/services" },
  { name: "OBRAS", href: "/projects" },
  { name: "PROVEEDORES", href: "/provider" },
  { name: "NOSOTROS", href: "/about" },
  { name: "CONTACTO", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-2 transition-all duration-300 bg-black ${
        scrolled
          ? "md:bg-black/40 md:backdrop-blur-md md:shadow-md"
          : "md:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <Link
            href="/"
            className="flex gap-5 items-center font-bold text-lg tracking-widest text-white"
          >
            <Image src={"/logo.jpg"} alt="Logo" width={70} height={70} className="rounded-full" />
            ALE CONSTRUCCIONES
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <nav className="flex gap-4 lg:gap-6 text-xs md:text-sm tracking-wide lg:tracking-wider">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    isActive
                      ? "font-semibold text-red-600 border-b-2 border-red-600"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="text-white tracking-wider px-4 py-1 border border-red-600 rounded-2xl text-sm font-semibold transition duration-300 hover:scale-110"
          >
            COTIZAR
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-6 h-6 flex items-center justify-center"
          aria-label="Boton de navegacion"
        >
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        } bg-black/90 backdrop-blur-md`}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-sm tracking-wider">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`transition-colors ${
                  isActive
                    ? "font-semibold text-red-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="text-white tracking-wide lg:tracking-wider px-3 lg:px-4 py-1 border border-red-600 rounded-2xl text-xs md:text-sm font-semibold transition duration-300 hover:scale-110"
          >
            COTIZAR
          </Link>
        </div>
      </div>
    </header>
  );
}
