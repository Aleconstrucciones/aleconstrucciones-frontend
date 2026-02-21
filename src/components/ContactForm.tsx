"use client";

import { useState, Fragment } from "react";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from "@headlessui/react";
import { createContactRequest } from "@/lib/contact";
import { ContactRequestType } from "@/types/contact-request";
import { FloatingInput } from "../app/contact/components/ui/FloatingInput";

const contactTypes: ContactRequestType[] = ["Contacto", "Cotizacion"];

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [type, setType] =
    useState<ContactRequestType>("Contacto");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await createContactRequest({
        name: formData.get("name") as string,
        lastName: formData.get("lastname") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
        type,
        projectType: formData.get("projectType") as string,
      });

      setSuccess(true);
      e.currentTarget.reset();
      setType("Contacto");
    } catch {
      alert(
        "Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <aside className="card p-6 lg:p-8 shadow-xl lg:sticky lg:top-24">
        <h2 className="text-2xl font-semibold text-title tracking-wide">
          ¿Preferís escribirnos directo?
        </h2>
        <p className="text-description/70 mt-2 tracking-wide">
          Abrí el chat de Whatsapp y envianos un mensaje.
        </p>
        <a 
            href="" 
            target="_blank" 
            className="mt-6 inline-block rounded-xl w-full text-center font-medium tracking-wide button"
        >
            Whatsapp
        </a>

        <div className="mt-6 grid gap-1">
            <div className="flex items-start gap-5">
                <span className="w-5 h-5 bg-accent/30 text-accent/80 rounded-full self-center place-content-center place-items-center">
                    <svg className="w-5 md:w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </span>
                <div>
                    <h3 className="text-lg text-title font-medium">Atención personalizada</h3>
                    <p className="text-sm text-description/70">Un asesor te responde.</p>
                </div>
            </div>
            <div className="flex items-start gap-5">
                <span className="w-5 h-5 bg-accent/30 text-accent/80 rounded-full self-center place-content-center place-items-center">
                    <svg className="w-5 md:w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </span>
                <div>
                    <h3 className="text-lg font-medium text-title">Respuestas en el día</h3>
                    <p className="text-sm text-description/70">Horarios hábiles de X a X.</p>
                </div>
            </div>
            <div className="flex items-start gap-5">
                <span className="w-5 h-5 bg-accent/30 text-accent/80 rounded-full self-center place-content-center place-items-center">
                    <svg className="w-5 md:w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </span>
                <div>
                    <h3 className="text-lg font-medium text-title">Asesoramiento sin cargo</h3>
                    <p className="text-sm text-description/70">Nos contás y te guiamos.</p>
                </div>
            </div>

            <div className="bg-background border border-accent/50 rounded-2xl mt-10 text-description p-4">
                <p className="text-description/70">También podés completar el formulario y te respondemos por correo con los detalles.</p>
            </div>
        </div>
      </aside>

      <form onSubmit={handleSubmit} className="card lg:col-span-2 p-6 md:p-8 shadow-2xl flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 ">
          <FloatingInput name="name" label="Nombre" required />
          <FloatingInput name="lastname" label="Apellido" required />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <FloatingInput name="email" label="Correo" type="email"required />
          <FloatingInput name="phone" label="Teléfono" type="tel" required />
        </div>

        <div className="grid grid-cols-2 gap-6">
            <Listbox value={type} onChange={setType}>
            {({ open }) => (
                <div className="relative">
                <ListboxButton className="form-input flex items-center justify-between">
                    <span className="text-description/50">{type}</span>

                    <svg className={`w-5 h-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </ListboxButton>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 scale-95 translate-y-1"
                    enterTo="opacity-100 scale-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 scale-100 translate-y-0"
                    leaveTo="opacity-0 scale-95 translate-y-1"
                >
                    <ListboxOptions className="absolute mt-3 w-full rounded-2xl border border-accent/10 bg-card shadow-2xl overflow-hidden z-20">
                    {contactTypes.map((option) => (
                        <ListboxOption
                        key={option}
                        value={option}
                        className={({ active }) => `px-4 py-3 cursor-pointer transition ${active ? "bg-white text-black" : "text-white hover:bg-white/10"}`}>
                        {({ selected }) => (
                            <div className="flex justify-between items-center">
                            <span className={selected ? "font-semibold" : ""}>
                                {option}
                            </span>

                            {selected && (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                            </div>
                        )}
                        </ListboxOption>
                    ))}
                    </ListboxOptions>
                </Transition>
                </div>
            )}
            </Listbox>
            {type === "Cotizacion" && (
            <FloatingInput name="projectType" label="Tipo de proyecto"/>
            )}
        </div>


        <textarea name="message" placeholder="Escribe tu mensaje aquí..." className="min-h-32 sm:min-h-72 form-input resize-none" />

        <button
          disabled={loading}
          className="w-full sm:w-auto sm:self-end button font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Enviando..." : "Enviar Consulta"}
        </button>

        {success && (
          <p className="text-green-400 text-sm">Mensaje enviado correctamente. Te contactaremos pronto.</p>
        )}
      </form>
    </section>
  );
}
