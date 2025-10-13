import '../../styles/portfolio/projects.scss'
import data from '../../projects.json'
import nodejs from '../../assets/logo/nodejs.png'
import react from '../../assets/logo/react.png'
import javascript from '../../assets/logo/javascript.png'
import sophieBuel from '../../assets/images/sophieBuel.png'
import kasa from '../../assets/images/kasa.png'
import librairie from '../../assets/images/librairie.png'
import github from '../../assets/logo/github.png'
import { Link } from 'react-router-dom'

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
                        <div className='project-img-div'> <img src={sophieBuel} alt="site" className='project-img'></img></div>
                        <div className='project-description'>
                            <div className='project-description-text'>
                                <h2>{project1.Titre}</h2>
                                <p>{project1.Contexte}</p>
                            </div>
                            <img src={javascript} alt="javascript-logo" className='project_logo'></img>
                        </div>
                    </Link>
                    <div className='github-div'>
                        <a href='https://github.com/BerangereBr/Projet3_Architecte_Sophie_Bluel.git'>Code<img src={github} alt='logo-github'></img></a>
                    </div>
                </div>
                <div className='project'>
                    <Link to='/projet_react' className='project-link'>
                        <div className='project-img-div'> <img src={kasa} alt="site" className='project-img'></img></div>
                        <div className='project-description'>
                            <div className='project-description-text'>
                                <h2>{project2.Titre}</h2>
                                <p>{project2.Contexte}</p>
                            </div>
                            <img src={react} alt='react-logo' className='project_logo'></img>
                        </div>
                    </Link>
                    <div className='github-div'>
                        <a href='https://github.com/BerangereBr/Projet5_Kasa.git'>Code<img src={github} alt='logo-github'></img></a>
                    </div>
                </div>
                <div className='project'>
                    <Link to='/projet_nodejs' className='project-link'>
                        <div className='project-img-div'> <img src={librairie} alt="site" className='project-img'></img></div>
                        <div className='project-description'>
                            <div className='project-description-text'>
                                <h2>{project3.Titre}</h2>
                                <p>{project3.Contexte}</p>
                            </div>
                            <img src={nodejs} alt='logo-nodejs' className='project_logo'></img>
                        </div>
                    </Link>
                    <div className='github-div'>
                        <a href='https://github.com/BerangereBr/Projet6_MonVieuxGrimoire.git'>Code<img src={github} alt='logo-github'></img></a>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Projects