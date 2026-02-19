import { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import { Project } from "@/types/project";
import { notFound } from "next/navigation";
import ProjectDetail from "./components/ProjectDetail";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await fetchAPI<Project[]>(`/api/projects?filters[slug][$eq]=${encodeURIComponent((await params).slug)}&populate=*`);

  const project = response.data[0];

  if (!project) return {title: "Proyecto no encontrado"};

  return {
    title: project.title,
    description: project.shortDescription || "Obra realizada por Ale Construcciones.",
    openGraph: {
      title: project.title,
      description: project.shortDescription || "Obra realizada por Ale Construcciones",
      images: project.featuredImage?.url ? [{url: project.featuredImage.url},] : [],
    },
  };
}

async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const response = await fetchAPI<Project[]>(
    `/api/projects?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );

  const project = response.data[0];

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

export default ProjectPage;