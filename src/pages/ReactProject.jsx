import PageProject from '../components/PageProject'
import data from '../projects.json'
import bannerReact from '../assets/images/projectReact/bannerReact.webp'
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import infoReact from '../assets/images/projectReact/infoReact.webp'
import logementReact from '../assets/images/projectReact/logementReact.webp'
import accueilReact from '../assets/images/projectReact/accueilReact.webp'


function ReactPage() {
    const project = data[1]
    return (
        <PageProject
            title={project.Titre}
            banner={bannerReact}
            objectif={project.Objectif}
            logo={[FaReact, AiOutlineHtml5]}
            competence={project.Competences}
            resultat={project.Resultats}
            amelioration={project.Amelioration}
            images={[accueilReact, logementReact, infoReact]}
        />
    )
}

export default ReactPage