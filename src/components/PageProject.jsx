import '../styles/projects/project.scss'
import { Link } from 'react-router-dom'
import arrow from '../assets/logo/arrow.png'

function PageProject({ title, objectif, competence, resultat, amelioration, stacks, banner, video }) {
    const isMobile = window.innerWidth < 768
    return (
        <>
            <header className='project-header'>
                <div className='arrow-div'>
                    <Link to='/#projects'><img src={arrow} alt='fleche retour' className='arrow' /></Link>
                </div>
                <div className='project-banner'>
                    <div className='project-banner-div'>
                        <img src={banner} alt={`projet ${title}`} className='banner-picture' fetchPriority="high" width='700' height='500'></img>
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
                        <h2>Perspective d'amélioration</h2>
                        <p>{amelioration}</p>
                    </div>
                    <div>
                        <h2>Stacks techniques</h2>
                        <p>{stacks}</p>
                    </div>
                </div>
                {video && (
                    <div className='project-video-container'>
                        <video width="600" controls autoPlay={!isMobile} muted loop playsInline>
                            <source src={video} type="video/mp4" />
                            <track
                                src="/video/audio.vtt"
                                kind="subtitles"
                                srcLang="fr"
                                default
                            />
                        </video>
                    </div>
                )}
            </main>
        </>
    )
}

export default PageProject