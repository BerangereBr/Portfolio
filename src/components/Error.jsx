import { Link } from "react-router-dom"
import '../styles/error.scss'

function Error() {
    return (
        <section id="error">
            <h1>404</h1>
            <p>Page non trouvée</p>
            <Link to='/'><p>Retour à la page d'accueil</p></Link>
        </section>
    )
}
export default Error