"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Fragment } from "react";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from "@headlessui/react";
import { createContactRequest } from "@/lib/contact";
import { ContactRequestType, ContactRequestProject } from "@/types/contact-request";
import { FloatingInput } from "../app/contact/components/ui/FloatingInput";
import AsideContact from "./AsideContact";

const contactTypes: ContactRequestType[] = ["Consulta", "Cotización"];
const projectTypes: ContactRequestProject[] = [
  "Albañilería",
  "Carpintería",
  "Cerramientos",
  "Climatización",
  "Construcciones Generales",
  "Electricidad",
  "Gasista",
  "Herrería",
  "Impermeabilizaciones",
  "Instalación de pisos",
  "Pintura",
  "Piscinas",
  "Plomería",
  "Servicios de diseño y dirección",
  "Techos",
  "Trabajos en altura",
  "Vidriería",
  "Yesería",
];

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const searchParams = useSearchParams();
  const [type, setType] = useState<ContactRequestType>("Consulta");
  const [projectType, setProjectType] = useState<ContactRequestProject | null>(null);

  useEffect(() => {
    const queryType = searchParams.get("type");
    const queryService = searchParams.get("service");

    if (queryType?.toLowerCase() === "Cotización") {
      setType("Cotización");
    }

    if (queryService) {
      const formattedService = projectTypes.find((p) => p.toLowerCase() === queryService.toLowerCase());

      if (formattedService) {
        setProjectType(formattedService)
      }
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    if (type === "Cotización" && !projectType) {
      alert("Por favor seleccioná el servicio a cotizar.");
      setLoading(false);
      return;
    }

    const formData = new FormData(e.currentTarget);

    try {
      await createContactRequest({
        name: formData.get("name") as string,
        lastName: formData.get("lastname") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
        type,
        projectType: type === "Cotización" ? projectType! : undefined,
      });

      setSuccess(true);
      e.currentTarget.reset();
      setType("Consulta");
      setProjectType(null);
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
      <AsideContact />
      <form
        onSubmit={handleSubmit}
        className="card lg:col-span-2 p-6 md:p-8 shadow-2xl flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <FloatingInput name="name" label="Nombre" required />
          <FloatingInput name="lastname" label="Apellido" required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <FloatingInput name="email" label="Correo" type="email" required />
          <FloatingInput name="phone" label="Teléfono" type="tel" required />
        </div>

        <div className="flex flex-col gap-6">
          <Listbox
            value={type}
            onChange={(value) => {
              setType(value);
              if (value !== "Cotización") {
                setProjectType(null);
              }
            }}
          >
            {({ open }) => (
              <div className="relative">
                <ListboxButton className="form-input flex items-center justify-between">
                  <span className="text-description/50">{type}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
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
                  <ListboxOptions className="absolute mt-3 w-full rounded-2xl border-2 border-accent/50 bg-card shadow-2xl overflow-hidden z-20">
                    {contactTypes.map((option) => (
                      <ListboxOption
                        key={option}
                        value={option}
                        className={({ active }) =>
                          `px-4 py-3 cursor-pointer transition ${
                            active
                              ? "bg-accent/50 text-description"
                              : "text-description hover:bg-card"
                          }`
                        }
                      >
                        {({ selected }) => (
                          <div className="flex justify-between items-center">
                            <span
                              className={selected ? "font-semibold" : ""}
                            >
                              {option}
                            </span>
                          </div>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Transition>
              </div>
            )}
          </Listbox>
          {type === "Cotización" && (
            <Listbox value={projectType} onChange={setProjectType}>
              {({ open }) => (
                <div className="relative">
                  <ListboxButton className="form-input flex items-center justify-between">
                    <span className="text-description/50">
                      {projectType ??
                        "Seleccioná el servicio a cotizar"}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
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
                    <ListboxOptions className="absolute mt-3 w-full rounded-2xl border-2 border-accent/50 bg-card shadow-2xl overflow-hidden z-20 max-h-60 overflow-y-auto">
                      {projectTypes.map((option) => (
                        <ListboxOption
                          key={option}
                          value={option}
                          className={({ active }) =>
                            `px-4 py-3 cursor-pointer transition ${
                              active
                                ? "bg-accent/50 text-description"
                                : "text-description hover:bg-card"
                            }`
                          }
                        >
                          {({ selected }) => (
                            <div className="flex justify-between items-center">
                              <span
                                className={selected ? "font-semibold" : ""}
                              >
                                {option}
                              </span>
                            </div>
                          )}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Transition>
                </div>
              )}
            </Listbox>
          )}
        </div>

        <textarea name="message" placeholder="Escribe tu mensaje aquí..." className="min-h-32 sm:min-h-72 form-input resize-none"/>
        <button disabled={loading} className="w-full sm:w-auto sm:self-end button font-semibold disabled:opacity-60 disabled:cursor-not-allowed">
          {loading ? "Enviando..." : type === "Cotización" ? "Solicitar Cotización" : "Enviar Consulta"}
        </button>

        {success && (
          <p className="text-green-400 text-sm"> Mensaje enviado correctamente. Te contactaremos pronto.</p>
        )}
      </form>
    </section>
  );
}