import fleche from '../assets/logo/fleche.png'
import '../styles/projects/project.scss'
import { Link } from 'react-router-dom'

function PageProject({ title, objectif, competence, resultat, amelioration, logo, image }) {

    return (
        <>
            <Link to='/'><img src={fleche} alt="fleche retour" className='fleche'></img></Link>
            <div className='header-project'>
                <div className='banner'>
                    <img src={image} alt='site' className='picture'></img>
                </div>
                <h1>{title}</h1>
            </div>
            <div>
                {logo && logo.length > 0 && (
                    <div className="project-images">
                        {logo.map((imgSrc, index) => (
                            <img
                                key={index}
                                src={imgSrc}
                                alt={`screenshot-${index + 1}`}
                                className="project-logo"
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className='details-container'>
                <div>
                    <h2>Objectif</h2>
                    <p>{objectif}</p>
                </div>
                <div>
                    <h2>Compétence</h2>
                    <p>{competence}</p>
                </div>
                <div>
                    <h2>Résultats</h2>
                    <p>{resultat}</p>
                </div>
                <div>
                    <h2>Perspéctive d'amélioration</h2>
                    <p>{amelioration}</p>
                </div>
            </div>
        </>
    )
}

export default PageProject