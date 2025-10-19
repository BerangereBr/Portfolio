import '../../styles/portfolio/about.scss'

function About() {
    return (
        <section id='about' className='about'>
            <div className='about-container'>
                <h2 className="about-title">À propos</h2>
                <div className='about-paragraphe'>
                    <p>Mon intérêt pour le développement web a commencé avant ma formation, lorsque j'ai créé un site autour d'un jeu vidéo.
                        Cette première expérience m'a permis de découvrir les bases du code.
                    </p>
                    <p>Pour acquérir des compétences solides, j'ai suivi une formation de Développeur Web chez OpenClassrooms. Elle m'a permis de maîtriser les langages du web,
                        aussi bien côté front-end (HTML, CSS, JavaScript, React) que back-end (Node.js, Express, MongoDB), à travers des projets concrets et encadrés.
                    </p>
                    <p>Je suis fière de mon application de location d'hébergements avec React, offrant une navigation fluide, un affichage dynamique des logements,
                        et une interface responsive pensée pour l'utilisateur. Je suis également fière d’avoir développé le back-end sécurisé d'une application de partage de livres avec Node.js
                        et Express, en mettant en place une API REST, une gestion des utilisateurs et des fichiers, ainsi qu'un système d'authentification robuste.
                    </p>
                </div>
            </div>
            <div className='skills-container'>
                <ul className='skills-list'>
                    <li>Empathie</li>
                    <li>Adaptabilité</li>
                    <li>Patience</li>
                    <li>Organisation</li>
                    <li>Esprit d'équipe</li>
                </ul>
            </div>
        </section>
    )
}

export default About