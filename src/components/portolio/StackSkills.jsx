import '../../styles/portfolio/stackskills.scss'
import react from '../../assets/logo/react.png'
import javascript from '../../assets/logo/javascript.png'
import html5 from '../../assets/logo/html5.png'
import nodejs from '../../assets/logo/nodejs.png'


function StackSkills() {
    return (

        <section id='stackSkills'>
            <h1 className='stackSkills-title'>Compétences</h1>
            <div className='stackSkills-container'>
                <div className='skills-container'>
                    <h2 className='skills-title'>Soft skills</h2>
                    <ul className='skills-list'>
                        <li>Esprit d'équipe</li>
                        <li>Empathie</li>
                        <li>Adaptabilité</li>
                        <li>Patience</li>
                        <li>Organisation</li>
                    </ul>
                </div>
                <div className="stack-container">
                    <h2 className='stack-title'>Stack technique</h2>
                    <div className='stack-logo'>
                        <img src={html5} alt='logo html5' />
                        <img src={javascript} alt='logo javascript' />
                        <img src={react} alt='logo react' className='logo-react' />
                        <img src={nodejs} alt='logo nodejs' />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default StackSkills