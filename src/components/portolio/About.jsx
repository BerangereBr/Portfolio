import '../../styles/portfolio/about.scss'

function About() {
    return (
        <section id='about' className='about'>
            <h1 className="about-title">À propos</h1>
            <div className='about-paragraphe'>
                <p>Mon intérête pour le développement web a commancé avant ma formation, lorsque j'ai créé un autour d'un jeu video.
                    Cette première expérience m'a permis de découvrir les bases du code.
                </p>
                <p>Pour acquérir des compétences solides, j'ai suivi une formation de Développeur Web chez OpenClassrooms. Elle m'a permis de maîtriser les langages du web,
                    aussi bien côté front-end (HTML, CSS, JavaScript, React) que back-end (Node.js, Express, MongoDB), à travers des projets concrets et encadrés.
                </p>
                <p>Je suis fière de mon application de location d'hébergements avec React, offrant une navigation fluide, un affichage dynamique des logements,
                    et une interface responsive pensée pour l'utilisateur. Et d'avoir développé le back-end sécurisé d'une application de partage de livres avec Node.js
                    et Express, en mettant en place une API REST, une gestion des utilisateurs et des fichiers, ainsi qu'un système d'authentification robuste.
                </p>
            </div>
        </section>
    )
}

export default About