import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicitá tu presupuesto para obras y construcción en Buenos Aires. Contactá a Ale Construcciones."
}

function ContactPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16 lg:mt-20">
      <h1 className="text-3xl sm:text-4xl text-center font-bold mb-10">
        Contacto
      </h1>

      <ContactForm />
    </main>
  );
}

export default ContactPage;
