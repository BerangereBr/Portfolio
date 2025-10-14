import '../styles/projects/project.scss'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

function PageProject({ title, objectif, competence, resultat, amelioration, logo, banner, images }) {

    return (
        <>
            <div className='header-project'>
                <div className='arrow-div'>
                    <Link to='/'><FaArrowLeft className='arrow' /></Link>
                </div>
                <div className='banner'>
                    <img src={banner} alt='site' className='picture'></img>
                </div>
                <h1 className='header_project-title'>{title}</h1>
            </div>
            <div>
                {logo && logo.length > 0 && (
                    <div className="project-images">
                        {logo.map((Icon, index) => (
                            <Icon
                                key={`${Icon}-${index}`}
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
            <div>
                {images && images.length > 0 && (
                    <div className='project_images-div'>{images.map((imgSrc, index) => (
                        <img src={imgSrc} key={`${imgSrc}-${index}`}></img>
                    ))}</div>
                )}
            </div>
        </>
    )
}

export default PageProject