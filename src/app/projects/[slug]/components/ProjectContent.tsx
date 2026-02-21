import { Project } from "@/types/project";
import { RichText } from "@/components/RichText";

interface Props {
  project: Project;
}

export default function ProjectContent({ project }: Props) {
  if (!project.description) return null;

  return (
    <section className="w-full">

      <div className="text-description prose prose-base md:prose-lg max-w-none">
        <RichText content={project.description} />
      </div>
    </section>
  );
}
