import PageProject from '../components/PageProject'
import data from '../projects.json'
import librairie from '../assets/images/librairie.png'
import nodejs from '../assets/logo/nodejs.png'
import mongoDB from '../assets/logo/mongoDB.png'
import expressjs from '../assets/logo/expressjs.png'

function NodejsPage() {
    const project = data[2]
    return (
        <PageProject
            title={project.Titre}
            image={librairie}
            objectif={project.Objectif}
            logo={[nodejs, expressjs, mongoDB]}
            competence={project.Competences}
            resultat={project.Resultats}
            amelioration={project.Amelioration} />
    )
}

export default NodejsPage