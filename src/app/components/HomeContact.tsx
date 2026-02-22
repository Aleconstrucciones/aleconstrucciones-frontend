"use client"

import { ContactForm } from "@/components/ContactForm";
import { Suspense } from "react";

function HomeContact() {

    return(
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div>
                <span className="inline-flex items-center mb-5 rounded-full border border-accent/30 bg-accent/50 px-2 py-1 md:px-3 md:py-2 text-xs tracking-[0.15rem] text-description/80 backdrop-blur">
                    CONTACTO
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl text-title font-bold">Contanos tu proyecto</h2>
                <span className="mt-2 lg:mt-4 block h-0.5 w-30 bg-accent" />
            </div>
            <div className="mt-15">
                <Suspense fallback={null}>
                    <ContactForm />
                </Suspense>
            </div>
        </section>
    );
}

export default HomeContact;