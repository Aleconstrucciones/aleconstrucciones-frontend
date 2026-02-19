import { fetchAPI } from "@/lib/api";
import { Hero } from "@/types/hero";
import { About } from "@/types/about";
import { Project } from "@/types/project";
import { Service } from "@/types/service";
import { Metadata } from "next";
import { HeroCarousel } from "@/app/components/HeroCarousel";
import HomeAbout from "./components/HomeAbout";
import HomeProjects from "./components/HomeProjects";
import HomeServices from "./components/HomeServices";
import HomeContact from "./components/HomeContact";
import ProcessProject from "./components/ProcessProject";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Constructora en La Plata con amplia experiencia en obras civiles y proyectos de calidad."
}

async function HomePage() {

  const homeResponse = await fetchAPI<Hero>("/api/home?populate[carousel][populate]=image")
  const servicesResponse = await fetchAPI<Service[]>("/api/services?filters[featured][$eq]=true&sort=order:asc&pagination[limit]=1&populate=image")
  const projectsResponse = await fetchAPI<Project[]>("/api/projects?sort=createdAt:desc&pagination[limit]=3&populate=featuredImage")
  const aboutResponse = await fetchAPI<About>("/api/about");

  const about = aboutResponse.data;
  const slides = homeResponse.data.carousel;
  const projects = projectsResponse.data;
  const services = servicesResponse.data

  return (
    <main className="">
      <HeroCarousel slides={slides} />
      <HomeServices services={services} />
      <ProcessProject />
      <HomeProjects projects={projects}/>
      <HomeAbout about={about} />
      <HomeContact />
    </main>
  );
}

export default HomePage;