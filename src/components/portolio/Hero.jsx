import '../../styles/portfolio/hero.scss'
import github from '../../assets/logo/github-dark.png'
import linkedin from '../../assets/logo/linkedin-dark.png'
import avatar from '../../assets/images/avatar.webp'
import mail from '../../assets/logo/mail.png'

function Hero() {
    const links = [
        {
            href: "https://github.com/BerangereBr",
            src: github,
            alt: "logo github"
        },
        {
            href: "https://www.linkedin.com/in/bérangère-brun-6208712a0",
            src: linkedin,
            alt: "logo linkedin"
        },
        {
            href: "#form",
            src: mail,
            alt: "logo mail",
            scrollTo: "form" // pour le scroll smooth
        }
    ];


    const totalDelay = 2;

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
                <div className='container-avatar'></div>
                <img src={avatar} alt='Bérangère Brun' width='250px' className='avatar'></img>
            </div>
            <div className='accueil-container-text'>
                <h1 className="accueil-text">
                    Bonjour, je suis <strong className='name'>Bérangère Brun </strong>développeuse web
                </h1>
                <div className=' accueil-link'>
                    {links.map((link, index) => (
                        link.scrollTo ? (
                            <a
                                key={index}
                                href={`#${link.scrollTo}`}
                                onClick={(e) => scrollSection(e, link.scrollTo)}
                            >
                                <img
                                    src={link.src}
                                    alt={link.alt}
                                    className="footer-logo zoom"
                                    style={{ animationDelay: `${totalDelay + index * 0.2}s` }}
                                />
                            </a>
                        ) : (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={link.src}
                                    alt={link.alt}
                                    className="footer-logo zoom"
                                    style={{ animationDelay: `${totalDelay + index * 0.2}s` }}
                                />
                            </a>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero