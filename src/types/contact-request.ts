export type ContactRequestType = "Contacto" | "Cotizacion";
export type ContactRequestProject = "Albañilería" | "Carpintería" | "Cerramientos" | "Climatización" | "Construcciones Generales" | "Electricidad" | "Gasista" | "Herrería" | "Impermeabilizaciones" | "Instalación de pisos" | "Pintura" | "Piscinas" | "Plomería" | "Servicios de diseño y dirección" | "Techos" | "Trabajos en altura" | "Vidriería" | "Yesería";

export interface ContactPayload {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    message?: string;
    type: ContactRequestType;
    projectType?: ContactRequestProject;
}