import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicitá tu presupuesto para obras y construcción en Buenos Aires. Contactá a Ale Construcciones."
}

function ContactPage() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16 lg:mt-24">
      <div className="relative flex flex-col items-center top-12 md:top-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center text-title font-bold">Contacto</h1>
        <span className="mt-1 md:mt-2 lg:mt-4 mb-19 block h-0.5 w-20 md:w-25 lg:w-30 bg-accent origin-center" />
      </div>
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </section>
  );
}

export default ContactPage;
