import Projects from './Projects';
import '../../styles/portfolio/projects.scss';
import Section from '../Section';

function ProjetcsWheel() {
    return (
        <Section id='projects'>
            <h2 className='projects-title'>Projets</h2>
            <div className='projects-container'>
                <div className='projects-track'>
                    <Projects />
                    <Projects />
                    <Projects />
                    <Projects />
                    <Projects />
                </div>
            </div>
        </Section >
    )
}
export default ProjetcsWheel