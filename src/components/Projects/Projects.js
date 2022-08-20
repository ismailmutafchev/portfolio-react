import { ProjectCard } from "./ProjectCard"
import './Projects.css'

function Projects() {
    return (
        <section className="projects">
            <h1 className="project-heading">Projects</h1>
            <div className="cards">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            </div>
        </section>
    )
}

export default Projects