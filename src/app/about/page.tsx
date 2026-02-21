import { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import { About } from "@/types/about";
import AboutHero from "./components/AboutHero";
import MissionVision from "./components/MissionVision";
import AboutValues from "./components/AboutValues";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conocé nuestra historia y que aspiramos como empresa."
}

async function AboutPage() {

    const response = await fetchAPI<About>("/api/about?populate[value][populate]=logo");
    const data = response.data;
    
    return (
        <section className="mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
            <AboutHero title={data.title} description={data.description} />
            <MissionVision mission={data.mission} vision={data.vision} />
            <AboutValues values={data.value} />
        </section>
    );
}

export default AboutPage;