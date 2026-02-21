import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface Props {
    projects: Project[];
}

function ProjectsList({ projects }: Props) {
    return (
        <div className="flex flex-col gap-15 my-20">
            {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
    );
}

export default ProjectsList;