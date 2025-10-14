import About from '../components/portolio/About'
import Hero from '../components/portolio/Hero'
import Navbar from '../components/portolio/Navbar'
import StackSkills from '../components/portolio/StackSkills'
import Projects from '../components/portolio/Projects'
import Footer from '../components/portolio/Footer'

function Portfolio() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <StackSkills />
            <Projects />
            <Footer />
        </>
    )
}

export default Portfolio