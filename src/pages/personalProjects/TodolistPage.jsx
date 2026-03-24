import PageProject from '../../components/PageProject'
import data from '../../projects.json'
import bannerTodolist from '../../assets/images/projectTodolist/bannerTodolist.webp'
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'

function TodolistPage() {
    const project = data[5]
    return (
        <>
            <ScrollToTop />
            <PageProject
                title={project.Titre}
                banner={bannerTodolist}
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

export default TodolistPage