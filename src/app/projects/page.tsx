import { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import { Project } from "@/types/project";
import ProjectsList from "./components/ProjectsList";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Explorá los proyectos y obras realizadas por Ale Construcciones en la Provincia de Buenos Aires."
}

async function ProjectsPage() {
    const response = await fetchAPI<Project[]>("/api/projects?populate=featuredImage");

    return (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16 md:mt-24">
        <div className="relative flex flex-col items-center top-12 md:top-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-title font-bold">Proyectos</h1>
            <span className="mt-1 md:mt-2 lg:mt-4 block h-0.5 w-20 md:w-25 lg:w-30 bg-accent origin-center" />
        </div>

        <ProjectsList projects={response.data} />
        </section>
    )
}

export default ProjectsPage;