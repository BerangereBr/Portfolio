import '../../styles/portfolio/hero.scss'
import github from '../../assets/logo/github.png'
import linkedin from '../../assets/logo/linkedin.png'

function Hero() {
    return (
        <section id='accueil'>
            <p className='accueil_text'>Bonjour, je suis< strong className='accueil_name'>Bérangère Brun</strong>développeuse frontend</p>
            <div className=' accueil-link'>
                <a href='https://github.com/BerangereBr' target='_blank'><img src={github} alt='logo github' className="footer_logo" /></a>
                <a href='https://www.linkedin.com/in/bérangère-brun-6208712a0' target='_blank'><img src={linkedin} alt='logo linkedin' className="footer_logo" /></a>
            </div>
        </section>
    )
}

export default Hero