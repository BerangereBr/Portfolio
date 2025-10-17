import { useState } from 'react';
import '../../styles/portfolio/navbar.scss'
import menu from '../../assets/logo/menu.png'
import close from '../../assets/logo/close.png'

function Navbar() {
    const [open, setOpen] = useState(false)

    const scrollSection = (id) => {
        const element = document.getElementById(id);
        const navbar = document.querySelector('.container-navbar')
        if (element && window.innerWidth > 768) {
            const yDesk = element.getBoundingClientRect().top + window.pageYOffset - navbar.offsetHeight
            window.scrollTo({ top: yDesk, behavior: 'smooth' })
        } else if (element && window.innerWidth < 768) {
            const yPhone = element.getBoundingClientRect().top
            window.scrollTo({ top: yPhone, behavior: 'smooth' })
            setOpen(true)
        }
    }

    return (
        <>
            <nav className='container-navbar'>
                <div className='navbar'>
                    <ul className='liste-nav'>
                        <li onClick={() => scrollSection('accueil')}>Accueil</li>
                        <li onClick={() => scrollSection('about')}>Présentation</li>
                        <li onClick={() => scrollSection('projects')}>Projets</li>
                        <li onClick={() => scrollSection('formation')}>Parcours</li>
                        <li onClick={() => scrollSection('form')}>Contact</li>
                    </ul>
                </div>
            </nav >
            <nav className='navbar-phone'>
                <div className='navbar-phone-button'>
                    <button onClick={() => setOpen(!open)}>
                        {open ? <img src={close} alt='menu'></img> : <img src={menu} alt='menu'></img>}
                    </button>
                </div>
                {open &&
                    <ul className='liste-nav-phone'>
                        <li onClick={() => scrollSection('accueil')}>Accueil</li>
                        <li onClick={() => scrollSection('about')}>Présentation</li>
                        <li onClick={() => scrollSection('projects')}>Projets</li>
                        <li onClick={() => scrollSection('formation')}>Parcours</li>
                        <li onClick={() => scrollSection('form')}>Contact</li>
                    </ul>}
            </nav>
        </>
    )
}
export default Navbar