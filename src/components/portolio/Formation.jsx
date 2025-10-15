import '../../styles/portfolio/formation.scss'

function Formation() {
    return (
        <section id='formation'>
            <h1>Parcours</h1>
            <ul className="formation-list">
                <li className='formation-list-text formation-list-text-end'>
                    <h2>2014 : Baccalauréat scientifique</h2>
                    <p>Spécialité physique/chimie</p>
                </li>
                <li></li>
                <li></li>
                <li className='formation-list-text'>
                    <h2>2015 - 2020 : Parcours universitaire divers</h2>
                    <p>Médecine, chimie, biologie, diététique</p>
                </li>
                <li className='formation-list-text formation-list-text-end'>
                    <h2>2020 - 2023 : Expérience professionnelle</h2>
                    <p>Ouvrier agricole, stages en restauration collective</p>
                </li>
                <li></li>
                <li></li>
                <li className='formation-list-text'>
                    <h2>2025 : Formation Développeur Web</h2>
                    <p>OpenClassRoom, en cours</p>
                </li>
            </ul>
        </section>
    )
}
export default Formation