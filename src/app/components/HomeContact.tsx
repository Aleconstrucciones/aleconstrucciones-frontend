"use client"

import { ContactForm } from "@/components/ContactForm";

function HomeContact() {

    return(
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div>
                <span className="inline-flex items-center mb-5 rounded-full border border-white/15 bg-white/10 px-2 py-1 md:px-3 md:py-2 text-xs tracking-[0.15rem] text-white/80 backdrop-blur">CONTACTO</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Contanos tu proyecto</h2>
                <span className="mt-4 block h-0.5 w-30 origin-left bg-neutral-500" />
            </div>
            <div className="mt-15">
                <ContactForm />
            </div>
        </section>
    );
}

export default HomeContact;