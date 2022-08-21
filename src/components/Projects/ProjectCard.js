export const ProjectCard = () => {
    return (
        <div className="project-card">
            <img className="project-card-img" alt="project-img"></img>
            <div className="inner-project-card">
                <h2 className="project-card-heading">Name</h2>
                <div>
                    <button className="button"><a href="https://github.com/ismailmutafchev" target="_blank" rel="noreferrer">View Code</a></button> 
                    <button className="button"><a href="https://github.com/ismailmutafchev" target="_blank" rel="noreferrer">View Website</a></button> 
                </div>
            </div>
        </div>
    )
}