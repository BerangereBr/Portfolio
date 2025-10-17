import PageProject from '../components/PageProject'
import data from '../projects.json'
import bannerJavascript from '../assets/images/projectJavascript/bannerJavascript.webp'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function JavascriptPage() {
    const project = data[0]
    return (
        <>
            <ScrollToTop />
            <PageProject
                title={project.Titre}
                banner={bannerJavascript}
                objectif={project.Objectif}
                competence={project.Competences}
                resultat={project.Resultats}
                amelioration={project.Amelioration}
                stacks={project.StackTechnique}
                video={"/video/javascriptVideo.mp4"}
            />
            <Footer />
        </>
    )
}

export default JavascriptPage