import '../../styles/portfolio/stacks.scss'
import react from '../../assets/logo/react.png'
import javascript from '../../assets/logo/javascript.png'
import html5 from '../../assets/logo/html5.png'
import nodejs from '../../assets/logo/nodejs.png'
import sass from '../../assets/logo/sass.png'
import mongoDB from '../../assets/logo/mongoDB.png'
import Section from '../Section'

function Stacks() {
    return (
        <Section id='stacks'>
            <article className="stack-container">
                <div className='stack-logo'>
                    <img src={html5} alt='logo html5' />
                    <img src={sass} alt='logo saas' />
                    <img src={javascript} alt='logo javascript' />
                    <img src={react} alt='logo react' />
                    <img src={nodejs} alt='logo nodejs' />
                    <img src={mongoDB} alt='logo mongoDB' />
                </div>
            </article>
        </Section >
    )
}

export default Stacks