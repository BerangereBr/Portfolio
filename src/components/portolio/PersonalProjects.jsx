import '../../styles/portfolio/projects.scss'
import { Link } from 'react-router-dom'
import github from '../../assets/logo/github-dark.png'
import headerSnake from '../../assets/images/projectSnake/headerSnake.webp'
import internetLink from '../../assets/logo/internetLink.png'
import '../../styles/portfolio/personalProject.scss'

function PersonalProjects() {

    return (
        <section id='projects'>
            <h2 className='projects-title'>Projets personnels</h2>
            <div className='projects-container'>
                <article className='project'>
                    <Link to='/projet_snake' className='project-link'>
                        <div className='project-link-div'><img src={headerSnake} alt="site javascript" className='project-link-img'></img></div>
                        <div className='project-description'>
                            <h3>Snake game</h3>
                            <p>Snake est un jeu rétro développé en React, inspiré du classique arcade.
                                Ce projet m’a permis de travailler la logique de jeu, la gestion d’état complexe et les interactions clavier, tout en soignant l’interface avec un style néon / rétro grâce à Tailwind CSS.</p>
                        </div>
                    </Link>
                    <div className='container-logo'>
                        <div className='internet-div'>
                            <a href='https://snake-rho-roan.vercel.app/' target='_blank'>
                                <img src={internetLink} alt='internet logo'></img>
                            </a>
                        </div>
                        <div className='github-div-personal'>
                            <a href='https://github.com/BerangereBr/Snake'>
                                <img src={github} alt='github logo'></img>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section >
    )
}
export default PersonalProjects