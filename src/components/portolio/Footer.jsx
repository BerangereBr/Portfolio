import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import '../../styles/portfolio/footer.scss'

function Footer() {
    return (
        <section id='footer'>
            <Link><CiLinkedin className="footer_logo" /></Link>
            <Link><FiGithub className="footer_logo" /></Link>
        </section>
    )
}
export default Footer