import github from '../assets/logo/github-dark.png'
import internetLogo from '../assets/logo/internetLogo.png'
import { Link } from 'react-router-dom';

function ProjectCard({ project, images }) {
    const { link, image, Titre, Contexte, internetLink, githubLink } = project;

    return (
        <article className='project'>
            <Link to={link} className='project-link'>
                <div className='project-link-div'>
                    <img
                        src={images[image]}
                        alt={`Aperçu du projet ${Titre}`}
                        className='project-link-img'
                        loading="lazy"
                    />
                </div>

                <div className='project-description'>
                    <h3>{Titre}</h3>
                    <p>{Contexte}</p>
                </div>
            </Link>

            <div className='container-logo'>

                {internetLink && (
                    <div className='internet-div'>
                        <a href={internetLink} target="_blank" rel="noopener noreferrer">
                            <img src={internetLogo} alt={`Voir le site ${Titre}`} />
                        </a>
                    </div>
                )}

                {githubLink && (
                    <div className='github-div'>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <img src={github} alt={`GitHub du projet ${Titre}`} />
                        </a>
                    </div>
                )}

            </div>
        </article>
    );
}

export default ProjectCard;