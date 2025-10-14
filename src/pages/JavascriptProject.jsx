import PageProject from '../components/PageProject'
import data from '../projects.json'
import bannerJavascript from '../assets/images/projectJavascript/bannerJavascript.webp'
import { RiJavascriptLine } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import accueilJavascript from '../assets/images/projectJavascript/accueilJavascript.webp'
import formJavascript from '../assets/images/projectJavascript/formJavascript.webp'
import galeriePhotoJavascript from '../assets/images/projectJavascript/galeriePhotoJavascript.webp'
import loginJavascript from '../assets/images/projectJavascript/loginJavascript.webp'


function JavascriptPage() {
    const project = data[0]
    return (
        <PageProject
            title={project.Titre}
            banner={bannerJavascript}
            objectif={project.Objectif}
            logo={[RiJavascriptLine, AiOutlineHtml5, TbBrandCss3]}
            competence={project.Competences}
            resultat={project.Resultats}
            amelioration={project.Amelioration}
            images={[accueilJavascript, formJavascript, galeriePhotoJavascript, loginJavascript]}
        />

    )
}

export default JavascriptPage