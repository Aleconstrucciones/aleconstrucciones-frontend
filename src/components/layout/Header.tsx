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
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 bg-background ${
        scrolled
          ? "xl:bg-background/50 xl:backdrop-blur-md md:shadow-md"
          : "xl:bg-transparent"
      }`}
    >
      <div className="max-w-screen mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between xl:justify-around">
        <div className="flex gap-5 items-center">
          <Link
            href="/"
            className="flex gap-2 md:gap-5 items-center font-bold text-2xl tracking-widest"
          >
            <Image src={"/logo-nav.svg"} alt="Logo" width={70} height={70} className="" />
            <p className="flex flex-col text-sm md:text-xl text-title">ALE<span className="text-accent">CONSTRUCCIONES</span></p> 
          </Link>
        </div>

        <div className="hidden xl:flex items-center gap-4 lg:gap-8">
          <nav className="flex gap-4 lg:gap-6 text-xs md:text-[15px] tracking-wide lg:tracking-wider">
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
                      ? "font-semibold text-accent border-b-2 border-accent"
                      : "text-description transition duration-300 hover:text-description/70"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="text-title tracking-wider px-4 py-1 border-2 border-accent rounded-2xl text-sm font-semibold transition duration-300 hover:scale-110"
          >
            COTIZAR
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden relative w-6 h-6 flex items-center justify-center"
          aria-label="Boton de navegacion"
        >
          <span
            className={`absolute h-0.5 w-6 bg-title transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-title transition-all duration-300 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-title transition-all duration-300 ${
              mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        } bg-background backdrop-blur-md`}
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
                    ? "font-semibold text-accent"
                    : "text-title hover:text-description/70"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="text-title tracking-wide lg:tracking-wider px-3 lg:px-4 py-1 border border-accent rounded-2xl text-xs md:text-sm font-semibold transition duration-300 hover:scale-110"
          >
            COTIZAR
          </Link>
        </div>
      </div>
    </header>
  );
}
