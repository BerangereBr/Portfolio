import { useState } from 'react';
import '../../styles/portfolio/navbar.scss'
import menu from '../../assets/logo/menu.png'
import close from '../../assets/logo/close.png'

function Navbar() {
    const [open, setOpen] = useState(false)
    const [activeBtn, setActiveBtn] = useState('accueil')

    const scrollSection = (e, id) => {
        e.preventDefault()
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
                        <li><a className={`nav-a ${activeBtn === 'accueil' ? 'active' : ''}`} href='#accueil' onClick={(e) => { scrollSection(e, 'accueil'); setActiveBtn('accueil') }}>Accueil</a></li>
                        <li><a className={`nav-a ${activeBtn === 'about' ? 'active' : ''}`} href='#about' onClick={(e) => { scrollSection(e, 'about'); setActiveBtn('about') }}>Présentation</a></li>
                        <li><a className={`nav-a ${activeBtn === 'projects' ? 'active' : ''}`} href='#projects' onClick={(e) => { scrollSection(e, 'projects'); setActiveBtn('projects') }}>Projets</a></li>
                        <li><a className={`nav-a ${activeBtn === 'formation' ? 'active' : ''}`} href='#formation' onClick={(e) => { scrollSection(e, 'formation'); setActiveBtn('formation') }}>Parcours</a></li>
                        <li><a className={`nav-a ${activeBtn === 'form' ? 'active' : ''}`} href='#form' onClick={(e) => { scrollSection(e, 'form'); setActiveBtn('form') }}>Contact</a></li>
                    </ul>
                </div>
            </nav >
            <nav className={`navbar-phone ${open ? 'open' : 'closed'}`}>
                <div className='navbar-phone-button'>
                    <button onClick={() => setOpen(!open)}>
                        {open ? <img src={close} alt='menu'></img> : <img src={menu} alt='menu'></img>}
                    </button>
                </div>
                {open &&
                    <ul className='liste-nav-phone'>
                        <li><a href='#about' onClick={(e) => scrollSection(e, 'about')}>Présentation</a></li>
                        <li><a href='#projects' onClick={(e) => scrollSection(e, 'projects')}>Projets</a></li>
                        <li><a href='#formation' onClick={(e) => scrollSection(e, 'formation')}>Parcours</a></li>
                        <li><a href='#form' onClick={(e) => scrollSection(e, 'form')}>Contact</a></li>
                    </ul>}
            </nav>
        </>
    )
}
export default Navbar