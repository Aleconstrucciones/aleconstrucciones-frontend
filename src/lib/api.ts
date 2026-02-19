import { StrapiResponse } from "@/types/api";

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!STRAPI_URL) {
    throw new Error('NEXT_PUBLIC_STRAPI_URL no esta definida');
}

export async function fetchAPI<T>(endpoint: string): Promise<StrapiResponse<T>> {
    const res = await fetch(`${STRAPI_URL}${endpoint}`, {
        next: { revalidate: 60},
    });

    if (!res.ok) {
        throw new Error('Error al obtener datos')
    }

    return res.json();
}
