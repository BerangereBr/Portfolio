import '../../styles/portfolio/projects.scss'
import data from '../../projects.json'
import headerJavascript from '../../assets/images/projectJavascript/headerJavascript.webp'
import headerReact from '../../assets/images/projectReact/headerReact.webp'
import headerNodejs from '../../assets/images/projectNodejs/headerNodejs.webp'
import { Link } from 'react-router-dom'
import github from '../../assets/logo/github-dark.png'

function Projects() {
    const project1 = data[0];
    const project2 = data[1];
    const project3 = data[2];

    return (
        <section id='projects'>
            <h2 className='projects-title'>Projets</h2>
            <div className='projects-container'>
                <article className='project'>
                    <Link to='/projet_javascript' className='project-link'>
                        <div className='project-link-div'><img src={headerJavascript} alt="site javascript" className='project-link-img'></img></div>
                        <div className='project-description'>
                            <h3>{project1.Titre}</h3>
                            <p>{project1.Contexte}</p>
                        </div>
                    </Link>
                    <div className='github-div'>
                        <a href='https://github.com/BerangereBr/Projet3_Architecte_Sophie_Bluel.git'>
                            <img src={github} alt='github logo'></img>
                        </a>
                    </div>
                </article>
                <article className='project'>
                    <Link to='/projet_react' className='project-link'>
                        <div className='project-link-div'><img src={headerReact} alt="site react" className='project-link-img'></img></div>
                        <div className='project-description'>
                            <h3>{project2.Titre}</h3>
                            <p>{project2.Contexte}</p>
                        </div>
                    </Link>
                    <div className='github-div'>
                        <a href='https://github.com/BerangereBr/Projet5_Kasa.git'>
                            <img src={github} alt='github logo'></img>
                        </a>
                    </div>
                </article>
                <article className='project'>
                    <Link to='/projet_nodejs' className='project-link'>
                        <div className='project-link-div'><img src={headerNodejs} alt="site nodejs" className='project-link-img'></img></div>
                        <div className='project-description'>
                            <h3>{project3.Titre}</h3>
                            <p>{project3.Contexte}</p>
                        </div>
                    </Link>
                    <div className='github-div'>
                        <a href='https://github.com/BerangereBr/Projet6_MonVieuxGrimoire.git'>
                            <img src={github} alt='github logo'></img>
                        </a>
                    </div>
                </article>
            </div>
        </section >
    )
}
export default Projects