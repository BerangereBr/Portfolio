import PageProject from '../components/PageProject'
import data from '../projects.json'
import bannerReact from '../assets/images/projectReact/bannerReact.webp'
import Footer from '../components/Footer'

function ReactPage() {
    const project = data[1]
    return (
        <>
            <PageProject
                title={project.Titre}
                banner={bannerReact}
                objectif={project.Objectif}
                competence={project.Competences}
                resultat={project.Resultats}
                amelioration={project.Amelioration}
                video={"/video/reactVideo.mp4"}
            />
            <Footer />
        </>
    )
}

export default ReactPage