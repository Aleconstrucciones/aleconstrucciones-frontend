import { fetchAPI } from "@/lib/api";
import { Hero } from "@/types/hero";
import { Service } from "@/types/service";
import { Project } from "@/types/project";
import { About } from "@/types/about";
import { Client } from "@/types/client";
import { Metadata } from "next";
import { HeroCarousel } from "@/app/components/HeroCarousel";
import HomeServices from "./components/HomeServices";
import ProcessProject from "./components/ProcessProject";
import HomeProjects from "./components/HomeProjects";
import HomeAbout from "./components/HomeAbout";
import HomeClients from "./components/HomeClients";
import HomeContact from "./components/HomeContact";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Constructora en La Plata con amplia experiencia en obras civiles y proyectos de calidad."
}

async function HomePage() {

  const homeResponse = await fetchAPI<Hero>("/api/home?populate[carousel][populate]=image")
  const servicesResponse = await fetchAPI<Service[]>("/api/services?filters[featured][$eq]=true&sort=order:asc&pagination[limit]=4&populate=image")
  const projectsResponse = await fetchAPI<Project[]>("/api/projects?sort=createdAt:desc&pagination[limit]=3&populate=featuredImage")
  const aboutResponse = await fetchAPI<About>("/api/about");
  const clientsResponse = await fetchAPI<Client[]>("/api/clients?populate=logo");

  const about = aboutResponse.data;
  const slides = homeResponse.data.carousel;
  const projects = projectsResponse.data;
  const services = servicesResponse.data
  const clients = clientsResponse.data

  return (
    <section className="">
      <HeroCarousel slides={slides} />
      <HomeServices services={services} />
      <ProcessProject />
      <HomeProjects projects={projects}/>
      <HomeAbout about={about} />
      <HomeClients clients={clients} />
      <HomeContact />
    </section>
  );
}

export default HomePage;