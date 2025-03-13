import { ProjectCard } from "../components/projectCard";
import projects from "../../json/projects.json"

const Projects = () => {

    console.log(projects)
    return (
        <main className="projects">
            <h1>Projetos</h1>

            {projects.projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.name}
                    text={project.description}
                    technologies={project.technologies}
                />

            ))

            }


        </main>







    )

}

export { Projects }