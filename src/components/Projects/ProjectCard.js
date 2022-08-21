export const ProjectCard = ({data}) => {
    const {projectName, image, codeLink, websiteLink} = data
    
    const imgStyle = {
        backgroundImage: image
    }
    return (
        <div className="project-card" style={imgStyle} >
            <div className="inner-project-card">
                <h2 className="project-card-heading">{projectName}</h2>
                <div>
                    <button className="button"><a href="https://github.com/ismailmutafchev" target="_blank" rel="noreferrer">View Code</a></button> 
                    <button className="button"><a href="https://github.com/ismailmutafchev" target="_blank" rel="noreferrer">View Website</a></button> 
                </div>
            </div>
        </div>
    )
}