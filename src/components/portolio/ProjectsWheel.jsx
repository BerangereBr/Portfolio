import ProjectCard from '../ProjectCard';
import { useEffect, useRef, useState } from 'react';
import '../../styles/portfolio/projects.scss';
import data from '../../projects.json'
import headerJavascript from '../../assets/images/projectJavascript/headerJavascript.webp'
import headerReact from '../../assets/images/projectReact/headerReact.webp'
import headerNodejs from '../../assets/images/projectNodejs/headerNodejs.webp'
import headerSnake from '../../assets/images/projectSnake/headerSnake.webp'
import headerCalculatrice from '../../assets/images/projectCalculatrice/headerCalculatrice.webp'
import headerTodoList from '../../assets/images/projectTodolist/headerTodolist.webp'
import arrow from '../../assets/logo/arrow.png'

function ProjectsWheel() {
    const images = {
        headerJavascript,
        headerReact,
        headerNodejs,
        headerSnake,
        headerCalculatrice,
        headerTodoList
    };
    const projects = [...data];
    const [currentProject, setCurrentProject] = useState(0);
    const [maxOffset, setMaxOffset] = useState(0);
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const projectStep = 380;

    useEffect(() => {
        const updateMaxOffset = () => {
            if (containerRef.current && trackRef.current) {
                setMaxOffset(Math.max(
                    trackRef.current.scrollWidth - containerRef.current.clientWidth,
                    0
                ));
            }
        };

        updateMaxOffset();
        window.addEventListener('resize', updateMaxOffset);

        return () => window.removeEventListener('resize', updateMaxOffset);
    }, [projects.length]);

    const moveProjects = (direction) => {
        setCurrentProject((projectIndex) => Math.min(
            Math.max(projectIndex + direction, 0),
            projects.length - 1
        ));
    };

    return (
        <section id='projects'>
            <h2 className='projects-title'>Projets</h2>
            <div className='projects-container desktop' ref={containerRef}>
                <div className='projects-navigation'>
                    <button
                        type='button'
                        onClick={() => moveProjects(-1)}
                        aria-label='Afficher le projet précédent'
                        disabled={currentProject === 0}
                    >
                        <img src={arrow} alt='Flèche gauche' className='arrow-right' />
                    </button>
                    <button
                        type='button'
                        onClick={() => moveProjects(1)}
                        aria-label='Afficher le projet suivant'
                        disabled={currentProject * projectStep >= maxOffset}
                    >
                        <img src={arrow} alt='Flèche droite' className='arrow-left' />
                    </button>
                </div>
                <div
                    ref={trackRef}
                    className='projects-track'
                    style={{
                        transform: `translateX(-${Math.min(currentProject * projectStep, maxOffset)}px)`
                    }}
                >
                    {projects.map((project, index) => (
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