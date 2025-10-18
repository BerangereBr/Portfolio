import '../styles/footer.scss'
import github from '../assets/logo/githubLight.png'
import linkedin from '../assets/logo/linkedinLight.png'
import avatar from '../assets/images/avatar.webp'

function Footer() {
    return (
        <footer id='footer'>
            <div className='footer-container'>
                <div className='footer-container-img'><img src={avatar} alt="avatar Bérangère Brun" /></div>
                <div className='footer-container-text'>
                    <h2>Bérangère Brun</h2>
                    <p>Montpellier, France</p>
                    <p>brunberangere@gmail.com</p>
                </div>
                <div className='footer-container-logo'>
                    <a href='https://github.com/BerangereBr' target='_blank'><img src={github} alt='logo github' className="footer_logo" /></a>
                    <a href='https://www.linkedin.com/in/bérangère-brun-6208712a0' target='_blank'><img src={linkedin} alt='logo linkedin' className="footer_logo" /></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer