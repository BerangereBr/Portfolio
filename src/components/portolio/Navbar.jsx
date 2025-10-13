import '../../styles/portfolio/navbar.scss'

function Navbar() {

    const scrollSection = (id) => {
        const element = document.getElementById(id);
        const navbar = document.querySelector('.container-navbar')
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - navbar.offsetHeight
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }
    return (
        <div className='container-navbar'>
            <div className='navbar'>
                <ul className='liste-nav'>
                    <li onClick={() => scrollSection('accueil')}>Accueil</li>
                    <li onClick={() => scrollSection('presentation')}>Présentation</li>
                    <li onClick={() => scrollSection('competences')}>Compétences</li>
                    <li onClick={() => scrollSection('projets')}>Projets</li>
                </ul>
            </div>
        </div >
    )
}
export default Navbar