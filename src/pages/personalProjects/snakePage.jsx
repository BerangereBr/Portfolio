import PageProject from '../../components/PageProject'
import data from '../../projects.json'
import bannerSnake from '../../assets/images/projectSnake/bannerSnake.webp'
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'

function SnakePage() {
    const project = data[3]
    return (
        <>
            <ScrollToTop />
            <PageProject
                title={project.Titre}
                banner={bannerSnake}
                objectif={project.Objectif}
                competence={project.Competences}
                resultat={project.Resultats}
                amelioration={project.Amelioration}
                stacks={project.StackTechnique}
            />
            <Footer />
        </>
    )
}

export default SnakePage