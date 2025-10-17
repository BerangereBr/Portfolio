import '../styles/footer.scss'
import github from '../assets/logo/githubLight.png'
import linkedin from '../assets/logo/linkedinLight.png'
import avatar from '../assets/images/avatar.png'

function Footer() {
    return (
        <section id='footer'>
            <div className='footer-container'>
                <div className='footer-container-img'><img src={avatar} alt="Jean Dupont" itemprop="image" /></div>
                <div className='footer-container-text'>
                    <h1>Bérangère Brun</h1>
                    <p>Montpellier, France</p>
                    <p>brunberangere@gmail.com</p>

                </div>
                <div className='footer-container-logo'>
                    <a href='https://github.com/BerangereBr' target='_blank'><img src={github} alt='logo github' className="footer_logo" /></a>
                    <a href='https://www.linkedin.com/in/bérangère-brun-6208712a0' target='_blank'><img src={linkedin} alt='logo linkedin' className="footer_logo" /></a>
                </div>
            </div>
        </section>
    )
}
export default Footer