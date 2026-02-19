import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface Props {
    projects: Project[];
}

function ProjectsList({ projects }: Props) {
    return (
        <div className="flex flex-col gap-16 md:gap-24">
            {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
    );
}

export default ProjectsList;