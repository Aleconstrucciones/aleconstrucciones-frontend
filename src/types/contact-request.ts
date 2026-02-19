export type ContactRequestType = "Contacto" | "Cotizacion";

export interface ContactPayload {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    message?: string;
    type: ContactRequestType;
    projectType?: string; 
}