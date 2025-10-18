import '../../styles/portfolio/stackskills.scss'
import react from '../../assets/logo/react.png'
import javascript from '../../assets/logo/javascript.png'
import html5 from '../../assets/logo/html5.png'
import nodejs from '../../assets/logo/nodejs.png'
import sass from '../../assets/logo/sass.png'
import mongoDB from '../../assets/logo/mongoDB.png'

function StackSkills() {
    return (

        <section id='stackSkills'>
            <div className='skills-container'>
                <ul className='skills-list'>
                    <li>Empathie</li>
                    <li>Adaptabilité</li>
                    <li>Patience</li>
                    <li>Organisation</li>
                    <li>Esprit d'équipe</li>
                </ul>
            </div>
            <div className="stack-container">
                <h2 className='stack-title'>Stacks techniques</h2>
                <div className='stack-logo'>
                    <img src={html5} alt='logo html5' />
                    <img src={sass} alt='logo saas' />
                    <img src={javascript} alt='logo javascript' />
                    <img src={react} alt='logo react' />
                    <img src={nodejs} alt='logo nodejs' />
                    <img src={mongoDB} alt='logo mongoDB' />
                </div>
            </div>

        </section >
    )
}

export default StackSkills