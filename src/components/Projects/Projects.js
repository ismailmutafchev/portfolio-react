import { ProjectCard } from "./ProjectCard"
import { ProjectData } from "./ProjectsData"
import './Projects.scss'

function Projects({setPage}) {
    setPage('projects')
    return (
        <section className="projects">
            <h1 className="project-heading">Projects</h1>
            <div className="cards">
            {ProjectData.map(x => <ProjectCard key={x.id} data = {x}/>)}
            </div>
        </section>
    )
}

export default Projects