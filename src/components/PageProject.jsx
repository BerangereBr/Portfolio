import '../styles/projects/project.scss'
import { Link } from 'react-router-dom'
import arrow from '../assets/logo/arrow.png'

function PageProject({ title, objectif, competence, resultat, amelioration, banner, video }) {

    return (
        <>
            <header className='project-header'>
                <div className='arrow-div'>
                    <Link to='/'><img src={arrow} alt='fleche retour' className='arrow' /></Link>
                </div>
                <div className='project-banner'>
                    <div className='project-banner-div'>
                        <img src={banner} alt={`projet ${title}`} className='banner-picture' fetchPriority="high" width='1440px' height='760px'></img>
                    </div>
                </div>
                <div className='project-header-title'>
                    <h1>{title}</h1>
                </div>
            </header >
            <main className='project-main'>
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
                <div className='project-video-container'>
                    <video width="600" height="auto" controls autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        <track
                            src="/video/audio.vtt"
                            kind="subtitles"
                            srcLang="fr"
                            label="Sous-titres test"
                            default
                        />
                    </video>
                </div>
            </main>
        </>
    )
}

export default PageProject