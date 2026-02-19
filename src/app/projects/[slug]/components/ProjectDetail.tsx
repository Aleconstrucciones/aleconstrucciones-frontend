import { Project } from "@/types/project";
import ProjectHero from "./ProjectHero";
import ProjectInfo from "./ProjectInfo";
import ProjectContent from "./ProjectContent";
import ProjectGallery from "./ProjectGallery";

interface Props {
  project: Project;
}

export default function ProjectDetail({ project }: Props) {
  return (
    <main className="w-full">

      <ProjectHero project={project} />

      <div className="
        max-w-7xl
        mx-auto
        px-4
        py-12
        grid
        gap-16
        lg:grid-cols-2
      ">
        {/* Columna izquierda */}
        <div className="space-y-12">
          <ProjectInfo project={project} />
          <ProjectContent project={project} />
        </div>

        {/* Columna derecha */}
        <div className="lg:sticky lg:top-24 h-fit">
          <ProjectGallery project={project} />
        </div>
      </div>

    </main>
  );
}
