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
        <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16 md:mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-10 md:mb-16">
            Proyectos
        </h1>

        <ProjectsList projects={response.data} />
        </main>
    )
}

export default ProjectsPage;