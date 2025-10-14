import '../../styles/portfolio/projects.scss'
import data from '../../projects.json'
import headerJavascript from '../../assets/images/projectJavascript/headerJavascript.webp'
import headerReact from '../../assets/images/projectReact/headerReact.webp'
import headerNodejs from '../../assets/images/projectNodejs/headerNodejs.webp'
import { Link } from 'react-router-dom'
import { RiJavascriptLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


function Projects() {
    const project1 = data[0];
    const project2 = data[1];
    const project3 = data[2];

    return (
        <section id='projects'>
            <h1 className='projects-title'>Projets</h1>
            <div className='projects-container'>
                <div className='project'>
                    <Link to='/projet_javascript' className='project-link'>
                        <div className='project-img-div'> <img src={headerJavascript} alt="site" className='project-img'></img></div>
                        <div className='project-description'>
                            <h2>{project1.Titre}</h2>
                            <p>{project1.Contexte}</p>
                        </div>
                    </Link>
                    <div className='github-div'>
                        <RiJavascriptLine className='project_logo' />
                        <a href='https://github.com/BerangereBr/Projet3_Architecte_Sophie_Bluel.git'>Code<FiGithub /></a>
                    </div>
                </div>
                <div className='project'>
                    <Link to='/projet_react' className='project-link'>
                        <div className='project-img-div'> <img src={headerReact} alt="site" className='project-img'></img></div>
                        <div className='project-description'>
                            <h2>{project2.Titre}</h2>
                            <p>{project2.Contexte}</p>
                        </div>
                    </Link>
                    <div className='github-div'>
                        <FaReact className='project_logo-react' />
                        <a href='https://github.com/BerangereBr/Projet5_Kasa.git'>Code<FiGithub /></a>
                    </div>
                </div>
                <div className='project'>
                    <Link to='/projet_nodejs' className='project-link'>
                        <div className='project-img-div'> <img src={headerNodejs} alt="site" className='project-img'></img></div>
                        <div className='project-description'>
                            <h2>{project3.Titre}</h2>
                            <p>{project3.Contexte}</p>
                        </div>
                    </Link>
                    <div className='github-div'>
                        <DiNodejs className='project_logo' />
                        <a href='https://github.com/BerangereBr/Projet6_MonVieuxGrimoire.git'>Code<FiGithub /></a>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Projects