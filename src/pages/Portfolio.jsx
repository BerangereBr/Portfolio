import About from '../components/portolio/About'
import Hero from '../components/portolio/Hero'
import Navbar from '../components/portolio/Navbar'
import Stacks from '../components/portolio/Stacks'
import ProjectsWheel from '../components/portolio/ProjectsWheel'
import Footer from '../components/Footer'
import Formation from '../components/portolio/Formation'
import Form from '../components/portolio/Form'

function Portfolio() {
    return (
        <>
            <header>
                <Navbar />
                <Hero />
            </header>
            <main>
                <About />
                <Stacks />
                <ProjectsWheel />
                <Formation />
                <Form />
            </main >
            <Footer />
        </>
    )
}

export default Portfolio