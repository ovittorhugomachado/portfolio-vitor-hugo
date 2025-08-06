import { ProjectCard } from "../projectCard";
import projects from "../../../json/projects.json"

const Projects = () => {

    return (
        <main className="projects">
            <h1>Projetos</h1>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.name}
                    text={project.description}
                    technologies={project.technologies}
                    linkCode={project.linkGitHub}
                    linkCode2={project.linkGitHub2}
                    linkPage={project.linkPage}
                />
            ))
            }
        </main>
    )
}

export { Projects }