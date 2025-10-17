import PageProject from '../components/PageProject'
import data from '../projects.json'
import bannerJavascript from '../assets/images/projectJavascript/bannerJavascript.webp'
import Footer from '../components/Footer'

function JavascriptPage() {
    const project = data[0]
    return (
        <>
            <PageProject
                title={project.Titre}
                banner={bannerJavascript}
                objectif={project.Objectif}
                competence={project.Competences}
                resultat={project.Resultats}
                amelioration={project.Amelioration}
                video={"/video/javascriptVideo.mp4"}
            />
            <Footer />

        </>
    )
}

export default JavascriptPage