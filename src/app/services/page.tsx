import { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import { Service } from "@/types/service";
import ServicesGrid from "@/app/services/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Conocé nuestros servicios de construcción, reformas y dirección de obra."
}

async function ServicesPage() {
  const response = await fetchAPI<Service[]>("/api/services?populate=image");

  return (
    <section className="px-4 sm:px-8 lg:px-16 max-w-7xl 2xl:max-w-[90vw] mx-auto mt-16 lg:mt-24">
      <div className="relative flex flex-col items-center top-12 md:top-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center text-title font-bold">Servicios</h1>
        <span className="mt-1 md:mt-2 lg:mt-4 block h-0.5 w-20 md:w-25 lg:w-30 bg-accent origin-center" />
      </div>

      <ServicesGrid services={response.data} />
    </section>
  );
}

export default ServicesPage;
