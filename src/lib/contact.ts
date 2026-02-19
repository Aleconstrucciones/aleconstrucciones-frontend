import { ContactPayload } from "@/types/contact-request";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function createContactRequest(data: ContactPayload) {
    const res = await fetch(`${STRAPI_URL}/api/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
    });
    
    if (!res.ok) {
        throw new Error("Error al enviar la solicitud");
    }
    
    return res.json();
}
