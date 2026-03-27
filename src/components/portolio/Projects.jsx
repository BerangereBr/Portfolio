import '../../styles/portfolio/projects.scss'
import data from '../../projects.json'
import headerJavascript from '../../assets/images/projectJavascript/headerJavascript.webp'
import headerReact from '../../assets/images/projectReact/headerReact.webp'
import headerNodejs from '../../assets/images/projectNodejs/headerNodejs.webp'
import headerSnake from '../../assets/images/projectSnake/headerSnake.webp'
import headerCalculatrice from '../../assets/images/projectCalculatrice/headerCalculatrice.webp'
import internetLink from '../../assets/logo/internetLink.png'
import headerTodolist from '../../assets/images/projectTodolist/headerTodolist.webp'
import { Link } from 'react-router-dom'
import github from '../../assets/logo/github-dark.png'

function Projects() {
    const project1 = data[0];
    const project2 = data[1];
    const project3 = data[2];

    return (
        <>
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
                    <div className='github-div'>
                        <a href='https://github.com/BerangereBr/Snake'>
                            <img src={github} alt='github logo'></img>
                        </a>
                    </div>
                </div>
            </article>
            <article className='project'>
                <Link to='/projet_calculatrice' className='project-link'>
                    <div className='project-link-div'><img src={headerCalculatrice} alt="site javascript" className='project-link-img'></img></div>
                    <div className='project-description'>
                        <h3>Calculatrice</h3>
                        <p>Calculatrice Web développée avec React et Tailwind CSS.
                            Supporte les opérations de base, les nombres négatifs, les décimales, et la suppression partielle ou reset complet.
                            Compatible clavier et clic, design responsive avec mode clair et sombre.</p>
                    </div>
                </Link>
                <div className='container-logo'>
                    <div className='internet-div'>
                        <a href='https://calculatrice-kappa.vercel.app/' target='_blank'>
                            <img src={internetLink} alt='internet logo'></img>
                        </a>
                    </div>
                    <div className='github-div'>
                        <a href='https://github.com/BerangereBr/Calculatrice.git'>
                            <img src={github} alt='github logo'></img>
                        </a>
                    </div>
                </div>
            </article>
            <article className='project'>
                <Link to='/projet_todolist' className='project-link'>
                    <div className='project-link-div'><img src={headerTodolist} alt="site javascript" className='project-link-img'></img></div>
                    <div className='project-description'>
                        <h3>Todolist</h3>
                        <p>Application TodoList full-stack permettant de créer et gérer plusieurs listes de tâches avec authentification utilisateur,
                            CRUD complet et personnalisation du thème.</p>
                    </div>
                </Link>
                <div className='container-logo'>
                    <div className='internet-div'>
                        <a href='https://todolist-ten-pearl-25.vercel.app/' target='_blank'>
                            <img src={internetLink} alt='internet logo'></img>
                        </a>
                    </div>
                    <div className='github-div'>
                        <a href='https://github.com/BerangereBr/Todolist'>
                            <img src={github} alt='github logo'></img>
                        </a>
                    </div>
                </div>
            </article>
        </>
    )
}
export default Projects