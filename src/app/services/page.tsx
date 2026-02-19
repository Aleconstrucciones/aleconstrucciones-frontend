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
    <main className="px-4 sm:px-8 lg:px-16 max-w-7xl 2xl:max-w-[95%] mx-auto mt-16 lg:mt-24">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-12">Servicios</h1>

      <ServicesGrid services={response.data} />
    </main>
  );
}

export default ServicesPage;
