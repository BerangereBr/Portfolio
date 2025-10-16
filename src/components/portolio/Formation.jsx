import '../../styles/portfolio/formation.scss'

function Formation() {
    return (
        <section id='formation'>
            <div className='formation-container'>
                <h1>Parcours</h1>
                <ul className="formation-list">
                    <li className='formation-list-text formation-list-text-end'>
                        <h2>2014 : Baccalauréat scientifique</h2>
                        <p>Spécialité physique - chimie</p>
                    </li>
                    <li className='formation-list-text-none'></li>
                    <li className='formation-list-text-none'></li>
                    <li className='formation-list-text'>
                        <h2>2015 - 2020 : Parcours universitaire divers</h2>
                        <p>Médecine, chimie, biologie, diététique</p>
                    </li>
                    <li className='formation-list-text formation-list-text-end'>
                        <h2>2020 - 2023 : Expérience professionnelle</h2>
                        <p>Saisonnière agricole, stages en restauration collective</p>
                    </li>
                    <li className='formation-list-text-none'></li>
                    <li className='formation-list-text-none'></li>
                    <li className='formation-list-text formation-list-text-border'>
                        <h2>2025 : Formation Développeuse Web</h2>
                        <p>OpenClassRooms, en cours</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Formation