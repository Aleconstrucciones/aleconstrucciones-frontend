import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/layout/WhatsAppCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ale Construcciones | Obras y Servicios de Construcción",
    template: "%s, | Ale Construcciones"
  },
  description: "Empresa constructora en Buenos Aires especializada en obras civiles, reformas y proyectos integrales. Calidad, compromiso y experiencia en cada proyecto.",
  keywords: ["Constructora", "Empresa de construccion", "Obras civiles", "Reformas", "Arquitectura"],
  openGraph: {
    title: "Ale Construcciones",
    description: "Especialistas en construccion, obras civiles y proyectos integrales.",
    url: "htps://aleconstrucciones.com",
    siteName: "Ale Construcciones",
    locale: "es_AR",
    type: "website"
  }
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({
  children,
  }: {
    children: React.ReactNode;
}) {
  return (
    <html lang="es" className={roboto.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <WhatsAppCTA />
        <Footer />
      </body>
    </html>
  );
}