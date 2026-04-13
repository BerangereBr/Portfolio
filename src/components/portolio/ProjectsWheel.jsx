import ProjectCard from '../ProjectCard';
import '../../styles/portfolio/projects.scss';
import data from '../../projects.json'
import headerJavascript from '../../assets/images/projectJavascript/headerJavascript.webp'
import headerReact from '../../assets/images/projectReact/headerReact.webp'
import headerNodejs from '../../assets/images/projectNodejs/headerNodejs.webp'
import headerSnake from '../../assets/images/projectSnake/headerSnake.webp'
import headerCalculatrice from '../../assets/images/projectCalculatrice/headerCalculatrice.webp'
import headerTodoList from '../../assets/images/projectTodolist/headerTodolist.webp'

function ProjectsWheel() {
    const images = {
        headerJavascript,
        headerReact,
        headerNodejs,
        headerSnake,
        headerCalculatrice,
        headerTodoList
    };
    const duplicatedProjects = [...data, ...data, ...data]; // Duplique les projets pour créer un effet de roue
    return (
        <section id='projects'>
            <h2 className='projects-title'>Projets</h2>
            <div className='projects-container desktop'>
                <div className='projects-track'>
                    {duplicatedProjects.map((project, index) => (
                        <ProjectCard key={`${project.id}-${index}`} project={project} images={images} />
                    ))}
                </div>
            </div>

            <div className='projects-container mobile'>
                <div className="projects-list">
                    {data.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            images={images}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}
export default ProjectsWheel;