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
        <section className="px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl lg:max-w-[70vw] mx-auto mt-16 md:mt-24">
            <div className="relative flex flex-col items-center top-12 md:top-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-title font-bold">Trabaja Junto a Nosotros</h1>
                <span className="mt-1 md:mt-2 lg:mt-4 block h-0.5 w-40 md:w-55 lg:w-60 bg-accent origin-center" />
            </div>
            <div className="text-description tracking-wide">
                <NewProviders description={data.description} />
            </div>
            <Providers logo={data.logo} />
        </section>
    );
}

export default ProvidersPage;