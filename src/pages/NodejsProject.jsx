import PageProject from '../components/PageProject'
import data from '../projects.json'
import bannerNodejs from '../assets/images/projectNodejs/bannerNodejs.webp'
import Footer from '../components/Footer'

function NodejsPage() {
    const project = data[2]
    return (
        <>
            <PageProject
                title={project.Titre}
                banner={bannerNodejs}
                objectif={project.Objectif}
                competence={project.Competences}
                resultat={project.Resultats}
                amelioration={project.Amelioration}
            />
            <Footer />
        </>
    )
}

export default NodejsPage