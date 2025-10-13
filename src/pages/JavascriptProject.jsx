import PageProject from '../components/PageProject'
import data from '../projects.json'
import sophieBuel from '../assets/images/sophieBuel.png'
import javascript from '../assets/logo/javascript.png'
import html from '../assets/logo/html5.png'
import CSS from '../assets/logo/CSS.png'

function JavascriptPage() {
    const project = data[0]
    return (
        <PageProject
            title={project.Titre}
            image={sophieBuel}
            objectif={project.Objectif}
            logo={[javascript, html, CSS]}
            competence={project.Competences}
            resultat={project.Resultats}
            amelioration={project.Amelioration} />
    )
}

export default JavascriptPage