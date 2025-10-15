import '../styles/footer.scss'
import github from '../assets/logo/github.png'
import linkedin from '../assets/logo/linkedin.png'

function Footer() {
    return (
        <section id='footer'>
            <a href='https://github.com/BerangereBr' target='_blank'><img src={github} alt='logo github' className="footer_logo" /></a>
            <a href='https://www.linkedin.com/in/bérangère-brun-6208712a0' target='_blank'><img src={linkedin} alt='logo linkedin' className="footer_logo" /></a>
        </section>
    )
}
export default Footer