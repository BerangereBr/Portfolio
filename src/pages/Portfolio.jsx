import About from '../components/portolio/About'
import Hero from '../components/portolio/Hero'
import Navbar from '../components/portolio/Navbar'
import StackSkills from '../components/portolio/StackSkills'
import Projects from '../components/portolio/Projects'

function Portfolio() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <StackSkills />
            <Projects />
        </>
    )
}

export default Portfolio