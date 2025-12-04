import '../../styles/portfolio/formation.scss'

function Formation() {
    return (
        <section id='formation'>
            <div className='formation-container'>
                <h2>Parcours</h2>
                <ul className="formation-list">
                    <li className='formation-list-text formation-list-text-end'>
                        <h3>2014 : Baccalauréat scientifique</h3>
                        <p>Spécialité physique - chimie</p>
                    </li>
                    <li className='formation-list-text-none'></li>
                    <li className='formation-list-text-none'></li>
                    <li className='formation-list-text'>
                        <h3>2015 - 2020 : Parcours universitaire divers</h3>
                        <p>Médecine, chimie, biologie, diététique</p>
                    </li>
                    <li className='formation-list-text formation-list-text-end'>
                        <h3>2020 - 2023 : Expérience professionnelle</h3>
                        <p>Saisonnière agricole, stages en restauration collective</p>
                    </li>
                    <li className='formation-list-text-none'></li>
                    <li className='formation-list-text-none'></li>
                    <li className='formation-list-text formation-list-text-border'>
                        <h3>2025 : Formation Développeuse Web</h3>
                        <p>OpenClassRooms</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Formation