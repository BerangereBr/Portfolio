import PageProject from '../../components/PageProject'
import data from '../../projects.json'
import bannerCalculatrice from '../../assets/images/projectCalculatrice/bannerCalculatrice.webp'
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'

function CalculatricePage() {
    const project = data[4]
    return (
        <>
            <ScrollToTop />
            <PageProject
                title={project.Titre}
                banner={bannerCalculatrice}
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

export default CalculatricePage