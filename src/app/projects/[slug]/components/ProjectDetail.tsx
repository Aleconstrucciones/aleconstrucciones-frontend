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

      <div className="max-w-[95vw] xl:max-w-[70vw] mx-auto px-4 py-16 space-y-20">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 place-items-center lg:place-content-start">
          <ProjectInfo project={project} />
          <ProjectContent project={project} />
        </div>

        <ProjectGallery project={project} />

      </div>

    </main>
  );
}