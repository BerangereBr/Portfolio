import PageProject from '../components/PageProject'
import data from '../projects.json'
import bannerNodejs from '../assets/images/projectNodejs/bannerNodejs.webp'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function NodejsPage() {
    const project = data[2]
    return (
        <>
            <ScrollToTop />
            <PageProject
                title={project.Titre}
                banner={bannerNodejs}
                objectif={project.Objectif}
                competence={project.Competences}
                resultat={project.Resultats}
                amelioration={project.Amelioration}
                stacks={project.StackTechnique}
                video={"video/nodejsVideo.mp4"}
            />
            <Footer />
        </>
    )
}

export default NodejsPage