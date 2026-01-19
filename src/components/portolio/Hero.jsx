import '../../styles/portfolio/hero.scss'
import github from '../../assets/logo/github-dark.png'
import linkedin from '../../assets/logo/linkedin-dark.png'
import avatar from '../../assets/images/avatar.webp'
import mail from '../../assets/logo/mail.png'

function Hero() {
    const scrollSection = (e, id) => {
        e.preventDefault()

        const element = document.getElementById(id);
        const navbar = document.querySelector('.container-navbar')
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - navbar.offsetHeight
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }
    return (
        <section id='accueil'>
            <div className='accueil-container-avatar'>
                <img src={avatar} alt='Bérangère Brun' width='250px'></img></div>
            <div className='accueil-container-text'>
                <h1 className='accueil-text'>Bonjour, je suis< strong className='accueil-name'>Bérangère Brun</strong>développeuse frontend</h1>
                <div className=' accueil-link'>
                    <a href='https://github.com/BerangereBr' target='_blank'><img src={github} alt='logo github' className="footer-logo" /></a>
                    <a href='https://www.linkedin.com/in/bérangère-brun-6208712a0' target='_blank'><img src={linkedin} alt='logo linkedin' className="footer-logo" /></a>
                    <a href="#form" onClick={(e) => scrollSection(e, 'form')}><img src={mail} alt='logo mail' className="footer-logo" /></a>
                </div>
            </div>
        </section>
    )
}

export default Hero