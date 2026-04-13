import '../../styles/portfolio/projects.scss'
import data from '../../projects.json'
import ProjectCard from '../ProjectCard';
import headerJavascript from '../../assets/images/projectJavascript/headerJavascript.webp'
import headerReact from '../../assets/images/projectReact/headerReact.webp'
import headerNodejs from '../../assets/images/projectNodejs/headerNodejs.webp'
import headerSnake from '../../assets/images/projectSnake/headerSnake.webp'
import headerCalculatrice from '../../assets/images/projectCalculatrice/headerCalculatrice.webp'
import headerTodoList from '../../assets/images/projectTodolist/headerTodolist.webp'

function Projects() {
    const images = {
        headerJavascript,
        headerReact,
        headerNodejs,
        headerSnake,
        headerCalculatrice,
        headerTodoList
    };

    return (
        <>
            {data.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    images={images}
                />
            ))}
        </>
    );
}

export default Projects;