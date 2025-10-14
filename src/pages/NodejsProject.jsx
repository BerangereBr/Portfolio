import PageProject from '../components/PageProject'
import data from '../projects.json'
import bannerNodejs from '../assets/images/projectNodejs/bannerNodejs.webp'
import { DiNodejs } from "react-icons/di";
import { TbBrandMongodb } from "react-icons/tb";
import accueilNodejs from '../assets/images/projectNodejs/accueilNodejs.webp'
import bookNodejs from '../assets/images/projectNodejs/bookNodejs.webp'
import formNodejs from '../assets/images/projectNodejs/formNodejs.webp'

function NodejsPage() {
    const project = data[2]
    return (
        <PageProject
            title={project.Titre}
            banner={bannerNodejs}
            objectif={project.Objectif}
            logo={[DiNodejs, TbBrandMongodb]}
            competence={project.Competences}
            resultat={project.Resultats}
            amelioration={project.Amelioration}
            images={[accueilNodejs, bookNodejs, formNodejs]}
        />
    )
}

export default NodejsPage