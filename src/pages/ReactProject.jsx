import PageProject from '../components/PageProject'
import data from '../projects.json'
import kasa from '../assets/images/kasa.png'
import html from '../assets/logo/html5.png'
import sass from '../assets/logo/sass.png'
import react from '../assets/logo/react.png'

function ReactPage() {
    const project = data[1]
    return (
        <PageProject
            title={project.Titre}
            image={kasa}
            objectif={project.Objectif}
            logo={[react, html, sass]}
            competence={project.Competences}
            resultat={project.Resultats}
            amelioration={project.Amelioration} />
    )
}

export default ReactPage