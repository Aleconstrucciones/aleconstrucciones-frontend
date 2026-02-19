import { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import { Provider } from "@/types/provider";
import NewProviders from "./components/NewProviders";
import Providers from "./components/Providers";

export const metadata: Metadata = {
  title: "Proveedores",
  description: "Conocé nuestros principales proveedores y sumate a nuestro equipo como proveedor."
}

async function ProvidersPage() {
    const response = await fetchAPI<Provider>("/api/provider?populate=*")
    const data = response.data

    return(
        <main className="px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto mt-16 md:mt-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
                Trabaja Junto a Nosotros
            </h1>

            <NewProviders description={data.description} />
            <Providers logo={data.logo} />
        </main>
    );
}

export default ProvidersPage;